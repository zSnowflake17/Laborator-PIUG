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