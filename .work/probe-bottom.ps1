# Bottom-band probe for home-desktop (contact + footer verification).
Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\harsh\dun_digital\.work\shots"

function ProbeRange($file, $x0, $x1, $yStart, $yEnd, $step) {
  $img = [System.Drawing.Image]::FromFile((Join-Path $dir $file))
  try {
    $w = $img.Width; $h = $img.Height
    Write-Output "== $file ${w}x${h} rows y$yStart..$yEnd step $step =="
    $bmp = New-Object System.Drawing.Bitmap($img)
    for ($y = $yStart; $y -lt $yEnd; $y += $step) {
      $sum = 0.0; $sumSq = 0.0; $n = 0; $r = 0.0; $g = 0.0; $bl = 0.0
      for ($x = $x0; $x -lt $900; $x += 40) {
        $c = $bmp.GetPixel($x, $y)
        $lum = 0.2126 * $c.R + 0.7152 * $c.G + 0.0722 * $c.B
        $sum += $lum; $sumSq += $lum * $lum; $n++
        $r += $c.R; $g += $c.G; $bl += $c.B
      }
      $mean = $sum / $n
      $std = [math]::Sqrt([math]::Max(0, $sumSq / $n - $mean * $mean))
      Write-Output ("  y{0,5}  mean#{1:X2}{2:X2}{3:X2}  lum {4,6:F0}  std {5,6:F1}" -f $y, [int]($r/$n), [int]($g/$n), [int]($bl/$n), $mean, $std)
    }
  } finally { $img.Dispose() }
}

ProbeRange "home-desktop.png" 60 900 6300 7790 100
