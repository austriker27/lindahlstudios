# lindahl studios homepage
based on fresh built by [Css Ninja Studio](https://cssninja.io). Fresh is licensed under the MIT license.

## Details

[Bulma css framework](https://bulma.io)

## Usage

* Clone or download the repo
* Run `npm install`
* Run `gulp build`
* Run `gulp default`

## Major changes

* Everything is now handled by gulp and npm
* Bulma version upgraded to 0.7
* Bulma source sass is editable (note that the `@widescreen` variable has been set to false)
* Panel slider library has been removed. Sidebar completely rewritten without any plugin.
* Removed unused classes and refactored scss
* Added more scss partials for better code maintainability
* Introduced Panini templating engine. Learn more about Panini here: https://github.com/zurb/panini
* Fully automated build and watch process, integration with browser sync
* Navbar rework since deprecation of `.nav` element in favor of `.navbar`.
* Optimized responsive display for mobile and tablets.
