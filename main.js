let input = document.querySelector("input"),
    border = document.querySelector(".container"),
    message = document.querySelector(".message");
input.oninput = () => {
    if (input.value.length == 0) {
        border.style.borderColor = "#fff";
        message.textContent = "";
    } else if (input.value.length < 5) {
        border.style.borderColor = "red";
        message.textContent = "Password Is Weak";
        message.style.color = "red";
    } else if (input.value.length < 10) {
        border.style.borderColor = "orange";
        message.textContent = "Password Is Midium";
        message.style.color = "orange";
    } else {
        border.style.borderColor = "green";
        message.textContent = "Password Is Strong";
        message.style.color = "green";
    };
};