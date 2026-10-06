import re
with open('dist/index.html', encoding='utf-8') as f:
    html = f.read()

# Check header logo
m = re.search(r'<a class="brand".*?<img[^>]+src="([^"]+)"', html)
print('Header logo src:', m.group(1) if m else 'NOT FOUND')

# Check footer logo
m = re.search(r'class="footer-brand".*?<img[^>]+src="([^"]+)"', html, re.DOTALL)
print('Footer logo src:', m.group(1) if m else 'NOT FOUND')

# Check JSON-LD logo
m = re.search(r'"logo":\s*"([^"]+)"', html)
print('JSON-LD logo:', m.group(1) if m else 'NOT FOUND')

# Check favicon
m = re.search(r'<link rel="icon"[^>]+href="([^"]+)"', html)
print('Favicon href:', m.group(1) if m else 'NOT FOUND')

# Check preloader logo
m = re.search(r'class="preloader-logo" src="([^"]+)"', html)
print('Preloader logo src:', m.group(1) if m else 'NOT FOUND')

# Check favicon link
m = re.search(r'<link rel="icon"[^>]+href="([^"]+)"', html)
print('Favicon link:', m.group(1) if m else 'NOT FOUND')

# Check apple-touch-icon
m = re.search(r'<link rel="apple-touch-icon"[^>]+href="([^"]+)"', html)
print('Apple touch icon:', m.group(1) if m else 'NOT FOUND')