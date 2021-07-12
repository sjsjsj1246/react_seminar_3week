# 리액트 파트 스터디 자료입니다.

리액트 스터디를 진행하면서 투두리스트를 만들어 봅니다.

## Index

| 주차  | 내용                                    | 진행도 |
| :---: | --------------------------------------- | :----: |
| 3주차 | 프로젝트 시작, SPA, MVC패턴             |        |
| 4주차 | useEffect, Axios(RestAPI 통신), MVP패턴 |        |
| 5주차 | Redux(전역상태관리) Duck패턴            |        |
| 6주차 | 마무리, 배포                            |        |

## 요구사항

| depth1     | depth2        | 내용                                                            | 일정 | 진행도 |
| ---------- | ------------- | --------------------------------------------------------------- | ---- | ------ |
| todo리스트 | todo추가      | 할 일을 적어 todo리스트에 추가한다                              |      |        |
|            | todo삭제      | todo항목에서 삭제 버튼으로 todo를 삭제한다                      |      |        |
|            | todo완료 체크 | todo를 클릭하여 완료 처리한다.                                  |      |        |
|            | todo수정      | todo항목에서 수정 버튼을 눌러 할 일을 수정한다                  |      |        |
| 로그인     |               | id, password를 입력하여 로그인한다                              |      |        |
| 로그아웃   |               | todo리스트에서 로그아웃 버튼을 이용해 로그아웃한다.             |      |        |
| 회원가입   |               | 로그인 페이지에서 회원가입 버튼으로 회원가입 페이지로 이동한다. |      |        |

## API 명세

| 메소드 | URI                | 기능                                    |
| :----: | ------------------ | --------------------------------------- |
|  GET   | /api/todos         | 투두 리스트를 조회합니다.               |
|  GET   | /api/todos/:id     | 투두 아이디를 이용해 하나만 조회합니다. |
|  POST  | /api/todos/:id     | 투두 하나를 등록합니다.                 |
| PATCH  | /api/todos/:id     | 투두 하나를 수정합니다.                 |
| DELETE | /api/todos/:id     | 투두 하나를 지웁니다.                   |
|  POST  | /api/auth/register | 사용자를 등록합니다.                    |
|  POST  | /api/auth/login    | 로그인처리합니다.                       |
|  GET   | /api/auth/check    | 로그인 상태인지 체크합니다.             |
|  POST  | /api/auth/logout   | 로그아웃 처리합니다.                    |
