// Dynamic footer text
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer-text");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Discover Akwa Ibom Stake | Designed by Solomon Lander Emmanson`;
});
