const path = require('path')
const {exec} = require('child_process')

function runJavaCalculator(className, args = []) {
  return new Promise((resolve, reject) => {
    const command = [
      'java',
      '-cp',
      path.join(__dirname, '..', 'calculations'), 
      className,
      ...args
    ].join(' ');

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(stderr || error.message);

      const result = stdout.trim().split(/\s+/).map(Number);
      resolve(result);
    });
  });
}

async function calculateEMI(principal,rate,months)
{
    const[emi,total,interest] = await runJavaCalculator('EmiCalculator',
        [principal,rate,months]);

        return {
            emi,
            total,
            interest
        };
}

async function calculateInvestment(principal,rate,years,frequency)
{
    const[maturityAmount,interest] = await runJavaCalculator('InvestmentCalculator',
        [principal,rate,years,frequency]);

        return {
            maturityAmount,
            interest

        };
}

module.exports = {
    calculateEMI,
    calculateInvestment
}