# 變更紀錄

本檔案記錄套件的所有重要變更。

## [2.0.0] - 2026-08-19

### 新增

- TypeScript 型別宣告與 source map。
- ESM 與 CommonJS 的套件入口。
- 元件輸出與原生圖片屬性的自動化測試。
- 儲存庫資訊、發佈檔案白名單與 ISC 授權檔。

### 調整

- React 改為 peer dependency，避免在使用端應用程式中出現第二份 React。
- 支援 React 18 與 React 19。
- 以 tsup 與 TypeScript 型別檢查取代舊版 Babel-only 打包流程。
- 將 README 整理為清楚的中文安裝、使用與發佈說明。

### 修正

- 移除舊開發相依鏈中 npm audit 已回報的安全性問題。
