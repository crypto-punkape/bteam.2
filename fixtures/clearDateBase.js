const mongoose=require('../libs/mongoose');
const Dataq=require('../models/data');
async function q1() {
    await Dataq.remove({});
    console.log('done');
}

q1();
module.exports=q1;