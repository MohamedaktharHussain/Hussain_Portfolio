// ================= TAB SECTION =================

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ================= MOBILE MENU =================

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// ================= CONTACT FORM =================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    // Create success message element if it doesn't exist
    let successMsg = document.getElementById("success-msg");

    if (!successMsg) {
        successMsg = document.createElement("p");
        successMsg.id = "success-msg";
        successMsg.style.color = "#61b752";
        successMsg.style.marginTop = "15px";
        successMsg.style.fontSize = "16px";
        successMsg.style.fontWeight = "500";

        form.parentNode.appendChild(successMsg);
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // Get form values
        const name = document.querySelector("input[placeholder='Your Name']").value;
        const email = document.querySelector("input[placeholder='Your Email']").value;
        const message = document.querySelector("textarea[placeholder='Your Message']").value;

        // WhatsApp message
        const whatsappMessage =
            `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        // Your WhatsApp Number
        const phoneNumber = "918667869749";

        // Open WhatsApp
        window.open(
            `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
            "_blank"
        );

        // Success Message
        successMsg.innerHTML = "✅ Message sent successfully!";

        // Reset Form
        form.reset();

        // Remove message after 5 seconds
        setTimeout(() => {
            successMsg.innerHTML = "";
        }, 5000);

    });

});