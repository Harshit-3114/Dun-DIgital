from PIL import Image, ImageDraw
import os
src = 'assets'
pub = 'public'
def load(f): return Image.open(os.path.join(src, f)).convert('RGBA')
lockup = load('0d6d83a7d72393714ad8c6323d0632c7.png')
mark = load('2650849acf48830835de8ae6fccbc425.png')
stacked = load('a83260d4f5ff09a6ae695f0aeb3318e8.png')
lockup.save(os.path.join(pub, 'logo-lockup.png'))
mark.save(os.path.join(pub, 'logo-mark.png'))
stacked.save(os.path.join(pub, 'logo-stacked.png'))
print('saved base logos')
def recolor(im, rgb):
    r,g,b = rgb
    px = im.load()
    out = Image.new('RGBA', im.size, (0,0,0,0))
    ox = out.load()
    for y in range(im.height):
        for x in range(im.width):
            pr,pg,pb,pa = px[x,y]
            if pa > 0:
                ox[x,y] = (r,g,b,pa)
    return out
PAPER = (247,246,243)
recolor(lockup, PAPER).save(os.path.join(pub, 'logo-lockup-light.png'))
recolor(mark, PAPER).save(os.path.join(pub, 'logo-mark-light.png'))
print('saved light variants')
def app_icon(mark_im, size, radius_ratio=0.22):
    icon = Image.new('RGBA', (size,size), (255,255,255,255))
    d = ImageDraw.Draw(icon)
    d.rounded_rectangle([0,0,size-1,size-1], radius=int(size*radius_ratio), fill=(255,255,255,255))
    s = int(size*0.68)
    m = mark_im.copy()
    m.thumbnail((s,s), Image.LANCZOS)
    icon.paste(m, ((size-m.width)//2, (size-m.height)//2), m)
    return icon.convert('RGB')
app_icon(mark, 512).save(os.path.join(pub, 'favicon.png'))
app_icon(mark, 180).save(os.path.join(pub, 'apple-touch-icon.png'))
print('saved favicon + apple-touch-icon')