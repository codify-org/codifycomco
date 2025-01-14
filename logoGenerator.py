LOGO_DESCRIPTION = """
    The logo’s layered circles, built on principles of the golden ratio and π, embody the precision and harmony that Codify AI brings to options trading. Each circle’s meticulous scaling reflects the platform’s commitment to balancing complex data—Greek exposures, bid-ask spreads, and liquidity risks—into clear, actionable insights.
    The concentric design symbolizes an analytical journey: starting from a central insight and expanding outward as layers of data and strategies integrate. This mirrors Codify AI’s process of transforming granular market data into coherent, optimized trading strategies.
    The smooth, interconnected circles also highlight the advanced AI and mathematical rigor behind the platform. They represent how Codify AI seamlessly connects various metrics, providing traders with a comprehensive view of market dynamics and enabling precision Greek analysis and volatility predictions.
    Overall, the logo serves as a visual metaphor for Codify AI’s mission: to turn complex options data into clarity and empower traders through sophisticated yet intuitive analytics.
    """

import turtle
import math
from PIL import Image, ImageDraw
import os

LOGO_DESCRIPTION = """
    The logo’s layered circles, built on principles of the golden ratio and π, embody the precision and harmony...
    """

def hex_to_rgb(hex_color):
    """
    Converts a hex color string to an RGB tuple.

    Args:
        hex_color (str): Hex color string (e.g., "#FFFFFF").

    Returns:
        tuple: Corresponding RGB tuple (e.g., (255, 255, 255)).
    """
    hex_color = hex_color.lstrip('#')
    if len(hex_color) != 6:
        raise ValueError("Input #{} is not in #RRGGBB format".format(hex_color))
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    """
    Converts an RGB tuple to a hex color string.

    Args:
        rgb (tuple): RGB tuple (e.g., (255, 255, 255)).

    Returns:
        str: Corresponding hex color string (e.g., "#FFFFFF").
    """
    return '#{:02X}{:02X}{:02X}'.format(*rgb)

def interpolate_color(color1, color2, t):
    """
    Interpolates between two RGB colors.

    Args:
        color1 (tuple): Starting RGB color (e.g., (255, 255, 255)).
        color2 (tuple): Ending RGB color (e.g., (170, 85, 255)).
        t (float): Interpolation factor between 0 and 1.

    Returns:
        tuple: Interpolated RGB color.
    """
    r = int(color1[0] + (color2[0] - color1[0]) * t)
    g = int(color1[1] + (color2[1] - color1[1]) * t)
    b = int(color1[2] + (color2[2] - color1[2]) * t)
    return (r, g, b)

def phi():
    return (1 + math.sqrt(5)) / 2

def pi_x(multiplier = 1):
    return math.pi * multiplier

# === Parameters ===
X = phi()
initial_circle_radius = pi_x(X)**2
distance_factor1 = initial_circle_radius**0.5
distance_factor2 = distance_factor1 * 2

initial_scale = 1/phi()
final_scale = pi_x(X)**(1/math.e)

print(f"initial_circle_radius: {initial_circle_radius}")
print(f"distance_factor1: {distance_factor1}")
print(f"distance_factor2: {distance_factor2}")
print(f"initial_scale: {initial_scale}")
print(f"final_scale: {final_scale}")

# Colors
first_layer_fill_color = "#F5F5F5"  # Whitish color for central and first layer (will be replaced with gradient)
gradient_start_color = "#A855F7"    # Start color for second layer gradient
gradient_end_color = "#EC4899"      # End color for second layer gradient
background_color = "#000000"        # Pure black background
line_width = 0.2

draw_lines = False
draw_lines_from_first_layer = True
draw_lines_from_second_layer = False
speed_setting = 0

# Inner layer gradient colors
inner_gradient_start_color = "#F0F0FF"    # Slightly blue-tinted white for central circle
inner_gradient_end_color = gradient_start_color  # Same as outer layer's start color

# Convert hex colors to RGB for interpolation
gradient_start_rgb = hex_to_rgb(gradient_start_color)
gradient_end_rgb = hex_to_rgb(gradient_end_color)
inner_gradient_start_rgb = hex_to_rgb(inner_gradient_start_color)
inner_gradient_end_rgb = hex_to_rgb(inner_gradient_end_color)

# === Setup screen ===
screen = turtle.Screen()
screen.bgcolor(background_color)
screen.title("Metatron's Cube Logo")
# Set square canvas size to maintain aspect ratio
canvas_size = 800
screen.setup(canvas_size, canvas_size)
screen.mode('logo')  # This ensures proper orientation

# Set the coordinate system to match the canvas size
screen.setworldcoordinates(-canvas_size/2, -canvas_size/2, canvas_size/2, canvas_size/2)

t = turtle.Turtle()
t.speed(speed_setting)
t.hideturtle()

distance1 = distance_factor1 * initial_circle_radius
distance2 = distance_factor2 * initial_circle_radius
centers = []

def draw_circle_at(x, y, r, fill_color, steps=360):
    t.up()
    t.goto(x, y - r)  # Adjust for turtle's circle drawing from bottom
    t.down()
    t.fillcolor(fill_color)
    t.pencolor(fill_color)  # Outline matches fill
    t.begin_fill()
    t.circle(r, steps=steps)
    t.end_fill()

def calculate_scale(index, total):
    if total == 1:
        return final_scale
    return initial_scale + (final_scale - initial_scale) * (index / (total - 1))

# === Calculate Circle Center Positions and Radii ===
centers.append((0, 0, initial_circle_radius))

# Calculate the bounding box of all circles
min_x = float('inf')
max_x = float('-inf')
min_y = float('inf')
max_y = float('-inf')

# First calculate all centers and track bounding box
all_centers = []
all_centers.append((0, 0, initial_circle_radius))  # Central circle
min_x = min(min_x, -initial_circle_radius)
max_x = max(max_x, initial_circle_radius)
min_y = min(min_y, -initial_circle_radius)
max_y = max(max_y, initial_circle_radius)

num_first_hexagon = 6
for i in range(num_first_hexagon):
    scale = calculate_scale(i, num_first_hexagon)
    radius = initial_circle_radius * scale
    angle_deg = 90 + i * (360 / num_first_hexagon)
    angle_rad = math.radians(angle_deg)
    x = distance1 * math.cos(angle_rad)
    y = distance1 * math.sin(angle_rad)
    all_centers.append((x, y, radius))
    min_x = min(min_x, x - radius)
    max_x = max(max_x, x + radius)
    min_y = min(min_y, y - radius)
    max_y = max(max_y, y + radius)

num_second_layer = 12
for i in range(num_second_layer):
    scale = calculate_scale(i, num_second_layer)
    radius = initial_circle_radius * scale
    angle_deg = 90 + i * (360 / num_second_layer)
    angle_rad = math.radians(angle_deg)
    x = distance2 * math.cos(angle_rad)
    y = distance2 * math.sin(angle_rad)
    all_centers.append((x, y, radius))
    min_x = min(min_x, x - radius)
    max_x = max(max_x, x + radius)
    min_y = min(min_y, y - radius)
    max_y = max(max_y, y + radius)

# Calculate the figure dimensions
figure_width = max_x - min_x
figure_height = max_y - min_y

# Calculate scaling factor to fit in canvas while maintaining aspect ratio
scale_factor = min((canvas_size * 0.8) / figure_width, (canvas_size * 0.8) / figure_height)

# Scale and center all coordinates
centers = [(x * scale_factor, y * scale_factor, r * scale_factor) for x, y, r in all_centers]

# Clear any previous drawings
t.clear()

central_index = 0
first_layer_indices = set(range(0, 1 + num_first_hexagon))  
# indices 0 through 6: central + first layer
second_layer_indices = set(range(1 + num_first_hexagon, 1 + num_first_hexagon + num_second_layer))

# === Draw Circles ===
for idx, (x, y, r) in enumerate(centers):
    if idx in first_layer_indices:
        # Compute relative position of the circle in the first layer for gradient
        if idx == central_index and len(first_layer_indices) > 1:
            t_value = 0  # Central circle is white
        else:
            # Exclude central circle from the gradient calculation
            relative_index = idx - (central_index + 1)
            total_first_layer = num_first_hexagon  # Number of circles excluding central
            t_value = (relative_index + 1) / (total_first_layer + 1) if total_first_layer > 0 else 0
        interp_rgb = interpolate_color(inner_gradient_start_rgb, inner_gradient_end_rgb, t_value)
        interp_hex = rgb_to_hex(interp_rgb)
        draw_circle_at(x, y, r, interp_hex)
    elif idx in second_layer_indices:
        # Compute relative position of the circle in the second layer for gradient
        relative_index = idx - (1 + num_first_hexagon)
        t_value = relative_index / (num_second_layer - 1) if num_second_layer > 1 else 0
        interp_rgb = interpolate_color(gradient_start_rgb, gradient_end_rgb, t_value)
        interp_hex = rgb_to_hex(interp_rgb)
        draw_circle_at(x, y, r, interp_hex)
    else:
        # Safety fallback
        draw_circle_at(x, y, r, first_layer_fill_color)

# === Draw Connecting Lines (if enabled) ===
if draw_lines:
    t.pencolor(line_color)
    t.width(line_width)
    for i in range(len(centers)):
        if (not draw_lines_from_first_layer and i in first_layer_indices) or \
           (not draw_lines_from_second_layer and i in second_layer_indices):
            continue
        for j in range(i + 1, len(centers)):
            x1, y1, _ = centers[i]
            x2, y2, _ = centers[j]
            t.up()
            t.goto(x1, y1)
            t.down()
            t.goto(x2, y2)

def save_logo(size, filename, padding_percent=0):
    """
    Save the logo as a PNG file with specified size and optional padding.
    
    Args:
        size (tuple): Target size (width, height)
        filename (str): Output filename
        padding_percent (int): Percentage of padding to add around the logo
    """
    # Create a PostScript file from turtle graphics with white background first
    canvas = screen.getcanvas()
    canvas.postscript(file="temp.eps", width=canvas_size, height=canvas_size, colormode='color', 
                     pagewidth=canvas_size)
    
    # Convert EPS to PNG using PIL
    img = Image.open("temp.eps")
    img = img.convert('RGBA')
    
    # Create a new black background image
    final_img = Image.new('RGBA', img.size, (0, 0, 0, 255))
    
    # Extract non-white pixels from the original image
    data = img.getdata()
    new_data = []
    for item in data:
        # If pixel is pure white (255, 255, 255), make it transparent
        # This will preserve our slightly off-white central circle
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    
    # Composite the logo onto the black background
    final_img = Image.alpha_composite(final_img, img)
    
    if padding_percent > 0:
        # Calculate the new size with padding
        padding_factor = 1 + (padding_percent / 100)
        padded_size = tuple(int(s * padding_factor) for s in size)
        
        # Resize the logo to fit within the padded area
        target_size = tuple(int(s / padding_factor) for s in padded_size)
        final_img = final_img.resize(target_size, Image.Resampling.LANCZOS)
        
        # Create a new black background with padding
        padded_img = Image.new('RGBA', padded_size, (0, 0, 0, 255))
        
        # Calculate position to paste the logo (center)
        paste_x = (padded_size[0] - target_size[0]) // 2
        paste_y = (padded_size[1] - target_size[1]) // 2
        
        # Paste the logo onto the padded background
        padded_img.paste(final_img, (paste_x, paste_y), final_img)
        final_img = padded_img
    else:
        # Resize maintaining aspect ratio
        final_img = final_img.resize(size, Image.Resampling.LANCZOS)
    
    # Save the image
    final_img.save(filename, "PNG")
    
    # Clean up temporary file
    os.remove("temp.eps")

def save_logo_transparent(size, filename):
    """
    Save the logo as a PNG file with transparent background.
    """
    # Create a PostScript file from turtle graphics
    canvas = screen.getcanvas()
    canvas.postscript(file="temp.eps", width=canvas_size, height=canvas_size, colormode='color')
    
    # Convert EPS to PNG using PIL
    img = Image.open("temp.eps")
    img = img.convert('RGBA')
    
    # Create a white background first (since our logo is drawn on black)
    bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
    img = Image.alpha_composite(bg, img)
    
    # Now make the background transparent
    data = img.getdata()
    new_data = []
    for item in data:
        # If pixel is white or very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((0, 0, 0, 0))
        else:
            # Keep the color but ensure full opacity
            new_data.append((*item[:3], 255))
    
    img.putdata(new_data)
    
    # Resize maintaining aspect ratio
    img = img.resize(size, Image.Resampling.LANCZOS)
    
    # Save the image with transparency
    img.save(filename, "PNG")
    
    # Clean up temporary file
    os.remove("temp.eps")

def save_logo_transparent_padded(size, filename, padding_percent=20):
    """
    Save the logo as a PNG file with transparent background and specified padding.
    
    Args:
        size (tuple): Target size (width, height)
        filename (str): Output filename
        padding_percent (int): Percentage of padding to add around the logo
    """
    # Create a PostScript file from turtle graphics
    canvas = screen.getcanvas()
    canvas.postscript(file="temp.eps", width=canvas_size, height=canvas_size, colormode='color')
    
    # Convert EPS to PNG using PIL
    img = Image.open("temp.eps")
    img = img.convert('RGBA')
    
    # Create a white background first (since our logo is drawn on black)
    bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
    img = Image.alpha_composite(bg, img)
    
    # Now make the background transparent
    data = img.getdata()
    new_data = []
    for item in data:
        # If pixel is white or very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((0, 0, 0, 0))
        else:
            # Keep the color but ensure full opacity
            new_data.append((*item[:3], 255))
    
    img.putdata(new_data)
    
    # Calculate the new size with padding
    padding_factor = 1 + (padding_percent / 100)
    padded_size = tuple(int(s * padding_factor) for s in size)
    
    # Resize the logo to fit within the padded area
    target_size = tuple(int(s / padding_factor) for s in padded_size)
    img = img.resize(target_size, Image.Resampling.LANCZOS)
    
    # Create a new transparent image with padding
    padded_img = Image.new('RGBA', padded_size, (0, 0, 0, 0))
    
    # Calculate position to paste the logo (center)
    paste_x = (padded_size[0] - target_size[0]) // 2
    paste_y = (padded_size[1] - target_size[1]) // 2
    
    # Paste the logo onto the padded transparent background
    padded_img.paste(img, (paste_x, paste_y), img)
    
    # Save the image with transparency
    padded_img.save(filename, "PNG")
    
    # Clean up temporary file
    os.remove("temp.eps")

def save_logo_transparent_fitted(size, filename):
    """
    Save the logo as a PNG file with transparent background, fitted to maintain aspect ratio.
    The logo will be sized according to the height (minus 20% padding for top/bottom),
    and the remaining width will be used as padding on the sides.
    
    Args:
        size (tuple): Target size (width, height)
        filename (str): Output filename
    """
    width, height = size
    
    # Calculate the logo size based on height with 10% padding top and bottom
    vertical_padding = height * 0.2  # 10% top and 10% bottom
    logo_size = int(height - vertical_padding)
    
    # Create a PostScript file from turtle graphics
    canvas = screen.getcanvas()
    canvas.postscript(file="temp.eps", width=canvas_size, height=canvas_size, colormode='color')
    
    # Convert EPS to PNG using PIL
    img = Image.open("temp.eps")
    img = img.convert('RGBA')
    
    # Create a white background first (since our logo is drawn on black)
    bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
    img = Image.alpha_composite(bg, img)
    
    # Make the background transparent
    data = img.getdata()
    new_data = []
    for item in data:
        # If pixel is white or very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((0, 0, 0, 0))
        else:
            # Keep the color but ensure full opacity
            new_data.append((*item[:3], 255))
    
    img.putdata(new_data)
    
    # Resize the logo to the calculated square size
    img = img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    # Create the final image with the requested dimensions
    final_img = Image.new('RGBA', size, (0, 0, 0, 0))
    
    # Calculate position to paste the logo (center horizontally, 10% padding from top)
    paste_x = (width - logo_size) // 2
    paste_y = int(height * 0.1)  # 10% padding from top
    
    # Paste the logo onto the transparent background
    final_img.paste(img, (paste_x, paste_y), img)
    
    #add black background
    final_img = Image.new('RGBA', size, (0, 0, 0, 255))
    final_img.paste(img, (paste_x, paste_y), img)

    # Save the image with transparency
    final_img.save(filename, "PNG")
    
    # Clean up temporary file
    os.remove("temp.eps")

# Save regular versions
save_logo((32, 32), "public/favicon.png")      # Standard favicon
save_logo((16, 16), "public/favicon-16.png")   # Small favicon
save_logo((180, 180), "public/apple-touch-icon.png")  # Apple touch icon
save_logo((1000, 1000), "public/logo-1k.png", padding_percent=20)  # High resolution with padding
save_logo((512, 512), "public/logo-512.png")   # Common size for app icons
save_logo((256, 256), "public/logo-256.png")   # Medium size
save_logo((128, 128), "public/logo-128.png")   # Small size

# Save transparent versions
save_logo_transparent((128, 128), "public/logo-transparent.png")  # For footer and about section
save_logo_transparent_padded((1000, 1000), "public/logo-1k-transparent-20p.png", padding_percent=20)  # 1K version with 20% padding

# Save 320x132 version with proper fitting
save_logo_transparent_fitted((320, 132), "public/google-logo-320x132.png")
save_logo_transparent_fitted((1128, 191), "public/linkedin-logo-320x132.png")

# Close the turtle window
screen.bye()
