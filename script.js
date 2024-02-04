function submit(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    document.querySelector("#user-email").innerHTML = email;
    document.querySelector(".container").style.display = "none";
    document.querySelector(".success").style.display = "flex";
}

document.getElementsByClassName("submit-subscribe")[0].addEventListener("click", submit);