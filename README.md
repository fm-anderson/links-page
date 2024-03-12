# Links Page Template with Astro

Live Preview: https://linkspage-template.netlify.app/

## Project Setup Guide

This guide is designed to help developers set up the project environment, configure the page, and explore theme options efficiently.

## Getting Started

1. **Clone the Repository**

   Start by cloning the project repository to your local machine:

   ```sh
   git clone https://github.com/fm-anderson/links-page.git
   cd links-page
   ```

2. **Install Dependencies**

   Install the project dependencies by running:

   ```sh
   npm install
   ```

3. **Run the Development Server**

   Launch the development server with:

   ```sh
   npm run dev
   ```

   Visit `http://localhost:4321` in your browser to view the project.

## Project Structure

```lua
LINKS-PAGE
├── .astro
├── .vscode
├── node_modules
├── public
└── src
    ├── components
    ├── icons
    ├── layouts
    ├── pages
    └── utils
├── env.d.ts
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## Configuring the Page

To configure the page settings, you'll use the `config.js` file located in `/src/utils/`.

## Theme Customization

The project supports theme customization via [DaisyUI](https://daisyui.com/) and the `ThemeController` component.

### Checking Available Themes

1. **Open `tailwind.config.mjs`**

   To check available themes, open the `tailwind.config.mjs` file and update the `themes` property from `daisyui` object to `true`.

2. **ThemeController Component**

   The `ThemeController` component is initially commented out. To use it, open the `Header` and uncomment the component.
