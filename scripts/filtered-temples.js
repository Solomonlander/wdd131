const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Abia State",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "images/temple15.webp",
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17446,
        imageUrl: "images/temple13.webp",
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 40000,
        imageUrl: "images/temple19.webp",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "images/temple29.webp",
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "images/temple31.webp",
    }
];

function displayTemples(filteredTemples) {
    const container = document.getElementById("temples");
    container.innerHTML = "";
    filteredTemples.forEach((temple) => {
        const section = document.createElement("section");
        section.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(section);
    });
}

function filterTemples(criteria) {
    let filtered;
    switch (criteria) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area <= 90000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);

    document.querySelectorAll("nav a").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.id;
            filterTemples(filter);
        });
    });

    // Footer Info
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML =
        `&copy; ${currentYear} 🌼 Solomon Lander 🌼 Lagos, Nigeria`;

    function updateDateTime() {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        document.getElementById("lastModified").textContent = `Current Time: ${formattedDate} ${formattedTime}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Hamburger Menu
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
    });
});
