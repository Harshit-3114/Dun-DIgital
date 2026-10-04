# Pixel-probe restructured pages.
Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\harsh\dun_digital\.work\shots"

function Probe($file, $x0, $x1, $bands) {
  $img = [System.Drawing.Image]::FromFile((Join-Path $dir $file))
  try {
    $w = $img.Width; $h = $img.Height
    Write-Output "== $file ${w}x${h} (x $x0..$x1) =="
    $bmp = New-Object System.Drawing.Bitmap($img)
    for ($b = 0; $b -lt $bands; $b++) {
      $y0 = [math]::Floor($h * $b / $bands); $y1 = [math]::Floor($h * ($b + 1) / $bands)
      $sum = 0.0; $sumSq = 0.0; $n = 0; $r = 0.0; $g = 0.0; $bl = 0.0
      $stepY = [math]::Max(1, [math]::Floor(($y1 - $y0) / 24))
      $stepX = [math]::Max(1, [math]::Floor(($x1 - $x0) / 24))
      for ($y = $y0; $y -lt $y1; $y += $stepY) {
        for ($x = $x0; $x -lt $x1; $x += $stepX) {
          $c = $bmp.GetPixel($x, $y)
          $lum = 0.2126 * $c.R + 0.7152 * $c.G + 0.0722 * $c.B
          $sum += $lum; $sumSq += $lum * $lum; $n++
          $r += $c.R; $g += $c.G; $bl += $c.B
        }
      }
      $mean = $sum / $n
      $std = [math]::Sqrt([math]::Max(0, $sumSq / $n - $mean * $mean))
      Write-Output ("  y{0,5}-{1,5}  mean#{2:X2}{3:X2}{4:X2}  lum {5,6:F0}  std {6,6:F1}" -f $y0, $y1, [int]($r/$n), [int]($g/$n), [int]($bl/$n), $mean, $std)
    }
  } finally { $img.Dispose() }
}

Probe "home-desktop.png" 60 1380 28
Probe "about-desktop.png" 60 1380 14
Probe "home-fold.png" 60 1380 6
Probe "home-mobile.png" 20 370 20
