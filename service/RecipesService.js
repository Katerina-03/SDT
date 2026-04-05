'use strict';


/**
 * Добавить новый рецепт
 * Добавляет новый рецепт
 *
 * body Recipe Создать новый рецепт
 * returns Recipe
 **/
exports.addRecipe = function(body) {
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
 * Добавить новый рецепт
 * Добавляет новый рецепт
 *
 * body Recipe Создать новый рецепт
 * returns Recipe
 **/
exports.addRecipe = function(body) {
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
 * Удалить рецепт по id
 * Удаляет рецепт с указанным id
 *
 * id Long ID удаляемого рецепта
 * no response value expected for this operation
 **/
exports.deleteRecipeById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить рецепт по id
 * Возвращает рецепт
 *
 * id Long ID запрашиваемого рецепта
 * returns Recipe
 **/
exports.getRecipeById = function(id) {
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
 * Получить список рецептов
 * Возвращает список добавленных рецептов
 *
 * returns List
 **/
exports.getRecipes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "portion" : 12,
  "name" : "Грибной суп",
  "ingredients" : [ "", "" ],
  "id" : 10,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "steps" : [ "Почистить и помыть грибы", "Сварить суп", "Заказать пиццу с грибами, пока ждешь готовности супа" ],
  "cookingTime" : 120
}, {
  "portion" : 12,
  "name" : "Грибной суп",
  "ingredients" : [ "", "" ],
  "id" : 10,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "steps" : [ "Почистить и помыть грибы", "Сварить суп", "Заказать пиццу с грибами, пока ждешь готовности супа" ],
  "cookingTime" : 120
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновить рецепт по id
 * Обновляет рецепт рецепт
 *
 * body Recipe Данные о рецепте (optional)
 * id Long ID обновляемого рецепта
 * returns Recipe
 **/
exports.updateRecipeById = function(body,id) {
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
 * Обновить рецепт по id
 * Обновляет рецепт рецепт
 *
 * body Recipe Данные о рецепте (optional)
 * id Long ID обновляемого рецепта
 * returns Recipe
 **/
exports.updateRecipeById = function(body,id) {
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

