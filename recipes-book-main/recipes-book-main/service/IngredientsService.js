'use strict';


/**
 * Добавить новый ингредиент
 * Добавляет новый ингредиент
 *
 * body Ingredient Создать новый ингредиент
 * returns Ingredient
 **/
exports.addIngredient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Грибы",
  "id" : 11,
  "type" : "Other"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Добавить новый ингредиент
 * Добавляет новый ингредиент
 *
 * body Ingredient Создать новый ингредиент
 * returns Ingredient
 **/
exports.addIngredient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Грибы",
  "id" : 11,
  "type" : "Other"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удалить ингредиент по id
 * Удаляет ингредиент с указанным id
 *
 * id Long ID удаляемого ингредиента
 * no response value expected for this operation
 **/
exports.deleteIngredientById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить список ингредиентов
 * Возвращает список ингредиентов
 *
 * returns List
 **/
exports.getIngredients = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Грибы",
  "id" : 11,
  "type" : "Other"
}, {
  "name" : "Грибы",
  "id" : 11,
  "type" : "Other"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновить ингредиент по id
 * Обновляет ингредиент
 *
 * body Recipe Данные о ингредиенте (optional)
 * id Long ID обновляемого ингредиента
 * returns Recipe
 **/
exports.updateIngredientById = function(body,id) {
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
 * Обновить ингредиент по id
 * Обновляет ингредиент
 *
 * body Recipe Данные о ингредиенте (optional)
 * id Long ID обновляемого ингредиента
 * returns Recipe
 **/
exports.updateIngredientById = function(body,id) {
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

