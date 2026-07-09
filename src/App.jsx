import React from 'react';
import './App.css';
import { projects } from './data/projects';
import { profile, techStack, education, training, awards, certifications } from './data/profile';

// 아이콘 컴포넌트
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" stroke="none"/>
    <path d="M22 6l-10 7L2 6"/>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
  </svg>
);

const codeBackgrounds = ['code-bg/vscode.png', 'code-bg/intellij.png', 'code-bg/pycharm.png'];
const CODE_BG_CYCLE_SECONDS = 24;

function App() {
  // 언어별로 프로젝트 그룹화
  const groupedProjects = projects.reduce((acc, project) => {
    const language = project.language;
    if (!acc[language]) {
      acc[language] = [];
    }
    acc[language].push(project);
    return acc;
  }, {});

  // 특정 섹션/프로젝트로 스크롤
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="App">
      <header className="header">
        {codeBackgrounds.map((src, idx) => (
          <div
            key={src}
            className="header-bg-layer"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}${src})`,
              animationDuration: `${CODE_BG_CYCLE_SECONDS}s`,
              animationDelay: `${idx * (CODE_BG_CYCLE_SECONDS / codeBackgrounds.length)}s`
            }}
          />
        ))}
        <div className="header-overlay" />
        <div className="header-content">
          <img
            className="avatar"
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt={`${profile.name} 프로필 사진`}
          />
          <div className="header-text">
            <h1>{profile.name} 포트폴리오</h1>
            <p className="header-role">{profile.role}</p>
            <p className="header-tagline">{profile.tagline}</p>
          </div>
        </div>
      </header>

      {/* 사이드 네비게이션 */}
      <nav className="side-nav">
        <div className="side-nav-group">
          <ul className="side-nav-list">
            <li>
              <button onClick={() => scrollToId('about')} className="side-nav-item">About Me</button>
            </li>
            <li>
              <button onClick={() => scrollToId('tech-stack')} className="side-nav-item">Tech Stack</button>
            </li>
          </ul>
        </div>

        <div className="side-nav-title">Projects</div>
        {Object.entries(groupedProjects).map(([language, langProjects]) => (
          <div key={language} className="side-nav-group">
            <div className="side-nav-language">{language}</div>
            <ul className="side-nav-list">
              {langProjects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => scrollToId(`project-${project.id}`)}
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

        <div className="side-nav-title" style={{ marginTop: '30px' }}>Education & Awards</div>
        <div className="side-nav-group">
          <ul className="side-nav-list">
            <li>
              <button onClick={() => scrollToId('education')} className="side-nav-item">학력 및 교육</button>
            </li>
            <li>
              <button onClick={() => scrollToId('awards')} className="side-nav-item">수상 및 자격증</button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <section className="intro" id="about">
          <h2>About Me</h2>
          {profile.intro.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="principles">
            {profile.principles.map((principle, idx) => (
              <div key={idx} className="principle-card">
                <span className="principle-index">{String(idx + 1).padStart(2, '0')}</span>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-stack" id="tech-stack">
          <h2>Tech Stack</h2>
          <div className="tech-stack-groups">
            {techStack.map((group) => (
              <div key={group.category} className="tech-stack-group">
                <div className="tech-stack-category">{group.category}</div>
                <div className="tech-chips">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="screenshot-gallery">
                      {project.screenshots.map((shot, idx) => (
                        <figure key={idx} className="screenshot-item">
                          <img src={`${import.meta.env.BASE_URL}${shot.src}`} alt={shot.caption} loading="lazy" />
                          <figcaption>{shot.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

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
                      <h5>문제 인식과 해결</h5>
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

                  {(project.github || project.presentation || project.demo) && (
                    <div className="resource-links">
                      {project.github?.frontend && (
                        <a href={project.github.frontend} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <GitHubIcon />
                          <span>GitHub Repository (Frontend)</span>
                        </a>
                      )}
                      {project.github?.backend && (
                        <a href={project.github.backend} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <GitHubIcon />
                          <span>GitHub Repository (Backend)</span>
                        </a>
                      )}
                      {project.github?.project && (
                        <a href={project.github.project} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <GitHubIcon />
                          <span>{project.github.refactored ? 'GitHub Repository (원본 팀 프로젝트)' : 'GitHub Repository'}</span>
                        </a>
                      )}
                      {project.github?.refactored && (
                        <a href={project.github.refactored} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <GitHubIcon />
                          <span>GitHub Repository (리팩토링 버전)</span>
                        </a>
                      )}
                      {project.presentation && (
                        <a href={project.presentation} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <DocumentIcon />
                          <span>발표 자료</span>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="resource-link">
                          <PlayIcon />
                          <span>시연 영상</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* 학력 및 교육 섹션 */}
        <section className="education" id="education">
          <h2>학력 및 교육</h2>

          <h3 className="subsection-title">학력</h3>
          <ul className="timeline">
            {education.map((edu, idx) => (
              <li key={idx} className="timeline-item">
                <span className="timeline-period">{edu.period}</span>
                <div className="timeline-content">
                  <strong>{edu.school}</strong>
                  <span>{edu.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="subsection-title">교육 및 연수</h3>
          <ul className="timeline">
            {training.map((item, idx) => (
              <li key={idx} className="timeline-item">
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-content">
                  <strong>{item.name}</strong>
                  <span>{item.org}{item.hours ? ` · ${item.hours}` : ''}</span>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Awards & Certificates 섹션 */}
        <section className="certificates" id="awards">
          <h2>수상 및 자격증</h2>

          <div className="awards-certs-grid">
            <div>
              <h3 className="subsection-title">수상 경력</h3>
              <ul className="award-list">
                {awards.map((award, idx) => (
                  <li key={idx} className="award-item">
                    <span className="award-period">{award.period}</span>
                    <strong>{award.title}</strong>
                    <span className="award-org">{award.org}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subsection-title">자격증</h3>
              <ul className="award-list">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="award-item">
                    <span className="award-period">{cert.date}</span>
                    <strong>{cert.name}</strong>
                    <span className="award-org">{cert.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="https://drive.google.com/file/d/1gCB3E0RSg_VlADYZCxBtkRzYoy44hqPF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-download-btn">
            <DocumentIcon />
            <span>수료증 및 상장 원본 다운로드</span>
          </a>
        </section>
      </main>

      <footer className="footer" id="contact">
        <p>© 2026 {profile.name}</p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`} className="footer-link">
            <EmailIcon />
            <span>{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">
            <GitHubIcon />
            <span>{profile.github.replace('https://', '')}</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
