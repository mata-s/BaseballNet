export default function RankingRulesPage() {
  return (
    <div className="mb-8 lg:mb-10">
      {/* ページヘッダー */}
      <section>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          個人ランキングのルールについて
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          このページでは、ベースボールネット に表示される「打撃ランキング」「投手ランキング」
          などのルールや前提条件を説明します。
          各種指標（打率・防御率など）の具体的な計算方法は、
          別ページ「成績の計算方法」で解説しています。
        </p>
      </section>

      {/* 対象データの範囲 */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">1. ランキングの対象となるデータ</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            ベースボールネット のランキングは、アプリに登録された試合結果・個人成績・チーム成績のデータをもとに
            自動で集計されます。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>対象期間ごとに集計（例：年間ランキングはその年の試合データを対象）</li>
            <li>登録された成績のみが集計対象となり、未入力の試合は計算に含まれません</li>
            <li>テスト用データ・明らかに不正な成績は、運営判断で除外される場合があります</li>
          </ul>
        </div>
      </section>

      {/* 順位と「圏外」の扱い */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">2. 順位の表示と「圏外」について</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            ランキングでは、基本的に 1 位から順番に順位を表示します。
            順位が計算できない場合や、規定打席・投球回を満たしていない場合には「圏外」として表示されることがあります。
          </p>
          <h2 className="list-none mt-2 text-lg font-bold dark:text-sky-300">打者</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              月間ランキングでは、シーズン中（3〜11月）は <strong>その月に「8打席以上」立っていること</strong> が規定条件となります（12〜2月はシーズン外のため、規定打席は 4 として扱います）。
            </li>
            <li>
              年間ランキングの規定打席は、シーズンの進行にあわせて
              <strong>累計の打席数</strong>
              が増えていきます。3月終了時点で「累計8打席以上」、4月終了時点で「累計16打席以上」…というように、
              1ヶ月につき累計で8打席ずつ増えていき、
              <strong>シーズンを通して最終的に必要な打席数は「合計72打席以上」</strong>
              となります（年間の集計対象期間は3〜11月）。
            </li>
           </ul>
           <h2 className="list-none mt-2 text-lg font-bold dark:text-sky-300">投手</h2>
           <ul className="list-disc space-y-1 pl-5">
            <li>
              月間ランキングでは、シーズン中（3〜11月）は
              <strong>その月に「12イニング以上」投球していること</strong>
              が規定条件となります（12〜2月はシーズン外のため、規定投球回は 6 として扱います）。
            </li>
            <li>
              年間ランキングの規定投球回は、シーズンの進行にあわせて
              <strong>累計の投球回数</strong>
              が増えていきます。3月終了時点で「累計12イニング以上」、4月終了時点で「累計24イニング以上」…というように、
              1ヶ月につき累計で12イニングずつ増えていき、
              <strong>シーズンを通して最終的に必要な投球回数は「合計108イニング以上」</strong>
              となります（年間の集計対象期間は3〜11月）。
            </li>
           </ul>
           <span>※ 将来的に、より公平な並び順（試合数・打席数・投球回などを考慮）への改善を予定しています。</span>
        </div>
      </section>

      {/* ランキングの種類 */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">3. 表示されるランキングの種類</h2>
        <div className="grid gap-4 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
              個人（打者）ランキング
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>打率（規定打席を満たした選手のみ）</li>
              <li>本塁打</li>
              <li>出塁率（規定打席を満たした選手のみ）</li>
              <li>長打率（規定打席を満たした選手のみ）</li>
              <li>盗塁</li>
              <li>打点</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
              個人（投手）ランキング
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>防御率（規定投球回を満たした投手のみ）</li>
              <li>勝率（規定投球回を満たした投手のみ）</li>
              <li>奪三振</li>
              <li>ホールドポイント</li>
              <li>セーブ</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
              みんなのヒット（都道府県対抗ランキング）
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              「みんなのヒット」は、同じ都道府県に所属する選手全員の
              <strong>ヒット数を合計</strong>して競うランキングです。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>個人やチーム単位ではなく、都道府県全体で集計されます</li>
              <li>登録された試合データに基づき、ヒット数を自動で合算します</li>
              <li>自分のヒットも、都道府県の合計に反映されます</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※ 集計対象の指標や表示内容は、アップデートにより変更される場合があります。月間のランキングは打率のみ
        </p>
      </section>

      {/* 全国・都道府県別ランキング */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">4. 全国ランキングと都道府県別ランキング</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            ベースボールネット では、全国全体での順位に加えて、所属している都道府県ごとのランキングも表示します。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>プロフィールで設定した「都道府県」をもとに、都道府県別ランキングを作成します</li>
            <li>
              都道府県を未設定の場合、そのユーザーやチームは都道府県別ランキングには表示されません
            </li>
            <li>
              全国ランキングは、各都道府県ランキングの上位選手（1位）を対象として集計しています
            </li>
          </ul>
        </div>
      </section>

      {/* 年齢別ランキング */}
      <section className="mt-5 mb-10">
        <h2 className="text-lg font-semibold">5. 年齢別ランキング</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            同じ世代のプレイヤー同士で頑張りを比べられるよう、年齢帯ごとのランキングも表示します。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>プロフィールに登録された生年月日または年齢情報をもとに、年齢帯を自動で判定します</li>
            <li>10代・20代・30代…といった区分ごとに、同じ世代の中での順位を確認できます</li>
            <li>
              年齢情報が未登録の場合、年齢別ランキングには表示されません（通常のランキングのみ表示されます）
            </li>
          </ul>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            ※ 細かな区切り（20–29歳、30–39歳 など）はアプリ内部で管理しており、
            画面上では「20代」「30代」といった表示で分かりやすくしています。
          </p>
        </div>
      </section>

     
      {/* 注意事項 */}
      <section className="space-y-3 border-t border-zinc-200 pt-5 text-sm dark:border-zinc-800">
        <h2 className="text-lg font-semibold">6. ランキングに関する注意事項</h2>
        <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
          <li>
            ランキングは、記録されたデータをもとに自動で集計されるため、入力ミスがある場合はそのまま反映されます。
          </li>
          <li>
            不具合や明らかな集計ミスと思われる表示があった場合は、お手数ですがお問い合わせフォームからご連絡ください。
          </li>
          <li>
            ランキング仕様は、より公平で楽しい草野球環境をつくるため、今後も改善・調整される可能性があります。
          </li>
        </ul>
      </section>
    </div>
  );
}