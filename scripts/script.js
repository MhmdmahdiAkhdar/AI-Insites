// This code helps in the menu for small screens
const menuopenclose = document.querySelector(".menu-open-close");
const navmenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar"); // Assuming your navbar has a class of 'navbar'

menuopenclose.addEventListener("click", () => {
    menuopenclose.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    // This function checks if the click is outside the menu button, navigation menu, and navigation bar.
    // If the click is outside these elements, it removes the "active" class from both the menu button and the navigation menu, effectively closing the menu.
    if (!menuopenclose.contains(event.target) && !navmenu.contains(event.target) && !navbar.contains(event.target)) {
        menuopenclose.classList.remove("active");
        navmenu.classList.remove("active");
    }
});

// Sidebar toggle functionality: When clicking on chapter title, it shows or hides the list of titles
const chapterLinks = document.querySelectorAll('.sidebar-btn');

// Add event listener to each chapter button
chapterLinks.forEach(link => {
    link.addEventListener('click', function () {
        const chapterId = this.innerText.toLowerCase().replace(' ', '');  // Get chapter ID (e.g., 'chapter1')
        const chapterTitles = document.getElementById(`${chapterId}-titles`);  // Get the titles of the chapter

        // Toggle the visibility of the chapter titles list
        if (chapterTitles.style.display === 'block') {
            chapterTitles.style.display = 'none';  // Hide the titles
        } else {
            chapterTitles.style.display = 'block';  // Show the titles
        }
    });
});