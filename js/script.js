
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        if (submitButton) {
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;
        }
    });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });
}

if (menuToggle && navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const revealElements = document.querySelectorAll(
    "#about, #services, #contact"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
