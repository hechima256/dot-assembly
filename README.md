# Dot Assembly 🎨

共同でピクセルアートを作成できるWebアプリケーション。Redditのr/placeのような共同アート体験を目指しています。
**現状は画面全体を1つのピクセルとして扱う実装となっています。**

## 🚀 デモ

現在のバージョン: https://dot-assembly.vercel.app/

## 🌟 特徴

-   画面全体を1つのピクセルとして編集可能
-   最終更新日時の表示
-   シンプルなUI

## 🛠 技術スタック

-   **フレームワーク**: Next.js 14 (App Router)
    -   Route Handlers（APIエンドポイント）
    -   クライアントコンポーネント（インタラクティブなUI要素）
-   **データベース**: MongoDB
-   **その他**: TypeScript, Tailwind CSS

## 💻 開発環境

### 前提条件

-   Node.js v18.20.5以上
-   npm
-   MongoDB (ローカル開発用)

### 動作確認済み環境

```bash
% node -v
v18.20.5

% npm -v
10.8.2
```

### 開発の始め方

1. 開発サーバーを起動:

    ```bash
    npm run dev
    ```

2. ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認

3. `app/page.tsx` を編集することでページを編集可能。ファイルを編集すると、ページは自動的に更新される。

## 🚀 デプロイ

### 自動デプロイ

-   **mainブランチ**: Production環境に自動デプロイ
    -   デプロイ先: https://dot-assembly.vercel.app/
-   **developブランチ**: Preview環境に自動デプロイ
    -   プレビューURLは各デプロイ時に生成

### 関連リンク

-   [MongoDB Atlas](https://cloud.mongodb.com/v2#/org/66d322901c627467746e4d47/projects)
-   [Vercel Dashboard](https://vercel.com/hechimas-projects/dot-assembly/deployments)
