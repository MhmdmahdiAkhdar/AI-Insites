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


const chapterLinks = document.querySelectorAll('.sidebar-btn');
let activeChapter = null;  // Track the currently active chapter

// Function to toggle visibility
function toggleChapter(chapterTitles) {
    if (chapterTitles.style.display === 'block') {
        chapterTitles.style.display = 'none';
        activeChapter = null;
    } else {
        chapterTitles.style.display = 'block';
        activeChapter = chapterTitles;
    }
}

// Add event listener to each chapter button
chapterLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.stopPropagation();  // Prevent triggering the document click event

        const chapterId = this.innerText.toLowerCase().replace(' ', '');
        const chapterTitles = document.getElementById(`${chapterId}-titles`);

        // Hide any other active chapter
        if (activeChapter && activeChapter !== chapterTitles) {
            activeChapter.style.display = 'none';
        }

        // Toggle the clicked chapter
        toggleChapter(chapterTitles);
    });
});

// Add event listener to document to close active chapter when clicking outside
document.addEventListener('click', function () {
    if (activeChapter) {
        activeChapter.style.display = 'none';
        activeChapter = null;
    }
});
