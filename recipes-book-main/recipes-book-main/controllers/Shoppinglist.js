'use strict';

var utils = require('../utils/writer.js');
var Shoppinglist = require('../service/ShoppinglistService');

module.exports.addRecipeIngredientsToList = function addRecipeIngredientsToList (req, res, next, body, listId, recipeId) {
  Shoppinglist.addRecipeIngredientsToList(body, listId, recipeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addRecipeIngredientsToList = function addRecipeIngredientsToList (req, res, next, body, listId, recipeId) {
  Shoppinglist.addRecipeIngredientsToList(body, listId, recipeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteShoppingListById = function deleteShoppingListById (req, res, next, id) {
  Shoppinglist.deleteShoppingListById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShoppingListById = function getShoppingListById (req, res, next, id) {
  Shoppinglist.getShoppingListById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShoppingLists = function getShoppingLists (req, res, next) {
  Shoppinglist.getShoppingLists()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateShoppingListById = function updateShoppingListById (req, res, next, body, id) {
  Shoppinglist.updateShoppingListById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateShoppingListById = function updateShoppingListById (req, res, next, body, id) {
  Shoppinglist.updateShoppingListById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
