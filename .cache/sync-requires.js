// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/dev-404-page.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/my-second-post.json"),
  "hello-world.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/hello-world.json"),
  "hi-folks.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/dev-404-page.json"),
  "generic.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/generic.json"),
  "index.json": require("/Users/austriker/Documents/web-development/github-repos/lindahlstudios/.cache/json/index.json")
}