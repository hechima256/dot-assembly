共同ピクセルお絵描き。r/placeの再現を目指している。まだ1ピクセル(画面全体)しかできていない。Next(Vercel)+MongoDB

公開先
https://dot-assembly.vercel.app/

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
