var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    startBamazon();
  });
  
  function startBamazon() {
  
    connection.query("SELECT * FROM products WHERE stock_quantity > 0", function(err, results) {
        for (var i = 0; i < results.length; i++) {
            console.log("ID: " + results[i].item_id + " | " + " Item: " + results[i].product_name + " | " + " Price: $" + results[i].price + " | " + " Quantity: " + results[i].stock_quantity);
        }
        shopBamazon();
      })
  }
  
  function shopBamazon(){
  
      inquirer.prompt([{
          name: "itemID",
          type: "input",
          message: "What is the ID of the product you would like to buy?",
          validate: function(value) {
              if (isNaN(value) == false) {
                  return true;
              } else {
                  return false;
              }
          }
      }, {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?",
          validate: function(value) {
              if (isNaN(value) == false) {
                  return true;
              } else {
                  return false;
              }
          }
      }]).then(function(answer) {
   
          var query = 'SELECT * FROM products WHERE item_id=' + answer.itemID;
          connection.query(query, function(err, results) {
            if (answer.quantity <= results[0].stock_quantity) {
  
              console.log("We currently have " + results[0].stock_quantity + " " + results[0].product_name + ".");
              
              var newQuantity = results[0].stock_quantity - answer.quantity
  
              connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: newQuantity
                },
                {
                  item_id: answer.itemID
                }
              ],
              function(err, results) {}
              );
  
              console.log("Thank you for shopping at Bamazon! Your order of "+ answer.quantity + " " + results[0].product_name + " is now being processed. Your total cost is $"+ (answer.quantity * results[0].price)+"." );
  
            } else {
                console.log("Insufficient quantity!!");
            }
             inquirer
              .prompt({
                name:"shop",
                type:"confirm",
                message:"Would you like to shop for another item?",
                default: true
              })
              .then(function(answer) {
                if (answer.shop === true) {
                  startBamazon();
                }
                else {
                  console.log("See you next time!");
                  return;
                }
              });
          })
      })    
  }
  