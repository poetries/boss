const express = require('express');
const Router = express.Router();

Router.get('/info',(req,res)=>{
    // 用户没有cookie
    return res.json({code:0})
})

module.exports = Router