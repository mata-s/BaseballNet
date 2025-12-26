export default function TeamRulesPage() {
  return (
    <div className="mb-8 lg:mb-10">
      {/* ページタイトル */}
       <section>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          チームランキングのルール
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          このページでは、ベースボールネットにおける
          <strong>「チーム内ランキング」</strong>
          と
          <strong>「チームランキング」</strong>
          の仕組みや前提条件について説明します。
          スコアや成績の計算方法そのものは、別途用意している「チーム成績の計算方法」ページで詳しく解説します。
        </p>
      </section>

      <div className="space-y-8 lg:space-y-10">
        {/* 1. チーム内ランキングとは */}
        <section className="mt-5">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            1. チーム内ランキングとは
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            チーム内ランキングは、同じチームに所属しているメンバー同士で、シーズン中の成績を比較できるランキングです。
            個人のモチベーションアップや、チーム内での話題作りを目的としています。
          </p>
          <h2 className="list-none mt-2 text-lg font-bold dark:text-sky-300"> 順位の表示と「圏外」について</h2>
          <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <ul className="list-disc space-y-1 pl-5">
                <li>
                    チーム内ランキングでは、チームがその期間に行った
                    <strong>試合数</strong>にもとづいて
                    「規定打席」「規定投球回」を自動計算しています。
                </li>
                <li>規定打席は<strong>「チームの試合数 × 1打席」</strong></li>
                <li>規定投球回は<strong>「チームの試合数 × 2イニング」</strong>
                </li>
              </ul>
            </div>
          <div className="mt-3 space-y-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              チーム内ランキングは、
              <strong>月間・通算・年間</strong>
              など複数の期間で切り替えて確認できます。
            </p>
            <p>
              それぞれの期間のランキングは、その期間までに登録された試合の
              <strong>累計成績</strong>
              をもとに計算されます（途中でリセットされることはありません）。
            </p>
          </div>
        </section>

    {/* ランキングの種類 */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">2. 表示されるランキングの種類</h2>
        <div className="grid gap-4 text-sm text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
              チーム内（打者）ランキング
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
              チーム内（投手）ランキング
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>防御率（規定投球回を満たした投手のみ）</li>
              <li>勝率（規定投球回を満たした投手のみ）</li>
              <li>奪三振</li>
              <li>ホールドポイント</li>
              <li>セーブ</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※ 集計対象の指標や表示内容は、アップデートにより変更される場合があります。
        </p>
      </section>

        {/* 2. チームランキングとは */}
        <section className="mt-5">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            3. チームランキングとは
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            チームランキングは、試合結果やシーズンを通した成績をもとに、チーム単位で競うランキングです。
            チームの強さや安定感を示す指標として利用されます。
          </p>
        <h2 className="text-lg font-semibold">順位の表示と「圏外」について</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            ランキングでは、基本的に 1 位から順番に順位を表示します。
            順位が計算できない場合や、規定試合数を満たしていない場合には「圏外」として表示されることがあります。
          </p>
          <ul className="list-disc space-y-1 pl-5">
  <li>
    <strong>月間ランキング</strong>では、シーズン中（3〜11月）は
    <strong>1か月「4試合以上」出場していること</strong>
    が規定条件となります。
    <br />
    （12〜2月はシーズン外のため、規定試合数は設定されません。）
  </li>
  <li>
    <strong>年間ランキング</strong>では、シーズン開始（3月）からの
    <strong>累計試合数</strong>
    をもとに規定が決まります。
    <br />
    3月終了時点では「4試合以上」、4月終了時点では「8試合以上」…というように、
    <strong>1か月ごとに4試合ずつ必要な試合数が増えていきます</strong>。
    <br />
    シーズンを通して、年間ランキングに必要な試合数は
    <strong>36試合以上必要</strong>
    となります（年間の集計対象期間は3〜11月です）。
  </li>
</ul>
           <span>※ 将来的に、より公平な並び順（試合数・打席数・投球回などを考慮）への改善を予定しています。</span>
        </div>
      </section>

       {/* ランキングの種類 */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">4. 表示されるランキングの種類</h2>
        <div className="grid gap-4 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-300">
              チームランキング
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              ※ 以下の指標は、いずれも
              <span className="font-semibold">規定試合数を満たしたチームのみ</span>
              がランキング対象となります。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>勝率</li>
              <li>打率</li>
              <li>出塁率</li>
              <li>長打率</li>
              <li>防御率</li>
              <li>守備率</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          ※ 集計対象の指標や表示内容は、アップデートにより変更される場合があります。月間のランキングは勝率のみ
        </p>
      </section>

      {/* 全国・都道府県別ランキング */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">5. 全国ランキングと都道府県別ランキング</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            ベースボールネット では、全国全体での順位に加えて、所属している都道府県ごとのランキングも表示します。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>チームプロフィールで設定した「都道府県」をもとに、都道府県別ランキングを作成します</li>
            <li>
              都道府県を未設定の場合、そのユーザーやチームは都道府県別ランキングには表示されません
            </li>
            <li>
              全国ランキングは、各都道府県ランキングの上位チーム（1位）を対象として集計しています
            </li>
          </ul>
        </div>
      </section>


      {/* 年齢別ランキング */}
      <section className="mt-5">
        <h2 className="text-lg font-semibold">6. 年齢別ランキング</h2>
        <div className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            同じ世代のチーム同士で頑張りを比べられるよう、年齢帯ごとのランキングも表示します。
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>チームの平均年齢</strong>は、チームに所属する各メンバーの年齢をもとに<strong>単純平均</strong>で算出しています。</li>
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
  </div>
);
}
