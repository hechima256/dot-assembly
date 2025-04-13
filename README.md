# Dot Assembly 🎨

共同でピクセルアートを作成できるWebアプリケーション。Redditのr/placeのような共同アート体験を目指しています。
**現状は画面全体を1つのピクセルとして扱う実装となっています。**

## 🌟 特徴

-   画面全体を1つのピクセルとして編集可能
-   最終更新日時の表示
-   シンプルなUI

## 🚀 デモ

現在のバージョン: https://dot-assembly.vercel.app/

## 🛠 技術スタック

-   **フレームワーク**: Next.js 14 (App Router)
    -   Route Handlers（APIエンドポイント）
    -   クライアントコンポーネント（インタラクティブなUI要素）
-   **データベース**: MongoDB
-   **その他**: TypeScript, Tailwind CSS

## 開発の前提条件

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

## 開発の始め方

まず、開発サーバーを起動します：

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認する。

`app/page.tsx` を編集することでページを編集できる。ファイルを編集すると、ページは自動的に更新される。

このプロジェクトでは、[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) を使用して、カスタムGoogleフォントのInterを自動的に最適化して読み込んでいます。

## デプロイ方法

main, developブランチをpushすることでVercelに自動デプロイされる。
mainはProduction, developはPreview環境にデプロイされる

https://cloud.mongodb.com/v2#/org/66d322901c627467746e4d47/projects

https://vercel.com/hechimas-projects/dot-assembly/deployments
