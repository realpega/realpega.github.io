let color = document.querySelector("#select-bg-color-text");

document.getElementById('blue').addEventListener('click', function() {
    if (document.body.classList.contains('bg-dark')) {
        document.body.classList.replace('bg-dark', 'bg-primary');
        document.body.classList.replace('text-dark', 'text-white');
        document.querySelector("#select-bg-color").classList.replace('btn-secondary', 'btn-light');
        color.textContent = "BLUE";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-dark', 'bg-primary');
    } else if (document.body.classList.contains('bg-light')) {
        document.body.classList.replace('bg-light', 'bg-primary');
        document.body.classList.replace('text-dark', 'text-white');
        document.querySelector("#select-bg-color").classList.replace('btn-secondary', 'btn-light');
        color.textContent = "BLUE";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-light', 'bg-primary');
    }
});

document.getElementById('black').addEventListener('click', function() {
    if (document.body.classList.contains('bg-primary')) {
        document.body.classList.replace('bg-primary', 'bg-dark');
        document.body.classList.replace('text-dark', 'text-white');
        document.querySelector("#select-bg-color").classList.replace('btn-secondary', 'btn-light');
        color.textContent = "BLACK";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-primary', 'bg-dark');
    } else if (document.body.classList.contains('bg-light')) {
        document.body.classList.replace('bg-light', 'bg-dark');
        document.body.classList.replace('text-dark', 'text-white');
        document.querySelector("#select-bg-color").classList.replace('btn-secondary', 'btn-light');
        color.textContent = "BLACK";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-light', 'bg-dark');
    }
});

document.getElementById('white').addEventListener('click', function() {
    if (document.body.classList.contains('bg-dark')) {
        document.body.classList.replace('bg-dark', 'bg-light');
        document.body.classList.replace('text-white', 'text-dark');
        document.querySelector("#select-bg-color").classList.replace('btn-light', 'btn-secondary');
        color.textContent = "WHITE";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-dark', 'bg-light');
    } else if (document.body.classList.contains('bg-primary')) {
        document.body.classList.replace('bg-primary', 'bg-light');
        document.body.classList.replace('text-white', 'text-dark');
        document.querySelector("#select-bg-color").classList.replace('btn-light', 'btn-secondary');
        color.textContent = "WHITE";
        document.querySelector("#select-bg-color-badge").classList.replace('bg-primary', 'bg-light');
    }
});
