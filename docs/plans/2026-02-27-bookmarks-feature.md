# Bookmarks 섹션 추가 구현 플랜

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `index.html`의 JOONHUB 객체에 `bookmarks` 배열을 추가하고, 카테고리별로 링크를 보여주는 섹션 UI를 구현한다.

**Architecture:** 기존 `JOONHUB` JS 객체에 `bookmarks` 배열만 추가 (방법 B). 별도 파일/빌드 없음. 기존 카드 스타일과 일관성 유지.

**Tech Stack:** Vanilla HTML/CSS/JS, Font Awesome 6.4, 기존 CSS 변수 활용

---

### Task 1: JOONHUB 객체에 bookmarks 데이터 추가

**Files:**
- Modify: `index.html:2143` (quickLinks 배열 닫는 `],` 다음 줄에 bookmarks 추가)

**Step 1: `projects:` 배열 바로 앞에 `bookmarks` 배열 삽입**

`index.html` 2143번 줄:
```js
            ],
            projects: [
```
→ 아래로 교체:
```js
            ],
            bookmarks: [
                // === AI 도구 ===
                { category: 'AI 도구', name: 'v0', url: 'https://v0.dev', description: 'Vercel AI UI 생성기', icon: 'fas fa-wand-magic-sparkles' },
                { category: 'AI 도구', name: 'Lovable', url: 'https://lovable.dev', description: 'AI 풀스택 앱 생성기', icon: 'fas fa-heart' },
                { category: 'AI 도구', name: 'Bolt.new', url: 'https://bolt.new', description: 'AI 즉석 앱 빌더', icon: 'fas fa-bolt' },
                { category: 'AI 도구', name: 'Cursor', url: 'https://cursor.sh', description: 'AI 코드 에디터', icon: 'fas fa-terminal' },
                { category: 'AI 도구', name: 'Windsurf', url: 'https://codeium.com/windsurf', description: 'AI IDE by Codeium', icon: 'fas fa-wind' },
                { category: 'AI 도구', name: 'Notion AI', url: 'https://notion.so', description: 'AI 통합 노션', icon: 'fas fa-sticky-note' },
                // === 개발 리소스 ===
                { category: '개발 리소스', name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: '웹 표준 레퍼런스', icon: 'fas fa-book' },
                { category: '개발 리소스', name: 'DevDocs', url: 'https://devdocs.io', description: '통합 API 문서', icon: 'fas fa-file-code' },
                { category: '개발 리소스', name: 'Can I Use', url: 'https://caniuse.com', description: '브라우저 호환성 확인', icon: 'fas fa-check-circle' },
                { category: '개발 리소스', name: 'Bundlephobia', url: 'https://bundlephobia.com', description: 'npm 패키지 용량 분석', icon: 'fas fa-box' },
                { category: '개발 리소스', name: 'Roadmap.sh', url: 'https://roadmap.sh', description: '개발자 로드맵', icon: 'fas fa-map' },
                // === 뉴스·블로그 ===
                { category: '뉴스·블로그', name: 'Hacker News', url: 'https://news.ycombinator.com', description: '테크 뉴스 커뮤니티', icon: 'fab fa-y-combinator' },
                { category: '뉴스·블로그', name: 'dev.to', url: 'https://dev.to', description: '개발자 블로그 플랫폼', icon: 'fab fa-dev' },
                { category: '뉴스·블로그', name: 'The Verge', url: 'https://theverge.com', description: '테크 미디어', icon: 'fas fa-newspaper' },
                { category: '뉴스·블로그', name: 'TechCrunch', url: 'https://techcrunch.com', description: '스타트업·테크 뉴스', icon: 'fas fa-rss' },
                // === 생산성·업무 ===
                { category: '생산성·업무', name: 'Linear', url: 'https://linear.app', description: '이슈 트래커', icon: 'fas fa-list-check' },
                { category: '생산성·업무', name: 'Figma', url: 'https://figma.com', description: 'UI 디자인 툴', icon: 'fab fa-figma' },
                { category: '생산성·업무', name: 'Excalidraw', url: 'https://excalidraw.com', description: '빠른 다이어그램', icon: 'fas fa-pencil' },
                { category: '생산성·업무', name: 'Ray.so', url: 'https://ray.so', description: '코드 스니펫 이미지 생성', icon: 'fas fa-image' },
                // === 커뮤니티 ===
                { category: '커뮤니티', name: 'Reddit r/webdev', url: 'https://reddit.com/r/webdev', description: '웹 개발 커뮤니티', icon: 'fab fa-reddit' },
                { category: '커뮤니티', name: 'Discord — Reactiflux', url: 'https://www.reactiflux.com', description: 'React 개발자 Discord', icon: 'fab fa-discord' },
                { category: '커뮤니티', name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Q&A 커뮤니티', icon: 'fab fa-stack-overflow' },
                // === 기타 ===
                { category: '기타', name: 'Product Hunt', url: 'https://producthunt.com', description: '새 제품 발견', icon: 'fas fa-cat' },
                { category: '기타', name: 'Dribbble', url: 'https://dribbble.com', description: '디자인 인스피레이션', icon: 'fab fa-dribbble' },
            ],
            projects: [
```

**Step 2: 저장 후 브라우저에서 콘솔 에러 없는지 확인**
- `index.html` 열고 DevTools 콘솔 확인
- `console.log(JOONHUB.bookmarks.length)` → 22 이상 출력되어야 함

**Step 3: Commit**
```bash
cd "$HOME/Library/CloudStorage/GoogleDrive-parkjs1362@gmail.com/내 드라이브/code/ai-tools-hub"
git add index.html
git commit -m "feat: JOONHUB 객체에 bookmarks 데이터 배열 추가"
```

---

### Task 2: 북마크 섹션 CSS 추가

**Files:**
- Modify: `index.html` — `<style>` 블록 내부에 추가 (기존 `.news-widget-section` CSS 다음)

**Step 1: 스타일 블록 끝(`</style>`) 바로 앞에 CSS 추가**

```css
        /* ===== Bookmarks Section ===== */
        .bookmarks-section {
            padding: 3rem 0;
        }
        .bookmarks-category {
            margin-bottom: 2rem;
        }
        .bookmarks-category-title {
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--muted);
            margin-bottom: 0.75rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border);
        }
        .bookmarks-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 0.6rem;
        }
        .bookmark-item {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            padding: 0.65rem 0.9rem;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            text-decoration: none;
            color: var(--ink);
            transition: background var(--transition), border-color var(--transition), transform var(--transition);
        }
        .bookmark-item:hover {
            background: var(--surface-soft);
            border-color: var(--brand);
            transform: translateY(-1px);
        }
        .bookmark-item i {
            font-size: 0.9rem;
            color: var(--brand);
            flex-shrink: 0;
            width: 16px;
            text-align: center;
        }
        .bookmark-info {
            display: flex;
            flex-direction: column;
            min-width: 0;
        }
        .bookmark-name {
            font-size: 0.85rem;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .bookmark-desc {
            font-size: 0.72rem;
            color: var(--muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        @media (max-width: 600px) {
            .bookmarks-grid {
                grid-template-columns: 1fr 1fr;
            }
        }
```

**Step 2: 시각적으로 확인 (브라우저 리로드)**

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: 북마크 섹션 CSS 추가"
```

---

### Task 3: HTML 섹션 및 renderBookmarks() 함수 추가

**Files:**
- Modify: `index.html:2082` — news 섹션 닫는 태그 바로 다음
- Modify: `index.html:3117` — DOMContentLoaded 블록 내 renderProjects() 다음

**Step 1: `</section>` (news 섹션 끝, 2082번 줄) 바로 뒤에 HTML 섹션 추가**

```html
    <section id="bookmarks" class="bookmarks-section">
        <div class="container">
            <h2 class="section-title"><i class="fas fa-bookmark"></i> 북마크</h2>
            <div id="bookmarksContainer"></div>
        </div>
    </section>
```

**Step 2: `renderBookmarks()` 함수 추가**

`renderProjects()` 함수 정의 바로 앞 (2307번 줄 앞)에 추가:

```js
        function renderBookmarks() {
            const container = document.getElementById('bookmarksContainer');
            if (!container) return;
            const categories = [...new Set(JOONHUB.bookmarks.map(b => b.category))];
            container.innerHTML = categories.map(cat => {
                const items = JOONHUB.bookmarks.filter(b => b.category === cat);
                const itemsHtml = items.map(b => `
                    <a href="${safeUrl(b.url)}" target="_blank" rel="noopener noreferrer" class="bookmark-item">
                        <i class="${escapeHtml(b.icon)}"></i>
                        <span class="bookmark-info">
                            <span class="bookmark-name">${escapeHtml(b.name)}</span>
                            <span class="bookmark-desc">${escapeHtml(b.description)}</span>
                        </span>
                    </a>`).join('');
                return `<div class="bookmarks-category">
                    <div class="bookmarks-category-title">${escapeHtml(cat)}</div>
                    <div class="bookmarks-grid">${itemsHtml}</div>
                </div>`;
            }).join('');
        }
```

**Step 3: DOMContentLoaded 블록(3114번)에 `renderBookmarks();` 추가**

`renderProjects();` 바로 다음 줄에 추가:
```js
            renderBookmarks();
```

**Step 4: 브라우저에서 확인**
- 북마크 섹션이 뉴스 섹션 아래에 렌더링됨
- 6개 카테고리 그룹 표시
- 각 링크 클릭 시 새 탭 열림

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: 북마크 섹션 HTML 및 renderBookmarks() 함수 추가"
```

---

### Task 4: 네비게이션 및 푸터에 북마크 링크 추가

**Files:**
- Modify: `index.html:1534` — nav 메뉴
- Modify: `index.html:2105` — footer 탐색 링크
- Modify: `index.html:3064` — active nav sections 배열

**Step 1: 상단 nav 메뉴에 북마크 항목 추가**

1534번 줄 근처:
```html
<li><a href="#projects">프로젝트</a></li>
```
→ 다음 줄에 추가:
```html
<li><a href="#bookmarks">북마크</a></li>
```

**Step 2: footer 탐색에 북마크 링크 추가**

2107번 줄:
```html
<li><a href="#news">뉴스</a></li>
```
→ 다음 줄에 추가:
```html
<li><a href="#bookmarks">북마크</a></li>
```

**Step 3: active nav sections 배열에 `bookmarks` 추가**

3064번 줄:
```js
const sections = ['quick-links', 'projects', 'tools', 'news'];
```
→ 교체:
```js
const sections = ['quick-links', 'projects', 'tools', 'news', 'bookmarks'];
```

**Step 4: 브라우저에서 확인**
- 상단 nav에 "북마크" 메뉴 항목 표시
- 클릭 시 북마크 섹션으로 스크롤
- 스크롤 시 active nav 하이라이트 동작

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: 네비게이션 및 푸터에 북마크 링크 추가"
```

---

### Task 5: 최종 검증 및 배포

**Step 1: 전체 기능 확인 체크리스트**
- [ ] 북마크 섹션이 뉴스 섹션 아래 표시
- [ ] 6개 카테고리 모두 표시 (AI 도구, 개발 리소스, 뉴스·블로그, 생산성·업무, 커뮤니티, 기타)
- [ ] 각 링크 클릭 시 새 탭 열림
- [ ] 다크 모드에서 스타일 깨짐 없음
- [ ] 모바일(600px 이하)에서 2열 그리드 표시
- [ ] nav 클릭 시 북마크 섹션으로 스크롤
- [ ] 브라우저 콘솔 에러 없음

**Step 2: 새 링크 추가 방법 확인**

앞으로 링크 추가 시 `bookmarks` 배열에 아래 형식으로 1줄 추가:
```js
{ category: '개발 리소스', name: 'MDN', url: 'https://developer.mozilla.org', description: '웹 표준 레퍼런스', icon: 'fas fa-book' },
```

**Step 3: Push (GitHub Pages 자동 배포)**
```bash
git push origin main
```
→ GitHub Actions → Telegram 알림 수신 확인
