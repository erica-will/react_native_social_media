# 專案概覽
- 專案代號：**VibeThreads**
- 技術棧：Expo（Dev Client/EAS）、TypeScript、expo-router、TanStack Query、Zustand、Zod、React Hook Form、FlashList、MMKV、expo-image-picker、expo-file-system、expo-notifications、SecureStore
- 後端（建議）：Supabase 或 Firebase（可替換為自建 API）
- 版本策略：SemVer；主線 `main` + 開發分支 `develop` + 功能分支 `feat/*`

---

## Labels（先建立）
- `type:feature` `type:chore` `type:bug` `type:doc`
- `area:auth` `area:feed` `area:composer` `area:profile` `area:search` `area:notif` `area:infra` `area:design` `area:testing` `area:perf`
- `priority:P0` `priority:P1` `priority:P2`
- `good first issue` `help wanted`

## Milestones
- **M1（Week 1）**：基礎腳手架、設計系統 1.0、Auth
- **M2（Week 2）**：訊流、發文、互動（讚/回覆）
- **M3（Week 3）**：個人頁、追蹤、站內通知
- **Beta（Week 4）**：搜尋、推播、效能優化、上架準備

## Project Board 欄位
`Backlog` → `Selected` → `In Progress` → `Review` → `Done`

## Issue 模板（.github/ISSUE_TEMPLATE/feature.md）
```md
### 背景

### 要求 / 驗收標準 (AC)
- [ ]

### 子任務
- [ ]

### 設計/文件連結

### 風險

### 估時

### 相關議題
```

---

# 待辦清單（可直接建立為 GitHub Issues）

> 每則議題包含：**Title / Labels / Milestone / Description / AC / Tasks / Output / Est. / Dep.**

## M1：基礎與設計系統、Auth

1. **初始化 Expo + TypeScript 專案**  
   **Labels**: `type:chore` `area:infra` `priority:P0`  
   **Milestone**: M1  
   **Description**: 使用 `npx create-expo-app@latest` 建立專案，加入 TS、eslint、prettier、husky、lint-staged、module aliases。  
   **AC**:  
   - [ ] `yarn ios`/`yarn android` 可啟動  
   - [ ] CI 可執行 `typecheck` `lint`  
   **Tasks**:  
   - [ ] 初始化 CEA  
   - [ ] 設定 `tsconfig.json` 路徑別名（`@/`）  
   - [ ] 加入 ESLint/Prettier 規則與 git hooks  
   **Output**: `README.md`（啟動指引）  
   **Est.**: 0.5d

2. **導入 expo-router 並規劃路由骨架**  
   **Labels**: `type:feature` `area:infra` `priority:P0`  
   **Milestone**: M1  
   **Description**: 建立 tabs：首頁、搜尋、Compose、通知、個人。動態路由 `/thread/[id]`、`/user/[handle]`。  
   **AC**:  
   - [ ] 可在 tab 間切換並保留狀態  
   - [ ] 動態頁可讀取 params 並顯示  
   **Tasks**:  
   - [ ] `app/(tabs)/_layout.tsx`、各頁 scaffold  
   - [ ] `app/thread/[id].tsx`、`app/user/[handle].tsx`  
   **Output**: 路由對照表  
   **Est.**: 0.5d  
   **Dep.**: #1

3. **建立設計 Tokens 與主題系統**  
   **Labels**: `type:feature` `area:design` `priority:P0`  
   **Milestone**: M1  
   **Description**: 建立 `tokens.json`（色彩、字級、間距、圓角、動效時長）與 light/dark theme。  
   **AC**:  
   - [ ] 支援系統深淺色  
   - [ ] Token 以 TS 類型導出  
   **Tasks**:  
   - [ ] `lib/theme/tokens.ts`  
   - [ ] `lib/theme/useTheme.ts`  
   **Output**: `BRAND_GUIDE.md`、`tokens.json`  
   **Est.**: 0.5d

4. **元件庫 v1：Avatar / IconButton / Button / Text / Card / Skeleton**  
   **Labels**: `type:feature` `area:design` `priority:P0`  
   **Milestone**: M1  
   **Description**: 以 Storybook（或 expo-stories）建立可視化案例。  
   **AC**:  
   - [ ] 元件支援可及性（touch target ≥ 44px）  
   - [ ] 提供 loading/skeleton 狀態  
   **Tasks**: 建立 `components/*` 與 stories。  
   **Output**: `components/`、`ACCESSIBILITY.md`  
   **Est.**: 1d  
   **Dep.**: #3

5. **API 層與 Query 客製封裝**  
   **Labels**: `type:feature` `area:infra` `priority:P0`  
   **Milestone**: M1  
   **Description**: 建立 `lib/api`，封裝 baseURL、攔截器、錯誤處理、TanStack Query provider。  
   **AC**:  
   - [ ] `.env` 讀取 `EXPO_PUBLIC_API_BASE_URL`  
   - [ ] 全域錯誤 toast  
   **Tasks**: `lib/api/client.ts`、`lib/api/query.ts`  
   **Output**: `FEED_SPEC.md`（暫留空殼）  
   **Est.**: 0.5d  
   **Dep.**: #1

6. **身分驗證流程（Email/Password 基本版）**  
   **Labels**: `type:feature` `area:auth` `priority:P0`  
   **Milestone**: M1  
   **Description**: 註冊/登入/登出、SecureStore token、AuthGate。  
   **AC**:  
   - [ ] 未登入強制進入 Login  
   - [ ] 登入後能進入 tabs  
   - [ ] App 重啟仍保留 session  
   **Tasks**:  
   - [ ] `useSession()`、`withAuthGate()`  
   - [ ] UI：Login/Register/Forgot  
   **Output**: `AUTH.md`  
   **Est.**: 1d  
   **Dep.**: #5

7. **設定頁（基本檔案編輯）**  
   **Labels**: `type:feature` `area:auth` `priority:P1`  
   **Milestone**: M1  
   **Description**: 編輯暱稱、頭像、簡介、外部連結。  
   **AC**:  
   - [ ] 表單驗證（Zod）  
   - [ ] 修改後可即時反映在個人頁  
   **Tasks**: `app/settings.tsx`、image picker、表單  
   **Output**: `PROFILE_SPEC.md`（初稿）  
   **Est.**: 0.5d  
   **Dep.**: #6

8. **CI：GitHub Actions（lint/typecheck/test/build）**  
   **Labels**: `type:chore` `area:infra` `priority:P1`  
   **Milestone**: M1  
   **AC**:  
   - [ ] PR 需通過 Lint/Typecheck  
   - [ ] 可觸發 EAS build（dry run）  
   **Output**: `.github/workflows/mobile.yml`  
   **Est.**: 0.5d  
   **Dep.**: #1

---

## M2：訊流 + 發文 + 互動

9. **資料模型/契約同步（OpenAPI/ERD）**  
   **Labels**: `type:doc` `area:infra` `priority:P0`  
   **Milestone**: M2  
   **Description**: 定義 User/Thread/Reply/Like/Repost/Follow 結構、分頁游標。  
   **AC**:  
   - [ ] `openapi.yaml` 完成核心端點  
   - [ ] `ERD.png` 完成  
   **Output**: `openapi.yaml`、`ERD.png`、`MODERATION.md`  
   **Est.**: 0.5d  
   **Dep.**: #5

10. **Feed：For You / Following 無限滾動**  
    **Labels**: `type:feature` `area:feed` `priority:P0`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 首屏 Skeleton，滾動加載  
    - [ ] 錯誤/重試、下拉刷新  
    - [ ] FlashList 平滑 60fps  
    **Tasks**: `useFeed(scope)`、`ThreadCard`（簡版）  
    **Output**: `FEED_SPEC.md`（完整）  
    **Est.**: 1d  
    **Dep.**: #9 #4 #5

11. **Composer：文字 + 圖片上傳（單/多張）**  
    **Labels**: `type:feature` `area:composer` `priority:P0`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 選圖預覽、刪除、字數限制  
    - [ ] 上傳取得 URLs 後 `POST /threads`  
    - [ ] 失敗回滾、重試  
    **Tasks**: Zustand `useComposer`、image-picker、file-system、上傳佇列  
    **Output**: 上傳序列圖、`Composer` 規格  
    **Est.**: 1d  
    **Dep.**: #5 #9

12. **互動：Like / Reply / Repost（樂觀更新）**  
    **Labels**: `type:feature` `area:feed` `priority:P0`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 點讚/取消點讚即時反映  
    - [ ] 回覆支援純文字（圖片可後續）  
    - [ ] 轉貼更新計數與列表  
    **Tasks**: mutation hooks、ActionBar  
    **Output**: 互動流程圖  
    **Est.**: 0.75d  
    **Dep.**: #10

13. **Thread 詳情頁**  
    **Labels**: `type:feature` `area:feed` `priority:P1`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 展示主貼＋回覆串  
    - [ ] 支援分享連結/複製/檢舉  
    **Tasks**: `app/thread/[id].tsx`  
    **Output**: 事件追蹤點位  
    **Est.**: 0.5d  
    **Dep.**: #10 #12

14. **錯誤處理與 Toast/Snackbar 系統**  
    **Labels**: `type:feature` `area:infra` `priority:P1`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 全域錯誤攔截並轉為使用者友好的訊息  
    - [ ] 支援 success/info/error 三態  
    **Output**: `COPYWRITING.md`（錯誤文案）  
    **Est.**: 0.25d  
    **Dep.**: #5

15. **快取與離線（草稿、列表 cache）**  
    **Labels**: `type:feature` `area:perf` `priority:P1`  
    **Milestone**: M2  
    **AC**:  
    - [ ] 重新打開 App，草稿仍在  
    - [ ] 無網路可瀏覽已快取的貼文  
    **Tasks**: MMKV/AsyncStorage、Query persister  
    **Output**: `OFFLINE.md`  
    **Est.**: 0.5d  
    **Dep.**: #10 #11

---

## M3：個人頁、關係網、站內通知

16. **個人頁（貼文/回覆/喜歡）**  
    **Labels**: `type:feature` `area:profile` `priority:P0`  
    **Milestone**: M3  
    **AC**:  
    - [ ] 列表分頁與切頁維持位置  
    - [ ] 編輯個人檔案入口  
    **Dep.**: #7 #10  
    **Est.**: 0.75d

17. **追蹤/取消追蹤、粉絲/追蹤中列表**  
    **Labels**: `type:feature` `area:profile` `priority:P0`  
    **Milestone**: M3  
    **AC**:  
    - [ ] Follow/Unfollow 樂觀更新  
    - [ ] 列表支援搜尋/去重  
    **Output**: `PROFILE_SPEC.md`（更新）  
    **Dep.**: #16  
    **Est.**: 0.5d

18. **使用者封鎖/靜音、內容檢舉**  
    **Labels**: `type:feature` `area:profile` `priority:P1`  
    **Milestone**: M3  
    **AC**:  
    - [ ] 封鎖後互相不可見  
    - [ ] 檢舉動線與後端呼叫  
    **Output**: `MODERATION.md`（更新）  
    **Dep.**: #12  
    **Est.**: 0.5d

19. **站內通知中心（Like/Reply/Follow/Mention）**  
    **Labels**: `type:feature` `area:notif` `priority:P0`  
    **Milestone**: M3  
    **AC**:  
    - [ ] 未讀數角標  
    - [ ] 支援批次標記已讀  
    **Output**: `NOTIFICATIONS.md`  
    **Dep.**: #12  
    **Est.**: 0.75d

20. **事件追蹤與分析（基礎）**  
    **Labels**: `type:feature` `area:infra` `priority:P1`  
    **Milestone**: M3  
    **AC**:  
    - [ ] 重要事件上報（發文、互動、追蹤）  
    - [ ] 可導出簡單留存漏斗  
    **Output**: `ANALYTICS_PLAN.md`  
    **Dep.**: #10 #12  
    **Est.**: 0.5d

---

## Beta：搜尋、推播、效能與上架

21. **搜尋（使用者/貼文/標籤）**  
    **Labels**: `type:feature` `area:search` `priority:P0`  
    **Milestone**: Beta  
    **AC**:  
    - [ ] 前綴/模糊查詢，分頁  
    - [ ] 熱門趨勢（假資料可）  
    **Output**: `SEARCH_SPEC.md`  
    **Dep.**: #9 #10  
    **Est.**: 0.75d

22. **推播整合（Expo Notifications / FCM/APNs）**  
    **Labels**: `type:feature` `area:notif` `priority:P0`  
    **Milestone**: Beta  
    **AC**:  
    - [ ] 首次啟動詢問權限  
    - [ ] 收到 like/reply/follow 的推播並導航到對應頁  
    **Output**: `NOTIFICATIONS.md`（更新）  
    **Dep.**: #19  
    **Est.**: 0.75d

23. **效能優化（列表/圖片/啟動）**  
    **Labels**: `type:feature` `area:perf` `priority:P1`  
    **Milestone**: Beta  
    **AC**:  
    - [ ] 首屏 TTI < 2.5s（模擬中階機）  
    - [ ] 長列表掉幀率 < 5%  
    - [ ] 圖片縮圖與預載策略落地  
    **Output**: `PERFORMANCE.md`  
    **Dep.**: #10 #11  
    **Est.**: 1d

24. **品質保障：單元/E2E/視覺回歸**  
    **Labels**: `type:feature` `area:testing` `priority:P1`  
    **Milestone**: Beta  
    **AC**:  
    - [ ] Unit：核心 hook/元件覆蓋率≥60%  
    - [ ] E2E：登入→發文→互動→登出流暢  
    **Output**: `TEST_PLAN.md`、測試腳本  
    **Dep.**: #6 #10 #11  
    **Est.**: 1d

25. **EAS Build/Submit + 商店素材與法務**  
    **Labels**: `type:chore` `area:infra` `priority:P0`  
    **Milestone**: Beta  
    **AC**:  
    - [ ] iOS/Android 可出安裝包  
    - [ ] 完成隱私政策/使用者條款、商店截圖  
    **Output**: `eas.json`、`app.config.ts`、`PRIVACY.md`、`TOS.md`、`STORE_LISTING.md`、`CHANGELOG.md`  
    **Dep.**: #8  
    **Est.**: 1d

---

## 補充議題（可穿插）

26. **國際化 i18n（中/英）** — `type:feature` `area:infra` `P2` — 0.5d  
27. **深色模式微調與動效節奏** — `type:feature` `area:design` `P2` — 0.25d  
28. **Web 支援（可選）** — `type:feature` `area:infra` `P2` — 1d  
29. **影片上傳與播放（可選）** — `type:feature` `area:composer` `P2` — 1d  
30. **安全檢核（Rate limit/濫用防護）** — `type:chore` `area:infra` `P1` — 0.5d

---

## 檔案/文件輸出總表（Cross-Issue）
- `ARCHITECTURE.md` `ROADMAP.md` `README.md` `.env.example`
- `BRAND_GUIDE.md` `ACCESSIBILITY.md` `COPYWRITING.md`
- `openapi.yaml` `ERD.png` `MODERATION.md`
- `FEED_SPEC.md` `PROFILE_SPEC.md` `SEARCH_SPEC.md` `NOTIFICATIONS.md` `OFFLINE.md` `PERFORMANCE.md` `ANALYTICS_PLAN.md` `FEATURE_FLAGS.md`
- `TEST_PLAN.md` `CHANGELOG.md` `PRIVACY.md` `TOS.md` `STORE_LISTING.md`

---

## 匯入 GitHub 的小技巧
- 可用 CSV 匯入（欄位：Title, Body, Labels, Milestone, Assignees）。
- 建議在每個 Issue body 末尾加上：
  - `Estimate:` 0.5d/0.75d/1d  
  - `Dependencies:` #<id>

---

## 下一步建議
1) 先建立 Labels/Milestones/Board。  
2) 依 M1→M2→M3→Beta 批次開 Issue。  
3) 我可以再為你「**輸出 CSV**」來直接匯入 GitHub（附上所有欄位與連結引用），或生成一版 **Expo 專案骨架** 配合這份清單。

