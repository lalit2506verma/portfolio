import React from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const ProjectGrid: React.FC = () => {
  const projects: Project[] = [
    {
      id: "CLOUDSHARE-01",
      title: "CloudShare - File Storage & Sharing Platform",
      description:
        "Full-stack cloud storage and file-sharing application enabling users to securely upload, share, and access files from anywhere using authenticated workflows and credit-based usage control.",
      status: "completed",
      statusLabel: "COMPLETED",
      architecture: "REST-Based",
      language: "Java",
      technologies: [
        "SPRING BOOT",
        "SPRING SECURITY",
        "JWT",
        "MONGODB",
        "REACT",
        "RAZORPAY",
      ],
      glowColor: "bg-primary/5 group-hover:bg-primary/10",
      statusColor: "green",
      link: "https://github.com/lalit2506verma/CloudShare",
    },
    {
      id: "CHATAPP-01",
      title: "Real-Time Chat Application",
      description:
        "Room-based real-time chat application allowing users to create, join, and leave chat rooms with low-latency message delivery using WebSocket communication.",
      status: "completed",
      statusLabel: "COMPLETED",
      architecture: "WebSocket",
      language: "Java",
      technologies: ["SPRING BOOT", "WEBSOCKET", "STOMP", "REST API", "REACT"],
      glowColor: "bg-purple-500/5 group-hover:bg-purple-500/10",
      statusColor: "blue",
      link: "https://github.com/lalit2506verma/ChatApp-frontend",
    },
    {
      id: "GSTUTILS-01",
      title: "GSTUtils - GST Data Processing Utility",
      description:
        "Backend utility for processing and transforming GST-related Excel and CSV files into structured formats, enabling automated validation and data consistency checks.",
      status: "working",
      statusLabel: "WORKING",
      architecture: "Backend Utility",
      language: "Python",
      technologies: ["FASTAPI", "PANDAS", "OPENPYXL", "CSV", "REST API"],
      glowColor: "bg-orange-500/5 group-hover:bg-orange-500/10",
      statusColor: "amber",
      link: "https://github.com/lalit2506verma/GSTUtils-server",
    },
    {
      id: "PORTFOLIO-01",
      title: "Personal Portfolio Website",
      description:
        "Developer portfolio website showcasing backend projects, experience, and skills with a clean UI and responsive design.",
      status: "deployed",
      statusLabel: "DEPLOYED",
      architecture: "Frontend",
      language: "TypeScript",
      technologies: ["REACT", "TAILWIND CSS", "FRAMER MOTION"],
      glowColor: "bg-teal-500/5 group-hover:bg-teal-500/10",
      statusColor: "green",
      link: "https://github.com/lalit2506verma/portfolio",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project}/>
        ))}
      </div>
    </>
  )
};

export default ProjectGrid;
