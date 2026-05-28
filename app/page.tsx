import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="p-10 border-b border-gray-800">
        <h1 className="text-4xl font-bold">Jane Anyanwu</h1>

        <p className="text-xl mt-2 text-green-400">
          Senior .NET Engineer | DevOps & Cloud Specialist
        </p>

        <p className="mt-4 max-w-2xl text-gray-300">
          I help teams automate deployments, improve production reliability,
          and scale cloud infrastructure using AWS, Kubernetes, Terraform,
          GitHub Actions, and modern DevOps practices.
        </p>

        <div className="mt-6 inline-block bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-xl">
          Available for backend engineering, cloud infrastructure, and DevOps opportunities
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="https://github.com/jayneAnya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded-xl text-black"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jane-imoisi/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-4 py-2 rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="/Jane_Anyanwu_Cv.pdf"
            download
            className="border border-gray-600 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">About</h2>

        <p className="text-gray-300 max-w-3xl">
          Backend engineer with 5+ years of experience building enterprise-grade
          fintech systems. Experienced across the full .NET ecosystem from
          ASP.NET Framework to modern .NET Core and .NET 10. Currently focused
          on DevOps, cloud infrastructure, and automation.
        </p>
      </section>

      {/* Skills */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h3 className="text-green-400 font-semibold">
              DevOps & Cloud
            </h3>

            <ul className="text-gray-300 mt-2 space-y-1">
              <li>AWS (EKS, EC2, IAM)</li>
              <li>Docker, Kubernetes</li>
              <li>Terraform, ArgoCD</li>
              <li>GitHub Actions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-400 font-semibold">
              Backend
            </h3>

            <ul className="text-gray-300 mt-2 space-y-1">
              <li>C#, ASP.NET (Framework & Core)</li>
              <li>.NET Core → .NET 10</li>
              <li>Microservices</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-400 font-semibold">
              Observability
            </h3>

            <ul className="text-gray-300 mt-2 space-y-1">
              <li>Prometheus, Grafana</li>
              <li>Datadog</li>
              <li>Logging & Monitoring</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">

          <div className="p-5 border border-gray-800 rounded-2xl">
            <h3 className="text-green-400 font-semibold">
              CI/CD Pipeline Automation
            </h3>

            <p className="mt-2">
              GitHub Actions, Azure DevOps, Docker-based deployment workflows.
            </p>
          </div>

          <div className="p-5 border border-gray-800 rounded-2xl">
            <h3 className="text-green-400 font-semibold">
              Kubernetes Deployments
            </h3>

            <p className="mt-2">
              Production-grade Kubernetes deployments with GitOps workflows.
            </p>
          </div>

          <div className="p-5 border border-gray-800 rounded-2xl">
            <h3 className="text-green-400 font-semibold">
              AWS Infrastructure
            </h3>

            <p className="mt-2">
              Terraform-managed AWS infrastructure using EKS, IAM, VPCs, and EC2.
            </p>
          </div>

          <div className="p-5 border border-gray-800 rounded-2xl">
            <h3 className="text-green-400 font-semibold">
              Monitoring & Reliability
            </h3>

            <p className="mt-2">
              Prometheus, Grafana, Datadog, logging, observability, and alerts.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="space-y-8">

          {/* Project 1 */}
          <div className="p-6 border border-gray-800 rounded-2xl">

            <img
              src="/projects/architecture.png"
              alt="CI/CD Pipeline"
              className="rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold text-green-400">
              CI/CD Pipeline with Kubernetes
            </h3>

            <p className="text-gray-300 mt-2">
              End-to-end DevOps pipeline using GitHub Actions, Docker,
              AWS ECR, EKS, and ArgoCD. GitOps workflow implemented
              using SED to update Kubernetes manifests automatically,
              triggering ArgoCD sync to deploy to EKS with zero downtime.
            </p>

            {/* Business Impact */}
            <div className="mt-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
              <h4 className="text-green-400 font-semibold">
                Business Impact
              </h4>

              <ul className="text-gray-300 mt-2 text-sm space-y-1">
                <li>• Reduced deployment time by 70%</li>
                <li>• Eliminated manual deployment inconsistencies</li>
                <li>• Improved rollback reliability</li>
                <li>• Enabled automated GitOps-based releases</li>
              </ul>
            </div>

            {/* Challenges Solved */}
            <div className="mt-4">
              <h4 className="text-green-400 font-semibold">
                Challenges Solved
              </h4>

              <ul className="text-gray-300 mt-2 text-sm space-y-1">
                <li>• Prevented deployment drift using GitOps workflows</li>
                <li>• Automated Kubernetes manifest updates</li>
                <li>• Improved deployment consistency across environments</li>
                <li>• Reduced manual deployment overhead</li>
              </ul>
            </div>

            <div className="flex gap-3 mt-4 flex-wrap">

              <a
                href="https://github.com/jayneAnya/aws-three-tier-terraform-deploy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-3 py-1 rounded text-black"
              >
                Code
              </a>

              <a
                href="/projects/architecture.png"
                target="_blank"
                className="border px-3 py-1 rounded"
              >
                Architecture
              </a>

              <a
                href="https://jane-anyanwu.notion.site/End-to-End-DevOps-Pipeline-with-Kubernetes-GitOps-ArgoCD-SED-33981053020e803b91d6efe4bc4556e7"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-3 py-1 rounded"
              >
                Docs
              </a>

            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 border border-gray-800 rounded-2xl">

            <img
              src="/projects/argocd.png"
              alt="Microservices"
              className="rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold text-green-400">
              Microservices Banking System
            </h3>

            <p className="text-gray-300 mt-2">
              Distributed backend system built with .NET, Docker,
              and Redis, simulating high-volume financial transactions.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/jayneAnya/kubernetes-manifest/tree/master/bank-project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-3 py-1 rounded text-black"
              >
                Code
              </a>
            </div>

          </div>

          {/* Project 3 */}
          <div className="p-6 border border-gray-800 rounded-2xl">

            <img
              src="/projects/terraform.png"
              alt="Terraform Infra"
              className="rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold text-green-400">
              AWS Infrastructure with Terraform
            </h3>

            <p className="text-gray-300 mt-2">
              Infrastructure as Code provisioning VPC, EKS, subnets,
              NAT gateways, and load balancers with multi-AZ
              high availability setup.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/jayneAnya/aws-three-tier-terraform-deploy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-3 py-1 rounded text-black"
              >
                Code
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Architecture */}
      <section className="p-10 border-b border-gray-800">

        <h2 className="text-2xl font-semibold text-green-400">
          Architecture
        </h2>

        <img
          src="/projects/architecture.png"
          className="rounded-2xl border border-gray-800 mt-4"
        />

        <p className="text-gray-300 mt-4">
          Production-grade AWS architecture with EKS, Terraform,
          GitOps, and CI/CD pipelines.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">

          <div className="p-4 border border-gray-800 rounded-xl">
            <h3 className="text-green-400 font-semibold">
              CI/CD
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              GitHub Actions automates builds, testing, and deployments.
            </p>
          </div>

          <div className="p-4 border border-gray-800 rounded-xl">
            <h3 className="text-green-400 font-semibold">
              GitOps
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              ArgoCD continuously syncs Kubernetes manifests to EKS.
            </p>
          </div>

          <div className="p-4 border border-gray-800 rounded-xl">
            <h3 className="text-green-400 font-semibold">
              Infrastructure
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              Terraform provisions scalable AWS infrastructure consistently.
            </p>
          </div>

        </div>

      </section>

      {/* Deployment Flow */}
      <section className="p-10 border-b border-gray-800">

        <h2 className="text-2xl font-semibold text-green-400">
          Deployment Flow
        </h2>

        <ul className="text-gray-300 mt-4 space-y-2">
          <li>Code pushed to GitHub</li>
          <li>GitHub Actions builds Docker image</li>
          <li>Image pushed to AWS ECR</li>
          <li>SED updates Kubernetes manifest repository</li>
          <li>ArgoCD detects change and syncs to EKS</li>
          <li>Application deployed with zero downtime</li>
        </ul>

      </section>

      {/* Documentation */}
      <section className="p-10 border-b border-gray-800">

        <h2 className="text-2xl font-semibold text-green-400">
          Technical Documentation
        </h2>

        <p className="text-gray-300 mt-4">
          Detailed breakdown of architecture, CI/CD,
          and GitOps workflow.
        </p>

        <a
          href="https://jane-anyanwu.notion.site/End-to-End-DevOps-Pipeline-with-Kubernetes-GitOps-ArgoCD-SED-33981053020e803b91d6efe4bc4556e7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-4 py-2 rounded-xl text-black mt-4 inline-block"
        >
          System Design & DevOps Breakdown
        </a>

      </section>

      {/* Experience */}
      <section className="p-10 border-b border-gray-800">

        <h2 className="text-2xl font-semibold mb-6">
          Experience
        </h2>

        <div className="space-y-10">

          <div>
            <h3 className="text-green-400 font-semibold">
              First Bank Nigeria
            </h3>

            <p className="text-gray-500 text-sm">
              Backend Engineer | 2024 – Present
            </p>

            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Architected containerized microservices using Docker & Kubernetes</li>
              <li>Built CI/CD pipelines automating deployments</li>
              <li>Implemented monitoring with Datadog</li>
              <li>Developed core banking services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-400 font-semibold">
              Digital Witch NG
            </h3>

            <p className="text-gray-500 text-sm">
              Cloud Infrastructure & Automation Engineer | 2025
            </p>

            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Designed end-to-end CI/CD pipelines using GitHub Actions, Docker, AWS ECR, and EKS</li>
              <li>Provisioned AWS infrastructure using Terraform (EC2, IAM, security groups, EKS)</li>
              <li>Implemented GitOps workflows with ArgoCD for automated Kubernetes deployments</li>
              <li>Configured Prometheus and Grafana dashboards for real-time monitoring</li>
              <li>Automated deployments with Bash scripts, reducing manual setup time by 70%</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-400 font-semibold">
              Stanbic IBTC Bank
            </h3>

            <p className="text-gray-500 text-sm">
              Software Engineer | 2023 – 2024
            </p>

            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Developed containerized microservices with .NET 9, Docker, and OpenShift</li>
              <li>Contributed to CI/CD pipelines in Azure DevOps, reducing manual deployment effort</li>
              <li>Integrated Datadog dashboards for system monitoring and performance tracking</li>
              <li>Built core banking features handling 500K+ daily transactions with high availability</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="p-10">

        <h2 className="text-2xl font-semibold mb-4">
          Contact
        </h2>

        <p className="text-gray-300">
          janeuanyanwu@gmail.com | +2348168761535
        </p>

        <p className="text-gray-400 mt-3">
          Open to DevOps, Kubernetes, CI/CD, AWS,
          and cloud automation opportunities.
        </p>

      </section>

    </div>
  );
}