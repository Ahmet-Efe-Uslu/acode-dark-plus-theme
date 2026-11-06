# Dark+ Theme for Acode

[![Acode Version](https://img.shields.io/badge/Acode-1.100%2B-blue.svg)](https://github.com/Acode-Foundation/Acode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A meticulously crafted, 1:1 port of the iconic **VS Code Dark+** theme, designed specifically for Acode (CodeMirror 6). 



## ✨ Features

- **Pixel-Perfect Colors**: Uses the exact official VS Code Dark+ hex codes (`#1E1E1E` background, `#D4D4D4` foreground, etc.).
- **Enhanced C++ Support**: Leverages CodeMirror 6's Lezer parser to accurately color preprocessor directives (`#include`) and library headers (`<iostream>`), matching VS Code's behavior.
- **Full Syntax Coverage**: Complete highlighting for variables, types, classes, functions, strings, escape characters, numbers, comments, and operators.
- **Modern UI Elements**: Carefully tuned editor gutter, active line, and selection backgrounds to blend seamlessly with the Dark+ aesthetic.

## 📦 Installation

There are two ways to install this theme in Acode:

### Method 1: ZIP Installation (Recommended)
1. Go to the **Releases** tab on this repository and download the latest `dark-plus-theme.zip` file.
2. Open Acode and navigate to **Settings -> Plugins**.
3. Tap the **`+`** button in the top right corner.
4. Select **"Local"** and choose the downloaded `.zip` file.
5. Once installed, go to **Settings -> Themes** and select "Dark+".

### Method 2: Manual Installation
1. Clone or download this repository.
2. Copy `plugin.json` and `main.js` into your Acode plugins directory.

## 🛠️ Developer Notes

- **Plugin ID:** `com.darkplus.theme`
- **Author:** Ahmet Efe Uslu
- **Min Version Code:** `850`
- **Engine:** CodeMirror 6 & Lezer Parser

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as you see fit.

---
*Developed for the Acode community, inspired by the open-source VS Code color scheme.*
