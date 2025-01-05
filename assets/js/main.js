const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        let isDarkMode = false;

        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
            body.style.color = isDarkMode ? '#fff' : '#333';
        });