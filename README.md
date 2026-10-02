# フロントエンドエンジニア ポートフォリオ

Next.js と React で構築した、フロントエンドエンジニア向けのポートフォリオサイトです。プロフィール、職務実績、個人制作、連絡先を1ページにまとめています。

プロフィールと職務実績を掲載しています。個人制作セクションにはポートフォリオ用のサンプル作品が含まれるため、公開前に実際の作品情報へ更新してください。

## 主な構成

- **プロフィール** — 自己紹介、技術スタック、仕事で大切にしていること
- **職務経歴** — 会社ごとの在籍期間・職種と、各社で担当したプロジェクト
- **個人制作** — 作品の説明、使用技術、GitHubへのリンク
- **お問い合わせ** — メールリンク
- **レスポンシブレイアウト** — デスクトップ・モバイル向けナビゲーション
- **Vercel Analytics** — 本番環境でのアクセス計測

## 技術スタック

- Next.js 16 (App Router)
- React 19 / TypeScript
- Tailwind CSS 4
- Base UI、Lucide React
- Vercel Analytics

## 必要な環境

- Node.js 20.9 以降
- pnpm 12.3.4

## 開発方法

```bash
pnpm install
pnpm dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## ビルドと起動

```bash
# 型チェックを含む本番ビルド
pnpm build

# ビルド成果物をローカルで起動
pnpm start
```

テスト用のスクリプトは現在ありません。`pnpm build` は本番用コードのビルドに加えてTypeScriptの型チェックも実行します。

## Push前のビルド確認

Gitフックにより、通常の `git push` の前に `pnpm run build` が実行されます。ビルドに失敗した場合、pushは中断されます。

依存関係のインストール時に `prepare` スクリプトが `.githooks` をGitフックの保存先として設定します。フックを無効化してpushすることは推奨しません。

## サイト内容の編集

ページの各セクションは `components/portfolio/` にあります。

| ファイル | 内容 |
| --- | --- |
| `components/portfolio/hero.tsx` | 名前、肩書、自己紹介、ヒーロー表示 |
| `components/portfolio/about.tsx` | プロフィール、技術スタック、仕事の方針 |
| `components/portfolio/projects.tsx` | 職務プロジェクトと成果 |
| `components/portfolio/works.tsx` | 個人制作の一覧 |
| `components/portfolio/contact.tsx` | 問い合わせ先 |
| `components/portfolio/header.tsx` | ヘッダーとナビゲーション |
| `components/portfolio/footer.tsx` | フッター |
| `lib/site.ts` | GitHub URL、メールアドレス、ナビゲーション項目 |
| `app/layout.tsx` | ページタイトル、説明、フォント、共通レイアウト |
| `app/globals.css` | グローバルスタイルとデザイントークン |

画像は `public/images/` に配置し、コンポーネントから `/images/ファイル名` で参照します。

## デプロイ

`.github/workflows/deploy.yml` は `main` ブランチへのpushをきっかけに、Vercel CLIで本番デプロイを実行します。GitHub Actionsの `VERCEL_TOKEN` シークレットと、Vercelプロジェクトの設定が必要です。
