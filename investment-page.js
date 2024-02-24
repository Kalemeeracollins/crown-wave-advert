function calculateProfits(returnPercentage, profitsId, inputId, errorId) {
    var investmentAmount = parseFloat(document.getElementById(inputId).value);
    if (!isNaN(investmentAmount)) {
      if (investmentAmount >= 1000) {
        var profits = (investmentAmount * returnPercentage) / 100;
        document.getElementById(profitsId).textContent = `Profits: $${(investmentAmount + profits).toFixed(2)}`;
        document.getElementById(errorId).textContent = ''; // Clear error message
      } else {
        document.getElementById(errorId).textContent = 'Minimum investment amount must be $1000.';
        document.getElementById(profitsId).textContent = ''; // Clear profits display
      }
    } else {
      document.getElementById(errorId).textContent = 'Please enter a valid investment amount.';
      document.getElementById(profitsId).textContent = ''; // Clear profits display
    }
  }
  
  // Allow only numbers to be entered in the input fields
  var investmentAmountInputs = document.querySelectorAll('input[type="text"]');
  investmentAmountInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9.]/g, ''); // Replace any non-numeric characters with an empty string
    });
  });

  // Add event listeners to input fields to update profits dynamically
  document.getElementById('investmentAmount1').addEventListener('input', function() {
    calculateProfits(30, 'profits1', 'investmentAmount1', 'error1');
  });

  document.getElementById('investmentAmount2').addEventListener('input', function() {
    calculateProfits(50, 'profits2', 'investmentAmount2', 'error2');
  });

  document.getElementById('investmentAmount3').addEventListener('input', function() {
    calculateProfits(60, 'profits3', 'investmentAmount3', 'error3');
  });

  document.getElementById('investmentAmount4').addEventListener('input', function() {
    calculateProfits(70, 'profits4', 'investmentAmount4', 'error4');
  });

  document.getElementById('investmentAmount5').addEventListener('input', function() {
    calculateProfits(85, 'profits5', 'investmentAmount5', 'error5');
  });