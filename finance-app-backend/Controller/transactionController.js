const EMI = require('../Models/emi');
const Investment = require('../Models/investment');
const {calculateEMI,calculateInvestment} = require('../Services/computeService');

const postEmi = (async(req,res) => 
{
    const {principal,rate,months} = req.body
    console.log('req.body' + req.body)
    try{
        const result = await calculateEMI(principal,rate,months)
        console.log('result' + result)
        const record =  new EMI({
            principal,rate,months,...result
        });
        console.log('record' +record)
        const saved = await record.save();
        console.log('saved' +saved)
        res.status(201).json(saved);
    }
    catch (err) {
        res.status(500).json({error : err.message});
    }
});

const getEmi = (async(req,res) =>
{
    try{
        const allTrans = await EMI.find();
        console.log(allTrans)
        res.json(allTrans);
    }
    catch(err){
        res.status(500).json({error : err.message})

    }

});

const postInvestment = (async(req,res) => 
{
    const {principal,rate,years,frequency} = req.body
    console.log('req.body: ' + JSON.stringify(req.body)); 

    try{
        const result = await calculateInvestment(principal,rate,years,frequency)
        console.log('result' + result)
        const record =  new Investment({
            principal,rate,years,frequency,...result
        });
        console.log('record' +record)
        const saved = await record.save();
        console.log('saved' +saved)
        res.status(201).json(saved);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error : err.message});
    }
});


module.exports = {getEmi,postEmi,postInvestment};