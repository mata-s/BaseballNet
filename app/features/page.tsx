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
        ベースボールネットの魅力
      </h1>
      <p className="mt-4 text-base text-zinc-700 dark:text-zinc-200">
        ベースボールネットは、野球の記録・成績管理をもっと便利に、もっと楽しくするためのサービスです。個人やチームの成績をかんたんに記録・分析でき、みんなで野球をもっと楽しめます。
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
      <a href="#performance" className="underline-offset-2 hover:underline">
        成績画面で、自分のプレーを細かく振り返れる
      </a>
    </li>
    <li>
      <a href="#premium-details" className="underline-offset-2 hover:underline">
        グラフで「詳細成績」を見やすくチェック（※プレミアム限定）
      </a>
    </li>
    <li>
      <a href="#goals" className="underline-offset-2 hover:underline">
        目標を立てて、成績アップを目指せる（※プレミアム限定）
      </a>
    </li>
    <li>
      <a href="#match-review" className="underline-offset-2 hover:underline">
        相手別・球場別で試合を振り返れる（※プレミアム限定）
      </a>
    </li>
    <li>
      <a href="#communication" className="underline-offset-2 hover:underline">
        試合相手や助っ人を探して、連絡がとれる
      </a>
    </li>
    <li>
      <a href="#ranking" className="underline-offset-2 hover:underline">
        個人ランキングで、県内の順位や成績をチェックできる（※プレミアム限定）
      </a>
    </li>
    <li>
      <a href="#prefecture-hits" className="underline-offset-2 hover:underline">
        都道府県対抗でヒット数を競おう（※プレミアム限定）
      </a>
    </li>
  </ul>
</nav>

      <section id="performance" className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          成績画面で、自分のプレーを細かく振り返れる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ベースボールネットの成績画面では、打者・投手・守備それぞれの成績を、細かく・わかりやすく振り返ることができます。
          「打者」「投手」「守備」のように、役割ごとに画面が分かれているので、
          自分のプレースタイルに合わせて確認できます。
        </p>

        {/* 打者成績：画像2枚＋説明文 */}
        <div className="space-y-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features/成績_打者(1).png"
                alt="打者成績（基本指標）の画面"
                width={1200}
                height={2600}
                className="w-full h-auto"
              />
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features/成績_打者(2).png"
                alt="打者成績（詳細指標）の画面"
                width={1200}
                height={2600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            打率・出塁率・長打率など、打者としての基本成績を一目で確認できます。OPS や RC など、より踏み込んだ打撃指標もチェックできます。
          </p>
        </div>

        {/* 投手・守備成績：画像2枚＋説明文 */}
        <div className="mt-6 space-y-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features/成績_投手(1).png"
                alt="投手成績の画面"
                width={1200}
                height={2600}
                className="w-full h-auto"
              />
            </div>
            <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features/成績_守備2.png"
                alt="守備成績の画面"
                width={1200}
                height={2600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            防御率・勝率・奪三振数など、投手としての成績をまとめて確認できます。(ポジションが投手の場合)<br/>守備率や失策数、盗塁阻止率(ポジションが捕手の場合)、守備面での貢献度も同じ画面から振り返ることができます。
          </p>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            成績は、次のように表示期間を切り替えてチェックできます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>通算成績：これまでの全試合の合計成績</li>
            <li>今月 / 先月：直近の調子を確認したいときに便利</li>
            <li>今年 / 去年：シーズンごとの比較に</li>
            <li>年を選択：任意の年を選んで、その年だけの成績を詳しく確認できます</li>
          </ul>
          <p>
            また、同じ成績画面の中で「練習試合だけ」「公式戦だけ」「すべての試合」を切り替えて表示できます。
            練習試合ではフォーム調整やチャレンジの結果を、公式戦では本番での勝負強さや安定感を、それぞれ分けて振り返ることができます。
          </p>
        </div>
      </section>

      <section id="premium-details" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          グラフで「詳細成績」を見やすくチェック
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          プレミアムでは、成績をさらに深掘りできる「詳細」ページが使えます。
          円グラフや棒グラフなどで可視化されるので、数字だけを見るよりも直感的に理解できます。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプレミアム限定です
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/詳細打撃.png"
              alt="詳細打撃（円グラフと棒グラフで可視化）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              詳細打撃：円グラフと棒グラフで可視化し、成績をひと目で把握できます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/詳細打球方向.png"
              alt="詳細打球方向（表と％で打球方向を確認）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              詳細打球方向：どこに飛んでいるかを、表と％でわかりやすく表示します。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/詳細打撃傾向.png"
              alt="詳細打撃傾向（細かな打撃情報を確認）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              詳細打撃傾向：普段は気にしない細かな情報まで見えてきます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/詳細投手傾向.png"
              alt="詳細投手傾向（投手の傾向を深掘り）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              詳細投手傾向：投手としての傾向を深掘りして確認できます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            「どこを伸ばせば成績が上がるか」「得意・苦手はどこか」を見つけやすくなり、練習や試合の振り返りがもっと楽しくなります。
          </p>
        </div>
      </section>

      <section id="goals" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          目標を立てて、成績アップを目指せる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          プレミアムでは、月ごと・年ごとに自分の目標を設定できます。
          目標を定めることで、「何を意識してプレーするか」が明確になり、
          日々の練習や試合への取り組み方が変わってきます。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプレミアム限定です
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/目標.png"
              alt="目標設定画面の例"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              目標設定画面：達成したい数値を決めて、シーズンや月ごとに目標を立てられます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/目標2.png"
              alt="成績画面に表示される目標の例"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              成績画面にも目標を表示。現在の成績と見比べながら、達成状況をひと目で確認できます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            成績画面の中に目標がわかりやすく表示されるので、
            「あとどれくらいで達成できるか」「今月はどこを頑張るか」が自然と意識できます。
          </p>
          <p>
            また、数値化できない目標でも「達成した」ボタンを押せば達成として記録できるなど、柔軟に対応しています。
          </p>
          <p>
            数字をただ記録するだけでなく、目標に向かってプレーする楽しさを感じられる機能です。
          </p>
        </div>
      </section>

      <section id="match-review" className="mt-10 space-y-6">
  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
    相手別・球場別で試合を振り返れる
  </h2>

  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
    プレミアムでは、試合結果を「相手別」「球場別」にまとめて確認できます。
    どの相手に強いか、どの球場で結果が出やすいかなど、累計成績から傾向をつかみやすくなります。
    また、タップすると詳細画面へ遷移できます。
  </p>

  <p className="text-xs text-zinc-500 dark:text-zinc-400">
    ※この機能はプレミアム限定です
  </p>

  <div className="grid gap-4 sm:grid-cols-2">
    <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
      <Image
        src="/screenshots/features/場所相手.png"
        alt="相手別・球場別の累計成績を確認できる画面"
        width={1200}
        height={2600}
        className="w-full h-auto"
      />
      <figcaption className="px-3 py-2">
        相手別・球場別の累計成績をまとめて表示。相性や傾向がひと目でわかります。
      </figcaption>
    </figure>

    <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
      <Image
        src="/screenshots/features/試合一覧.png"
        alt="試合一覧（期間を選択して振り返り）の画面"
        width={1200}
        height={2600}
        className="w-full h-auto"
      />
      <figcaption className="px-3 py-2">
        試合一覧は期間を選択して振り返り。シーズンや月ごとの試合をまとめて見直せます。
      </figcaption>
    </figure>
  </div>

  <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
    <p>
      試合一覧では、期間を選択して試合を絞り込めるので、目的に合わせて振り返りやすくなります。
      「最近の試合だけ見たい」「今月の結果をまとめて確認したい」といった場面で便利です。
      （ベーシックの方はカレンダーから試合を確認できます）
    </p>
  </div>
</section>

      <section id="communication" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          試合を組んだり、助っ人をお願いしたりできる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ベースボールネットでは、投稿・検索・トークを使って、試合相手や助っ人を探したり、
          チーム同士で連絡を取り合うことができます。
          気になるチームやプレーヤーを見つけたら、そのままアプリ内から連絡を送れます。
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/投稿一覧.png"
              alt="投稿一覧画面（試合募集や助っ人募集の投稿）"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              試合募集・助っ人募集などの投稿一覧から、気になる募集内容を見つけて連絡できます。
            </figcaption>
          </figure>

          <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/検索.png"
              alt="チーム・県・ユーザー検索画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム名・ユーザー名・都道府県などで検索して、相手チームやプレーヤーを探すことができます。
            </figcaption>
          </figure>

          <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features/トーク.png"
              alt="トーク画面（メッセージのやり取り）"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              トーク機能で、試合の詳細調整や助っ人依頼のやりとりができます。チームに連絡した場合は、そのチームの代表者にメッセージが届きます。
            </figcaption>
          </figure>
        </div>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          投稿一覧から気になる募集を見つけるパターンと、検索から相手を探すパターンのどちらにも対応しているので、
          「試合を組みたい」「助っ人をお願いしたい」「県内のチームとつながりたい」といったニーズに柔軟に使えます。
        </p>
      </section>

      <section id="ranking" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          個人ランキングで、県内の順位や成績をチェックできる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ベースボールネットには、打者・投手などのカテゴリ別に、個人のランキングを確認できる機能があります。
          県内のランキングを見れば、自分の成績がどのくらいの位置にいるのかをひと目で把握できます。
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプレミアム限定です
        </p>

        <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <Image
            src="/screenshots/features/batting-ranking.png"
            alt="個人ランキング（打者ランキング）の画面"
            width={1200}
            height={2600}
            className="w-full h-auto"
          />
          <figcaption className="px-3 py-2">
            県内の打者ランキングを一覧で表示。打率などの主要指標を見ながら、順位を比較できます。
          </figcaption>
        </figure>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            ランキングは、目的に合わせて表示を切り替えられます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>カテゴリ切替：打者 / 投手 など、見たいランキングを選択</li>
            <li>都道府県：県内ランキングで、身近な相手と比較</li>
            <li>年齢別：同年代の中での順位を確認</li>
            <li>
              期間：シーズン・先月で切り替え可能（ランキングは月1回更新）
            </li>
          </ul>
          <p className="text-xs sm:text-sm leading-relaxed">
            「目標の指標を決めて上位を目指す」「得意な項目を伸ばす」など、日々のモチベーションにもつながります。
          </p>
        </div>
      </section>

      <section id="prefecture-hits" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          都道府県対抗でヒット数を競おう
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          都道府県ごとのヒット数を集計して、ランキング形式で見られるページです。
          みんなの一本が積み重なって、県全体の順位が上がっていきます。
          「あなたの一本で盛り上がる」――そんな感覚で、チームや仲間と一緒に楽しめます。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプレミアム限定です
        </p>

        <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <Image
            src="/screenshots/features/みんなのヒット.png"
            alt="都道府県対抗ヒット数ランキングの画面"
            width={1200}
            height={2600}
            className="w-full h-auto"
          />
          <figcaption className="px-3 py-2">
            都道府県別のヒット数ランキング。一本一本が県の順位につながります。
          </figcaption>
        </figure>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            このページでは、表示を切り替えることで全国のトップ選手も確認できます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>打者：全国の各ランキングのトップ（1位）</li>
            <li>投手：全国の各ランキングのトップ（1位）</li>
          </ul>
          <p className="text-xs sm:text-sm leading-relaxed">
            目標の指標を決めて上位を目指したり、強い県・強い選手の成績を参考にしたりと、モチベーションにもつながります。
          </p>
        </div>
      </section>

      {/* 役割別セクションや他のコンテンツはここに続きます */}
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