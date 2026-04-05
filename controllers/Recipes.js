'use strict';

var utils = require('../utils/writer.js');
var Recipes = require('../service/RecipesService');

module.exports.addRecipe = function addRecipe (req, res, next, body) {
  Recipes.addRecipe(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addRecipe = function addRecipe (req, res, next, body) {
  Recipes.addRecipe(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRecipeById = function deleteRecipeById (req, res, next, id) {
  Recipes.deleteRecipeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecipeById = function getRecipeById (req, res, next, id) {
  Recipes.getRecipeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecipes = function getRecipes (req, res, next) {
  Recipes.getRecipes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRecipeById = function updateRecipeById (req, res, next, body, id) {
  Recipes.updateRecipeById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRecipeById = function updateRecipeById (req, res, next, body, id) {
  Recipes.updateRecipeById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
