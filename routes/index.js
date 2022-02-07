var express = require('express');
var router = express.Router();
let passport=require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req, res, next) => {
  passport.authenticate('local',{session:true}, (err,doMatch,info) =>{
      if (err) next(err)

      let retVal = {
        userExist:false,
        validPassword:false
      }
      /// user not known
      if (doMatch !== null) {
        if (!doMatch) {
          retVal.userExist=true
        }
        else {
          retVal.userExist=true
          retVal.validPassword=true
        }
      } 
      res.writeHeader(200,{'Content-Type':'application/json'})
      
      res.end(JSON.stringify(retVal))
      
   
    })
  });

router.get('/session',(req,res,next)=>{
  if (req.session.page_views) {
    req.session.page_views++
    res.send("You visited this page " + req.session.page_views + " times")
  } else {
    req.session.page_views=1
    res.send("Welcome to this page for the first time.")
  }
})
module.exports = router;
