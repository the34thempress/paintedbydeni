window.onload = function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/Previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0) return; // Prevent errors if no slides exist

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove "active" class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        // Show the current slide and highlight the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1]?.classList.add("active");
    }

    // Auto-slide every 5 seconds
    setInterval(() => plusSlides(1), 5000);

    // Attach event listeners for next/prev buttons
    document.querySelector(".prev")?.addEventListener("click", () => plusSlides(-1));
    document.querySelector(".next")?.addEventListener("click", () => plusSlides(1));
};
