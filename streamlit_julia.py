import streamlit as st
from PIL import Image
import math
import multiprocessing as mp
import plotly.graph_objects as go

# --- Session State Initialization ---

if 'real_c' not in st.session_state:
    st.session_state.real_c = -0.7
if 'imag_c' not in st.session_state:
    st.session_state.imag_c = 0.27015

# --- Fractal Computation Functions ---

def interpolate_color(n, max_iter):
    if n == max_iter:
        return (0, 0, 0)
    t = n / max_iter
    r = int(9*(1-t)*t*t*t * 255)
    g = int(15*(1-t)*(1-t)*t*t * 255)
    b = int(8.5*(1-t)*(1-t)*(1-t)*t * 255)
    return (r, g, b)

def compute_julia_row(args):
    y, width, height, max_iter, xmin, xmax, ymin, ymax, c = args
    row = []
    zy = ymin + (y / height) * (ymax - ymin)
    for x in range(width):
        zx = xmin + (x / width) * (xmax - xmin)
        z = complex(zx, zy)
        n = 0
        while abs(z) <= 4 and n < max_iter:
            z = z*z + c
            n += 1
        row.append(interpolate_color(n, max_iter))
    return y, row

def generate_julia(width, height, max_iter, xmin, xmax, ymin, ymax, c):
    """Generate a Julia set fractal image with given parameters."""
    img = Image.new("RGB", (width, height))
    # Use multiprocessing only inside a main guard
    with mp.Pool(processes=mp.cpu_count()) as pool:
        args_list = [
            (y, width, height, max_iter, xmin, xmax, ymin, ymax, c) 
            for y in range(height)
        ]
        results = pool.map(compute_julia_row, args_list)
    for y, row in results:
        for x, color in enumerate(row):
            img.putpixel((x, y), color)
    return img

def main():
    st.title("Interactive Julia Set Fractal Generator")

    # --- Sidebar Inputs ---
    st.sidebar.header("Fractal Parameters")
    width = st.sidebar.slider("Image Width", 200, 1200, 800, step=50)
    height = st.sidebar.slider("Image Height", 200, 1200, 600, step=50)
    max_iter = st.sidebar.slider("Max Iterations", 50, 1000, 200, step=50)
    xmin = st.sidebar.number_input("X Min", value=-1.5, step=0.1)
    xmax = st.sidebar.number_input("X Max", value=1.5, step=0.1)
    ymin = st.sidebar.number_input("Y Min", value=-1.0, step=0.1)
    ymax = st.sidebar.number_input("Y Max", value=1.0, step=0.1)

    # --- Sliders for Constant c ---
    st.sidebar.header("Constant c (Real & Imag Parts)")
    real_c = st.sidebar.slider("Real(c)", -2.0, 2.0, float(st.session_state.real_c), step=0.01)
    imag_c = st.sidebar.slider("Imag(c)", -2.0, 2.0, float(st.session_state.imag_c), step=0.01)

    # Update session state from sliders
    st.session_state.real_c = real_c
    st.session_state.imag_c = imag_c

    st.sidebar.write(f"Current c = {real_c:.4f} + {imag_c:.4f}j")

    # --- Generate Image Button ---
    if st.sidebar.button("Generate Fractal"):
        st.write("Generating Julia set fractal. This might take a moment...")
        c = complex(st.session_state.real_c, st.session_state.imag_c)
        img = generate_julia(width, height, max_iter, xmin, xmax, ymin, ymax, c)
        st.image(img, caption="Julia Set Fractal", use_column_width=True)

if __name__ == "__main__":
    main()
