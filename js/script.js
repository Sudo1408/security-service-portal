// Select the navigation bar element
var nav = document.querySelector("nav");

// Select the navigation bar collapse elements
var nav_list = document.getElementsByClassName("navbar-collapse");

// Scroll to the top of the window when the page loads
window.onload = function () {
  window.scrollTo(0, 0);
};

// Add scroll event listener to change navbar style on scroll
window.addEventListener("scroll", function () {
  // If scrolled past 56 pixels from the top, add class for styling
  if (window.scrollY > 56) {
    nav.classList.add("navbar-scrolled");
  } else {
    // Otherwise, remove the class
    nav.classList.remove("navbar-scrolled");
  }
});

// Add click event listener to close the navbar on click
window.addEventListener("click", function () {
  $(nav_list).collapse("hide");
});

// Get all elements with the class "openModal"
var openModalButtons = document.querySelectorAll(".openModal");

// Loop through each button and attach event listeners
openModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the corresponding modal ID based on the button's ID
    var modalId = button.getAttribute("id").replace("openModal", "myModal");
    // Show the modal
    document.getElementById(modalId).style.display = "block";
  });
});

// Get all elements with the class "close"
var closeModalButtons = document.querySelectorAll(".close");

// Loop through each close button and attach event listeners
closeModalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the parent modal element
    var modal = button.closest(".modal");
    // Hide the modal
    modal.style.display = "none";
  });
});

// Add a click event listener to the window to close the modal if clicked outside
window.addEventListener("click", function (event) {
  // Loop through each modal
  document.querySelectorAll(".modal").forEach(function (modal) {
    // Check if the clicked element is the modal
    if (event.target === modal) {
      // Hide the modal
      modal.style.display = "none";
    }
  });
});
