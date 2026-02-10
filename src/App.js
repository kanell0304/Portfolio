import React from 'react';
import './App.css';
import { projects } from './data/projects';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>이경준 포트폴리오</h1>
        <p>Backend Engineer</p>
      </header>

      <main className="main">
        <section className="intro">
          <h2>About Me</h2>
          <p>
            풀스택 개발 및 AI/ML 경험을 보유한 백엔드 엔지니어입니다.
            FastAPI, React, AWS 기반 서비스 개발 및 배포 경험이 있습니다.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="period">{project.period}</span>
              </div>
              
              <p className="team-role">
                <strong>팀 구성:</strong> {project.team} | <strong>역할:</strong> {project.role}
              </p>
              
              <p className="description">{project.description}</p>
              
              <div className="section">
                <h4>문제</h4>
                <p>{project.problem}</p>
              </div>
              
              <div className="section">
                <h4>해결</h4>
                <p>{project.solution}</p>
              </div>
              
              <div className="section">
                <h4>핵심 성과</h4>
                <p>{project.achievement}</p>
              </div>
              
              <div className="section">
                <h4>기술 스택</h4>
                <ul>
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              
              <div className="section">
                <h4>주요 기능 (프로젝트 전체)</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <h4>담당 기능</h4>
                <ul>
                  {project.myContributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
              
              <div className="section">
                <h4>기술적 도전과 해결</h4>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="challenge">
                    <h5>{challenge.title}</h5>
                    <p><strong>문제:</strong> {challenge.problem}</p>
                    <p><strong>해결:</strong> {challenge.solution}</p>
                    <p><strong>결과:</strong> {challenge.result}</p>
                  </div>
                ))}
              </div>
              
              {project.github && (
                <div className="github-links">
                  {project.github.frontend && (
                    <a href={project.github.frontend} target="_blank" rel="noopener noreferrer" className="github-link">
                      GitHub Repository (Frontend) →
                    </a>
                  )}
                  {project.github.backend && (
                    <a href={project.github.backend} target="_blank" rel="noopener noreferrer" className="github-link">
                      GitHub Repository (Backend) →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 이경준 | kanell0304@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
