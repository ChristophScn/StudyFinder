const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const firstname_profile = document.getElementById('firstname_prof');
const lastname_profile = document.getElementById('lastname_prof');
const study_profile = document.getElementById('study_prof');
const semester_profile = document.getElementById('semester_prof');
const interests_profile = document.getElementById('interests_prof');
const firstname_input = document.getElementById('firstname_mod');
const lastname_input = document.getElementById('lastname_mod');
const study_input = document.getElementById('study_mod');
const semester_input = document.getElementById('semester_mod');
const interests_input = document.getElementById('interests_mod');

var list = document.getElementById("list")
var form = document.getElementById("myForm");
var formDivs = form.getElementsByTagName("div");
var profile = document.getElementById("profile")
var profileDivs = profile.getElementsByTagName("div");


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal)
    })
});

window.onload = function(){
    cleanProfileDivs();
    console.log("here");
    if (supports_html5_storage) {
        loadUserData();
    }
}

form.saveButton.onclick = function(){
    if (supports_html5_storage) {
        saveData();
        loadUserData();
    } else {
        alert("Your browser doesn't support this feature");
    }
}

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active')
}

function cleanProfileDivs() {
    var allInputs = profileDivs;
    var inputsWeActuallyWant = [];
    for (var i = 0 ; i < allInputs.length; i++) {
        if (allInputs[i].id.includes("_prof")) {
            inputsWeActuallyWant.push(allInputs[i]);
        }
    }
    profileDivs = inputsWeActuallyWant;
}

function init(i){
    if(i === 0)    return "Vorname";
    if(i === 1)    return "Nachname";
    if(i === 2)    return "Studiengang";
    if(i === 3)    return "Semester";
    if(i === 4)    return "dies, das";
}

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function saveData() {
    try {
        localStorage["firstname"] = form.firstname.value;
        localStorage["lastname"] = form.lastname.value;
        localStorage["study"] = form.study.value;
        localStorage["semester"] = form.semester.value;
        localStorage["interests"] = form.interests.value;
    } catch (e) {
        alert("Could not save data");
    }
}

function loadUserData() {
    for (i=0; i<formDivs.length; i++){
        key = formDivs[i].id;
        value = localStorage[key];
        input = formDivs[i].getElementsByTagName('input')[0];
        if(input === undefined){
            input = formDivs[i].getElementsByTagName('textarea')[0];
        }
        out = profileDivs[i];
        if (value === 'undefined') {
            value = init(i);
        }
        input.value = value;
        out.innerHTML = value;
    }
}