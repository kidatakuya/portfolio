import Image from "next/image";
import { SectionLabel } from "./section-label";

const STACK = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nuxt.js",
  "Astro",
  "Tailwind CSS",
  "Material UI",
];

const PROFILE = [
  { key: "FOCUS", value: "React / Next.js / TypeScript" },
  { key: "RENDERING", value: "CSR / SSR / Server Components" },
  { key: "UI", value: "Tailwind CSS / Material UI" },
];

const PRINCIPLES = [
  "意図をコードに残す",
  "小さく検証し、早く共有する",
  "誰かの「使えない」を見逃さない",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-b border-line bg-surface"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 lg:py-[120px]">
        <SectionLabel no="01" label="ABOUT / PROFILE" />
        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2
            id="about-title"
            className="text-[30px] font-black leading-[1.3] tracking-[0.02em] md:text-[40px]"
          >
            実装の前に、問いを整える。
          </h2>
          <p className="font-mono text-[10px] tracking-[0.1em] text-dim">
            PROFILE.JSON / UPDATED 2026.10
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[300px_1fr_340px] lg:gap-12">
          <figure className="relative overflow-hidden rounded-md border border-line-strong">
            <Image
              src="/images/desk.png"
              alt="キーボードとワイヤーフレームのスケッチが置かれた作業デスク"
              width={600}
              height={660}
              className="aspect-[300/330] h-auto w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-base/90 to-transparent px-4 pb-3 pt-8 font-mono text-[9px] tracking-[0.1em] text-sub">
              <span>DESK / ITERATION 27</span>
              <span className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-cyan"
                />
                REC
              </span>
            </figcaption>
          </figure>

          <div>
            <p className="text-[18px] font-medium leading-[1.8] text-ink">
              React・Next.js・TypeScriptを用いたWebアプリケーションやWebサイトのフロントエンド開発を担当しています。
            </p>
            <p className="mt-6 text-[13px] leading-[2] text-sub">
              要件や仕様に応じてCSR・SSR・Server Componentsを使い分け、表示性能とユーザー体験の両立を目指します。プロジェクトのLint・型定義ルールを守った型安全な実装に加え、Tailwind CSSやMaterial UIを活用した再利用しやすいUI設計にも取り組んでいます。Vanilla JavaScript中心の開発からモダンなReact・Next.jsの開発へ移行し、座席表の描画負荷改善や低スペック端末の不具合調査、技術選定などを経験してきました。
            </p>
            <dl className="mt-8 border-t border-line">
              {PROFILE.map((row) => (
                <div
                  key={row.key}
                  className="flex justify-between border-b border-line py-3 font-mono text-[10px] tracking-[0.06em]"
                >
                  <dt className="text-dim">{row.key}</dt>
                  <dd className="text-sub">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex justify-between font-mono text-[10px] tracking-[0.1em]">
              <h3 className="font-bold text-ink">CORE STACK</h3>
              <span className="text-dim">{STACK.length} MODULES</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {STACK.map((item) => (
                <li
                  key={item}
                  className="rounded-[3px] border border-line-strong bg-panel px-3 py-2 font-mono text-[11px] text-sub"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-md border border-line-strong bg-panel p-5">
              <h3 className="font-mono text-[10px] tracking-[0.1em] text-cyan">
                {"// WORKING PRINCIPLES"}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {PRINCIPLES.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-[13px] text-ink"
                  >
                    <span aria-hidden="true" className="size-1.5 bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
