# Batched headless-Edge screenshot runner for visual verification.
# Usage: powershell -File .work/shots.ps1
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$out = "C:\Users\harsh\dun_digital\.work\shots"
New-Item -ItemType Directory -Force $out | Out-Null

$targets = @(
  @{ url = "http://127.0.0.1:4317/?flatview"; size = "1440,6600"; name = "home-desktop" },
  @{ url = "http://127.0.0.1:4317/"; size = "1440,900"; name = "home-fold" },
  @{ url = "http://127.0.0.1:4317/"; size = "390,8200"; name = "home-mobile" },
  @{ url = "http://127.0.0.1:4317/about"; size = "1440,4800"; name = "about-desktop" },
  @{ url = "http://127.0.0.1:4317/about"; size = "390,6800"; name = "about-mobile" },
  @{ url = "http://127.0.0.1:4317/services"; size = "1440,3600"; name = "services-desktop" },
  @{ url = "http://127.0.0.1:4317/case-studies"; size = "1440,4000"; name = "cases-desktop" },
  @{ url = "http://127.0.0.1:4317/contact"; size = "1440,2800"; name = "contact-desktop" },
  @{ url = "http://127.0.0.1:4317/services/brand-shoots/"; size = "1440,3400"; name = "service-detail-desktop" },
  @{ url = "http://127.0.0.1:4317/case-studies/raagam-polymound/"; size = "1440,3400"; name = "case-detail-desktop" },
  @{ url = "http://127.0.0.1:4317/case-studies/tamil-diaspora-day/"; size = "1440,4000"; name = "case-tamil-desktop" },
  @{ url = "http://127.0.0.1:4317/does-not-exist"; size = "1440,1200"; name = "404-desktop" }
)

foreach ($t in $targets) {
  $file = Join-Path $out "$($t.name).png"
  & $edge --headless=new --disable-gpu --force-prefers-reduced-motion --screenshot="$file" --window-size=$($t.size) --virtual-time-budget=9000 --hide-scrollbars $t.url 2>$null | Out-Null
  if (Test-Path $file) { Write-Output "OK  $($t.name)  $((Get-Item $file).Length) bytes" }
  else { Write-Output "FAIL $($t.name)" }
}
