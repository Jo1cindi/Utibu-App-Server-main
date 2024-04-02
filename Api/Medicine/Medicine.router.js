const router = require("express").Router();
const sql = require("mssql/msnodesqlv8");

router.post("/get-arv-medicine", (req, res) => {
  // const category = req.body.category

  

  new sql.Request().query(`select * from Medicine where Category = 'ARV'`, (err, results)=>{
    if(err){
        console.log(err)
        res.status(500).send("Internal Server Error");
    }if(results){
      return res.status(200).send(results.recordsets[0]); 
  }
   
    
  });
});

module.exports = router;
