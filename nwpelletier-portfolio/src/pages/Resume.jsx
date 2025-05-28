import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header Section */}
        <div className="resume-header">
          <h1 className="name-title">Nick Pelletier</h1>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:nickw.pelletier@gmail.com">
                nickw.pelletier@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span>Montréal, QC</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+14386801479">(438) 680-1479</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub:</span>
              <a
                href="https://github.com/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/nwpelletier
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/nwpelletier"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nwpelletier
              </a>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="download-section">
          <a
            className="download-btn"
            href="/npelletier-resume-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="download-icon">⬇</span>
            View Resume PDF
          </a>
        </div>

        {/* Objective Section */}
        <div className="resume-section">
          <h2 className="section-title">Objective</h2>
          <div className="section-content">
            <p>
              Curious and creative developer driven by a love of problem-solving
              and thoughtful design. I focus on web technologies and enjoy
              crafting clean, intuitive experiences. Always learning, I aim to
              build solutions that are both functional and meaningful.
            </p>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="resume-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-content">
            <div className="experience-item">
              <div className="job-header">
                <h3 className="job-title">Software and Web Developer</h3>
                <div className="job-details">
                  <span className="company">CERASP</span>
                  <span className="date-location">
                    01/2024 – present | Montreal, QC
                  </span>
                </div>
              </div>
              <ul className="job-duties">
                <li>
                  Developing a React-based website using Strapi as a headless
                  CMS to allow easy content generation for the user, and
                  lightweight responsive design across devices.
                </li>
                <li>
                  Worked on Unity VR projects, contributing to the development
                  and optimization of interaction simulations.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="job-header">
                <h3 className="job-title">Sound Recording Technician</h3>
                <div className="job-details">
                  <span className="company">McGill University</span>
                  <span className="date-location">
                    01/2020 – 01/2022 | Montreal, QC
                  </span>
                </div>
              </div>
              <ul className="job-duties">
                <li>
                  Assisted in recording and production of high-quality audio for
                  various projects and events.
                </li>
                <li>
                  Operated studio equipment and collaborated with faculty and
                  students to achieve project goals.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="job-header">
                <h3 className="job-title">Production Assistant</h3>
                <div className="job-details">
                  <span className="company">
                    Industrial Light & Magic (ILM)
                  </span>
                  <span className="date-location">
                    08/2016 – 08/2018 | Vancouver, BC
                  </span>
                </div>
              </div>
              <ul className="job-duties">
                <li>
                  Assisted in the production of visual effects for major film
                  projects, handling support tasks in a fast-paced environment.
                </li>
                <li>
                  Gained experience in project coordination and creative
                  collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h2 className="section-title">Skills</h2>
          <div className="section-content">
            <div className="skills-category">
              <h3 className="skill-category-title">Web Development</h3>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skill-category-title">
                Development Tools and Task Management
              </h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Trello</span>
                <span className="skill-tag">Notion</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skill-category-title">Game Development</h3>
              <div className="skills-list">
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">FMOD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="education-item">
              <div className="degree-header">
                <h3 className="degree-title">AEC, Full Stack Development</h3>
                <div className="education-details">
                  <span className="school">John Abbott College</span>
                  <span className="date-location">
                    01/2023 – 01/2024 | Montreal, QC
                  </span>
                </div>
              </div>
            </div>
            <div className="education-item">
              <div className="degree-header">
                <h3 className="degree-title">Master, Sound Recording</h3>
                <div className="education-details">
                  <span className="school">McGill University</span>
                  <span className="date-location">
                    09/2019 – 04/2021 | Montreal, QC
                  </span>
                </div>
              </div>
            </div>
            <div className="education-item">
              <div className="degree-header">
                <h3 className="degree-title">Bachelor, Music</h3>
                <div className="education-details">
                  <span className="school">University of Ottawa</span>
                  <span className="date-location">
                    09/2009 – 04/2013 | Ottawa, ON
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            <div className="project-item">
              <h3 className="project-title">
                Whisper Ads (Google Chrome Extension)
              </h3>
              <ul className="project-details">
                <li>
                  Developed a Chrome plugin to subdue or mute autoplay video/ad
                  volume.
                </li>
                <li>
                  Used JavaScript and Chrome API for seamless extension
                  creation.
                </li>
              </ul>
            </div>
            <div className="project-item">
              <div className="project-header">
                <h3 className="project-title">
                  Procedural Map Generator (Unity)
                </h3>
                <span className="project-status">Ongoing Personal Project</span>
              </div>
              <ul className="project-details">
                <li>
                  Built a random map generation system for games using Kruskal's
                  algorithm to ensure fully connected, programmed in C#.
                </li>
                <li>
                  Designed for modular 3D environments with room-based
                  structures, supporting replayability and dynamic level design.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
