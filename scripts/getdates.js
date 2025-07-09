window.onload = function () {

    const currentYear = new Date().getFullYear();
    const copyrightText = `&copy; ${currentYear} 🌼 Solomon Lander 🌼 Lagos, Nigeria`;
    document.querySelector('.output').innerHTML = copyrightText;


    function updateDateTime() {
        const now = new Date();


        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;


        const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;


        const dateTimeString = `Last modification: ${formattedDate} ${formattedTime}`;


        document.querySelector('.printout').textContent = dateTimeString;
    }


    updateDateTime();


    setInterval(updateDateTime, 1000);
};
