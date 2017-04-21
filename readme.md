# Zurb Foundation 6 - Metalsmith

**Please open all issues with this template on the main [HTML-foundation6-metalsmith](http://gitlab.vienthonga.com/WebSite/HTML-foundation6-metalsmith) repo.**

Zurb Foundation 6 - Metalsmith is a Gulp-powered build system with these features :

- Metalsmith is a static site generators [Metalsmith](https://github.com/segmentio/metalsmith)
- Nunjucks - a rich and powerful templating language for JavaScript.[Nunjucks](https://mozilla.github.io/nunjucks/)
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## How to use

To use this template, your computer needs:
- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Using the CLI

```bash
npm install
yarn install
bower install
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.

### What's included

```
src/
├── assets/
│   ├── img/
│   ├── js/
│   ├── scss/
│   └── static/
└── data/
└── layouts/
    └── partials/
        └── default.html
    └── index.html
└── pages/
    └── index.md
└── styleguide/
    ├── index.md
    └── template.html
   
```

Many thanks for ZURB Template.

## Library and plugins inlcude :

### CSS library :
- Hamburgers - CSS-animated hamburgers [Hamburgers](https://jonsuh.com/hamburgers/)
- Themify icons - https://themify.me/themify-icons

### Plugins include
- Lazysizes - lazyloader for images - https://github.com/aFarkas/lazysizes
- Sweetalert - http://t4t5.github.io/sweetalert/
- Swiper - http://idangero.us/swiper/#.WKVXzvmLSUk
