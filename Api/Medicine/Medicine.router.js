const router = require("express").Router();
const sql = require("mssql/msnodesqlv8");

router.get("/get-arv-medicine", (req, res) => {

  new sql.Request().query(`select * from Medicine where Category = 'ARV'`, (err, result)=>{
    if(err){
        console.log(err)
        res.status(500).send("Internal Server Error");
    }else{
        console.log(result)
        // res.json(result)
        res.status(200).send({
          data: result.recordset,
        })
    }
    
  });
});

module.exports = router;
