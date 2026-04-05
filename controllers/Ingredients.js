'use strict';

var utils = require('../utils/writer.js');
var Ingredients = require('../service/IngredientsService');

module.exports.addIngredient = function addIngredient (req, res, next, body) {
  Ingredients.addIngredient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addIngredient = function addIngredient (req, res, next, body) {
  Ingredients.addIngredient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIngredientById = function deleteIngredientById (req, res, next, id) {
  Ingredients.deleteIngredientById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIngredients = function getIngredients (req, res, next) {
  Ingredients.getIngredients()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateIngredientById = function updateIngredientById (req, res, next, body, id) {
  Ingredients.updateIngredientById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateIngredientById = function updateIngredientById (req, res, next, body, id) {
  Ingredients.updateIngredientById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
