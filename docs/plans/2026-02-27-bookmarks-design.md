# Bookmarks 섹션 추가 설계

## 개요

AI Tools Hub (`index.html`)의 `JOONHUB` 객체에 `bookmarks` 배열을 추가하여 다양한 카테고리의 링크를 관리한다.

## 데이터 구조

```js
const JOONHUB = {
  quickLinks: [...],   // 기존
  projects: [...],     // 기존
  aiTools: [...],      // 기존
  bookmarks: [         // 신규
    {
      category: "AI 도구",
      name: "v0",
      url: "https://v0.dev",
      description: "Vercel AI UI 생성기",
      icon: "fa-solid fa-wand-magic-sparkles"
    },
    // ...
  ]
}
```

## 카테고리

- AI 도구
- 개발 리소스
- 뉴스·블로그
- 생산성·업무
- 커뮤니티
- 기타

## UI

- 기존 섹션(AI 도구) 아래 "북마크" 섹션 추가
- 카테고리별 그룹 헤더로 구분
- 각 링크: 아이콘 + 이름 + 설명 + 클릭 시 새 탭 열기
- 기존 카드 스타일과 통일

## 접근 방식

방법 B 채택 — 기존 `index.html` 구조 유지, `JOONHUB` 객체에 `bookmarks` 배열만 추가.
빌드 스텝 없음, 즉시 배포 가능.

## 링크 추가 방법 (미래)

```js
{ category: "개발 리소스", name: "MDN", url: "https://developer.mozilla.org", description: "웹 표준 레퍼런스" }
```
한 줄 추가로 새 링크 관리 가능.
