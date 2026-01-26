import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-10 sm:px-8 lg:px-12">

        {/* キャンペーン告知 */}
        {/* <section className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 sm:text-sm dark:border-amber-400/40 dark:bg-amber-900/20 dark:text-amber-100">
          <p className="font-semibold">【リリース記念】8月末まで無料</p>
          <p className="mt-1">
            登録したチーム名、または個人名を
            <span className="font-medium">（後日掲載予定の連絡先）</span>
            に送っていただくと、8月末まで有料機能を無料でご利用いただけます。
          </p>
          <p className="mt-1">
            チーム名でお申し込みの場合は、事前にメンバー全員がアプリ内で同じチームに加入している状態にしてください。
          </p>
          <p className="mt-1">
            条件を満たすと、個人プラン・チームプランの両方が8月末まで無料になります。
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            ※ Android（Google Play）は現在準備中です。<br />
            メールアドレスを教えていただければ、先行してご利用いただけます。
          </p>
          <p className="mt-3 text-xs font-semibold text-amber-900 sm:text-sm dark:text-amber-100">
            ↓ここにご連絡ください
          </p>
          <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs sm:text-sm">
              メール:{" "}
              <a
                href="mailto:support@baseball-net.jp"
                className="underline underline-offset-2 decoration-amber-500/80 hover:decoration-amber-600"
              >
                support@baseball-net.jp
              </a>
            </p>

            <div className="flex items-center gap-3">
              <div
                className="flex cursor-pointer items-center gap-1 opacity-70"
                title="X（準備中）"
              >
                <Image
                  src="/badges/x-logo.png"
                  alt="X"
                  width={28}
                  height={28}
                />
                <span className="text-[11px] sm:text-xs text-amber-800/80 dark:text-amber-100/80">
                  準備中
                </span>
              </div>

              <div
                className="flex cursor-pointer items-center gap-1 opacity-70"
                title="Instagram（準備中）"
              >
                <Image
                  src="/badges/Instagram_Glyph_Gradient.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
                <span className="text-[11px] sm:text-xs text-amber-800/80 dark:text-amber-100/80">
                  準備中
                </span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Hero セクション */}
        <section className="mt-6 flex flex-1 flex-col gap-8 sm:mt-8 md:mt-20 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100 dark:bg-sky-900/30 dark:text-sky-200 dark:ring-sky-800/60">
              草野球の記録・成績をもっと楽しく
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              あなたの野球を、<br className="hidden sm:block" />
              もう一段楽しく。
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              ベースボールネットは、草野球の
              <span className="font-medium">個人成績・チーム成績・ランキング</span>を
              ひとつにまとめて、かんたんに振り返れるアプリです。試合を重ねるほど「今の自分」「チームの調子」が見えてきて、
              目標づくりや練習のヒントにもつながります。県内・年齢別のランキングで近い相手と比べながら、野球をもう一段楽しく。
            </p>

            {/* CTA ボタン（ストアバッジ・準備中） */}
            <div className="mt-6">
              <p className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                iOS版 公開中 / Android版 近日公開
              </p>

              {/* SP: 縦並び / sm〜: 横並び */}
              <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {/* App Store */}
                <a
                  href="https://apps.apple.com/app/%E3%83%99%E3%83%BC%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88/id6743166887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/badges/app-store-badge.svg"
                    alt="App Store でダウンロード"
                    width={160}
                    height={48}
                    priority
                  />
                </a>

                {/* Google Play */}
                <div
                  className="flex items-center gap-3 opacity-70 cursor-not-allowed select-none"
                  aria-disabled="true"
                >
                  <Image
                    src="/badges/google-play-badge.svg"
                    alt="Google Play（準備中）"
                    width={160}
                    height={48}
                    priority
                  />
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Google Play（準備中）
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特長セクション */}
        <section id="features" className="mt-16 space-y-6">
          <h2 className="text-lg font-semibold">ベースボールネットで楽しめること</h2>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            ベースボールネットは、記録をつけるだけのアプリではありません。
            仲間とワイワイ盛り上がったり、ライバルと競い合ったり、成長を実感したり。
            いつもの草野球が、もっと楽しくなる「きっかけ」を増やします。
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                01
              </p>
              <p className="mt-2 font-medium">成績が「次の一手」になる</p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                打率や内容を振り返ることで、得意・苦手が見えてくる。
                次の練習や試合で何を意識すればいいかが、自然とわかります。
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                02
              </p>
              <p className="mt-2 font-medium">ライバルが見えると、伸びる</p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                県内・年齢別・期間別のランキングで、自分の立ち位置を確認。
                近い相手と比べるからこそ、モチベーションが続きます。
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                03
              </p>
              <p className="mt-2 font-medium">チームが強くなる共有ができる</p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                目標や成績を共有することで、チーム全体の意識が揃う。
                個人だけでなく、チームとしての成長も感じられます。
              </p>
            </div>
          </div>
        </section>

        {/* 個人プラン（料金） */}
        <section id="pricing" className="mt-16 space-y-6">
          <h2 className="text-lg font-semibold">個人プラン（プレミアム）</h2>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            個人成績の「ランキング」「詳細分析」「目標」など、成長が見える機能をまとめて解放します。
            まずは気軽に試して、合わなければいつでもキャンセルできます。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* 月額 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                    初月無料
                  </p>
                  <p className="mt-1 text-base font-semibold">月額プラン</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">580円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 月（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>初回1ヶ月無料</li>
                <li>2ヶ月目から自動更新</li>
                <li>いつでもキャンセル可能</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格・無料期間はアプリ内表示に準拠します。
              </p>
            </div>

            {/* 年額 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    まとめてお得
                  </p>
                  <p className="mt-1 text-base font-semibold">年額プラン</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">6,000円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 年（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>1年間まとめて支払い</li>
                <li>月額よりお得な価格設定</li>
                <li>更新・解約はストアからいつでも可能</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格・割引表現はアプリ内表示に準拠します。
              </p>
            </div>
          </div>

          {/* できること */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-semibold">プレミアムでできること</p>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">ランキングに参加しよう！</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  数字で成長が見えると、野球がもっと楽しくなる。県内・年齢別のランキングで近い相手と競えます。
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">都道府県対抗ヒットバトル</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  あなたの一本が地元のスコアに加算。都道府県ごとのヒット合計で順位が決まる白熱バトル！
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">全国トップ選手を覗いてみよう</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  全国の強者の成績を見ると、刺激と発見がある。あなたの次の目標が自然と見つかります。
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">打撃のさらに詳細がわかる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  打球の分布や打撃傾向など、いつもの成績表では見えない「打撃のクセ」が見えてきます。
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">相手別・球場別の成績も見られる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  どの相手に強いか、どの球場と相性がいいかをデータで振り返れます。
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">目標を決めると、野球がもっと楽しくなる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  月の目標や1年のテーマを決めるだけで、野球に取り組む毎日がもっとワクワクします。
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              ※ 機能や提供範囲はアップデートにより変更される場合があります。
            </p>

            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
              <p className="font-semibold text-zinc-800 dark:text-zinc-100">※ランキングの表示／更新について</p>
              <p className="mt-1">
                ランキングは月単位で集計し、翌月1日 1:30頃に更新されます。
                プレミアムを更新前に解約した場合、当月分のランキングが表示されないことがあります。
              </p>
              <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                （ランキング表示は、更新時点でのプレミアム有効状態に基づきます）
              </p>
            </div>
          </div>
        </section>

        {/* チームプラン（料金） */}
        <section id="team-pricing" className="mt-16 space-y-6">
          <h2 className="text-lg font-semibold">チームプラン（ゴールド / プラチナ）</h2>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            チームの成績管理やチーム内ランキングなど、チーム全員で使う機能をまとめて解放します。
            代表者がチームプランを購入すると、チームメンバー全員が対象機能を利用できます。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* ゴールド（月額） */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="mt-1 text-base font-semibold">ゴールドプラン（月額）</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">1,500円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 月（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>毎月自動更新</li>
                <li>いつでもキャンセル可能</li>
                <li>解約しても、利用期間終了までは利用できます</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格はアプリ内表示に準拠します。
              </p>
            </div>

            {/* ゴールド（年額） */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    まとめてお得
                  </p>
                  <p className="mt-1 text-base font-semibold">ゴールドプラン（年額）</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">16,000円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 年（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>1年間まとめて支払い</li>
                <li>月額よりお得な価格設定</li>
                <li>更新・解約はストアからいつでも可能</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格・割引表現はアプリ内表示に準拠します。
              </p>
            </div>

            {/* プラチナ（月額） */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="mt-1 text-base font-semibold">プラチナプラン（月額）</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">1,800円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 月（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>毎月自動更新</li>
                <li>いつでもキャンセル可能</li>
                <li>解約しても、利用期間終了までは利用できます</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格はアプリ内表示に準拠します。
              </p>
            </div>

            {/* プラチナ（年額） */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    まとめてお得
                  </p>
                  <p className="mt-1 text-base font-semibold">プラチナプラン（年額）</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">19,400円</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">/ 年（税込）</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>1年間まとめて支払い</li>
                <li>月額よりお得な価格設定</li>
                <li>更新・解約はストアからいつでも可能</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                ※ 価格・割引表現はアプリ内表示に準拠します。
              </p>
            </div>
          </div>

          {/* プラン比較 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-semibold">プラン比較</p>

            <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 text-xs text-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">機能</th>
                    <th className="px-4 py-3 font-semibold">ゴールド</th>
                    <th className="px-4 py-3 font-semibold">プラチナ</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-zinc-700 dark:text-zinc-200">
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">チームランキング参加</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">全国強豪チームの閲覧</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">チーム内ランキング</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">詳細データ分析</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">球場別・対戦チーム別成績</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">チーム目標 / 意識共有</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">MVP投票</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
                    <td className="px-4 py-3">1人あたり（月額・10人計算）</td>
                    <td className="px-4 py-3">150円</td>
                    <td className="px-4 py-3">180円</td>
                  </tr>
                  <tr className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
                    <td className="px-4 py-3">1人あたり（年額換算・10人計算）</td>
                    <td className="px-4 py-3">約133円</td>
                    <td className="px-4 py-3">約162円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              ※ 1人あたりの金額は、チーム人数10人として単純に割った目安です。
            </p>
          </div>

          {/* できること */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-semibold">チームプランでできること</p>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">チーム全員でランキングに参加できる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  チームの成績がランキングに反映され、全員の活躍が数字で見えるようになります。みんなで上位を目指そう！
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ プラチナ限定</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">全国の強豪チームを覗いてみよう</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  全国の強豪チームの成績や傾向を見ると、刺激と発見が生まれます。次に目指すチーム像が、自然とイメージできます。
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ プラチナ限定</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">チーム全体の詳細データがわかる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  打球の分布や打撃傾向に加えて、投手の傾向も分析。チーム全体の強みと課題がより明確になります。
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ ゴールド以上</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">球場別・対戦チーム別の成績も見られる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  どの相手に強いか、どの球場と相性がいいかをデータで振り返れます。
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ ゴールド以上</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">チーム目標を決めると、一体感が生まれる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  チームで月や年間の目標を共有すると、練習や試合への意識が揃い、達成感をチーム全員で分かち合える強いチームになります。
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ ゴールド以上</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">チーム内ランキングで盛り上がれる</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  楽しみながら競い合うことで、自然とモチベーションが高まります。（チーム内ランキングは週1回更新）
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ ゴールド以上</p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <p className="font-medium">MVP投票で仲間の活躍を称えよう</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  月間・年間MVPをチームで決めて、活躍した仲間をみんなで称えられます。
                </p>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">※ プラチナ限定</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              ※ 機能や提供範囲はアップデートにより変更される場合があります。
            </p>
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-16 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} ベースボールネット. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/terms" className="hover:text-sky-600 dark:hover:text-sky-400">
                利用規約
              </a>
              <a href="/privacy" className="hover:text-sky-600 dark:hover:text-sky-400">
                プライバシーポリシー
              </a>
              <a href="/contact" className="hover:text-sky-600 dark:hover:text-sky-400">
                お問い合わせ
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
