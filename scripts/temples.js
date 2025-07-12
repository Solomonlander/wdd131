window.onload = function () {
    // Display current year
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML =
        `&copy; ${currentYear} 🌼 Solomon Lander 🌼 Lagos, Nigeria`;

    // Function to update time continuously
    function updateDateTime() {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        document.getElementById("lastModified").textContent = `Current Time: ${formattedDate} ${formattedTime}`;
    }

    // Initial run
    updateDateTime();

    // Update every second
    setInterval(updateDateTime, 1000);

    // Hamburger toggle
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
    });
};
