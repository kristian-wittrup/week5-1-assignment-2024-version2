/* const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    console.log("change")
});
 */

document.getElementById('themeToggle').onclick = (e) => {
    const body = document.body;

    // Toggle dark mode class when the body is clicked
    body.classList.toggle('dark-mode');
};