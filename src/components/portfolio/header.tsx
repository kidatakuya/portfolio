import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10 lg:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="木田 拓也 トップへ"
        >
          <span className="flex size-8 items-center justify-center rounded-[3px] bg-cyan font-mono text-[11px] font-bold text-base">
            TK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-ink">Takuya Kida</span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-dim">
              {" "}
              NARA / JST
            </span>
          </span>
        </Link>

        <nav
          aria-label="メインナビゲーション"
          className="hidden md:block max-w-[460px]"
        >
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[12px] text-sub transition-colors hover:text-ink"
                >
                  <span className="text-dim">{item.no}.</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tracking-[0.1em]"></div>
      </div>

      <nav
        aria-label="モバイルナビゲーション"
        className="border-t border-line md:hidden"
      >
        <ul className="flex items-center justify-between overflow-x-auto px-5 py-2.5 max-w-[460px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="whitespace-nowrap font-mono text-[11px] text-sub"
              >
                <span className="text-dim">{item.no}.</span> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
