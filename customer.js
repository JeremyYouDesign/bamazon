var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayProduct();
});

function displayProduct() {
    console.log("Displaying all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      placeOrder(res);
    });
};

function placeOrder(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the ID of the product you would like to order.",
                name: "orderid",
                validate: function(val) {
                    return !isNaN(val);
                }
            }
        ])
        .then(function(val) {
            var itemId = parseInt(val.orderid);
            var product = checkStock(itemId, inventory);

            if (product) {
                // Pass the chosen product to promptCustomerForQuantity
                orderQuantity(product);
              } else {
                console.log("\nThis item is not available.");
                displayProduct();
            }
        });
};

function orderQuantity(product) {
    inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "Please enter the amount you would like to order.",
        validate: function(val) {
          return val > 0;
        }
      }
    ])
    .then(function(val) {
        var quantity = parseInt(val.quantity);

        if (quantity > product.stock_quantity) {
            console.log("\nInsufficient stock!");
            displayProduct();
        } else {
            purchaseOrder(product, quantity);
        }
    });
};

function purchaseOrder(product, quantity) {
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
      [quantity, product.item_id],
      function(err, res) {
        console.log("\nYou ordered " + quantity + " " + product.product_name + "'s!");
        displayProduct();
    });
}

function checkStock(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i].item_id === itemId) {
        return inventory[i];
      }
    }
    return null;
}