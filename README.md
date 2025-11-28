# 🚀 spring-boot-apis-ui

Modern **Angular 21** frontend for the Udemy course  
**"Develop Real-Time Spring Boot 3 RESTful Endpoints: CRUD Operations, JWTs, OpenAPI, Swagger, Auth, H2 Embedded DB, MySQL"**  
by *Chad Darby and Eric Roby*

🎓 Course → https://www.udemy.com/course/spring-boot-rest-apis

This project replaces the course’s Swagger UI with a clean, responsive, real-world Angular dashboard built using the **latest Angular 21 best practices**:

- ⚡ Standalone components only  
- 🔁 New `@for` control flow & `inject()`  
- 🧩 Lazy-loaded feature library (`books`)  
- 🎨 Tailwind CSS + centered responsive table with hover effects  
- 🔌 Async pipe (no manual subscriptions)  
- 🗂️ Monorepo structure under `/projects`

---

## ✨ Features (so far)

- 🧭 Dashboard shell with navigation  
- 📚 Lazy-loaded `/books` route  
- 📱 Responsive Tailwind table with hover  
- 🔄 Real-time data from Spring Boot backend  

---

## ⚙️ Quick Start

```bash
git clone https://github.com/tfeydev/spring-boot-apis-ui.git
cd spring-boot-apis-ui
npm install

# Start your Spring Boot backend (default http://localhost:8080)
ng serve dashboard
````

👉 Open `http://localhost:4200` → click **"Books"** → enjoy!

---

## 🛠️ CRUD Roadmap (next steps)

* [ ] ➕ Create Book (reactive form)
* [ ] ✏️ Edit / Delete Book
* [ ] 🪟 Confirmation dialogs
* [ ] 🧱 More entities (Authors, Categories, …)
* [ ] ⚠️ Global error handling & loading states

---

## 🔗 Backend

Backend from the Udemy course → [https://github.com/darbyluv2code/spring-boot-rest-apis](https://github.com/darbyluv2code/spring-boot-rest-apis)

Uses endpoint:
`GET http://localhost:8080/api/books`

---

# 🅰️ SpringBootApisUi

This project was generated using the
[Angular CLI](https://github.com/angular/angular-cli) **version 21.0.0**.

---

## 🖥️ Development server

To start a local development server:

```bash
ng serve
```

After the server is running, open your browser and navigate to `http://localhost:4200/`.
The application will automatically reload whenever you modify any of the source files.

---

## 🏗️ Code scaffolding

To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

---

## 📦 Building

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.
By default, production builds are optimized for performance.

---

## 🧪 Running unit tests

```bash
ng test
```

This command executes unit tests using the [Karma](https://karma-runner.github.io) test runner.

---

## 🧭 Running end-to-end tests

```bash
ng e2e
```

Angular CLI does not include an end-to-end testing framework by default — feel free to choose one that fits your needs.

---

## 📚 Additional Resources

For more detailed documentation on the Angular CLI, visit:
👉 [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

---

## 🎉 Happy coding – PRs & issues welcome!

```
