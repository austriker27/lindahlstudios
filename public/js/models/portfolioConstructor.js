'use strict';

var app = app || {};

(function(module) {
  function Project (projectsListObj) {
    // TODO: complete parameters / arguments for list of projects
  }

  Project.projects = [];

  Project.loadAll = rows => {
    Project.projects = Project.projects.map((projectObject) => new Project(projectObject));
  };

// TODO: on a prototype, use handlebars to render all projects to html
// TODO: then write a function that runs through all the projects and appends them

// TODO: attach each method to the module


}(app));
