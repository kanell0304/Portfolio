export const profile = {
  name: "이경준",
  englishName: "Gyeong-Jun Lee",
  role: "Backend Engineer",
  email: "gjlee0957@gmail.com",
  github: "https://github.com/kanell0304",
  tagline: "새로운 기술로 문제를 해결하고, 그 과정에서 시스템과 함께 성장하는 개발자",
  intro: [
    "백엔드를 중심에 두고, 서비스 전체 흐름을 이해하기 위해 프론트엔드까지 직접 구현해본 백엔드 엔지니어입니다. Java(Spring Boot)와 Python(FastAPI)으로 API와 인프라를 설계하는 데 주력하며, React 기반 프론트엔드 개발과 CI/CD, AWS 인프라 구축 경험도 함께 쌓았습니다.",
    "새로운 기술을 학습해 문제를 해결하고, 그 과정에서 시스템과 함께 성장하는 것에 성취감을 느낍니다. 낯선 기술 앞에서도 주저하기보다 직접 부딪혀 익히는 편이며, 팀 안에서는 문제를 먼저 짚고 대화로 풀어가는 방식으로 협업합니다."
  ],
  principles: [
    {
      title: "협업과 소통을 최우선으로",
      description: "온라인 설문조사 플랫폼 팀장을 맡았을 때 일부 팀원과의 소통 문제를 1:1 상담으로 파악하고, 팀 문서에 작업 현황·질의응답·업무 지시 페이지를 추가해 진행 상황을 투명하게 공유하도록 개선했습니다."
    },
    {
      title: "다양한 기술 스택을 하나의 서비스로",
      description: "STEACH 프로젝트에서 Wav2Vec2, BERT, OpenAI 등 여러 AI 모델을 서비스 목적에 맞게 조합해 84.38%의 감정 분류 정확도를 달성했습니다."
    },
    {
      title: "중단 없이 안정적으로 동작하게",
      description: "ECS 오토스케일링 환경에서 발생한 세션 불일치 문제를 ALB Sticky Session으로 해결하는 등, AWS 기반 인프라가 실제 트래픽 아래서도 안정적으로 동작하도록 설계합니다."
    },
    {
      title: "피드백을 빠르게 반영해 성장",
      description: "외부 피드백을 받아들이고 빠르게 반영하는 것을 선호하며, 문제를 그 자체로 받아들이기보다 분석하고 개선해 성장의 기회로 삼으려 합니다."
    }
  ]
};

export const techStack = [
  { category: "Languages", items: ["Java", "Python", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Axios", "HTML", "CSS"] },
  { category: "Backend", items: ["Spring Boot", "Spring Security", "JPA", "FastAPI", "JWT", "OAuth2"] },
  { category: "Database", items: ["MySQL", "MariaDB", "PostgreSQL"] },
  { category: "AI/ML", items: ["PyTorch", "Wav2Vec2", "Whisper", "Google STT", "OpenAI API"] },
  { category: "Infra", items: ["AWS (EC2, ECS, ECR, RDS, S3, CloudFront, ALB, Route53)", "Docker", "GitHub Actions", "CI/CD"] },
  { category: "Tools", items: ["Git/GitHub", "Figma", "IntelliJ", "VSCode", "DBeaver", "Claude Code"] }
];

export const education = [
  {
    period: "2021.07 - 2024.02",
    school: "학점은행제 컴퓨터공학",
    detail: "수료 (학사 학위 취득)"
  },
  {
    period: "2018.03 - 2020.02",
    school: "두원공과대학교 스마트소프트웨어학과",
    detail: "졸업 (학점 81.7/100)"
  }
];

export const training = [
  {
    period: "2026.04 - 2026.07",
    name: "웹퍼블리셔 & UI개발 전문가 과정",
    org: "서울시 x KORFIN(더인)",
    hours: "480시간",
    detail: "FE(React, JavaScript, HTML, CSS), BE(Java, JavaScript), Database(PostgreSQL, DBeaver), Git, Docker, Figma"
  },
  {
    period: "2025.07 - 2026.01",
    name: "[IBM x RedHat] AI Transformation - AX Academy",
    org: "IBM, RedHat",
    hours: "960시간",
    detail: "풀스택(Python, FastAPI, JWT, React), Database(MySQL), PyTorch/STT/Wav2Vec2/Whisper/OpenAI API, CI/CD(GitHub Actions, Docker, AWS)"
  },
  {
    period: "2024.11 - 2025.04",
    name: "UI/UX 스마트콘텐츠 융합 응용SW개발자 양성과정B",
    org: "코리아IT아카데미",
    hours: "910시간",
    detail: "FE(React, JavaScript, HTML, CSS), BE(Java, SpringBoot, JWT, OAuth2), Database(MariaDB, DBeaver), AWS(EC2, S3)"
  },
  {
    period: "2024.11 - 2025.01",
    name: "Python1(기초) / Python2(심화)",
    org: "코리아IT아카데미",
    hours: null,
    detail: "Python 기초 및 심화 과정"
  },
  {
    period: "2024.10 - 2024.11",
    name: "RDBMS(MariaDB)",
    org: "코리아IT아카데미",
    hours: null,
    detail: "관계형 데이터베이스 기초 및 심화 과정"
  },
  {
    period: "2024.09 - 2024.11",
    name: "Java1(기초) / Java2(심화)",
    org: "코리아IT아카데미",
    hours: null,
    detail: "Java 기초 및 심화 과정"
  }
];

export const awards = [
  { period: "2026.01", title: "우수훈련생", org: "IBM, RedHat" },
  { period: "2026.01", title: "프로젝트 우수상", org: "IBM, RedHat" },
  { period: "2025.04", title: "성적 우수상", org: "코리아IT아카데미(신촌)" }
];

export const certifications = [
  { date: "2022.10.04", name: "네트워크관리사 2급", org: "한국정보통신자격협회" },
  { date: "2025.06.12", name: "정보처리기사 필기 합격", org: "한국산업인력공단" }
];
