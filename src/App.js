import React, { useRef } from 'react';
import './App.css';
import { projects } from './data/projects';

function App() {
  // 각 프로젝트에 대한 ref 생성
  const projectRefs = useRef([]);

  // 언어별로 프로젝트 그룹화
  const groupedProjects = projects.reduce((acc, project) => {
    const language = project.language;
    if (!acc[language]) {
      acc[language] = [];
    }
    acc[language].push(project);
    return acc;
  }, {});

  // 특정 프로젝트로 스크롤
  const scrollToProject = (projectId) => {
    const element = document.getElementById(`project-${projectId}`);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>이경준 포트폴리오</h1>
        <p>Backend Engineer</p>
      </header>

      {/* 사이드 네비게이션 */}
      <nav className="side-nav">
        <div className="side-nav-title">Projects</div>
        {Object.entries(groupedProjects).map(([language, langProjects]) => (
          <div key={language} className="side-nav-group">
            <div className="side-nav-language">{language}</div>
            <ul className="side-nav-list">
              {langProjects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => scrollToProject(project.id)}
                    className="side-nav-item"
                  >
                    {project.title}
                    {project.isAI && <span className="ai-badge-small">AI+</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

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
          
          {Object.entries(groupedProjects).map(([language, langProjects]) => (
            <div key={language} className="language-section">
              <h3 className="language-header">
                <span className="language-badge">{language}</span>
              </h3>
              
              {langProjects.map((project) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="project-card"
                >
                  <div className="project-header">
                    <h4>
                      {project.title}
                      {project.isAI && <span className="ai-badge">AI+</span>}
                    </h4>
                    <span className="period">{project.period}</span>
                  </div>
                  
                  <p className="team-role">
                    <strong>팀 구성:</strong> {project.team} | <strong>역할:</strong> {project.role}
                  </p>
                  
                  <p className="description">{project.description}</p>
                  
                  <div className="section">
                    <h5>문제</h5>
                    <p>{project.problem}</p>
                  </div>
                  
                  <div className="section">
                    <h5>해결</h5>
                    <p>{project.solution}</p>
                  </div>
                  
                  <div className="section">
                    <h5>핵심 성과</h5>
                    <p>{project.achievement}</p>
                  </div>
                  
                  <div className="section">
                    <h5>기술 스택</h5>
                    <ul>
                      {project.tech.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="section">
                    <h5>주요 기능 (프로젝트 전체)</h5>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="section">
                    <h5>담당 기능</h5>
                    <ul>
                      {project.myContributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {project.challenges && project.challenges.length > 0 && (
                    <div className="section">
                      <h5>기술적 도전과 해결</h5>
                      {project.challenges.map((challenge, idx) => (
                        <div key={idx} className="challenge">
                          <h6>{challenge.title}</h6>
                          <p><strong>문제:</strong> {challenge.problem}</p>
                          <p><strong>해결:</strong> {challenge.solution}</p>
                          <p><strong>결과:</strong> {challenge.result}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
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
                      {project.github.project && (
                        <a href={project.github.project} target="_blank" rel="noopener noreferrer" className="github-link">
                          GitHub Repository →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
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
