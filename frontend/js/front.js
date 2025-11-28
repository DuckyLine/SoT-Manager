const lang = localStorage.getItem("lang");
let file_lang_name = lang ? lang + '.json' : 'en.json';

let lang_file;
fetch('../lang/' + file_lang_name).then(response => response.json()).then(data => { 
    lang_file = data 

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = lang_file[el.getAttribute("data-i18n")];
    });
})

window.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("lang")) {
        fetch('popup.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('popup_placeholder').innerHTML = data;

                const dialog = document.querySelector('#popup_placeholder dialog');
                if (dialog) {
                    dialog.showModal();
                }
            })
            .catch(err => console.error('Error of loading lang: ', err));
    }

});