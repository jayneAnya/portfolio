This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Jenkins CI/CD Pipeline - Portfolio

# Jenkins CI/CD Pipeline - Portfolio

## 1. Project Overview

This project demonstrates the implementation of a Continuous Integration and Continuous Delivery (CI/CD) pipeline using Jenkins.

The project uses my personal portfolio application, built with Next.js, as the application being built and validated.

The Jenkins pipeline automates the process of checking out the source code, installing dependencies, building the application, running lint validation, and simulating deployment.

## 2. Objectives

The objectives of this project are to:

- Understand the principles of Continuous Integration and Continuous Delivery.
- Configure and manage Jenkins.
- Implement Pipeline-as-Code using a Jenkinsfile.
- Integrate Jenkins with GitHub.
- Automate application builds and validation.
- Configure automated pipeline triggers.
- Demonstrate secure Jenkins credential management.
- Troubleshoot pipeline failures.
- Monitor pipeline execution through Jenkins.

## 3. Technology Stack

- Jenkins
- GitHub
- Git
- Node.js 22
- npm
- Next.js
- ESLint
- Jenkins Declarative Pipeline
- Jenkins NodeJS Plugin

## 4. Application

The application used for this project is my personal portfolio website.

GitHub repository:

https://github.com/jayneAnya/portfolio

The application is built with Next.js and uses npm for dependency management.

## 5. Jenkins Environment Setup

Jenkins was installed and configured on a local Linux environment.

The Jenkins NodeJS Plugin was enabled to allow the pipeline to use a specific Node.js version.

Node.js 22 was configured in:

Jenkins → Manage Jenkins → Tools → NodeJS installations

The configured installation is named:

`Node22`

This ensures compatibility with the Next.js version used by the application.

## 6. GitHub Integration

The Jenkins project is configured to retrieve the Jenkinsfile from the GitHub repository.

Repository:

`https://github.com/jayneAnya/portfolio.git`

Branch:

`main`

Jenkinsfile:

`Jenkinsfile`

## 7. Credentials Management

A GitHub credential was configured in Jenkins using the Jenkins Credentials Manager.

The credential is stored securely in Jenkins and is referenced by its credential ID rather than exposing the token in the Jenkinsfile.

Credential ID:

`github-portfolio`

No GitHub tokens or passwords are stored in the source code.

> Note: The repository is publicly accessible, so authentication is not technically required for the repository checkout. The Jenkins credential configuration was included to demonstrate secure credential management within Jenkins.

## 8. Jenkinsfile

The pipeline is defined as code in the `Jenkinsfile` stored in the root of the repository.

The pipeline uses a Declarative Pipeline structure.

### Pipeline structure

```text
Pipeline
├── Build
├── Test
├── Deploy
└── Post Actions


9. Pipeline Stages
Build

The Build stage:

Displays the Node.js and npm versions.
Installs dependencies using npm ci.
Creates a production build using npm run build.

Commands:

node -v
npm -v
npm ci
npm run build
Test

The Test stage runs ESLint:

npm run lint

The pipeline fails if the lint command exits with an error.

Deploy

The Deploy stage simulates deployment:

Deploying portfolio application...
Deployment simulation completed.

This satisfies the project requirement for a deployment or artifact stage without deploying the portfolio to a production environment.

10. Automated Trigger

Jenkins was configured with the Poll SCM trigger.

Schedule:

H/5 * * * *

This causes Jenkins to periodically check the Git repository for changes.

When a new commit is detected, Jenkins automatically starts the pipeline.

11. Post Actions

The Jenkinsfile includes post-build actions:

always reports that pipeline execution completed.
success reports a successful pipeline.
failure reports a failed pipeline.
12. Troubleshooting
Node.js Version Failure

The initial Jenkins build failed because Jenkins was using Node.js 18.19.1.

The application required Node.js 20.9.0 or later.

The error was:

You are using Node.js 18.19.1.
For Next.js, Node.js version ">=20.9.0" is required.
Resolution

The Jenkins NodeJS Plugin was used to configure Node.js 22.

The Jenkinsfile was updated to use the configured installation:

tools {
    nodejs 'Node22'
}

The pipeline was then executed again successfully.

13. Successful Pipeline

The final pipeline successfully completed:

Checkout SCM
      ↓
Tool Install
      ↓
Build
      ↓
Test
      ↓
Deploy
      ↓
Post Actions

All stages completed successfully.

14. Screenshots
Jenkins NodeJS Plugin

Shows the NodeJS plugin enabled in Jenkins.

NodeJS 22 Configuration

Shows the Node22 installation configured in Jenkins.

Jenkins Credentials

Shows the GitHub credential configured securely in Jenkins.

GitHub SCM Configuration

Shows the repository, credentials, branch and Jenkinsfile configuration.

Poll SCM

Shows the automated polling trigger.

Successful Pipeline

Shows all pipeline stages completed successfully.

Console Output

Shows Node.js version, dependency installation, application build, lint validation and successful completion.

15. Conclusion

This project demonstrates a complete Jenkins CI/CD workflow using Pipeline-as-Code.

The implementation automates source retrieval, dependency installation, application building, validation and deployment simulation.

The project also demonstrates Jenkins plugin management, credential management, automated triggers, pipeline monitoring and troubleshooting of environment-related build failures.


---

# PART 17 — Screenshots you should submit

Here's your final checklist:

| # | Screenshot | Required? |
|---|---|---|
| 1 | Jenkins dashboard/job | Useful |
| 2 | NodeJS Plugin enabled | ✅ |
| 3 | Node22 configuration | ✅ |
| 4 | Jenkins Credentials | **✅ Important** |
| 5 | GitHub SCM configuration | ✅ |
| 6 | Poll SCM configuration | **✅ Important** |
| 7 | Successful pipeline stage view | **⭐ Most important** |
| 8 | Successful Console Output | ✅ |
| 9 | Automatic-triggered build | Useful |
| 10 | GitHub repo showing Jenkinsfile | **✅ Important** |

You don't necessarily need to submit **10 separate image files** if your course accepts a smaller number, but these are the pieces of evidence I'd capture.

---

## ⭐ The three screenshots I absolutely would not omit

### 1. Pipeline

Your screenshot already has this:

```text
Checkout SCM     ✓
Tool Install     ✓
Build            ✓
Test             ✓
Deploy           ✓
Post Actions     ✓
2. Credentials

Show:

github-portfolio

but never the actual token.

3. SCM + trigger

Show that Jenkins knows:

GitHub repository
      +
Credential
      +
main
      +
Jenkinsfile
      +
Poll SCM


## Screenshots

### Jenkins NodeJS Plugin

![Jenkins NodeJS Plugin](screenshots/01-nodejs-plugin.png)

### NodeJS 22 Configuration

![NodeJS 22 Configuration](screenshots/02-node22-configuration.png)

### Jenkins Credentials

![Jenkins Credentials](screenshots/03-jenkins-credentials.png)

### GitHub SCM Configuration

![GitHub SCM Configuration](screenshots/04-scm-configuration.png)

### Poll SCM

![Poll SCM](screenshots/05-poll-scm.png)

### Successful Pipeline

![Successful Jenkins Pipeline](screenshots/06-successful-pipeline.png)

### Console Output

![Successful Console Output](screenshots/07-console-output.png)
