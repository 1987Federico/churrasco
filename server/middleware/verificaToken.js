const {firebase,admin} = require('../firbase/firbase');

//Verifica Token
let verificaToken = (req,res,next) => {
    
   const token = req.header('Authorization').replace('Bearer', '').trim()
   var user = firebase.auth().currentUser;
   if (user) {
      admin.auth().verifyIdToken(token)
         .then( (decodedToken) => {
            if(decodedToken.uid === user.uid)
            {
               req.user = user.uid
               return next()
            }
         })
         .catch( (error) => {
            return res.status(401).json({
               ok : false,
               error
            });
         });
   }  else {
         return res.status(401).json({
            ok : false,
            message:'unauthorized'
         });
   }
};


    
    
    

module.exports = {
        verificaToken
    };