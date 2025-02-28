# Descr: Personal Homepage '23 done with REACTTS

Please be welcomed to visit my [homepage](https://www.tilmanbertram.com).


### The Website features:
  + Lifeline:
    A better way to show a users history/lifepath.
  + GithubCrawler:
    Crawls mupltiple users Git(Hub) content/infos using the Github REST API,
    and displays it appropriatly, styled with CSS.

### About this Website
  Well the website and its core-elements were written in ~~ReactJS~~ -> is now Typescript + React.
  ReactJS is a framework developed by Facebook to simplify the development of web applications.
  It is based on JavaScript and JSX (JavaScript XML), which is a syntax extension for JavaScript.
  Newer versions have the React Hooks, which are a way to use state and other React features without writing a class.
  This is somewhat demonstrated in the code.

  It uses vite as a bundler, which is a build tool that aims to provide a faster and leaner development experience for modern web projects.

### Remarks and TODO
  This is one of my first websites.
  This code may be getting refactored, because the concepts aren't up-to-date.

  - CSS -> SCSS with BEM (Block, Elements, Modifiers)
  - Remove inline CSS-styling
  - Refactor into components
  - fix the text bump, when switching between 'About and Preferences'
  - instead of year use quarter (q1, q2..) for versioning

### Dependencies
  - Node.js
  - npm
  - nvm
  - tsc

### Requisites
  You have to add multiple files to build this website properly:
  - `TextsWritten.tsx` in `src/__ressources__/text/TextsWritten.tsx`
  - the images used in `public/images/*` and manipulate the path in `src/__ressources__/imageMap.tsx`
  - `public/res/*` for the favicon

### Version
#### install node 20 (f.e. via nvm)
  `nvm install 20`

  `nvm use 20`

### Install Client
  `npm ci`
### Dev
  `npm run dev` will start a local dev server on `localhost:5173`
### Build
  `npm run build` will create a `dist` folder
