export default function CalculationsPage() {
  return (
    <div className="mb-8 lg:mb-10">
      {/* ページタイトル */}
      <section>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          成績の計算方法
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          このページでは、ベースボールネットで使用している
          <strong>打者・投手</strong>
          の各種成績の計算方法をまとめています。
          ランキングのルールと併せて確認したい場合は、
          「ランキングのルール」ページと合わせてご覧ください。
        </p>
      </section>

      {/* 目次 */}
      <nav className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          目次
        </p>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#batting" className="hover:text-sky-600 dark:hover:text-sky-300">
              1. 打者成績の計算方法
            </a>
          </li>
          <li>
            <a href="#pitching" className="hover:text-sky-600 dark:hover:text-sky-300">
              2. 投手成績の計算方法
            </a>
          </li>
          <li>
            <a href="#and" className="hover:text-sky-600 dark:hover:text-sky-300">
              3. 守備成績・盗塁関連
            </a>         
          </li>
        </ul>
      </nav>

      <div className="space-y-10 lg:space-y-12">
        {/* 1. 打者成績 */}
        <section id="batting" className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            1. 打者成績の計算方法
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            打者成績は、試合ごとに記録された打席結果を集計し、シーズン・月間・年間などの期間ごとに
            指標を計算しています。
          </p>

          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            {/* 打率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">打率（AVG）</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                「どれくらいヒットを打っているか」を表す指標です。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                打率 ＝ 安打数 ÷ 打数
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>安打数：単打・二塁打・三塁打・本塁打の合計</li>
                <li>打数：四球・死球・犠打・犠飛などを除いた打席数</li>
              </ul>
            </div>

            {/* 出塁率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">出塁率（OBP）</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                「どれくらいの頻度で塁に出ているか」を表す指標です。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                出塁率 ＝ （安打 ＋ 四球 ＋ 死球） ÷ （打数 ＋ 四球 ＋ 死球 ＋ 犠飛）
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>四球・死球・犠飛のカウント方法は、アプリ内のスコア入力仕様に準じます。</li>
              </ul>
            </div>

            {/* 長打率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">長打率（SLG）</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                「打席あたり、どれくらい塁を進んでいるか」を表す指標です。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                長打率 ＝ 総塁打 ÷ 打数
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>総塁打 ＝ 単打 ×1 ＋ 二塁打 ×2 ＋ 三塁打 ×3 ＋ 本塁打 ×4</li>
                <li>打数は打率と同様の定義です。</li>
              </ul>
            </div>

            {/* OPS */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">OPS</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                出塁率（OBP）と長打率（SLG）を足し合わせた指標で、「塁に出る力」と「長打力」をまとめて見ることができます。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                OPS ＝ 出塁率 ＋ 長打率
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>ベースボールネットでは、出塁率と長打率をそれぞれ計算したあと、単純に足し合わせて算出しています。</li>
              </ul>
              </div>
              
              {/* RC（Runs Created） */}
              <div>
                <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">RC（Runs Created）</h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  打撃によってどれくらい得点に貢献したかを簡易的に表すための指標です。
                </p>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                   RC ＝ （安打 ＋ 四球） × 総塁打 ÷ （打数 ＋ 四球）
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>安打：単打・二塁打・三塁打・本塁打の合計</li>
                  <li>総塁打：単打×1、二塁打×2、三塁打×3、本塁打×4 の合計</li>
                  <li>打数や四球のカウントは、アプリ内のスコア入力仕様に準じています。</li>
                  <li>（打数 ＋ 四球）が 0 の場合は 0 として扱います。</li>
                  </ul>
              </div>

              {/* その他の打者の詳細指標 */}
              <div>
                <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  その他の打者の詳細指標
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  ベースボールネットでは、打率や出塁率だけでなく、得点へのつながりや打席内の傾向を表す
                  いくつかの詳細指標も計算しています。
                </p>

                {/* 出塁後得点率 */}
                <div className="mt-3">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    生還率
                  </p>
                  <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                    生還率 ＝ 得点数 ÷ 出塁回数
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>出塁回数 ＝ 安打 ＋ 四球 ＋ 死球 ＋ 打撃妨害</li>
                    <li>「塁に出たとき、どれくらいの確率で得点までつながっているか」を見る指標です。</li>
                  </ul>
                </div>

                {/* 初球関連の指標 */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    初球関連の指標
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      初球スイング率 ＝ 初球スイング数 ÷ 打席数
                      <br />
                      … 初球から積極的に振っていっている割合を表します。
                    </li>
                    <li>
                      初球スイング成功率 ＝ 初球スイングでのヒット数 ÷ 初球スイング数
                      <br />
                      … 初球スイングがどれくらいヒットにつながっているかを表します。
                    </li>
                    <li>
                      初球ヒット率 ＝ 初球ヒット数 ÷ 打席数
                      <br />
                      … 全打席のうち、初球でヒットになった割合です。
                    </li>
                  </ul>
                </div>

                {/* 走塁・小技の指標 */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    走塁・小技の指標
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      盗塁成功率 ＝ 成功した盗塁数 ÷ 盗塁企図数
                      <br />
                      … どれくらいの確率で盗塁を成功させているかを表します。
                    </li>
                    <li>
                      バント成功率 ＝ 成功したバント数 ÷ バント試行回数
                      <br />
                      … 犠打やセーフティなど、バントがどれくらい成功しているかを見る指標です。
                    </li>
                  </ul>
                </div>

                {/* 打席内の傾向（スイング率など） */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    打席内の傾向（スイング率・空振り率・平均球数）
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      スイング率 ＝ スイングした球数 ÷ 見送った・振ったすべての球数
                      <br />
                      … 打席でどれくらい積極的にバットを振っているかを表します。
                    </li>
                    <li>
                      空振り率 ＝ 空振りした球数 ÷ スイングした球数
                      <br />
                      … スイングのうち、どれくらいミートできていないかを表します。
                    </li>
                    <li>
                      平均球数（1打席あたりの球数） ＝ 打者が見た総球数 ÷ 打席数
                      <br />
                      … 粘れているタイプか、早打ちタイプかをイメージするための参考指標です。
                    </li>
                  </ul>
                </div>

                {/* BABIP・BB/K・ISO */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    BABIP・BB/K・ISO
                  </p>
                  <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono space-y-1 dark:bg-zinc-900/60">
                    <p>BABIP ＝ （安打 − 本塁打） ÷ （打数 − 三振 − 本塁打 ＋ 犠飛）</p>
                    <p>BB/K ＝ 四球 ÷ 三振</p>
                    <p>ISO ＝ 長打率 − 打率</p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      BABIP（インプレー打球の打率）は、打球がフェアゾーンに飛んだときの運や打球質をざっくり見る指標です。
                    </li>
                    <li>
                      BB/K は「四球の多さ」と「三振の多さ」のバランスを表し、選球眼の良さの目安になります。
                    </li>
                    <li>
                      ISO は長打率から打率を引いた値で、「どれくらい長打を打てているか」を純粋に表します。
                    </li>
                  </ul>
                </div>
              </div>

        {/* 2. 投手成績 */}
        <section id="pitching" className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            2. 投手成績の計算方法
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            投手成績は、投球回数・失点・自責点などのデータをもとに計算されます。
          </p>

          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            {/* 防御率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">防御率（ERA）</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                9イニングあたり何点取られているかを表す指標です。
                ベースボールネットでは、草野球を 7 イニング制として想定し、自責点と投球回から防御率を計算しています。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                防御率 ＝ 自責点 × 7 ÷ 投球回
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>自責点：守備やエラーを除き、投手に責任がある失点のみをカウント</li>
                <li>投球回：1イニング ＝ 1.0、2アウトで交代した場合は 0.2 など、小数で表現します。</li>
              </ul>
            </div>

            {/* 勝率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">勝率</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                登板した試合で、どれくらいの割合で勝利投手になっているかを表します。
              </p>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                勝率 ＝ 勝利数 ÷ （勝利数 ＋ 敗戦数）
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>引き分けは分母に含めない計算としています。</li>
              </ul>
            </div>

            {/* 奪三振・セーブ・ホールド */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">その他の投手指標</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>奪三振：投手が奪った三振の合計</li>
                <li>セーブ数：セーブ条件を満たした登板で記録されたセーブの合計</li>
                <li>ホールドポイント：ホールドやホールドに準ずる記録の合計</li>
              </ul>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                セーブ・ホールドの定義は、ベースボールネット独自の簡易ルールを採用している場合があります。
              </p>
            </div>

            {/* 投手の詳細指標 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                投手の詳細指標
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                ベースボールネットでは、防御率や勝率だけでなく、奪三振能力や四死球、打たれ方などを表す
                いくつかの詳細指標も計算しています。
              </p>

              {/* 奪三振系の指標 */}
              <div className="mt-3">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  奪三振率（1イニング・7イニングあたり）
                </p>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono space-y-1 dark:bg-zinc-900/60">
                  <p>奪三振率（1イニングあたり） ＝ 奪三振数 ÷ 投球回</p>
                  <p>奪三振率（7イニング換算） ＝ 奪三振数 × 7 ÷ 投球回</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>どれくらい三振でアウトを取れているかの目安になります。</li>
                  <li>ベースボールネットでは草野球を 7 イニング制と想定しているため、「7イニング換算」で表示しています。</li>
                </ul>
              </div>

              {/* 被打率・WHIP */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  被打率・WHIP
                </p>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono space-y-1 dark:bg-zinc-900/60">
                  <p>被打率 ＝ 被安打数 ÷ 対戦打者数</p>
                  <p>WHIP ＝ （与四球 ＋ 被安打） ÷ 投球回</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>被打率は「どれくらいヒットを打たれているか」を表す指標です。</li>
                  <li>本来は打数ベースで計算するのが理想ですが、ベースボールネットでは対戦打者数を使った近似で計算しています。</li>
                  <li>WHIP はイニングあたりに出したランナー（四球＋安打）の多さを表します。</li>
                </ul>
              </div>

              {/* QS率・被本塁打率 */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  QS率・被本塁打率
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    QS率（クオリティ・スタート率）
                    ＝ QS達成試合数 ÷ 先発登板数
                    <br />
                    … 先発した試合のうち、一定以上のイニングを投げて試合を作った割合を見ています。
                  </li>
                  <li>
                    被本塁打率 ＝ 被本塁打数 × 7 ÷ 投球回
                    <br />
                    … 7イニング投げたと仮定したとき、どれくらい本塁打を打たれているかを表します。
                  </li>
                </ul>
              </div>

              {/* 球数・与四死球・失点の平均 */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  球数・与四死球・打者数・失点の平均
                </p>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono space-y-1 dark:bg-zinc-900/60">
                  <p>平均球数（1打者あたり） ＝ 総投球数 ÷ 対戦打者数</p>
                  <p>平均球数（1試合あたり） ＝ 総投球数 ÷ 登板試合数</p>
                  <p>1試合あたりの与死球 ＝ 与死球数 ÷ 登板試合数</p>
                  <p>1試合あたりの与四球 ＝ 与四球数 ÷ 登板試合数</p>
                  <p>1試合あたりの対戦打者数 ＝ 対戦打者数 ÷ 登板試合数</p>
                  <p>1試合あたりの失点 ＝ 失点数 ÷ 登板試合数</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>投手の負担やテンポ、コントロールの良さをざっくり把握するための参考指標です。</li>
                </ul>
              </div>

              {/* LOB% */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                  LOB%（残塁率）
                </p>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                  LOB% ＝ （走者数 − 失点） ÷ {`{`}走者数 − 1.4 × 被本塁打数{`}`}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>走者数 ＝ 被安打 ＋ 与四球 ＋ 与死球</li>
                  <li>失点のうち、どれくらいを最小限に抑えられているか（残塁させているか）の目安です。</li>
                  <li>分母が 0 以下になるケースでは 0 として扱い、極端な値にならないよう調整しています。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


            {/* 守備成績・盗塁関連 */}
            <div id="and" className="space-y-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                4. 守備成績・盗塁関連の指標
              </h2>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                ベースボールネットでは、打撃だけでなく守備や盗塁に関する指標もあわせて集計しています。
              </p>

              {/* 守備率 */}
              <div className="mt-3">
                <h3  className="text-sm font-semibold text-sky-700 dark:text-sky-300">守備率（Fielding Percentage）</h3>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                  守備率 ＝ （刺殺 ＋ 補殺） ÷ （刺殺 ＋ 補殺 ＋ 失策）
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>刺殺（totalPutouts）：アウトを直接取ったプレーの数</li>
                  <li>補殺（totalAssists）：アウトにつながる送球や中継プレーを行った数</li>
                  <li>失策（totalErrors）：守備のミスによって出塁や進塁を許したプレーの数</li>
                  <li>
                    試合ごとの刺殺・補殺・失策を累計し、その合計から守備率を計算しています。
                  </li>
                </ul>
              </div>

              {/* キャッチャーの盗塁阻止率 */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  キャッチャーの盗塁阻止率
                </h3>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                  盗塁阻止率 ＝ 盗塁刺 ÷ 盗塁企図数
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>盗塁刺：盗塁を試みた走者をアウトにした数</li>
                  <li>盗塁企図数：走者が盗塁を試みた回数（成功・失敗を含む）</li>
                  <li>
                    盗塁企図数が 0 の場合は 0 として扱い、ゼロ除算を避けています。
                  </li>
                </ul>
              </div>

              {/* 走者側の盗塁成功率（参考） */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  走者側の盗塁成功率
                </h3>
                <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                  盗塁成功率 ＝ 成功した盗塁数 ÷ 盗塁企図数
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>ランナー側の視点で、「どれくらいの確率で盗塁を成功させているか」を見る指標です。</li>
                  <li>成功・失敗のカウント方法は、アプリ内のスコア入力仕様に準じます。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
            <p className="font-semibold">📌 ご注意</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>一部の指標は、ローカルルールや草野球向けの簡易ルールに合わせて計算している場合があります。</li>
              <li>仕様の改善に伴い、計算方法を変更することがあります。その場合は、本ページやアプリ内のお知らせでご案内します。</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
