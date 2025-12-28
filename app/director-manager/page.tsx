"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import React from "react";

export default function FeaturesPage() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative pb-24 sm:pb-28">
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        監督・マネージャーのための「チームメモ」
      </h1>
      <p className="mt-4 text-base text-zinc-700 dark:text-zinc-200">
        成績は「結果」。チームを見る人のメモは「思考」。
        試合の流れや判断の意図を言葉で残して、次の試合につなげるための機能です。
      </p>

      <nav className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
  <div className="flex items-center justify-between">
    <p className="font-semibold text-zinc-900 dark:text-zinc-100">目次</p>

    {/* SP: 開閉ボタン */}
    <button
      type="button"
      onClick={() => setTocOpen((v) => !v)}
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 md:hidden"
      aria-expanded={tocOpen}
      aria-controls="toc-list"
    >
      {tocOpen ? "閉じる" : "開く"}
      <span
        className={`text-base leading-none transition-transform ${
          tocOpen ? "rotate-180" : "rotate-0"
        }`}
        aria-hidden="true"
      >
        ▾
      </span>
    </button>
  </div>

  {/* SP: 閉じている時はヒント表示 */}
  {!tocOpen && (
    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 md:hidden">
      タップして、読みたい項目へジャンプできます
    </p>
  )}

  <ul
    id="toc-list"
    className={`mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-200 md:mt-2 md:block ${
      tocOpen ? "block" : "hidden"
    }`}
  >
    <li>
      <a href="#common" className="underline-offset-2 hover:underline">
        共通画面：気づきを残して、いつでも振り返れる
      </a>
    </li>
    <li>
      <a href="#director" className="underline-offset-2 hover:underline">
        監督画面：メンバー把握とオーダー作成
      </a>
    </li>
    <li>
      <a href="#manager" className="underline-offset-2 hover:underline">
        マネージャー画面：試合中のスコア入力で、記録をサポート
      </a>
    </li>
  </ul>
</nav>

      <section id="common" className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          共通画面：気づきを残して、いつでも振り返れる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          試合の直後に感じたことや判断の意図は、時間が経つと意外と薄れていきます。
          ベースボールネットの「監督のメモ」では、その瞬間の気づきを残して、
          <span className="font-semibold">読み直し</span>や<span className="font-semibold">重要</span>などの機能で、いつでも振り返りやすく整理できます。
        </p>

        <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <Image
            src="/screenshots/director-manager/common.png"
            alt="監督のメモ（共通画面）の例"
            width={1200}
            height={2600}
            className="h-auto w-full"
          />
          <figcaption className="px-3 py-2">
            メモを整理して、必要なときにすぐ読み返せます。
          </figcaption>
        </figure>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            ポイントまとめ
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>「あの判断が良かった理由」を言葉で残せる</li>
            <li>数字では見えない流れや空気感を記録</li>
            <li>次の試合につながる振り返りができる</li>
            <li>チームの成長ログとして積み重なる</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            成績は「結果」。監督・マネージャーのメモは「思考」。
          </p>
          <p>
            試合が終わった瞬間の気づきは、時間が経つと意外と忘れてしまいます。
          </p>
          <p>
            その日の判断、その時の迷い、その一手の意味を、次の勝利につなげるために。
          </p>
        </div>
      </section>
      <section id="director" className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          監督画面：メンバー把握とオーダー作成
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          チームを率いる立場の人のために、試合前の準備や構想を楽しめる専用画面を用意しています。
          メンバー構成を眺めたり、オーダーを考えたりと、
          <span className="font-semibold">試合がない時間でもチームを考える楽しさ</span>を広げます。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※チームメンバー一覧の閲覧は、チームサブスク「ゴールド」以上で利用できます
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/director-manager/director_member.png"
              alt="監督画面：チームメンバー一覧"
              width={1200}
              height={2600}
              className="h-auto w-full"
            />
            <figcaption className="px-3 py-2">
              チームメンバーを一覧で把握。正規メンバー構成を見ながら、オーダーを考えるのが楽しくなります。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/director-manager/director_order.png"
              alt="監督画面：オーダー作成"
              width={1200}
              height={2600}
              className="h-auto w-full"
            />
            <figcaption className="px-3 py-2">
              試合がない日でもオーダーを組める画面。空き時間にじっくり構想を練れます（プランに関わらず利用可能）。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <ul className="list-disc space-y-1 pl-5">
            <li>メンバー構成を見ながら、起用や役割を整理できる</li>
            <li>実際の試合を想定してオーダーを試せる</li>
            <li>「この並びはどうか？」を考える時間そのものが楽しくなる</li>
          </ul>
          <p>
            監督・マネージャーが頭の中で考えていることを形にできる、
            チームづくりのための準備画面です。
          </p>
        </div>
      </section>
      <section id="manager" className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          マネージャー画面：試合中のスコア入力で、記録をサポート
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          マネージャーは、試合中にメンバーのスコアを入力して、チームの記録をサポートできます。
          記録を任せられる人がいるだけで、試合に集中しながら、あとからの振り返りもしやすくなります。
        </p>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            記録の流れ（安心して運用できる仕組み）
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>マネージャーが試合中にスコアを入力</li>
            <li>メンバーは自分のページで内容を確認</li>
            <li>間違いがなければ「登録」して確定</li>
          </ol>
          <p className="text-xs sm:text-sm leading-relaxed">
            入力した内容がそのまま確定するのではなく、本人が確認してから登録できるので、
            記録の精度も担保しやすく、安心して運用できます。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/director-manager/manager_input.png"
              alt="マネージャー画面：試合中のスコア入力"
              width={1200}
              height={2600}
              className="h-auto w-full"
            />
            <figcaption className="px-3 py-2">
              試合中にスコアを入力して、記録をスムーズに残せます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/director-manager/manager_batting.png"
              alt="マネージャー入力の確認（打撃）"
              width={1200}
              height={2600}
              className="h-auto w-full"
            />
            <figcaption className="px-3 py-2">
              メンバーは自分のページで内容を確認（打撃）。間違いがなければ登録して確定します。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/director-manager/manager_fielding.png"
              alt="マネージャー入力の確認（守備）"
              width={1200}
              height={2600}
              className="h-auto w-full"
            />
            <figcaption className="px-3 py-2">
              守備の記録も同様に確認可能。本人確認→登録の流れで、記録ミスを減らせます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <ul className="list-disc space-y-1 pl-5">
            <li>入力役を分けることで、試合後の記録作業がかなりラクになる</li>
            <li>本人確認フローがあるので、間違いが起きても修正しやすい</li>
            <li>記録が揃うほど、成績・ランキング・振り返りがもっと楽しくなる</li>
          </ul>
        </div>
      </section>
      {showTopButton && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "auto" })
          }
          className="fixed bottom-6 right-6 cursor-pointer rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          aria-label="ページの一番上に戻る"
        >
          ↑ TOP
        </button>
      )}
    </main>
  );
}