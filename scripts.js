<script src="scripts.js"></script>

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    header.addEventListener("click", function() {
        // Toggle header background color when clicked
        if (header.style.backgroundColor === "rgb(107, 91, 149)") {
            header.style.backgroundColor = "#ff6f61";
        } else {
            header.style.backgroundColor = "#6b5b95";
        }
        
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleAbout");
    const aboutSection = document.getElementById("about");

    toggleButton.addEventListener("click", function() {
        // Toggle the "About Me" section's visibility
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
        } else {
            aboutSection.style.display = "none";
        }
    });
});

    });
});
