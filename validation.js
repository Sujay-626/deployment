const joi =require('joi');

const registervalidation = (user)=>{
    const joischema = joi.object({
        name : joi.string().required(),
        email : joi.string().required().email(),
        password : joi.string().required().min(8)
    });
     return joischema.validate(user);
};

const loginvalidation = (user)=>{
    
}

module.exports.registervalidation = registervalidation;
module.exports.loginvalidation = loginvalidation;
