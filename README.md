# MIA - Web App UMKM Bogor

A web application based on **Next.js 16** that aims to introduce and promote various **MSMEs (Micro, Small, and Medium Enterprises)** in Bogor.  This project was built with a **modern web development** approach using React, Tailwind CSS, and modular components.

## Features

- **MSME Search** by category and keyword.
- **MSME Details** with descriptions, stories, and operating hours.
- **Responsive Display** for all screen sizes.

## TechStack

- Next.js 16 (App Router) - Javascript
- Tailwind CSS
- Lucide Icons

## Installing and Running Projects

### Step 1: Clone Repository

```bash
git clone https://github.com/JonathanLim46/mia-app.git
cd mia-app
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Running Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

### Step 4: Build for Production

```bash
npm run build
npm run start
```

## Folder Structure

📦 project-root
- public/
    - images/
- app/ # Routing and the main page (Next.js App Router)
    - components/ # Components UI (Navbar, Footer, Card, dsb.)
    - constants/ # MSME data JSON file
    - global.css # CSS/Tailwind Global File
    - favicon.ico
- package.json
- tailwind.config.js
- next.config.mjs
- README.md
