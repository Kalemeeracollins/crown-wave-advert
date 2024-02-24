function showNotification(notificationId) {
  const notification = document.getElementById(notificationId);

  // Display notification message
  notification.style.display = "block";

  // Hide notification after 3 seconds (5000 milliseconds)
  setTimeout(function() {
    notification.style.display = "none";
  }, 5000);
}

function closeNotification(notificationId) {
  const notification = document.getElementById(notificationId);
  notification.style.display = "none";
}
