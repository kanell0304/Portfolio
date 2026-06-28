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
        title: "ALB + ECS 환경에서 세션 불일치 문제",
        problem: "실시간 모의면접과 미니게임에서 메모리 기반 세션을 사용하는데, ECS 오토스케일링으로 서버가 여러 대 운영되면서 A 서버에서 생성한 세션을 B 서버에서 인식하지 못해 세션 오류 발생",
        solution: "ALB의 Sticky Session(세션 고정) 기능을 활성화하여 동일 사용자의 모든 요청을 최초 접속한 서버로 지속적으로 라우팅",
        result: "세션 불일치 문제 완전 해결, 실시간 기능이 안정적으로 작동"
      },
      {
        title: "긴 음성 파일 분석 시 처리 시간 과다",
        problem: "Wav2Vec2 모델로 음성 파일을 분석할 때 파일 길이가 길어질수록 분석 시간이 기하급수적으로 증가 (6분 영상: 86초 소요)",
        solution: "음성 파일을 30초 단위 청크로 분할하여 순차 처리 후 평균값 계산. GPU 메모리 명시적 해제로 메모리 효율 개선",
        result: "6분 음성 파일 분석 시간 58% 단축 (86초 → 36초). 긴 파일일수록 개선 효과 증가"
      }
    ],
    
    github: {
      frontend: "https://github.com/kanell0304/IBMxRedHat4_Final_Project_Frontend",
      backend: "https://github.com/kanell0304/IBMxRedHat4_Final_Project_Backend"
    },
    presentation: "https://drive.google.com/file/d/1oou9NBjWXW7vlEIVvpALzmDrVn7_zhMJ/view?usp=sharing",
    demo: "https://youtu.be/8bABU-KcEJE"
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
    id: 4,
    title: "디지털 도우미 - AI 인터넷 뱅킹 안내 서비스",
    period: "2026.06",
    team: "개인 프로젝트",
    role: "풀스택 개발 및 인프라 설계",
    language: "Java",
    isAI: true,
    description: "고령화 사회에서 디지털 기기 사용이 어려운 어르신을 위한 AI 기반 인터넷 뱅킹 안내 서비스. PWA로 스마트폰 홈화면 설치가 가능하며, 자연어로 질문하면 단계별 가이드를 음성(TTS)으로 안내",

    problem: "고령층은 은행 앱마다 UI가 달라 동일한 업무도 앱별로 다시 배워야 하고, 기존 고객센터·챗봇은 어르신 친화적이지 않아 디지털 금융 서비스 접근성이 낮음",

    solution: "OpenAI GPT + Whisper를 활용한 텍스트/음성 입력을 지원하고, 앱+업무 키워드 기반 가이드 캐시 시스템으로 동일 질문 반복 시 API 비용 없이 즉시 응답. Web Speech API TTS로 AI 답변을 자동 읽어줌",

    achievement: "가이드 캐시 시스템으로 반복 질문 시 OpenAI API 호출 0회 달성. Bucket4j Rate Limiting으로 API 비용 방어 구조 설계. Python FastAPI → Java Spring Boot 전면 마이그레이션",

    tech: [
      "Frontend: Vite + React 19, JavaScript, Tailwind CSS 4, Web Speech API (TTS), PWA",
      "Backend: Java 21, Spring Boot 3.3.5, Gradle, Spring Data JPA",
      "Database: PostgreSQL (가이드 캐시, 업체/업무 목록, 유저)",
      "AI: OpenAI API (gpt-5.5, Whisper STT, web_search_preview)",
      "인증: Spring Security + Kakao OAuth2 + JWT (jjwt 0.12.6, 30일 만료)",
      "Rate Limiting: Bucket4j (IP/계정 기반, 시간당 30회·일 100회)",
      "Infrastructure: AWS EC2 + Docker + Nginx, S3 + CloudFront, Route53, GitHub Actions CI/CD"
    ],

    features: [
      "AI 텍스트 채팅: 자연어로 금융 업무 질문 → 단계별 안내 (금융 외 주제 자동 거절)",
      "음성 입력(STT): Whisper API 기반 마이크 음성 → 텍스트 변환 후 AI 답변 생성",
      "음성 출력(TTS): Web Speech API로 AI 답변 자동 낭독, 볼륨 슬라이더 조절",
      "가이드 캐시: 앱+업무 키워드 감지 → DB 캐시 우선 반환 (30일 TTL), 미캐시 시 web_search_preview 검색 후 저장",
      "업체 선택 UI: 앱 미특정 시 금융기관 버튼 목록 자동 표시, 직접 입력 가능",
      "카카오 소셜 로그인: OAuth2 + JWT, 비로그인도 이용 가능",
      "Rate Limiting: 비로그인 IP 기반 / 로그인 계정 기반 요청 수 제한, 초과 시 429 반환",
      "PWA: 스마트폰 홈화면 설치 가능"
    ],

    myContributions: [
      "백엔드 전체 설계 및 구현: Chat/Voice/Vendor/Task API, OpenAiService, GuideService, KeywordDetector",
      "가이드 캐시 시스템: 대화 이력 전체에서 앱+업무 키워드 감지 → DB 캐시 → OpenAI web_search_preview 검색 저장",
      "인증 시스템: Spring Security + Kakao OAuth2 + JWT 발급/검증, OAuth2SuccessHandler 구현",
      "Rate Limiting: Bucket4j IP/계정 기반 이중 구조 설계, RateLimitFilter 구현",
      "프론트엔드 전체: React 컴포넌트, useAuth/useChat/useVoice/useTTS 커스텀 훅, TTS 볼륨 UX",
      "기술 마이그레이션: Python FastAPI → Java Spring Boot, Maven → Gradle, SQLite → PostgreSQL",
      "CI/CD 파이프라인 설계: GitHub Actions 기반 백엔드(EC2 Docker), 프론트(S3/CloudFront) 자동 배포"
    ],

    challenges: [
      {
        title: "gpt-5.5 API 파라미터 변경 대응",
        problem: "gpt-5.5 모델에서 max_tokens → max_completion_tokens 로 파라미터명이 변경되고 temperature 파라미터가 미지원으로 바뀌어 기존 코드에서 API 오류 발생",
        solution: "max_completion_tokens 로 파라미터 수정, temperature 제거. ChatRequest DTO와 OpenAiService 호출부 일괄 변경",
        result: "gpt-5.5 모델 정상 연동, 오류 없이 서비스 동작"
      },
      {
        title: "카카오 OAuth2 토큰 요청 401 오류",
        problem: "Spring Security 기본 OAuth2 클라이언트가 PKCE 방식으로 토큰 요청을 보내는데, 카카오가 이를 지원하지 않아 401 오류 발생",
        solution: "카카오 비즈 앱으로 전환 후 Client Secret을 발급받아 client_secret_post 방식으로 변경. application.properties에 client-authentication-method 명시",
        result: "카카오 OAuth2 로그인 정상 작동, JWT 발급 및 프론트 리다이렉트 완료"
      },
      {
        title: "TTS 볼륨 실시간 변경 불가 문제",
        problem: "SpeechSynthesisUtterance 객체는 생성 시점에 볼륨이 고정되어 재생 중 슬라이더를 조절해도 현재 재생 중인 발화에 즉시 반영되지 않음",
        solution: "재생 중 볼륨 변경 시 마우스 근처에 '다음 텍스트부터 적용됩니다' 툴팁을 표시하는 UX로 사용자 혼란 방지",
        result: "사용자가 볼륨 변경 시점을 명확히 인지, UX 불만 없이 서비스 이용 가능"
      }
    ],

    github: {
      project: "https://github.com/kanell0304/project-with-claude-java"
    },
    demo: null
  },
  {
    id: 3,
    title: "온라인 의류 쇼핑몰 (리팩토링)",
    period: "2025.03 - 2025.04 (원본), 2026.04 (리팩토링)",
    team: "3명",
    role: "DB 설계 및 Backend 전체 개발 + N+1 쿼리 개선",
    language: "Java",
    isAI: false,
    description: "Spring Boot 기반 의류 전문 이커머스 플랫폼. 원본 팀 프로젝트를 기반으로 N+1 쿼리 문제를 개선하기 위한 리팩토링 진행",
    
    problem: "원본 프로젝트에서 루프 내부에서 개별 DB 조회를 반복하는 N+1 쿼리 문제 발견. 예: 장바구니 삭제 시 삭제 대상 수만큼 SELECT 쿼리 발생, 주문 목록 조회 시 주문 수만큼 주문 상품 조회 쿼리 추가 발생",
    
    solution: "IN 절 일괄 조회 및 JOIN FETCH로 불필요한 DB 호출 감소. OrderService, ReviewListService, CartService 등 5가지 비효율 패턴 개선: (1) N+1 쿼리, (2) 이중 조회, (3) 불필요한 엔티티 선조회, (4) 전체 조회 후 루프 탐색, (5) 연관 데이터 분리 조회",
    
    achievement: "주문 목록 20건 조회 시 쿼리 수 21번 → 2번 (90% 감소), 리뷰 이미지 조회 21번 → 1번 (95% 감소), 장바구니 다중 조회 5번 → 1번 (80% 감소). 추가로 Long 객체 비교 버그 및 로직 버그 2건 수정",
    
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
      "마일리지 API: 마일리지 적립, 사용, 조회 기능",
      "[리팩토링] OrderService: 주문 목록 N+1 → IN 절 배치 조회 (21번 → 2번)",
      "[리팩토링] ReviewListService: 리뷰 이미지 N+1 → EntityGraph (21번 → 1번)",
      "[리팩토링] CartService: 루프 내 개별 조회 → IN 절 일괄 조회 (5번 → 1번)",
      "[리팩토링] MemberService: existsByEmail() + findByEmail() 이중 조회 제거"
    ],
    
    challenges: [
      {
        title: "N+1 쿼리 문제 — OrderService 주문 목록 조회",
        problem: "주문 목록을 조회할 때마다 각 주문의 주문상품을 개별로 조회하는 N+1 문제 발생. 페이지 20건 조회 시 총 21번의 쿼리 발생 (Order 1번 + OrderItem 20번)",
        solution: "IN 절을 활용한 배치 조회로 개선. 먼저 주문 목록의 ID를 모아 한 번에 OrderItem을 조회하고, Map으로 그룹화하여 각 주문에 매핑. OrderItemRepository에 findByOrderIds() 메서드 추가",
        result: "페이지 20건 조회 시 쿼리 수 21번 → 2번 (90% 감소). 50건 조회 시 51번 → 2번으로 데이터량이 많을수록 개선 효과 증가"
      },
      {
        title: "N+1 쿼리 문제 — ReviewListService 리뷰 이미지 조회",
        problem: "ReviewListRepository에 @EntityGraph(attributePaths = 'images')가 이미 적용되어 이미지가 함께 로딩됨에도, 서비스 레이어에서 reviewImageRepository.findAllByReviewId()를 루프 안에서 재호출하여 중복 조회 발생",
        solution: "이미 메모리에 로딩된 review.getImages()를 직접 사용하도록 수정. 불필요한 reviewImageRepository 호출 제거",
        result: "페이지 20건 조회 시 쿼리 수 21번 → 1번 (95% 감소). 리뷰 목록 조회 성능 크게 개선"
      }
    ],
    
    github: {
      project: "https://github.com/heungsu89/shop_project",
      refactored: "https://github.com/kanell0304/spring-boot-shop-refactor"
    },
    demo: null
  }
];
