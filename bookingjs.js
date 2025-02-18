document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const middleName = document.getElementById("mname").value.trim();
        const birthdate = document.getElementById("birthdate").value.trim();
        const email = document.getElementById("email").value.trim();
        const contactNumber = document.getElementById("number").value.trim();
        const appointmentOptions = document.getElementById("appointmentoptions").value;
        const address = document.getElementById("Address").value.trim();
        const homeServiceChoice = document.querySelector("input[name='choice']:checked");

        if (!firstName || !lastName || !middleName || !birthdate || !email || !contactNumber || !homeServiceChoice || !address) {
            alert("Please fill out all fields.");
            return;
        }

        if (appointmentOptions === "option1") { // Ensure the user selects an option
            alert("Please select a valid appointment option.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhoneNumber(contactNumber)) {
            alert("Please enter a valid contact number.");
            return;
        }

        if (confirm("Your form has been successfully submitted! You will receive an email with an invoice and payment instructions shortly.")) {
            form.submit(); // Allow the form to submit
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhoneNumber(number) {
        const phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(number);
    }
});
