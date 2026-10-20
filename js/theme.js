
(() => {
  const THEME_KEY = "theme";

  // Read the saved theme; use dark mode by default.
  const savedTheme = localStorage.getItem(THEME_KEY);
  const initialTheme =
    savedTheme === "light" ? "light" : "dark";

  // Apply the theme before the page is displayed.
  document.documentElement.dataset.theme = initialTheme;

  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");

    // Exit safely if this page doesn't contain the toggle.
    if (!toggleButton) return;

    function updateButton() {
      const isLight =
        document.documentElement.dataset.theme === "light";

      toggleButton.innerHTML = isLight
        ? `<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg"
             width="18" height="18" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
             <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472
             c.405-.022.617.463.402.807a6.5 6.5 0 0 0
             8.268 8.268c.344-.215.829-.003.803.397z"/>
           </svg>`
        : `<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg"
             width="18" height="18" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
             <circle cx="12" cy="12" r="4"/>
             <path d="M12 2v2 M12 20v2 M4.93 4.93l1.42 1.42
             M17.65 17.65l1.42 1.42 M2 12h2 M20 12h2
             M6.35 17.65l-1.42 1.42 M19.07 4.93l-1.42 1.42"/>
           </svg>`;

      const label = isLight
        ? "Switch to dark mode"
        : "Switch to light mode";

      toggleButton.setAttribute(
        "aria-label",
        label
      );
      toggleButton.setAttribute("title", label);
      toggleButton.setAttribute("aria-pressed", String(isLight));
    }

    // Display the correct button label on page load.
    updateButton();

    toggleButton.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.dataset.theme;

      const nextTheme =
        currentTheme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem(THEME_KEY, nextTheme);

      updateButton();
    });
  });
})();
