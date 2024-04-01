const router = require("express").Router();
const sql = require("mssql/msnodesqlv8");

router.get("/get-medicine", (req, res) => {
  const category = req.body.category;


  new sql.Request().query(`select * from Medicine where category = '${category}'`, (err, result)=>{
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
