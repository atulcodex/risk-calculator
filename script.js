function calculateRisk()
{
  //------ Getting user input values
  var capital_amt = parseFloat(document.getElementById('capital').value);
  var risk = parseFloat(document.getElementById('risk').value);
  var stock_entry_price = parseFloat(document.getElementById('stock-entry-price').value);
  var stop_loss_price = parseFloat(document.getElementById('stop-loss-price').value);
  
  //------ Calculating total capital risk
  var total_capital_risk = document.getElementById('total-capital-risk').value = risk * capital_amt / 100;
  
  //------ Calculating Stop loss per share
  var stop_loss_per_share = document.getElementById('stop-loss-per-share').value = stock_entry_price - stop_loss_price;
  
  //------ Calculating Stock Quantity
  var stock_quantity = document.getElementById('quantity').value = total_capital_risk / stop_loss_per_share;
  
  //------ Calculating Total Investment Amt
  var total_investent_amt = document.getElementById('total-investment-amt').value = stock_entry_price * stock_quantity;
  
  //------ Calculating Target 1:01
  var target_one = document.getElementById('target-one').value = stock_entry_price + stop_loss_per_share;
  
  //------ Calculating Target 1:02
  var target_two = document.getElementById('target-two').value = stock_entry_price + stop_loss_per_share + stop_loss_per_share;
  
  //------ Calculating Target 1:02
  var target_three = document.getElementById('target-three').value = stock_entry_price + stop_loss_per_share + stop_loss_per_share + stop_loss_per_share;
}

// ---------- Show Results
function showResult()
{
  var result = document.getElementById("hidden");
  
  if(result.style.display === "none")
  {
    result.style.display = "block";
  }
  else
  {
    result.style.display = "none";
  }
}

// ---------- Reset Result Form
function resetResult()
{
  var result = document.getElementById("hidden");
  
  if(result.style.display === "block")
  {
    result.style.display = "none";
  }
}