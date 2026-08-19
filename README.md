# random-cat-pic

一個輕量的 React 圖片元件，會透過 [CATAAS](https://cataas.com/) 顯示隨機貓咪圖片。

## 安裝

~~~bash
npm install random-cat-pic
~~~

React 是這個套件的 peer dependency。一般 React 或 Next.js 專案都已經有它，
不需要讓套件再安裝第二份 React。

## 快速開始

~~~tsx
import RandomCatPic from "random-cat-pic";

export function CatCard() {
  return (
    <RandomCatPic
      alt="一隻隨機出現的貓"
      className="cat-photo"
      height={240}
      loading="lazy"
      width={320}
    />
  );
}
~~~

元件會固定使用 https://cataas.com/cat 作為圖片來源，因此每次請求都會取得隨機貓咪。
你可以直接傳入原生 img 屬性來控制大小、樣式、載入方式與事件處理器，也可以透過 ref
存取底層的 HTMLImageElement。

## 屬性

| 屬性 | 型別 | 預設值 | 說明 |
| --- | --- | --- | --- |
| alt | string | Random Cat | 圖片的替代文字，建議依頁面語意自訂。 |
| 其他 img 屬性 | 原生圖片屬性 | 無 | 例如 className、loading、width、height 與事件處理器。 |

為了維持「隨機貓咪」元件的用途，src 不提供覆寫。

## 相容性

- React 18 或 React 19
- 支援 ESM 與 CommonJS
- 內含 TypeScript 型別宣告

## 從 1.x 升級

預設匯入方式維持不變：

~~~tsx
import RandomCatPic from "random-cat-pic";
~~~

2.0 將 React 改為 peer dependency，並將內部打包檔改放在 dist。
請一律從套件根目錄匯入，不要依賴舊版的 lib 路徑。

## 本機開發

~~~bash
npm ci
npm run verify
npm pack --dry-run
~~~

verify 會執行型別檢查、測試與套件打包。執行 npm pack 或 npm publish 前也會自動打包。

## 發佈新版

1. 更新 package.json 的 version 與 CHANGELOG.md。
2. 執行 npm run verify 與 npm pack --dry-run。
3. 以擁有 random-cat-pic 發佈權限的 npm 帳號登入。
4. 執行 npm publish。

## 授權

[ISC](./LICENSE)
