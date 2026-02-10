export const projects = [
  {
    id: 1,
    title: "STEACH - AI 음성 분석 코칭 플랫폼",
    period: "2024.08 - 2024.12",
    team: "4명 (팀장)",
    role: "풀스택 개발 및 인프라 구축",
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
  }
];
