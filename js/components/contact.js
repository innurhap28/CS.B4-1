import { isEmpty, isValidEmail } from "../utils.js";

export function initContact() {
    const form = document.querySelector("#contact-form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (isEmpty(nameInput.value)) {
            alert("이름을 입력하세요.");
            return;
        }
        if (!isValidEmail(emailInput.value)) {
            alert("올바른 이메일 형식을 입력하세요.");
            return;
        }
        alert("전송되었습니다.");
        form.reset();
    })
}