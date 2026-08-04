export function initScroll() {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".nav-menu a");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (
                scrollPosition >= sectionTop && scrollPosition < sectionBottom
            ) {
                currentSection = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.2
        }
    );
    document.querySelectorAll(".fade-in").forEach(section => {
        observer.observe(section);
    });
}

export function scrollTop() {
    const scrollTopBtn = document.querySelector("#scroll-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}