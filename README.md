# Frontend Projects Monorepo with Vite, React, Module Federation, and Zephyr Cloud

This repository contains **two frontend projects** that leverage modern technologies to build scalable and modular applications. Both projects are created with **Vite** and **React**, utilizing **Module Federation** for dynamic module sharing between applications. Additionally, the infrastructure is managed and monitored via **Zephyr Cloud**.

---

## Main Technologies Used

- **Vite**: Ultra-fast frontend build tool.
- **React**: Declarative and efficient UI library.
- **Module Federation**: Enables sharing code between multiple applications at runtime, facilitating microfrontend architecture.
- **Zephyr Cloud**: Platform for deploying, monitoring, and managing cloud applications.

---

## Projects

### 1. Project A (Host)

This project acts as the base application, loading the main page.

- Built with Vite + React.
- Uses Module Federation to load remote modules from other projects.
- Integrated with Zephyr Cloud for continuous deployment and monitoring.

### 2. Project B (Remote)

A microfrontend serving as remote application

- Also built with Vite + React.
- Publishes components and pages via Module Federation to be consumed by Project A.
- Implements isolated features for easier maintenance and scalability.
- Independently deployed and monitored via Zephyr Cloud.

---

## How to Run Locally

Each project can be run individually for development and testing:

```bash
# Run Project B
cd ./remote
npm install
npm run start-mf

# Run Project A
cd ./host
npm install
npm run start-mf

* npm run start-mf builds the project for production and then starts a local server to preview the production build.
```

---

## Module Federation Integration

- Project A acts as the **host** and consumes remote modules exposed by Project B.
- Both projects configure vite to expose/consume components and routes.
- Enables independent deployments and dynamic loading, reducing tight coupling.

* For the integration I use mainly this reference: https://docs.zephyr-cloud.io/recipes/vite-rspack-webpack-mf that teachs how to use properly vite-plugin-zephyr to deploy the aplication with Zephyr.

---

## Deployment and Monitoring with Zephyr Cloud

- For the deploy I used mainly as reference this article https://docs.zephyr-cloud.io/general/create-mf-app on "Using Zephyr" section, the only thing that is necessary to do is the build of the application but in order to actually work you need to have a github account to integrate.

---

## Contact and Contribution

For questions, suggestions, or contributions, feel free to open an issue or a pull request.

---

If you want, I can also help with detailed configuration examples or scripts. Just ask!
