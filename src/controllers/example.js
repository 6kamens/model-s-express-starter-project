
//connect db at this layer

const testParam = (req,res)=>{
     res.send(`This is my stater express project with test parameter : ${req.params.word}`);
} ;

const testBody = (req,res)=>{
    res.send(`This is my stater express project with test body : ${req.body.word}`);
};


module.exports = {
    testParam,
    testBody
}