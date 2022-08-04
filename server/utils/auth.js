//requiring jwt so we can get tokens and requiring dotenv so we can make a .env file to hold our secret
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;
//setting the expiration variable to 2 hours
const expiration = '2h';

module.exports = {
  //this is our authentication middleware
  authMiddleware: function({req,res,connection}){
    //assigning a token
    let token = req.body.token || req.query.token || req.headers.authorization;
    if(req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    //if there is no token then send the request back
    if(!token) {
      return req;
    }
    //verify the token, set it to expire after 2 hours(our expiration variable), start associating data with the user associated with the new token
    try {
      const {data} = jwt.verify(token, secret, {maxAge: expiration});
      req.user = data;
    } catch {
      //if there is an error then we give the following console log
      console.log('Invalid Token')
    }

    return req;
  },
  //assigning a token to a username
  signToken: function ({ username, _id }) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};