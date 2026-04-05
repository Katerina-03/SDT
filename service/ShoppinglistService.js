'use strict';


/**
 * Добавить в список продукты для рецепта
 * Добавляет в список ингредиенты, содержащиеся в рецепте
 *
 * body ShoppingList Данные о списке (optional)
 * listId Long ID обновляемого списка
 * recipeId Long ID рецепта
 * returns Recipe
 **/
exports.addRecipeIngredientsToList = function(body,listId,recipeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "portion" : 12,
  "name" : "Грибной суп",
  "ingredients" : [ "", "" ],
  "id" : 10,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "steps" : [ "Почистить и помыть грибы", "Сварить суп", "Заказать пиццу с грибами, пока ждешь готовности супа" ],
  "cookingTime" : 120
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Добавить в список продукты для рецепта
 * Добавляет в список ингредиенты, содержащиеся в рецепте
 *
 * body ShoppingList Данные о списке (optional)
 * listId Long ID обновляемого списка
 * recipeId Long ID рецепта
 * returns Recipe
 **/
exports.addRecipeIngredientsToList = function(body,listId,recipeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "portion" : 12,
  "name" : "Грибной суп",
  "ingredients" : [ "", "" ],
  "id" : 10,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "steps" : [ "Почистить и помыть грибы", "Сварить суп", "Заказать пиццу с грибами, пока ждешь готовности супа" ],
  "cookingTime" : 120
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удалить список покупок по id
 * Удаляет список покупок с указанным id
 *
 * id Long ID удаляемого списка
 * no response value expected for this operation
 **/
exports.deleteShoppingListById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить список покупок по id
 * Возвращает список покупок
 *
 * id Long ID запрашиваемого списка
 * returns ShoppingList
 **/
exports.getShoppingListById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Ужин на завтра",
  "id" : 11,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получить список списков покупок
 * Возвращает список списков покупок
 *
 * returns List
 **/
exports.getShoppingLists = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Ужин на завтра",
  "id" : 11,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "items" : [ "", "" ]
}, {
  "name" : "Ужин на завтра",
  "id" : 11,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "items" : [ "", "" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновить список покупок по id
 * Обновляет рецепт рецепт
 *
 * body ShoppingList Данные о списке (optional)
 * id Long ID обновляемого списка
 * returns ShoppingList
 **/
exports.updateShoppingListById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Ужин на завтра",
  "id" : 11,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновить список покупок по id
 * Обновляет рецепт рецепт
 *
 * body ShoppingList Данные о списке (optional)
 * id Long ID обновляемого списка
 * returns ShoppingList
 **/
exports.updateShoppingListById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Ужин на завтра",
  "id" : 11,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

