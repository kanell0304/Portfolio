export const projects = [
  {
    id: 1,
    title: "STEACH - AI 음성 분석 코칭 플랫폼",
    period: "2025.11 - 2026.01",
    team: "4명 (팀장)",
    role: "풀스택 개발 및 인프라 구축",
    language: "Python",
    isAI: true,
    description: "Wav2Vec2, BERT, OpenAI GPT를 활용하여 사용자의 음성을 종합 분석하고 맞춤형 피드백을 제공하는 AI 기반 음성 코칭 서비스",
    
    problem: "면접이나 발표 준비 시 객관적인 피드백을 받기 어렵고, 말하기 습관을 스스로 파악하기 힘든 문제",
    
    solution: "음성 인식, 자연어 처리, 감정 분석을 통합한 종합 음성 분석 시스템 구축. 말하기 속도, 억양, 감정 상태, 부적절한 표현까지 자동으로 분석하고 AI가 개선 방안을 제시",
    
    achievement: "Wav2Vec2 기반 감정 분류 모델 개발로 84.38% 정확도 달성. 완전 자동화된 CI/CD 파이프라인 구축으로 배포 시간 단축",
    
    tech: [
      "Frontend: React, Vite, Tailwind CSS",
      "Backend: Python, FastAPI, SQLAlchemy",
      "AI/ML: Wav2Vec2, BERT, Librosa, Google STT, OpenAI GPT",
      "Database: MySQL, ChromaDB",
      "Infrastructure: AWS (ECS, ECR, S3, CloudFront, ALB, RDS), Docker, GitHub Actions"
    ],
    
    features: [
      "모의 면접: 실시간 녹음 + Google STT 텍스트 변환 + BERT 부적절 표현 감지",
      "대화 분석: 음성 파일 업로드 + 화자 자동 분류 + 특정 화자 집중 분석",
      "발표 분석: Librosa 음향 특징 분석 + Wav2Vec2 감정 분류 + 종합 피드백",
      "미니게임: 난이도별 발음 정확도 측정 게임",
      "커뮤니티: 게시글/댓글/대댓글 CRUD, 좋아요 기능"
    ],

    myContributions: [
      "발표 분석 서비스: Librosa로 말하기 속도, 억양, 피치 분석 + Wav2Vec2 기반 감정 분류 모델 개발 (정확도 84.38%)",
      "미니게임: Google STT 기반 실시간 발음 정확도 측정 시스템 구현, 난이도/게임 모드 선택 기능",
      "인증 시스템: JWT Access/Refresh Token + Kakao OAuth2 소셜 로그인 + 비밀번호 재설정",
      "커뮤니티: 게시글/댓글/대댓글 CRUD API, 좋아요 기능 구현",
      "CI/CD 파이프라인: GitHub Actions 기반 Frontend(S3/CloudFront), Backend(Docker/ECS) 자동 배포 구축"
    ],
    
    challenges: [
      {
        title: "AI 모델 처리 시 서버 안정성 문제",
        problem: "EC2에서 AI 분석 요청 처리 중 메모리 부족으로 서버 다운 발생",
        solution: "스토리지 및 메모리 확장, Swap 메모리 2GB 추가 설정으로 임시 메모리 활용",
        result: "고부하 AI 분석 요청도 서버 다운 없이 안정적으로 처리"
      },
      {
        title: "ECS 배포 후 분석 실패 응답",
        problem: "충분한 리소스를 부여했음에도 AI 분석 요청 시 실패 응답 발생",
        solution: "ALB 타임아웃 제한(60s)이 원인임을 파악하고 300s로 확장",
        result: "처리 시간이 긴 요청도 정상 처리, 분석 실패 응답 제거"
      }
    ],
    
    github: {
      frontend: "https://github.com/kanell0304/IBMxRedHat4_Final_Project_Frontend",
      backend: "https://github.com/kanell0304/IBMxRedHat4_Final_Project_Backend"
    },
    demo: null
  },
  {
    id: 2,
    title: "온라인 설문조사/투표 플랫폼",
    period: "2025.09 - 2025.11",
    team: "6명 (팀장)",
    role: "Backend 개발",
    language: "Python",
    isAI: false,
    description: "사용자가 설문조사와 투표를 생성, 배포, 분석할 수 있는 웹 기반 플랫폼. 실시간 응답 수집 및 통계 시각화 기능 제공",
    
    problem: "설문조사나 투표를 진행하려면 외부 서비스에 의존해야 하고, 커스터마이징이 제한적이며, 응답 데이터 관리가 불편함",
    
    solution: "직관적인 UI로 설문을 쉽게 생성하고, 실시간으로 응답을 수집하며, 통계를 시각화할 수 있는 자체 플랫폼 개발. JWT 기반 인증으로 사용자별 설문 관리 가능",
    
    achievement: "6인 팀 프로젝트에서 백엔드 API 4개 파트 전담 개발. RESTful API 설계 및 데이터베이스 모델링 경험 축적",
    
    tech: [
      "Frontend: React, Vite, Tailwind CSS, React Router",
      "Backend: Python, FastAPI, SQLAlchemy, Alembic",
      "Database: MySQL",
      "Authentication: JWT (Access/Refresh Token)",
      "Email: Gmail SMTP"
    ],
    
    features: [
      "설문조사 생성/편집: 다양한 질문 유형(객관식, 주관식 등) 지원",
      "응답 수집: 실시간 응답 저장 및 관리",
      "통계 분석: 응답 데이터 집계 및 시각화",
      "사용자 관리: 회원가입, 로그인, 프로필 관리",
      "이메일 발송: 설문 링크 공유 및 알림"
    ],

    myContributions: [
      "응답 API: 설문 응답 제출, 조회, 수정, 삭제 CRUD 기능 구현",
      "통계 API: 설문별 응답 집계, 질문별 통계 데이터 계산 및 제공",
      "이메일 API: Gmail SMTP 연동하여 설문 링크 발송 기능 구현",
      "프로필 이미지 API: 사용자 프로필 이미지 업로드, 저장, 조회 기능 개발"
    ],
    
    challenges: [],
    
    github: {
      project: "https://github.com/kanell0304/online_voting-survey_platform_pj"
    },
    demo: null
  },
  {
    id: 3,
    title: "온라인 의류 쇼핑몰",
    period: "2025.03 - 2025.04",
    team: "3명",
    role: "DB 설계 및 Backend 전체 개발",
    language: "Java",
    isAI: false,
    description: "Spring Boot 기반 의류 전문 이커머스 플랫폼. 상품 관리부터 주문, 결제, 리뷰까지 쇼핑몰의 핵심 기능 구현",
    
    problem: "첫 팀 프로젝트로서 실무에 가까운 이커머스 시스템을 설계하고 구현하는 경험 필요",
    
    solution: "Spring Boot와 JPA를 활용한 RESTful API 서버 구축. JWT 기반 인증, 계층형 아키텍처(Controller-Service-Repository) 적용, MariaDB 데이터베이스 설계",
    
    achievement: "3인 팀 프로젝트에서 DB 설계 및 Backend 전체 담당. Spring Boot 기반 이커머스 시스템 구축 경험",
    
    tech: [
      "Frontend: React, Vite, Redux Toolkit, React Router, Sass",
      "Backend: Java 17, Spring Boot 3.4, Spring Data JPA, Spring Security",
      "Database: MariaDB",
      "Authentication: JWT, Kakao OAuth2",
      "Tools: ModelMapper, Thumbnailator"
    ],
    
    features: [
      "상품 관리: 카테고리별 상품 조회, 상세 정보, 재고 관리",
      "장바구니: 상품 담기, 수량 조절, 선택 삭제",
      "주문/배송: 주문서 작성, 결제, 배송 추적",
      "리뷰 및 평점: 구매 후기 작성, 평점 집계",
      "Q&A: 상품 문의, 답변 관리",
      "마일리지: 적립, 사용, 내역 조회"
    ],

    myContributions: [
      "데이터베이스 설계: ERD 작성, 테이블 설계 (상품, 주문, 회원, 리뷰 등 전체 도메인)",
      "상품 API: 카테고리별 조회, 상세 정보, 재고 관리 기능 구현",
      "장바구니 API: 장바구니 CRUD, 수량 조절 로직 구현",
      "주문/배송 API: 주문서 생성, 주문 내역 조회, 배송 상태 관리",
      "리뷰/평점 API: 리뷰 작성, 조회, 평점 집계 시스템 구현",
      "인증/인가: Spring Security + JWT + Kakao OAuth2 소셜 로그인 구현",
      "마일리지 API: 마일리지 적립, 사용, 조회 기능"
    ],
    
    challenges: [],
    
    github: {
      project: "https://github.com/kanell0304/shop_project"
    },
    demo: null
  }
];
