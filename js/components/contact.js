import { isEmpty, isValidEmail } from "../utils.js";

export function initContact() {
    const form = document.querySelector("#contact-form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    function showError(input, message) {
        input.classList.add("error");
        input.nextElementSibling.textContent = message;        
    }
    function clearError(input) {
        input.classList.remove("error");
        input.nextElementSibling.textContent = "";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;
        if (isEmpty(nameInput.value)) {
            showError(nameInput, "이름을 입력해주세요.");
            isValid = false;
        } else {
            clearError(nameInput);
        }
        if (isEmpty(emailInput.value)) {
            showError(emailInput, "이메일을 입력해주세요.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, "올바른 이메일 형식을 사용하세요.");
            isValid = false;
        } else {
            clearError(emailInput);
        }
        if (isEmpty(messageInput.value)) {
            showError(messageInput, "내용을 입력해주세요.");
            isValid = false;
        } else {
            clearError(messageInput);
        }
        if (isValid) {
            alert("제출이 완료되었습니다.");
            form.reset();
        }
    });
}
