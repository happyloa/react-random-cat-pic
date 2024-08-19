![](https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)

# Random Cat Pic

`random-cat-pic` 是一個簡單的 React 元件，用於顯示來自 [Cataas](https://cataas.com/) 的隨機貓咪照片。這個元件非常適合用於 Next.js 和其他 React 專案中。

## 安裝

你可以使用 npm 安裝這個套件：

```bash
npm install random-cat-pic
```

或者使用 Yarn：

```bash
yarn add random-cat-pic
```

## 使用方法

在你的 React 或 Next.js 項目中引入 `RandomCatPic` 元件並使用：

```JavaScript
import React from 'react';
import RandomCatPic from 'random-cat-pic';

const HomePage = () => {
  return (
    <div>
      <h1>歡迎來到我的網站！</h1>
      <RandomCatPic />
    </div>
  );
};

export default HomePage;
```

這樣你就可以在你的網頁上顯示一張隨機的貓照片。

## 元件屬性

`RandomCatPic` 元件目前沒有接受任何屬性。未來版本可能會增加更多自訂屬性和功能。

## 開發

如果你想對此元件進行開發或修改，你可以複製這個儲存庫並在本地進行開發：

```bash
git clone https://github.com/your-repository/random-cat-pic.git
cd random-cat-pic
npm install
```

運行以下指令來打包你的更改：

```bash
npm run build
```

## 發佈

確保你已經打包好你的元件並測試無誤後，你可以將你的更改推送到 npm：

```bash
npm publish
```

## 貢獻

歡迎提交問題（issues）或拉取請求（pull requests）來改善這個項目。如果你有任何建議或改進意見，請隨時聯繫我。
