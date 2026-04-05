const client = require('prom-client');


module.exports.shoppingListSize = new client.Gauge({
   name: 'shopping_list_items_count',
   help: 'Number of items in a shopping list',
   labelNames: ['listId'],
});
