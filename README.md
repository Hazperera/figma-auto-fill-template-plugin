# 🧩 Figma Auto Fill Plugin (Local Development)

This is a simple Figma plugin built with the **Figma Plugin API** that allows you to automatically fill a design frame with a **title**, **subtitle**, and an **image** using inputs from a custom sidebar UI.

This plugin runs **locally** using Figma’s internal plugin APIs. It does **not require any tokens** or server-side logic.

---

## ✨ Features

- Apply a **title** and **subtitle** to existing text layers
- Fill a rectangle layer with an **image from a public URL**
- Uses internal Figma Plugin API — no external API or authentication needed
- Works on any frame with layers named `title`, `subtitle`, and `main_image`

---

## 🛠 Installation (Local Plugin)

1. Clone or download this repository.
2. In Figma:
   - Go to **Menu > Plugins > Development > Import plugin from manifest...**
   - Select the `manifest.json` file in this repo
3. Open a Figma file with your design template.
4. Run the plugin via **Plugins > Development > Figma Auto Fill Plugin**

---

## 🧪 Usage

### 🖼 Prepare Your Frame

In your Figma file, add or select a frame with the following layers:

| Layer Type | Layer Name  |
|------------|-------------|
| Text       | `title`     |
| Text       | `subtitle`  |
| Rectangle  | `main_image` |

> Make sure the image layer is a **rectangle**, not a group or frame.

### ▶️ Run the Plugin

1. Run the plugin from the Plugins menu.
2. A sidebar will open with three input fields:
   - `Title`: Text for the title layer
   - `Subtitle`: Text for the subtitle layer
   - `Image URL`: A **direct public image