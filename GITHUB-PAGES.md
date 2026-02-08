# GitHub Pages 배포 방법

## 1. GitHub 저장소 만들기

1. https://github.com/new 접속
2. **Repository name**: `yuen` (또는 원하는 이름, 예: `rcasox.github.io`가 아니면 프로젝트 사이트로 `https://사용자명.github.io/yuen` 주소가 됨)
3. Public 선택 후 **Create repository** 클릭

---

## 2. 터미널에서 올리기

프로젝트 폴더(`c:\on`)에서:

```bash
cd c:\on

# Git이 아직 없으면 초기화
git init

# 원격 저장소 연결 (본인 사용자명/저장소명으로 변경)
git remote add origin https://github.com/사용자명/yuen.git

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: YUEN site"

# main 브랜치로 푸시 (처음이면 -u 추가)
git push -u origin main
```

---

## 3. GitHub Pages 켜기

1. GitHub 저장소 페이지에서 **Settings** → 왼쪽 메뉴 **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` (또는 사용 중인 브랜치), 폴더 **/ (root)** 선택
4. **Save** 클릭

몇 분 후 사이트 주소:

- **프로젝트 사이트**: `https://사용자명.github.io/yuen/`
- **사용자 사이트** (저장소 이름이 `사용자명.github.io`인 경우): `https://사용자명.github.io/`

---

## 4. 현재 구조에서 중요한 점

- **루트 `index.html`**은 `css/`, `image/`, `js/`를 사용합니다. → 배포 시 루트에 `index.html`, `css/`, `image/`, `js/`가 있으면 메인 페이지만 정상 동작합니다.
- **네비 링크**(CONCEPT, ONSEN, BAR 등)는 지금 `consept.html`, `onsen.html`처럼 **루트 기준**으로 걸려 있어서, 실제 파일이 `html/` 안에 있으면 **404**가 납니다.

**해결 방법 (둘 중 하나):**

### A) 서브 페이지를 루트로 복사 (권장)

`html/` 안의 파일들을 **저장소 루트**로 옮기고, 각 파일 안의 경로를 루트 기준으로 바꿉니다.

- `consept.html`, `onsen.html`, `bar.html`, `event.html`, `coaster.html`, `location.html`을 `c:\on\` 루트로 복사
- 각 파일에서  
  `../css/style.css` → `css/style.css`  
  `../image/...` → `image/...`  
  `../js/main.js` → `js/main.js`  
  로 수정 후, 다시 `git add .` → `git commit` → `git push`

### B) 네비만 `html/` 경로로 수정

루트 `index.html`의 메뉴 링크를 `html/` 아래로 바꿉니다.

- `consept.html` → `html/consept.html`
- `onsen.html` → `html/onsen.html`
- (나머지도 동일)

이렇게 하면 서브 페이지는 `https://사용자명.github.io/yuen/html/consept.html` 형태로 열립니다.

---

## 5. 올린 뒤 확인

- `https://사용자명.github.io/yuen/` 접속
- F12 → Console에서 404 없는지 확인
- CONCEPT, ONSEN, BAR, EVENT, COASTER, LOCATION 링크가 정상 열리는지 확인

이미 `rcasox.github.io/yuen`으로 배포 중이라면, 위에서 수정한 뒤 같은 저장소에 `git add` → `commit` → `push`만 하면 됩니다.
