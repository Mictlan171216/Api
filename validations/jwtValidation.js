const jwt = require ("jsonwebtoken");
const db = require("../database").config;
let format = require("../format").format;

const middleware = {
    validationToken: function(req,res,next){
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, db.secret_key, (err, data) =>{
                if (err) {
                    format.code = 401;
                    format.message = "Invalid token";
                    format.success = false;
                    format.data = err;
                    res.status(401);
                    res.json(format);
                }
                else{
                    next()
                }
            });
        } 
        else{
            format.code = 401;
            format.message = "you need a token";
            format.success = false;
            format.data =[];
            res.status(401);
            res.json(format);
        }
    }
  

}

module.exports =  middleware;