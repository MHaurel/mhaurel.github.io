// Get references to the mobile menu button and mobile menu
const mobileMenuButton = document.querySelector(
  '[aria-controls="mobile-menu"]'
);
const mobileMenu = document.getElementById("mobile-menu");
mobileMenu.classList.toggle("hidden");

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener("click", () => {
  // Toggle the "hidden" class to show/hide the mobile menu
  mobileMenu.classList.toggle("hidden");
});

// Get references to the mobile menu links
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

// Add click event listeners to mobile menu links
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the mobile menu when a link is clicked
    mobileMenu.classList.add("hidden");
  });
});
