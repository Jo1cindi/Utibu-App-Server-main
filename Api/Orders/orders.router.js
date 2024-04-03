const router = require("express").Router();
const sql = require("mssql/msnodesqlv8");

//Adding and getting orders
router.post("/add-order", (req, res) => {
  const orderID = Math.floor(Math.random() * 100000)
  const customerID = req.body.customerID
  const medicineID = req.body.medicineID
  const quantity = req.body.quantity
  const orderDate = req.body.orderDate
 
  
  new sql.Request().query(`insert into Orders (Order_ID, Customer_ID, MedicineID, Quantity, Order_Date, fulfilled) values ('${orderID}', '${customerID}', '${medicineID}', '${quantity}', '${orderDate}', 'No')`, (err, results)=>{
    if(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    } else if(results) {
        return res.status(200).send("Order added"); 
    }
});

});

router.post("/get-orders", (req, res) => {
    const customerID = req.body.customerID
    const orderDate = req.body.orderDate
   
    
    new sql.Request().query(`select * from Orders where Customer_ID = '${customerID}' and Order_Date = '${orderDate}' and fulfilled = 'No'`, (err, results)=>{
      if(err){
          console.log(err);
          res.status(500).send("Internal Server Error");
      } else if(results) {
          return res.status(200).send(results.recordset); 
      }
  });
  
  });

  router.post("/count-orders", (req, res) => {
    const customerID = req.body.customerID
    const orderDate = req.body.orderDate
   
    
    new sql.Request().query(`select count (*) as totalUnfulfilledOrders from Orders where Customer_ID = '${customerID}' and Order_Date = '${orderDate}' and fulfilled = 'No'`, (err, results)=>{
      if(err){
          console.log(err);
          res.status(500).send("Internal Server Error");
      } else if(results) {
          return res.status(200).send(results.recordset); 
      }
  });
  
  });
  




module.exports = router;
