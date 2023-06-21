document.addEventListener('DOMContentLoaded', () => {
    const notetext = document.querySelector('#notebook-text');
    const btnClear = document.querySelector("#clear");
    const btnSave = document.querySelector("#save");

    const localsave = localStorage.getItem("save");
    notetext.value = localsave;

    btnSave.addEventListener('click', () => {
        localStorage.setItem("save", notetext.value);
    });

    btnClear.addEventListener("click", () => {
        localStorage.removeItem("save");
        notetext.value = '';
    });
});