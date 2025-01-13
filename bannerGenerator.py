import math
from PIL import Image, ImageDraw

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def interpolate_color(color1, color2, t):
    r = int(color1[0] + (color2[0] - color1[0]) * t)
    g = int(color1[1] + (color2[1] - color1[1]) * t)
    b = int(color1[2] + (color2[2] - color1[2]) * t)
    return (r, g, b)

# Banner dimensions
WIDTH = 1128
HEIGHT = 191

# Colors from logo
gradient_start_color = "#A855F7"    # Purple
gradient_end_color = "#EC4899"      # Pink
background_color = "#000000"        # Black

# Convert colors to RGB
gradient_start_rgb = hex_to_rgb(gradient_start_color)
gradient_end_rgb = hex_to_rgb(gradient_end_color)

# Create new image with black background
img = Image.new('RGBA', (WIDTH, HEIGHT), background_color)
draw = ImageDraw.Draw(img)

# Calculate dimensions for the geometric pattern
circle_size = HEIGHT * 0.8
spacing = circle_size * 0.6
num_circles = int(WIDTH / spacing) + 2  # Add extra circles for overlap

# Draw a series of overlapping circles with gradient
for i in range(num_circles):
    # Calculate position for each circle
    x = i * spacing - circle_size/2
    y = HEIGHT/2
    
    # Create gradient effect based on position
    t = i / (num_circles - 1)
    current_color = interpolate_color(gradient_start_rgb, gradient_end_rgb, t)
    
    # Draw circle with gradient color
    draw.ellipse(
        [x, y - circle_size/2, x + circle_size, y + circle_size/2],
        fill=current_color + (100,),  # Add alpha for transparency
        outline=None
    )

# Add a subtle overlay pattern
overlay_circles = 5
for i in range(overlay_circles):
    x = WIDTH * (i + 0.5) / overlay_circles
    y = HEIGHT/2
    size = HEIGHT * 1.2
    
    # Draw larger, more transparent circles for depth
    t = i / (overlay_circles - 1)
    current_color = interpolate_color(gradient_end_rgb, gradient_start_rgb, t)
    draw.ellipse(
        [x - size/2, y - size/2, x + size/2, y + size/2],
        fill=current_color + (50,),  # More transparent
        outline=None
    )

# Save the banner
img.save("public/banner.png", "PNG")
print("Banner generated successfully at public/banner.png") 