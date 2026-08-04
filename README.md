# 웹 기초 완성, 나만의 포트폴리오 구축

## 배포 URL
<https://innurhap28.github.io/CS.B4-1/>

## 프로젝트 소개
외부 라이브러리 없이 순수 HTML/CSS/JavaScript를 통해 만드는 반응형 포트폴리오 웹사이트

---

## 프로젝트 구조
```
portfolio/
│
├── index.html
├── README.md
│
├── css/
│   ├── style.css          # 전체 스타일
│   ├── responsive.css     # 미디어쿼리
│   └── animations.css     # 애니메이션
│
├── images/
│
├── js/
│   ├── main.js            # 프로그램 시작점
│   ├── api.js             # GitHub API
│   ├── storage.js         # localStorage
│   ├── ui.js              # 화면 렌더링
│   ├── utils.js           # 공통 함수
│   │
│   └── components/
│       ├── navbar.js
│       ├── darkmode.js
│       ├── projects.js
│       ├── contact.js
│       └── scroll.js
│
└── favicon.ico
```

## HTML에서 시맨틱 태그의 필요성
시맨틱 태그 (Semantic Tag) : 태그 자체가 컨텐츠의 의미와 역할을 나타내어, 웹 사이트의 구조를 파악하기 쉽도록 도와주는 목적. 
`<header>`, `<nav>`, `<article>`, `<section>`, `<footer>` 등을 사용하였다. 

### 장점
- 다른 개발자가 코드를 마주했을 때 빠른 구조 파악이 가능하여 가독성이 향상되며 유지보수가 용이
- 화면 판독기, 키보드 탐색 등 보조기술에 대한 유용한 정보와 단서를 제공하여, 웹 접근성이 향상됨
- 검색 엔진이 페이지 구조를 이해하기 쉬워져 SEO (검색 엔진 최적화)에 유리함

## CSS에서 Flexbox/Grid 비교 분석
**Flexbox** : 1차원 레이아웃 시스템, 행 or 열 단위로 요소를 배치. 
주로 한 방향으로 요소를 정렬하는 데에 특화. 컨텐츠 크기에 따라 레이아웃 결정
```css
#contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 700px;
    margin: 0 auto;
}       
```
Contact 폼 내부 요소를 세로 방향으로 정렬하기 위해 Flexbox를 사용하였다. 
> 강점 : 컨텐츠 크기에 따라 요소가 유연하게 배치된다. 
`flex-grow`, `flex-shrink`, `justify-content` 등의 속성으로 간격과 크기를 쉽게 조절할 수 있다. 

**Grid** : 2차원 레이아웃 시스템, 행 and 열을 통해 요소 배치. 
그리드를 정의하고 그 안에 컨텐츠를 배치. 
```css
#project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}       
```
GitHub 프로젝트 목록을 카드 형태의 반응형 레이아웃으로 배치하기 위해 Grid를 사용하였다. 
> 강점 : 행과 열을 동시에 제어할 수 있다. 
`grid-template-areas`, `grid-column`, `grid-row` 등으로 정확한 위치 지정. 

## DOM이란? 
DOM (Document Object Model) : 브라우저가 HTML 문서를 객체 형태의 트리 구조로 변환한 모델. JavaScript는 DOM을 통해 HTML 요소를 선택하고 수정하여 화면을 동적으로 변경할 수 있따. 

웹은 일반적으로 다음과 같은 흐름으로 동작한다. 
> 사용자 이벤트 -> DOM 조작 -> 화면 변화 

### 예시 ) Dark 테마 토글 버튼
### 1. 사용자 이벤트
```js
themeToggle.addEventListener("click", () => {
    // 실행
});
```
사용자가 다크 모드 버튼을 클릭하면 `click` 이벤트가 발생하고, JavaScript가 이를 감지하여 콜백 함수를 실행한다. 

### 2. DOM 조작
```js
if (currentTheme === "dark") {
    document.documentElement.dataset.theme = "light";
    // 생략
} else {
    document.documentElement.dataset.theme = "dark";
    // 생략
}
```
document.documentElement는 HTML 문서의 최상위 요소인 `<html>`을 의미. 
dataset.theme 값을 "light" 또는 "dark"로 변경하면 `<html> data-theme="dark">`와 같은 형태로 속성이 변경되고, JavaScript가 HTML 요소의 속성(DOM)을 수정하게 된다. 

### 3. 화면 변화
``` css
[data-theme="dark"] {
    /* 다크 테마 스타일 */
}
```
DOM에서 `data-theme` 값이 변경되면 해당 CSS가 자동으로 다시 적용되고, 브라우저가 화면을 다시 그리면서 다크 모드로 변경된다.

## ES6 문법
ES6 문법 : 기존 JavaScript의 문법을 개선하여 코드의 가독성과 생산성을 높인 표준. 

특징
- 새로운 변수 타입 (let, const)
    - const : 재선언과 재할당이 불가능한 상수를 선언할 때 사용
    - let : 값의 변경이 필요한 변수에 사용
    - 기존 var은 재선언과 재할당이 가능해, 예기치 않은 동작이 발생할 수 있으므로 사용을 지양하였다. 

- 화살표 함수
```js
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
```
`function`보다 간결하게 함수를 작성할 수 있으며, 콜백 함수를 작성할 때 가독성이 높아진다

## Git Repository 불러오기

```js
export async function fetchRepositories(username) {
    try {   
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error("GitHub API 호출 실패");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
```
GitHub API를 호출하여 저장소 목록을 가져오는 함수이다.
`async` 함수를 사용하여 비동기 함수를 선언하고, `await`를 통해 API 요청이 완료될 때까지 기다린 후 응답 데이터를 반환한다.
또한 `try/catch` 문을 사용하여 네트워크 오류나 API 호출 실패 시 예외를 처리할 수 있도록 구현하였다.

## 반응형 디자인을 Mobile First로 작성하는 이유
Mobile First는 모바일 환경을 기준으로 UI를 설계한 뒤, 화면이 커질수록 기능과 레이아웃을 확장하는 방식

- 핵심 콘텐츠 집중 : 작은 모바일 화면에서는 가장 중요한 내용과 기능만 남기게 되어 서비스의 본질에 집중할 수 있음. 
- 사용자 경험 향상 : 모바일에서 쓰기 편한 레이아웃은 태블릿이나 데스크톱 등 큰 화면에서도 자연스럽게 작동함. 
- 성능 및 코드 최적화 : 모바일 환경의 느린 속도와 작은 용량을 먼저 고려할 시, 불필요한 요소가 줄어들어 로딩 속도가 빨라지고 CSS를 보다 깔끔하게 작성할 수 있음. 

## Bonus. Hero 섹션의 타이핑 효과
Hero 영역에서 터미널을 연상시키는 인터페이스를 구현하였다. 사용자가 클릭하거나 Enter 키를 입력하면 문자열이 한 글자씩 출력되는 타이핑 애니메이션이 실행되며, 이후 소개 문구와 프로젝트 버튼이 순차적으로 나타나도록 구현하였다.

## Bonus. 시스템 Dark 테마 감지
용자가 직접 테마를 선택하지 않은 경우, `prefers-color-scheme` 미디어 쿼리를 이용하여 운영체제의 다크 모드 설정을 감지하도록 구현하였다. 이를 통해 사용자의 시스템 환경에 맞는 테마가 자동으로 적용된다.

## Troubleshooting 
## 다크 모드 적용 시 화면이 잠시 밝아지는 문제(Flash of Incorrect Theme)
초기에는 HTML이 먼저 렌더링되고 JavaScript가 실행되면서 다크 모드가 적용되어, 새로고침 시 밝은 화면이 잠시 보이는 문제가 발생하였다.
이를 해결하기 위해 `index.html`의 `<head>`에서 CSS보다 먼저 테마를 설정하도록 하였다.
```html
    <script>
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.documentElement.dataset.theme = savedTheme;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.dataset.theme = "dark";
        }
    </script>
```
브라우저가 스타일시트를 읽기 전에 `data-theme`를 먼저 설정하도록 하여, 처음부터 올바른 테마가 적용되도록 개선하였다.

## 새로고침 시 화면이 잠시 최상단으로 이동하는 문제
페이지를 아래로 스크롤한 상태에서 새로고침하면 브라우저가 먼저 최상단을 렌더링한 뒤 기존 스크롤 위치로 이동하면서 화면이 순간적으로 흔들리는 문제가 발생하였다. 
```js
const restoreHistory = () => {
    setTimeout(() => {
    }, 0);
}
```
스크롤 위치 복원 로직을 setTimeout(..., 0)으로 감싸 브라우저가 현재 렌더링 작업을 마친 뒤 실행되도록 변경하여 문제를 해결하였다.
다만 setTimeout()이 왜 해결에 영향을 주는지에 대해서는 브라우저의 렌더링 순서와 이벤트 루프(Event Loop)를 추가로 학습할 필요가 있다. 
> 참고 자료 : <https://hyermione.tistory.com/132>