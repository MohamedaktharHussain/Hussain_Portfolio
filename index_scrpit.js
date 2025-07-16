 var tablinks = document.getElementsByClassName("tab-links");
 var tabcontents = document.getElementsByClassName("tab-contents");

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
 }

 var sidemeu = document.getElementById("sidemenu");

 function openmenu(){
    sidemeu.style.right = "0";

 }
 function closemenu(){
    sidemeu.style.right = "-200px";
    
 }

 document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector("button"); // Or give an ID for more safety
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Prevent actual form submission

        // Get input values
        const name = document.querySelector("input[placeholder='Your Name']").value;
        const email = document.querySelector("input[placeholder='Your Email']").value;
        const message = document.querySelector("textarea[placeholder='Your Message']").value;

        // Construct WhatsApp message
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        // WhatsApp number
        const phoneNumber = "918667869749"; // Use 91 for India

        // Open WhatsApp chat
        const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(url, "_blank");
    });
});

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;



 