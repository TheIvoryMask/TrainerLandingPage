

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-hidden")) {
                entry.target.classList.add("fade-show");
            } else if (entry.target.classList.contains("slide-hidden")) {
                entry.target.classList.add("slide-show");
            }
        } else {
            if (entry.target.classList.contains("fade-hidden")) {
                entry.target.classList.remove("fade-show");
            } else if (entry.target.classList.contains("slide-hidden")) {
                entry.target.classList.remove("slide-show");
            }
        }
    });
});

const fadeElements = document.querySelectorAll(".fade-hidden");
fadeElements.forEach((el) => observer.observe(el));

const slideElements = document.querySelectorAll(".slide-hidden");
slideElements.forEach((el) => observer.observe(el));