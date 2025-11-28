fetch('navBar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar_placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error of loading navbar: ', err));

fetch('footerBar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerbar_placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error of loading footerbar: ', err));

window.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("popupShown")) {
        console.log("DEBUG: Show popupShown");
        localStorage.setItem("popupShown", Date.now());

        fetch('popup.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('popup_placeholder').innerHTML = data;

                const dialog = document.querySelector('#popup_placeholder dialog');
                if (dialog) {
                    dialog.showModal();
                } else {
                    console.error("Dialog not found in popup.html");
                }
            })
            .catch(err => console.error('Error of loading popup: ', err));
    } else {
        console.log("DEBUG: 'popupShown' item is remove. | create at " + localStorage.getItem("popupShown"));
        localStorage.removeItem("popupShown");
    }
});