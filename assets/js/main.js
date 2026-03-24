const cards = document.querySelectorAll('.card');
const main = document.querySelector('main');
let activeTag;

function filterCardsByTag(tag) {
    for (const card of cards) {
        const tags = card.querySelectorAll('#tags li');
        for (const item of tags) {
            if (item.textContent.toLowerCase() === tag.toLowerCase()) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        }
        const tagNames = Array.from(tags).map(li => li.textContent.toLowerCase());

        if (tag.toLowerCase() === 'all' || tagNames.includes(tag.toLowerCase())) {
            card.style.display = 'block';
        } else if (tagNames.includes(tag.toLowerCase())) {
            activeTag = !activeTag;
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI' && event.target.parentElement.id === 'tags') {
        const tag = event.target.textContent;
        if (activeTag === tag) {
            activeTag = null;
            resetFilters();
            return;
        }
        filterCardsByTag(tag);
        activeTag = tag;
    }
});

function resetFilters() {
    for (const card of cards) {
        card.style.display = 'block';
        const tags = card.querySelectorAll('#tags li');
        for (const item of tags) {
            item.classList.remove("active");
        }
    }
}

// theme.oninput = e => {
//     document.firstElementChild.setAttribute('data-theme', e.target.value)
// }

const themeToggleBtn = document.getElementById("theme-toggle");
const sun = "☀";
const moon = "☾"
const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme if not set

document.addEventListener("DOMContentLoaded", () => {

    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === "light") {
        themeToggleBtn.textContent = moon;
    } else {
        themeToggleBtn.textContent = sun;
    }

})




themeToggleBtn.addEventListener("click", (e) => {

    const root = document.firstElementChild;
    const isLight = root.getAttribute("data-theme") === "light";

    root.setAttribute('data-theme', isLight ? "dark" : "light")
    localStorage.setItem("theme", isLight ? "dark" : "light");
    themeToggleBtn.textContent = themeToggleBtn.textContent === moon ? sun : moon;


})













