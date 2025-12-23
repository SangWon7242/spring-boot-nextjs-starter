# Spring Boot + Next.js Starter

Spring Boot 백엔드와 Next.js 프론트엔드로 구성된 풀스택 스타터 키트 입니다.

## 📁 프로젝트 구조

```
spring-boot-nextjs-starter/
├── backend/          # Spring Boot 백엔드
├── frontend/         # Next.js 프론트엔드
└── .vscode/          # VS Code 설정
```

---

## 🔧 Backend (Spring Boot)

### 기술 스택

| 항목            | 버전/설정           |
| --------------- | ------------------- |
| **Java**        | 21                  |
| **Spring Boot** | 3.5.9               |
| **빌드 도구**   | Gradle (Kotlin DSL) |
| **패키징**      | JAR                 |

### 의존성 (Dependencies)

#### Core

- `spring-boot-starter-web` - REST API 웹 서버
- `spring-boot-starter-data-jpa` - JPA/Hibernate ORM
- `spring-boot-starter-security` - Spring Security 인증/인가

#### Database

- `h2` (Runtime) - 개발용 인메모리/파일 DB
- `postgresql` (Runtime) - 프로덕션 DB

#### Development

- `lombok` - 보일러플레이트 코드 자동 생성
- `spring-boot-devtools` - 핫 리로드

#### Testing

- `spring-boot-starter-test` - 테스트 프레임워크
- `spring-security-test` - Security 테스트

### 환경 설정 (application.yml)

```yaml
server.port: 8080
spring.profiles.active: dev

# Database (H2 파일 DB)
spring.datasource.url: jdbc:h2:./db_dev;MODE=MySQL
spring.jpa.hibernate.ddl-auto: update

# Custom URLs
custom.site.frontUrl: http://localhost:3000
custom.site.backUrl: http://localhost:8080
```

### 실행 방법

```bash
cd backend
./gradlew bootRun
```

### Docker 빌드

```bash
cd backend
docker build -t backend .
docker run -p 8080:8080 backend
```

> Docker는 **GraalVM JDK 23** 기반으로 빌드됩니다.

---

## 🎨 Frontend (Next.js)

### 기술 스택

| 항목              | 버전   |
| ----------------- | ------ |
| **Next.js**       | 16.1.1 |
| **React**         | 19.2.3 |
| **TypeScript**    | 5.x    |
| **Tailwind CSS**  | 4.x    |
| **패키지 매니저** | pnpm   |

### 의존성 (Dependencies)

#### Runtime

- `next` - React 프레임워크
- `react`, `react-dom` - React 19

#### Development

- `tailwindcss`, `@tailwindcss/postcss` - CSS 프레임워크
- `typescript`, `@types/node`, `@types/react` - TypeScript 지원
- `eslint`, `eslint-config-next` - 코드 린팅
- `babel-plugin-react-compiler` - React Compiler (실험적)

### 주요 설정

#### next.config.ts

```typescript
reactCompiler: true; // React Compiler 활성화
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "paths": { "@/*": ["./src/*"] } // 경로 별칭
  }
}
```

### 환경 변수

`.env.default` 파일을 `.env.local`로 복사 후 설정:

```env
NEXT_PUBLIC_API_BASE_URL="http://localhost:8080"
```

### 실행 방법

```bash
cd frontend
pnpm install
pnpm dev
```

---

## 🚀 전체 프로젝트 실행

### 개발 환경

1. **백엔드 실행** (터미널 1)

   ```bash
   cd backend && ./gradlew bootRun
   ```

2. **프론트엔드 실행** (터미널 2)

   ```bash
   cd frontend && pnpm dev
   ```

3. 브라우저에서 `http://localhost:3000` 접속

### 포트 설정

| 서비스   | 포트 |
| -------- | ---- |
| Frontend | 3000 |
| Backend  | 8080 |

---

## 📝 License

MIT License
