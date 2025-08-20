# React Native Social Media

一個使用 [Expo Router](https://expo.github.io/router/docs) 與 [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) 狀態管理的簡易社群動態牆 App 範例。

## 特色

- Expo Router 檔案式路由
- 狀態管理與持久化（Zustand + AsyncStorage）
- 動態串、發文、留言、按讚
- 使用 React Native 轉寫，支援 iOS/Android

## 專案結構

```
.
├── app/                # 路由頁面（Expo Router）
│   ├── index.tsx       # 首頁（動態牆）
│   ├── compose.tsx     # 發文頁
│   └── ...             # 其他頁面
├── src/
│   ├── components/     # 共用元件
│   │   └── ThreadItem.tsx
│   ├── store/          # 狀態管理
│   │   └── threads.ts
│   └── ...             # 其他共用程式碼
├── app.json            # Expo 設定
└── ...
```

## 先決條件

開始之前，請先準備以下環境與工具：
- 在實體裝置上安裝 Expo Go
- 安裝 Node.js（LTS 版本）
- 安裝 VS Code 或任何你慣用的程式碼編輯器／IDE
- 使用 macOS、Linux，並可開啟終端機視窗

## 安裝與啟動

1. **安裝依賴**
    ```sh
    npm install
    ```

2. **啟動開發伺服器**
    ```sh
    npm run start
    ```

3. **開啟手機裝置的相機掃描 QR code 於 Expo Go 中開啟應用**

## 主要技術

- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/docs)
- [React Native](https://reactnative.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [TypeScript](https://www.typescriptlang.org/)

## 注意事項

- 路由頁面請放在 `app/` 目錄下。
- 狀態管理與共用元件請放在 `src/` 目錄下。

## 參考

- [Expo Router 官方文件](https://expo.github.io/router/docs)
- [Zustand 官方文件](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [AsyncStorage 官方文件](https://react-native-async-storage.github.io/async-storage/docs/install/)