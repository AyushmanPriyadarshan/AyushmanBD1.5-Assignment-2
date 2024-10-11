const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;

  let initialInvestment = boughtAt * quantity;
  let currentValue = marketPrice * quantity;
  let totalReturn = currentValue - initialInvestment;

  res.send(`Total return: ${totalReturn.toString()}`);
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;

  res.send(`Total returns: ${totalReturns.toString()}`);
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  const returnPercentage = ((boughtAt - returns) / boughtAt) * 100;

  res.send(`Return percentage: ${returnPercentage.toString()}%`);
});

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;

  res.send(`Total return percentage: ${totalReturns.toString()}`);
});

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  let status = '';
  if (returnPercentage > 0) {
    status = 'Profit';
  } else {
    status = 'Loss';
  }

  res.send(`Stock status: ${status}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
