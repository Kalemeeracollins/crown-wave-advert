const sideMenu = document.querySelector("nav");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");

menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block';
})

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})

//Logic to logout user
function logoutUser() {
    // Clearing session data
    sessionStorage.clear(); // Clear all session storage data

    // Redirecting the user to the logout page
    window.location.href = "logout.php"; // Replace "logout.php" with the actual logout page URL
}
