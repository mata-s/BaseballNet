"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeaturesTeamPage() {
  const [showAllImages, setShowAllImages] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative pb-24 sm:pb-28">
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        チーム機能の魅力
      </h1>
      <p className="mt-4 text-base text-zinc-700 dark:text-zinc-200">
        ベースボールネットでは、チーム全体の成績をまとめて記録・分析できます。期間や試合種別を切り替えながら振り返れるので、調子や成長の流れを数字で把握しやすくなります。
      </p>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        ゴールド：一部機能が利用可能 ／ プラチナ：すべての機能が利用可能
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
      aria-controls="toc-list-team"
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
    id="toc-list-team"
    className={`mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-200 md:mt-2 md:block ${
      tocOpen ? "block" : "hidden"
    }`}
  >
    <li>
      <a href="#team-performance" className="underline-offset-2 hover:underline">
        チーム成績を、さまざまな切り口で振り返る
      </a>
    </li>
    <li>
      <a href="#team-details" className="underline-offset-2 hover:underline">
        グラフで「チーム詳細成績」を見やすくチェック（※ゴールド以上）
      </a>
    </li>
    <li>
      <a href="#team-goals" className="underline-offset-2 hover:underline">
        目標を立てて、チームの成績アップを目指せる（※ゴールド以上）
      </a>
    </li>
    <li>
      <a href="#team-match-review" className="underline-offset-2 hover:underline">
        相手別・球場別で試合を振り返れる（※ゴールド以上）
      </a>
    </li>
    <li>
      <a
        href="#team-member-ranking"
        className="underline-offset-2 hover:underline"
      >
        チーム内ランキングで、チーム内の順位や成績をチェック（※ゴールド以上）
      </a>
    </li>
    <li>
      <a href="#team-ranking" className="underline-offset-2 hover:underline">
        チームランキングで、県内のライバルと競い合える（※プラチナ限定）
      </a>
    </li>
    <li>
      <a href="#mvp" className="underline-offset-2 hover:underline">
        MVP投票で、月間・年間のMVPを決められる（※プラチナ限定）
      </a>
    </li>
    <li>
      <a href="#team-schedule" className="underline-offset-2 hover:underline">
        チームのスケジュールを管理して、スタンプやコメントで反応できる
      </a>
    </li>
  </ul>
</nav>

      <section id="team-performance" className="mt-8 space-y-6">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          チーム成績を、さまざまな切り口で振り返る
        </h1>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ベースボールネットでは、チーム全体の成績を期間ごと・試合種別ごとに切り替えながら確認できます。
          チームの調子や成長の流れを、数字でしっかり把握できます。
        </p>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-center text-xs dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features-team/チーム成績1.png"
                alt="チーム成績画面（通算）"
                width={1200}
                height={2600}
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="mt-2 text-zinc-600 dark:text-zinc-300">
                チーム成績：通算成績を一覧で確認
              </figcaption>
            </figure>

            <figure className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-center text-xs dark:border-zinc-800 dark:bg-zinc-900/40">
              <Image
                src="/screenshots/features-team/チーム成績5.png"
                alt="チーム成績画面（試合種別切り替え）"
                width={1200}
                height={2600}
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="mt-2 text-zinc-600 dark:text-zinc-300">
                練習試合・公式戦・全試合を切り替えて表示
              </figcaption>
            </figure>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowAllImages((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
              aria-expanded={showAllImages}
            >
              {showAllImages ? "閉じる" : "もっと見る"}
            </button>
          </div>

          {showAllImages && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-center text-xs dark:border-zinc-800 dark:bg-zinc-900/40">
                <Image
                  src="/screenshots/features-team/チーム成績2.png"
                  alt="チーム成績画面（月別切り替え）"
                  width={1200}
                  height={2600}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-2 text-zinc-600 dark:text-zinc-300">
                  今月・先月など、直近の調子をチェック
                </figcaption>
              </figure>

              <figure className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-center text-xs dark:border-zinc-800 dark:bg-zinc-900/40">
                <Image
                  src="/screenshots/features-team/チーム成績3.png"
                  alt="チーム成績画面（年別）"
                  width={1200}
                  height={2600}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-2 text-zinc-600 dark:text-zinc-300">
                  今年・去年を切り替えてシーズン比較
                </figcaption>
              </figure>

              <figure className="mx-auto w-full max-w-xs rounded-xl border border-zinc-200 bg-zinc-50 p-2 text-center text-xs dark:border-zinc-800 dark:bg-zinc-900/40">
                <Image
                  src="/screenshots/features-team/チーム成績4.png"
                  alt="チーム成績画面（年選択）"
                  width={1200}
                  height={2600}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-2 text-zinc-600 dark:text-zinc-300">
                  年を選択して、その年だけの成績を詳細に確認
                </figcaption>
              </figure>
            </div>
          )}
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            成績は、次のように表示期間を切り替えてチェックできます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>通算成績：これまでの全試合の合計成績</li>
            <li>今月 / 先月：直近の調子を確認したいときに便利</li>
            <li>今年 / 去年：シーズンごとの比較に</li>
            <li>年を選択：任意の年を選んで、その年だけの成績を詳しく確認</li>
          </ul>

          <p>
            また、同じ成績画面の中で「練習試合だけ」「公式戦だけ」「すべての試合」を切り替えて表示できます。
            練習試合ではフォーム調整やチャレンジの結果を、
            公式戦では本番での勝負強さや安定感を、それぞれ分けて振り返ることができます。
          </p>
        </div>
      </section>

      <section id="team-details" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          グラフで「チーム詳細成績」を見やすくチェック
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ゴールド以上では、チーム全体の傾向をさらに深掘りできる「詳細」ページが使えます。
          円グラフや棒グラフ、表などで可視化されるので、数字だけを見るよりも直感的に理解できます。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はゴールド以上で利用できます
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム詳細打撃.png"
              alt="チーム詳細打撃（円グラフと棒グラフで可視化）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム詳細打撃：円グラフと棒グラフで可視化し、成績をひと目で把握できます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム詳細打撃方向.png"
              alt="チーム詳細打撃方向（％と表で打球方向を確認）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム詳細打撃方向：打球の方向を％と表でわかりやすく表示します。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム詳細打撃傾向.png"
              alt="チーム詳細打撃傾向（細かな傾向まで確認）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム詳細打撃傾向：普段は気にしない細かな傾向まで見えてきます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム詳細投手傾向.png"
              alt="チーム詳細投手傾向（細かな傾向まで確認）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム詳細投手傾向：投手としての細かな傾向まで深掘りして確認できます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            「チームとしてどこを伸ばせば勝ちやすくなるか」「強み・課題はどこか」を見つけやすくなり、
            練習メニューや打順の見直しなど、次の一手を考える材料になります。
          </p>
        </div>
      </section>

            <section id="team-goals" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          目標を立てて、チームの成績アップを目指せる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          ゴールド以上では、月ごと・年ごとにチームの目標を設定できます。
          目標を定めることで「次は何を伸ばすか」がはっきりし、練習や試合の振り返りがもっと前向きになります。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はゴールド以上で利用できます
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/目標.png"
              alt="チーム目標を立てる画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              目標を立てるページ：達成したい数値を決めて、月ごと・年ごとに目標を設定できます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/目標2.png"
              alt="成績画面に表示されるチーム目標の例"
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
            成績画面の中に目標がわかりやすく表示されるので、チーム全体で「あとどれくらいで達成できるか」を共有しやすくなります。
          </p>
        </div>
      </section>

      <section id="team-match-review" className="mt-10 space-y-6">
  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
    相手別・球場別で試合を振り返れる
  </h2>

  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
    ゴールド以上では、試合結果を「相手別」「球場別」にまとめて確認できます。
    相手ごとの勝率や、球場ごとの勝率が見えるので、「得意な相手」「相性の良い球場」を把握しやすくなります。
  </p>

  <p className="text-xs text-zinc-500 dark:text-zinc-400">
    ※この機能はゴールド以上で利用できます
  </p>

  <div className="grid gap-4 sm:grid-cols-2">
    <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
      <Image
        src="/screenshots/features-team/球場別相手別.png"
        alt="相手別・球場別の累計成績を確認できる画面"
        width={1200}
        height={2600}
        className="w-full h-auto"
      />
      <figcaption className="px-3 py-2">
        相手別・球場別の勝率をまとめて表示。相性や傾向がひと目でわかります。
      </figcaption>
    </figure>

    <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
      <Image
        src="/screenshots/features-team/試合一覧.png"
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
      「最近の勝率の推移を見たい」「今月の結果をまとめて確認したい」といった場面で便利です。
    </p>

    <p className="text-xs text-zinc-500 dark:text-zinc-400">
      ※サブスク未登録の方は、試合はカレンダーから確認できます
    </p>
  </div>
</section>

      <section id="team-member-ranking" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          チーム内ランキングで、チーム内の順位や成績をチェック
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          チーム内ランキングでは、同じチームに所属するメンバー同士の順位を確認できます。
          「今チーム内でどのくらいの位置にいるか」が見えるので、練習や試合のモチベーションにもつながります。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はゴールド以上で利用できます
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム内ランキングカテゴリー.png"
              alt="チーム内ランキング（カテゴリ切り替え）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              カテゴリを切り替えて、見たいランキングを選べます。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/チーム内ランキング.png"
              alt="チーム内ランキング（一覧）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チーム内の順位を一覧で表示。成績を見ながら比較できます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            ランキングは、目的に合わせて表示を切り替えられます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>カテゴリ：打者 / 投手 など、見たいランキングを選択</li>
            <li>試合種別：練習試合 / 公式戦 / 全試合 を切り替え</li>
            <li>
              期間：通算・月・年などで集計期間を変更（ランキングは週1回更新）
            </li>
          </ul>

          <p>
            期間は、次のように切り替えてチェックできます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>通算成績：これまでの全試合の合計成績</li>
            <li>今月 / 先月：直近の調子を確認したいときに便利</li>
            <li>今年 / 去年：シーズンごとの比較に</li>
            <li>年を選択：任意の年を選んで、その年だけの成績を詳しく確認</li>
          </ul>

          <p>
            チーム内で目標を決めて競い合ったり、得意な指標を伸ばしたりと、チームの雰囲気づくりにも役立ちます。
          </p>
        </div>
      </section>

      <section id="team-ranking" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          チームランキングで、県内のライバルと競い合える
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          チームランキングでは、県内のチームが順位で並び、ライバルたちと競い合うことができます。
          自分たちの立ち位置が見えることで、次の試合へのモチベーションにもつながります。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプラチナ限定です
        </p>

        <figure className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <Image
            src="/screenshots/features-team/チームランキング.png"
            alt="チームランキングの画面"
            width={1200}
            height={2600}
            className="w-full h-auto"
          />
          <figcaption className="px-3 py-2">
            県内のチームランキングを一覧で表示。順位を見ながら、目標を立てやすくなります。
          </figcaption>
        </figure>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            ランキングは、目的に合わせて表示を切り替えられます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>都道府県：県内ランキングで、身近な相手と比較</li>
            <li>年齢別：同年代の中での順位を確認</li>
            <li>
              期間：シーズン・先月で切り替え可能（ランキングは月1回更新）
            </li>
          </ul>
          <p>
            「県内でどのくらいの位置にいるか」を把握できるので、チームとしての強み・課題を見つけるきっかけにもなります。
            また、タブを切り替えることで全国トップ（全国1位）のチームもチェックできます。
          </p>
        </div>
      </section>

      <section id="mvp" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          MVP投票で、月間・年間のMVPを決められる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          MVP機能では、チーム内で活躍した選手に投票して、MVPを決めることができます。
          月間MVPと年間MVPのどちらにも対応しているので、短い期間の頑張りも、シーズンを通した活躍もきちんと讃えられます。
          数字に出る活躍だけでなく、「声出しで雰囲気を作った」「守備で流れを変えた」など、
          チームが感じた“価値あるプレー”をみんなで言葉にして残せるのも魅力です。
        </p>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※この機能はプラチナ限定です
        </p>

        <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <Image
            src="/screenshots/features-team/mvp.png"
            alt="MVP投票の画面"
            width={1200}
            height={2600}
            className="w-full h-auto"
          />
          <figcaption className="px-3 py-2">
            MVP投票画面。月間・年間を切り替えて、チームのMVPを決められます。
          </figcaption>
        </figure>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            使い方はシンプルで、期間を選んで投票するだけ。チームの節目づくりにも、日々のモチベーションにもつながります。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>月間MVP：その月に一番輝いた選手をみんなで選べる</li>
            <li>年間MVP：一年を通した貢献を評価して、チームの歴史として残せる</li>
            <li>投票があることで「見てもらえている」空気が生まれ、チームの一体感が高まる</li>
          </ul>
          <p>
            「今月は誰が流れを作ったか」「一年で一番チームを引っ張ったのは誰か」。
            みんなで振り返って称え合うことで、次のシーズンも続けたくなるチームづくりに役立ちます。
          </p>
        </div>
      </section>

       <section id="team-schedule" className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          チームのスケジュールを管理して、スタンプやコメントで反応できる
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          チームの予定（練習・試合・イベントなど）をアプリ内でまとめて管理できます。
          予定の詳細を開けば、メンバーがスタンプやコメントで反応できるので、
          「参加できる」「応援してる」「了解！」といった意思表示がスムーズになります。
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/スケジュール.png"
              alt="チームスケジュールの一覧画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              チームの予定を一覧で管理。練習や試合の予定がひと目でわかります。
            </figcaption>
          </figure>

          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
            <Image
              src="/screenshots/features-team/スケジュール詳細.png"
              alt="スケジュール詳細（スタンプやコメントで反応）の画面"
              width={1200}
              height={2600}
              className="w-full h-auto"
            />
            <figcaption className="px-3 py-2">
              予定の詳細画面では、スタンプやコメントで反応できます。
            </figcaption>
          </figure>
        </div>

        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
          <p>
            予定が散らばりがちなチーム運営でも、連絡漏れを減らしながら、みんなで同じ予定を共有できます。
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