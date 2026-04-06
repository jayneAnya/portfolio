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
          I build scalable backend systems and automate infrastructure using
          modern DevOps practices.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/jayneAnya" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-4 py-2 rounded-xl text-black">GitHub</a>
          <a href="https://www.linkedin.com/in/jane-imoisi/" target="_blank" rel="noopener noreferrer" className="border border-gray-600 px-4 py-2 rounded-xl">LinkedIn</a>
          <a href="/Jane_Anyanwu_Cv.pdf" download className="border border-gray-600 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition">Download CV</a>
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
            <h3 className="text-green-400 font-semibold">DevOps & Cloud</h3>
            <ul className="text-gray-300 mt-2 space-y-1">
              <li>AWS (EKS, EC2, IAM)</li>
              <li>Docker, Kubernetes</li>
              <li>Terraform, ArgoCD</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold">Backend</h3>
            <ul className="text-gray-300 mt-2 space-y-1">
              <li>C#, ASP.NET (Framework & Core)</li>
              <li>.NET Core → .NET 10</li>
              <li>Microservices</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-semibold">Observability</h3>
            <ul className="text-gray-300 mt-2 space-y-1">
              <li>Prometheus, Grafana</li>
              <li>Datadog</li>
              <li>Logging & Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-8">

          {/* Project 1 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <img src="/projects/architecture.png" alt="CI/CD Pipeline" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-green-400">CI/CD Pipeline with Kubernetes</h3>
            <p className="text-gray-300 mt-2">
              End-to-end DevOps pipeline using GitHub Actions, Docker, AWS ECR, EKS, and ArgoCD.
              GitOps workflow implemented using SED to update Kubernetes manifests automatically,
              triggering ArgoCD sync to deploy to EKS with zero downtime.
            </p>
            <ul className="text-gray-400 mt-2 text-sm">
              <li>- Reduced deployment time by 70%</li>
              <li>- Enabled automated and consistent deployments</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/jayneAnya/aws-three-tier-terraform-deploy" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-3 py-1 rounded text-black">Code</a>
              <a href="/projects/architecture.png" target="_blank" className="border px-3 py-1 rounded">Architecture</a>
              <a href="https://jane-anyanwu.notion.site/End-to-End-DevOps-Pipeline-with-Kubernetes-GitOps-ArgoCD-SED-33981053020e803b91d6efe4bc4556e7" target="_blank" rel="noopener noreferrer" className="border px-3 py-1 rounded">Docs</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <img src="/projects/argocd.png" alt="Microservices" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-green-400">Microservices Banking System</h3>
            <p className="text-gray-300 mt-2">
              Distributed backend system built with .NET, Docker, and Redis,
              simulating high-volume financial transactions.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/jayneAnya/kubernetes-manifest/tree/master/bank-project" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-3 py-1 rounded text-black">Code</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <img src="/projects/terraform.png" alt="Terraform Infra" className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-green-400">AWS Infrastructure with Terraform</h3>
            <p className="text-gray-300 mt-2">
              Infrastructure as Code provisioning VPC, EKS, subnets, NAT gateways,
              and load balancers with multi-AZ high availability setup.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/jayneAnya/aws-three-tier-terraform-deploy" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-3 py-1 rounded text-black">Code</a>
            </div>
          </div>

        </div>
      </section>

      {/* Architecture */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold text-green-400">Architecture</h2>
        <img src="/projects/architecture.png" className="rounded-2xl border border-gray-800 mt-4" />
        <p className="text-gray-300 mt-4">
          Production-grade AWS architecture with EKS, Terraform, GitOps, and CI/CD pipelines.
        </p>
      </section>

      {/* Deployment Flow */}
      <section className="p-10 border-b border-gray-800">
        <h2 className="text-2xl font-semibold text-green-400">Deployment Flow</h2>
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
        <h2 className="text-2xl font-semibold text-green-400">Technical Documentation</h2>
        <p className="text-gray-300 mt-4">
          Detailed breakdown of architecture, CI/CD, and GitOps workflow.
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
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-10">

          <div>
            <h3 className="text-green-400 font-semibold">First Bank Nigeria</h3>
            <p className="text-gray-500 text-sm">Backend Engineer | 2024 – Present</p>
            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Architected containerized microservices using Docker & Kubernetes</li>
              <li>Built CI/CD pipelines automating deployments</li>
              <li>Implemented monitoring with Datadog</li>
              <li>Developed core banking services</li>
            </ul>
          </div>
           {/* Digital Witch */}
          <div>
            <h3 className="text-green-400 font-semibold">Digital Witch NG</h3>
            <p className="text-gray-500 text-sm">Cloud Infrastructure & Automation Engineer | 2025</p>
            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Designed end-to-end CI/CD pipelines using GitHub Actions, Docker, AWS ECR, and EKS</li>
              <li>Provisioned AWS infrastructure using Terraform (EC2, IAM, security groups, EKS)</li>
              <li>Implemented GitOps workflows with ArgoCD for automated Kubernetes deployments</li>
              <li>Configured Prometheus and Grafana dashboards for real-time monitoring</li>
              <li>Automated deployments with Bash scripts, reducing manual setup time by 70%</li>
            </ul>
          </div>

          {/* Stanbic */}
          <div>
            <h3 className="text-green-400 font-semibold">Stanbic IBTC Bank</h3>
            <p className="text-gray-500 text-sm">Software Engineer | 2023 – 2024</p>
            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Developed containerized microservices with .NET 9, Docker, and OpenShift</li>
              <li>Contributed to CI/CD pipelines in Azure DevOps, reducing manual deployment effort</li>
              <li>Integrated Datadog dashboards for system monitoring and performance tracking</li>
              <li>Built core banking features handling 500K+ daily transactions with high availability</li>
            </ul>
          </div>

          {/* Maxfront */}
          <div>
            <h3 className="text-green-400 font-semibold">Maxfront Technologies</h3>
            <p className="text-gray-500 text-sm">Backend Engineer | 2023</p>
            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Improved API performance by 35% using Redis caching and async optimizations</li>
              <li>Performed database tuning and query optimization reducing load by 25%</li>
              <li>Supported deployment automation and environment setup for internal systems</li>
            </ul>
          </div>

          {/* Decagon */}
          <div>
            <h3 className="text-green-400 font-semibold">Decagon Institute</h3>
            <p className="text-gray-500 text-sm">Software Engineer | 2022 – 2023</p>
            <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
              <li>Automated developer workflows reducing project setup time by 50%</li>
              <li>Built backend services with .NET Core and PostgreSQL using RESTful APIs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">janeuanyanwu@gmail.com | +2348168761535</p>
      </section>
    </div>
  );
}
