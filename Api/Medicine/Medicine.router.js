const router = require("express").Router();
const sql = require("mssql/msnodesqlv8");

router.get("/get-medicine", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  // );
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // );
  // res.setHeader("Access-Control-Allow-Credentials", true);


  const category = req.body.category;


  new sql.Request().query(`select * from Medicine where category = '${category}'`, (err, result)=>{
    if(err){
        console.log(err)
        res.status(500).send("Internal Server Error");
    }else{
        console.log(result)
        // res.json(result)
        res.status(200).send({
          data: result.recordsets[0],
        })
    }
    
  });
});

module.exports = router;
