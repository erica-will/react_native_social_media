react_native_social_media/
├─ app/
│ ├─ _layout.tsx
│ ├─ index.tsx # Feed
│ ├─ compose.tsx # 發文
│ ├─ [id].tsx # Thread 詳情 + 回覆
│ ├─ profile.tsx # 個人頁
│ └─ auth/
│ └─ sign-in.tsx # 假登入
├─ src/
│ ├─ components/
│ │ ├─ Composer.tsx
│ │ ├─ ThreadItem.tsx
│ │ └─ Avatar.tsx
│ ├─ store/
│ │ └─ threads.ts
│ ├─ hooks/
│ │ └─ useAuth.ts
│ ├─ services/
│ │ └─ storage.ts
│ ├─ utils/
│ │ └─ time.ts
│ └─ theme.ts
├─ app.d.ts
├─ babel.config.js
├─ package.json
└─ README.md