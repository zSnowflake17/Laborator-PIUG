document.addEventListener("DOMContentLoaded", function () {
    // Tooltip
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(t => new bootstrap.Tooltip(t));

    // CONTACT FORM
    const form = document.getElementById('contactForm');
    const successToastEl = document.getElementById('successToast');

    if (form && successToastEl) {
        const successToast = new bootstrap.Toast(successToastEl);

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            successToast.show();
            form.reset();
            form.classList.remove('was-validated');
        });
    }

    // DARK MODE
    const toggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    if (toggle) {  // doar dacă există în pagină
        // dacă tema e salvată în localStorage, pornim dark mode
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark-mode');
            toggle.checked = true;
        }

        toggle.addEventListener('change', function () {
            if (this.checked) {
                html.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

//Ce pagini caut eu
const searchIndex = [
    {
        title: "Despre Muzeu",
        text: "istorie biblica prezentare colectii manuscrise about museum",
        url: "whoarewe.html"
    },
    {
        title: "Expozitia Manuscriselor de la Marea Moarta",
        text: "dead sea scrolls isaia qumran artefacte expoziție articol scrolls",
        url: "articol1.html"
    },
    {
        title: "Educatie",
        text: "materiale educative lectii copii activități ghiduri",
        url: "educatie.html"
    },
    {
        title: "Colectii",
        text: "colectii biblice artefacte manuscrise obiecte rare",
        url: "colectii.html"
    },
    {
        title: "Collections: Exploring the Artifacts of the Bible",
        text: "colectie collections galerie acces research",
        url: "articol2.html"
    }

];

const input = document.getElementById("searchInput");
const resultBox = document.getElementById("searchResults");

input.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();
    resultBox.innerHTML = "";

    if (q.length < 2) {
        return;
    }

    const results = searchIndex.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q)
    );

    if (results.length === 0) {
        resultBox.innerHTML = "<div class='list-group-item'>Nimic gasit.</div>";
        return;
    }

    results.forEach(r => {
        const el = document.createElement("a");
        el.href = r.url;
        el.className = "list-group-item list-group-item-action";
        el.textContent = r.title;
        resultBox.appendChild(el);
    });
});