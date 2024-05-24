document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('submit', function(e) {
        if(document.querySelector('input[type="email"]:invalid'))
            // Prevent the browser handling the invalid popup without removing valid submit functionality.
            e.preventDefault();
        });
});