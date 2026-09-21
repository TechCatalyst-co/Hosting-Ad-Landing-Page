# TechCatalyst Hosting Ad Landing Page

React and Vite landing page for the TechCatalyst hosting offer.

## Requirements

Install [Node.js](https://nodejs.org/), version 20 LTS or newer. Node.js includes npm, which installs and runs the project's dependencies.

You do not need to install Vite or TypeScript globally.

## Setup

Clone the repository, open a terminal in the project folder, and run:

```bash
npm ci
```

On Windows PowerShell, use `npm.cmd ci` if PowerShell blocks the `npm` command.

## Run Locally

Start the development server:

```bash
npm run dev
```

On Windows PowerShell:

```powershell
npm.cmd run dev
```

Open <http://localhost:3000/> in a browser.

In VS Code, open **Run and Debug**, select **Run Hosting Ad landing page**, and start it. Do not start the Vite server separately while using that launch profile.

## Checks and Production Build

```bash
npm run lint
npm run build
npm run preview
```

The production files are generated in the `dist/` directory.
