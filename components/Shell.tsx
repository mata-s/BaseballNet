"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "ホーム" },
  { href: "/features", label: "詳しい魅力・使い方ガイ" },
  { href: "/features-team", label: "チームの魅力・使い方ガイド" },
  { href: "/ranking-rules", label: "ランキングのルール" },
  { href: "/team-rules", label: "チームランキングのルール" },
  { href: "/calculations", label: "成績の計算方法" },
  { href: "/team-calculations", label: "チーム成績の計算方法" },
  { href: "/director-manager", label: "采配と管理を支える、監督・マネージャー向け機能" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderNavLinks = (onNavigate?: () => void) => (
    <nav className="flex flex-col gap-1 text-sm">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              if (onNavigate) onNavigate();
            }}
            className={[
              "rounded-lg px-3 py-2 transition-colors",
              isActive
                ? "bg-sky-600 text-white"
                : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="flex min-h-screen">
        {/* PC / タブレット用サイドバー */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6 overflow-y-auto dark:border-zinc-800 dark:bg-zinc-950 md:flex">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 px-1">
            <img
              src="/icon.png"
              alt="B-Net icon"
              className="h-9 w-9 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                ベースボールネット
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Baseball Net
              </span>
            </div>
          </Link>

          <div className="mt-8 flex-1">
            {renderNavLinks()}
          </div>

          <p className="mt-4 text-[10px] text-zinc-400">
            © {new Date().getFullYear()} B-Net
          </p>
        </aside>

        {/* メインエリア */}
        <div className="flex min-h-screen flex-1 flex-col">
          {/* モバイル用ヘッダー */}
          <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/icon.png"
                alt="B-Net icon"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-semibold">B-Net</span>
            </Link>
            <button
              type="button"
              aria-label="メニューを開く"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <span className="sr-only">メニュー</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
                <span className="block h-0.5 w-4 rounded-full bg-current" />
              </div>
            </button>
          </header>

          {/* モバイル用ドロワーメニュー */}
          {menuOpen && (
            <div className="relative z-60 md:hidden">
              {/* 背景の半透明レイヤー */}
              <button
                type="button"
                aria-label="メニューを閉じる"
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/30"
              />
              {/* ドロワー本体 */}
              <div className="fixed inset-y-0 right-0 w-64 border-l border-zinc-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/icon.png"
                      alt="B-Net icon"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">B-Net</span>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        Baseball Network
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="メニューを閉じる"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6">
                  {renderNavLinks(() => setMenuOpen(false))}
                </div>
              </div>
            </div>
          )}

          {/* ページ本体 */}
          <main className="flex-1 px-4 pb-6 pt-20 md:px-8 md:py-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
