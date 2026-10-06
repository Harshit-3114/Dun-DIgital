// Generic contact/inquiry form controller shared by the drawer and the page form.
// DOM contract (everything scoped to the passed form):
// - endpoint comes from form[data-endpoint] (empty string = demo/staged mode)
// - fields: input/select/textarea with a name; the honeypot carries data-honeypot
// - per-field error slot: #<name>-error, or [data-error-for="<name>"] for groups
// - checkbox group: fieldset[data-checkbox-group="<name>"] with data-min (default 1 when required)
// - [data-char-count] mirrors the first textarea[maxlength] in the form
// - [data-form-error] form-level error box, [data-submit] submit button
// - success panel: [data-form-success] found in the form's parent element
export interface ContactFormApi {
  reset(): void;
  succeeded(): boolean;
}

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultMessage = (field: Field): string => {
  if (!field.value.trim()) {
    if (field.name === 'message') return 'Tell us a little about the project.';
    if (field instanceof HTMLSelectElement) return `Choose an option for ${field.name}.`;
    return 'This field is required.';
  }
  return '';
};

export function initContactForm(form: HTMLFormElement): ContactFormApi {
  const endpoint = form.dataset.endpoint ?? '';
  const success = form.parentElement?.querySelector<HTMLElement>('[data-form-success]') ?? null;
  const formError = form.querySelector<HTMLElement>('[data-form-error]');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');
  const honeypot = form.querySelector<HTMLInputElement>('[data-honeypot]');
  const fields = Array.from(form.querySelectorAll<Field>('input[name], select[name], textarea[name]')).filter(
    (el) => el !== honeypot,
  );
  const groups = Array.from(form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-checkbox-group]'));

  let lastSubmitAt = 0;

  const errorSlot = (name: string): HTMLElement | null =>
    form.querySelector<HTMLElement>(`#${CSS.escape(name)}-error`) ??
    form.querySelector<HTMLElement>(`[data-error-for="${CSS.escape(name)}"]`);

  const setFieldError = (field: Field, message = '') => {
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    errorSlot(field.name)?.replaceChildren(message);
  };

  const setGroupError = (group: HTMLFieldSetElement, message = '') => {
    const slot = errorSlot(group.dataset.checkboxGroup ?? '');
    if (slot) slot.textContent = message;
  };

  const setFormError = (message = '') => {
    if (!formError) return;
    formError.hidden = !message;
    formError.textContent = message;
  };

  const validateField = (field: Field): boolean => {
    const value = field.value.trim();
    // Selects carry no minLength/pattern; only inputs and textareas do.
    const minLength = field instanceof HTMLSelectElement ? -1 : field.minLength;
    const pattern = field instanceof HTMLInputElement ? field.pattern : '';
    const checkFormat = (): string => {
      if (field instanceof HTMLInputElement && field.type === 'email' && !emailPattern.test(value)) {
        return 'Enter a valid email address.';
      }
      if (field.name === 'name' && value.length < 2) {
        return 'Please enter at least 2 characters.';
      }
      if (field.name === 'message' && value.length < 12) {
        return 'Please share at least 12 characters.';
      }
      if (minLength > 0 && value.length < minLength) {
        return `Please enter at least ${minLength} characters.`;
      }
      if (pattern && !new RegExp(`^(?:${pattern})$`).test(value)) {
        return 'That format does not look right.';
      }
      return '';
    };
    let message = defaultMessage(field);
    if (!message && value) message = checkFormat();
    if (!field.hasAttribute('required') && !value) message = '';
    setFieldError(field, message);
    return !message;
  };

  const validateGroup = (group: HTMLFieldSetElement): boolean => {
    const boxes = Array.from(group.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
    const rawMin = Number(group.dataset.min ?? 1);
    const min = !group.hasAttribute('data-required') ? 0 : Number.isFinite(rawMin) ? rawMin : 1;
    const checked = boxes.filter((box) => box.checked).length;
    const valid = checked >= min;
    setGroupError(group, valid ? '' : 'Pick at least one — it helps us bring the right people.');
    group.setAttribute('aria-invalid', valid ? 'false' : 'true');
    return valid;
  };

  const focusFirstInvalid = () => {
    const bad = form.querySelector('[aria-invalid="true"]');
    if (bad instanceof HTMLFieldSetElement) bad.querySelector('input')?.focus();
    else (bad as HTMLElement | null)?.focus?.();
  };

  const showSuccess = () => {
    if (!success) return;
    form.hidden = true;
    success.hidden = false;
    success.classList.remove('success-reveal');
    requestAnimationFrame(() => success.classList.add('success-reveal'));
    // Prefer an explicitly marked target so panels without buttons still move focus.
    const focusTarget: HTMLElement | null =
      success.querySelector<HTMLElement>('[data-autofocus]') ?? success.querySelector<HTMLElement>('button, a');
    focusTarget?.focus?.();
  };

  const api: ContactFormApi = {
    reset() {
      form.reset();
      fields.forEach((field) => setFieldError(field));
      groups.forEach((group) => setGroupError(group));
      setFormError();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.label ?? 'Send inquiry';
      }
      form.hidden = false;
      if (success) {
        success.hidden = true;
        success.classList.remove('success-reveal');
      }
      updateCount();
    },
    succeeded() {
      return !!success && !success.hidden;
    },
  };

  // Live character count for the first capped textarea.
  const messageField = form.querySelector<HTMLTextAreaElement>('textarea[maxlength]');
  const charCount = form.querySelector<HTMLElement>('[data-char-count]');
  const updateCount = () => {
    if (messageField && charCount && messageField.maxLength > 0) {
      charCount.textContent = `${messageField.value.length} / ${messageField.maxLength}`;
    }
  };
  messageField?.addEventListener('input', updateCount);
  updateCount();

  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });
  groups.forEach((group) => {
    group.addEventListener('change', () => {
      if (group.getAttribute('aria-invalid') === 'true') validateGroup(group);
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setFormError();
    const fieldsValid = fields.map(validateField).every(Boolean);
    const groupsValid = groups.map(validateGroup).every(Boolean);
    if (!fieldsValid || !groupsValid) {
      focusFirstInvalid();
      return;
    }
    // Honeypot: silently succeed for bots.
    if (honeypot && honeypot.value) {
      showSuccess();
      return;
    }
    // Simple client-side rate limit: 1 submit per 10s.
    const now = Date.now();
    if (now - lastSubmitAt < 10_000) {
      setFormError('Please wait a moment before sending again.');
      return;
    }
    lastSubmitAt = now;

    const data = new FormData(form);
    const payload: Record<string, unknown> = { page: window.location.href, timestamp: new Date().toISOString() };
    for (const [key, value] of data.entries()) {
      if (honeypot && key === honeypot.name) continue;
      if (typeof value !== 'string' || !value.trim()) continue;
      if (key in payload) {
        const existing = payload[key];
        payload[key] = Array.isArray(existing) ? [...existing, value.trim()] : [existing, value.trim()];
      } else {
        payload[key] = value.trim();
      }
    }

    // Demo mode: no endpoint configured — stage locally.
    if (!endpoint) {
      showSuccess();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 12_000);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      window.clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showSuccess();
    } catch (err) {
      console.error('[contact] submit failed', err);
      setFormError('Something went wrong sending your inquiry. Please try again or email ops@dundigital.in.');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.label ?? 'Send inquiry';
      }
    }
  });

  return api;
}
