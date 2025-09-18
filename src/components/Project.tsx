import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

const projectData = [
    {
        title: "PDF RAG Chat AI",
        description: "Built an AI PDF Chatbot with PDF RAG app that streams answers via Groq (Llama-3.1-8B) using semantic embeddings (local/OpenAI/HF) + BM25 fallback, PyPDF/pdfminer extraction, and an in-memory index, UI in Streamlit.",
        githubLink: "https://github.com/manoharvallabi/pdf-rag-chat-AI",
        liveLink: "https://interactpdf.streamlit.app/",
        technologies: ["Python", "Streamlit", "Hugging Face", "Groq", "ChromaDB", "LangChain", "Vector DB"]
    },
    {
        title: "AI-Generated Email Reply",
        description: "Full-stack project that generates professional email replies. React frontend, Spring Boot backend using Gemini API, and a Chrome extension that adds an 'AI Reply' button in Gmail.",
        githubLink: "https://github.com/manoharvallabi/AI_Generated_Email_Reply",
        liveLink: undefined,
        technologies: ["React", "Spring Boot", "Gemini API", "Material-UI", "Chrome Extension", "Java"]
    },
    {
        title: "PHP → Python Migration",
        description: "Migrated multiple legacy PHP applications into Python (Flask) as part of college coursework, improving maintainability and aligning with modern backend standards. Focused on 1:1 feature parity while hardening security (auth/session protection, SQLi prevention, secure file handling), converting endpoints to RESTful services, and modularizing business logic with tests and docs to enable future extensibility.",
        githubLink: "https://github.com/manoharvallabi/PHP-to-Python-Migration",
        liveLink: undefined,
        technologies: ["Python", "Flask", "Security", "REST", "Sessions", "SQL", "HTML/CSS", "JavaScript"]
    }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {projectData.map((project, index) => (
                <div key={index} className="project">
                    <div className="project-header">
                        <h2>{project.title}</h2>
                        <div className="project-icons">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-icon">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            )}
                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <p>{project.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {project.technologies.map((tech, techIndex) => (
                            <Chip key={techIndex} className='chip' label={tech}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;