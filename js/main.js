// === Chat Box === //
const formWrapper = document.querySelector(".formbold-form-wrapper");
const formActionButton = document.querySelector(".formbold-action-btn");
function chatboxToogleHandler() {
    formWrapper.classList.toggle("active");
    formActionButton.classList.toggle("active");
}
function toggleElement() {

    document.getElementById("form-step-two").style.display = "block";
    document.getElementById("form-step-one").style.display = "none";

}

// === Chat Box === //
