# Descr: Personal Homepage '23 done with REACTTS

Please be welcomed to visit my [homepage](https://www.tilmanbertram.com).


### The Website features:
  + Lifeline:
    A better way to show a users history/lifepath.
  + GithubCrawler:
    Crawls a users Git(Hub) content/infos using the Github REST API,
    and displays it appropriatly, styled with CSS.
  
### About this Website
  Well the website and its core-elements were written in ~~ReactJS~~ -> is now ReactTs.
  ReactJS is a framework developed by Facebook to quickly 
  create frontend web applications and uses NodeJS as its base,
  by involving HTML and CSS into the code. 
  ~~This website is hosted with nginx.~~ -> now uses Deno App
  This website was built using yarn.

### Remarks and TODO
  This is one of my first websites.
  This code maybe getting refactored, because the concepts aren't up-to-date.

  - CSS -> SCSS with BEM (Block, Elements, Modifiers)
  - Remove inline CSS-styling
  - Refactor into components
  - fix the text bump, when switching between 'About and Preferences'

### Version
#### install newest version of node
  `nvm install 20`

  `nvm use 20`

### Install Client
  `npm ci`
### Dev
  `npm run start`
### Build 
  `npm run build`