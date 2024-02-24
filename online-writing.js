let paidSubscription = false;

function handleTaskClick(taskId) {
  if (paidSubscription) {
    // Perform task action
    console.log(`User clicked on Task ${taskId}`);
  } else {
    // Show error message
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = 'Please pay the subscription fee to access tasks.';
   
    // Define a function to close the error message
    function closeError() {
      errorMessageElement.style.display = "none";
    };
    
    // Set a timeout to close the error message after 5 seconds
    setTimeout(closeError, 5000); // 5000 milliseconds = 5 seconds
  }
}


