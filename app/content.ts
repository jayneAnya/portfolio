// All site copy lives here so it is easy to update without touching layout code.

export const profile = {
  name: "Jane Anyanwu",
  role: "Backend Engineer (C# / .NET) with hands-on DevOps",
  location: "Lagos, Nigeria",
  email: "janeuanyanwu@gmail.com",
  github: "https://github.com/jayneAnya",
  linkedin: "https://www.linkedin.com/in/anyanwu-jane",
  cv: "/Jane_Anyanwu_Cv.pdf",
  availability:
    "Open to remote roles worldwide, and to roles in Canada, the UK and Europe.",
};

export const story = [
  "I studied Statistics. It taught me to look for patterns, question numbers that look too good, and check my work twice. Those habits came with me when I moved into software in 2022.",
  "Since then I have spent most of my time inside banks. At Stanbic IBTC I built QR payments, transaction limits and recurring transfers. Today at First Bank I write the C# services behind payments and customer accounts. When this code is wrong, someone's money is wrong, so I write it carefully.",
  "Working on these systems, I kept asking what happens after my code is merged. Who builds it, where does it run, and how do we know it is healthy? So I started learning the other half on my own time. I set up Jenkins on my laptop. I built a full AWS environment with Terraform, ran Kubernetes on EKS, and connected ArgoCD so that a git push becomes a live deployment. In 2025 I completed a hands-on DevOps program to sharpen those skills.",
  "Now I am putting both halves together. SovereignOps is a product I am designing and building alone, for the same banks and fintechs I have worked for.",
];

export type Stage = {
  when: string;
  where: string;
  what: string;
  current?: boolean;
};

export const journey: Stage[] = [
  { when: "2011–2015", where: "BSc Statistics", what: "Learned to work with data and check my reasoning." },
  { when: "Nov 2022", where: "Decagon", what: "Became a software engineer: .NET Core, PostgreSQL, REST APIs." },
  { when: "Mar 2023", where: "Maxfront Technologies", what: "Made slow APIs faster with Redis caching and better queries." },
  { when: "Sep 2023", where: "Stanbic IBTC Bank", what: "Built QR payments, transaction limits and recurring transfers." },
  { when: "Mar 2025", where: "First Bank Nigeria", what: "Payment and account services in C#. Still here." },
  { when: "Jul 2025", where: "Digital Witch NG", what: "DevOps program: AWS, Terraform, EKS, ArgoCD, monitoring." },
  { when: "Now", where: "SovereignOps", what: "Designing and building my own product for banks.", current: true },
];

export const sovereignOps = {
  problem:
    "Banks and fintechs want the speed of Kubernetes, but much of their data and workloads must stay in their own country, and auditors want proof that the rules are followed. Today that proof is often spreadsheets and screenshots.",
  answer:
    "SovereignOps gives a bank one place to run Kubernetes infrastructure it controls and to see its compliance status at any time.",
  parts: [
    {
      name: "Control plane",
      tech: ".NET API",
      detail: "Multi-tenant API. Each bank's data is kept separate from every other bank's.",
    },
    {
      name: "Dashboard",
      tech: "React",
      detail: "Where a bank's team sees its clusters, checks and compliance status.",
    },
    {
      name: "Customer agent",
      tech: "Go",
      detail: "A small agent that runs on the bank's side and reports back to the control plane.",
    },
    {
      name: "Local stack",
      tech: "Docker Compose",
      detail: "The whole system runs on one machine for development and testing.",
    },
  ],
  status:
    "I am building it in planned releases. Releases 1 and 2 are done. The code is private, and I am happy to walk you through it on a call.",
  shows: [
    "I can design a product from the problem down, not only build a ticket.",
    "I can work across C#, Go and React in one system.",
    "I understand what banks need: separation of customer data, control and audit.",
  ],
};

export type Project = {
  title: string;
  summary: string;
  image: string;
  width: number;
  height: number;
  imageAlt: string;
  built: string[];
  learned: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "A production-style AWS environment, written in Terraform",
    summary:
      "One command creates a full environment on AWS: network, Kubernetes cluster, database, DNS and HTTPS. Another command tears it down, so I only pay while I use it.",
    image: "/projects/architecture.png",
    width: 670,
    height: 588,
    imageAlt:
      "Architecture diagram: a VPC across two availability zones with public, private and database subnets, an EKS cluster, RDS MySQL, Route 53, NGINX ingress, Let's Encrypt and Argo CD.",
    built: [
      "Separate Terraform modules for the VPC, EKS, the database and DNS.",
      "A network across two availability zones, with public, private and database subnets and NAT gateways.",
      "An EKS cluster with an auto-scaling node group, and Amazon RDS (MySQL) in private subnets.",
      "NGINX ingress, cert-manager with Let's Encrypt, and Argo CD, all installed by Terraform through Helm.",
      "A GitHub Actions workflow that formats, validates, scans with tfsec, plans and applies, running on a self-hosted runner in Docker.",
    ],
    learned:
      "Splitting infrastructure into small modules makes it far easier to change one piece without breaking another.",
    stack: ["Terraform", "AWS", "EKS", "RDS", "Route 53", "Helm", "GitHub Actions", "tfsec"],
    links: [
      { label: "View the code", href: "https://github.com/jayneAnya/aws-three-tier-terraform-deploy" },
    ],
  },
  {
    title: "A banking app deployed with GitOps",
    summary:
      "A .NET banking API and its frontend running on Kubernetes. Every change is made in Git, and Argo CD keeps the cluster in sync with what Git says.",
    image: "/projects/argocd.png",
    width: 1899,
    height: 949,
    imageAlt:
      "Argo CD screen for the bankapp application showing Healthy and Synced status, with its config map, secret and backend service.",
    built: [
      "Kubernetes manifests for the backend API and frontend: deployments, services, ingress, config map and secret.",
      "A pipeline that builds the Docker image, pushes it to Amazon ECR, then updates the image tag in the manifest repo with sed.",
      "Argo CD watches that repo and deploys each change automatically, with history and one-click rollback.",
    ],
    learned:
      "When Git is the only way to change the cluster, every deployment has an author, a reason and a way back.",
    stack: [".NET", "Docker", "Kubernetes", "Amazon ECR", "Argo CD", "GitHub Actions"],
    links: [
      { label: "View the manifests", href: "https://github.com/jayneAnya/kubernetes-manifest/tree/master/bank-project" },
      {
        label: "Read the write-up",
        href: "https://jane-anyanwu.notion.site/End-to-End-DevOps-Pipeline-with-Kubernetes-GitOps-ArgoCD-SED-33981053020e803b91d6efe4bc4556e7",
      },
    ],
  },
  {
    title: "The pipeline behind this website",
    summary:
      "This site is built and checked by a Jenkins pipeline I set up and run myself. Each new commit is picked up within five minutes.",
    image: "/projects/jenkins.png",
    width: 1833,
    height: 736,
    imageAlt: "Jenkins stage view showing a successful run of the portfolio pipeline.",
    built: [
      "Stages for install, build, lint, Docker image, archive and deploy.",
      "A multi-stage Dockerfile that produces a small image which runs as a non-root user.",
      "Docker Hub login handled with Jenkins credentials, never written in the code.",
      "Each build is archived with a fingerprint, so any version can be traced and restored.",
    ],
    learned:
      "An early build failed because Jenkins used Node 18. Pinning the tool version (Node 22) fixed it for good.",
    stack: ["Jenkins", "Docker", "Next.js", "TypeScript", "Vercel"],
    links: [{ label: "View the code", href: "https://github.com/jayneAnya/portfolio" }],
  },
];

export type Job = {
  company: string;
  place: string;
  title: string;
  dates: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "First Bank Nigeria",
    place: "Lagos",
    title: "Software Developer (Backend)",
    dates: "Mar 2025 – Present",
    points: [
      "Build and maintain C# / .NET services for core banking: payments, account management and transaction workflows.",
      "Update and maintain the Azure DevOps build and release pipelines for the services I work on.",
      "Use Datadog and Application Insights to find and fix production issues.",
      "Work with the platform and DevOps teams when services move between environments.",
    ],
  },
  {
    company: "Stanbic IBTC Bank",
    place: "Lagos",
    title: "Software Engineer",
    dates: "Sep 2023 – Apr 2024",
    points: [
      "Built core banking features in .NET: QR payments, transaction limits and recurring transfers.",
      "Shipped services as containers on OpenShift through Azure DevOps pipelines.",
      "Set up Datadog dashboards to track uptime and performance.",
    ],
  },
  {
    company: "Maxfront Technologies",
    place: "Remote",
    title: "Backend Engineer",
    dates: "Mar 2023 – Sep 2023",
    points: [
      "Made API responses faster on the OGISP and HostComply platforms with Redis caching and async queries.",
      "Found and tuned slow database queries to reduce load.",
      "Helped set up environments and deployment scripts for internal projects.",
    ],
  },
  {
    company: "Decagon Institute",
    place: "Lagos",
    title: "Software Engineer",
    dates: "Nov 2022 – Jun 2023",
    points: [
      "Built backend modules and REST APIs for fintech applications with .NET Core and PostgreSQL.",
      "Wrote build and deployment scripts that made setting up new projects faster.",
    ],
  },
];

export const skills = {
  atWork: [
    "C#",
    ".NET / ASP.NET Core",
    "REST APIs",
    "Microservices",
    "SQL Server",
    "Oracle",
    "PostgreSQL",
    "Redis",
    "Azure DevOps pipelines",
    "OpenShift",
    "Datadog",
    "Application Insights",
    "Git",
  ],
  onMyOwn: [
    "Docker",
    "Kubernetes (EKS)",
    "Terraform",
    "AWS: VPC, EKS, ECR, RDS, IAM, Route 53",
    "Argo CD",
    "Helm",
    "GitHub Actions",
    "Jenkins",
    "Prometheus & Grafana",
    "Linux & Bash",
    "Go",
    "React",
  ],
};

export const credentials = {
  certification: {
    name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    code: "Exam AI-103",
  },
  training: {
    name: "DevOps & Cloud Program",
    org: "Digital Witch NG",
    dates: "Jul 2025 – Dec 2025",
  },
  education: {
    name: "BSc Statistics",
    org: "Michael Okpara University of Agriculture, Abia",
    dates: "2011 – 2015",
  },
  languages: "English (fluent), Igbo (native)",
};
