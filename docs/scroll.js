    const btn = document.getElementById("scrollToggleBtn");
    const icon = document.getElementById("scrollIcon");

    function updateIcon() {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        if (scrollTop < maxScroll - 10) {
            icon.textContent = "↓"; // mergi în jos
        } else {
            icon.textContent = "↑"; // mergi în sus
        }
    }

    btn.addEventListener("click", () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        if (scrollTop < maxScroll - 10) {
            window.scrollTo({ top: maxScroll, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    window.addEventListener("scroll", updateIcon);
    window.addEventListener("load", updateIcon);