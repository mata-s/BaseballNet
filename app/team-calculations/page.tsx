export default function TeamCalculationsPage() {
  return (
    <div className="mb-8 lg:mb-10">
      {/* ページタイトル */}
      <section>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          チーム成績の計算方法
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          このページでは、ベースボールネットで使用している
          <strong>チーム</strong>
          の各種成績の計算方法をまとめています。
          チームランキングのルールと併せて確認したい場合は、
          「チームランキングのルール」ページと合わせてご覧ください。
        </p>
      </section>
    <div className="mx-auto max-w-5xl px-4 py-10 lg:py-12">
        {/* 3. チーム成績 */}
        <section id="team" className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            4. チーム成績の計算方法
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            チーム成績は、試合ごとのスコアや個人成績を集計し、チーム単位の指標として算出します。
            ランキングで使用される主なチーム指標の計算方法は次の通りです。
          </p>

          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            {/* 勝率 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">チーム勝率</h3>
              <div className="mt-2 rounded-lg bg-zinc-50 p-2 text-xs font-mono dark:bg-zinc-900/60">
                勝率 ＝ 勝ち試合数 ÷ （勝ち試合数 ＋ 負け試合数）
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>引き分けは分母に含めない計算としています。</li>
                <li>大会やリーグごとではなく、ベースボールネットに記録された試合を対象に集計します。</li>
              </ul>
            </div>

            {/* チーム打撃・守備・投手成績 */}
            <div>
              <h3 className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                チーム打撃・守備・投手成績
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                チーム成績は、全選手の個人成績を合計し、その合計値からチーム全体の指標を計算しています。
                <br />
                なお、監督・マネージャーなど試合成績を持たないメンバーは、チーム成績の集計対象には含まれません。
              </p>

              {/* チーム打撃成績 */}
              <div className="mt-3 space-y-2">
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  チーム打撃成績
                </p>

                {/* チーム打率 */}
                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム打率
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    チーム打率 ＝ チーム安打数 ÷ チーム打数
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>チーム安打数：全選手の安打（単打・二塁打・三塁打・本塁打）の合計</li>
                    <li>チーム打数：全選手の打数の合計（四球・死球・犠打・犠飛などは含めません）</li>
                  </ul>
                </div>

                {/* チーム出塁率 */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム出塁率（OBP）
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    チーム出塁率 ＝
                    （チーム安打数 ＋ チーム四球 ＋ チーム死球）
                    ÷
                    （チーム打数 ＋ チーム四球 ＋ チーム死球 ＋ チーム犠飛）
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>チーム四球・チーム死球・チーム犠飛も、全選手分の合計値を使っています。</li>
                  </ul>
                </div>

                {/* チーム長打率 */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム長打率（SLG）
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono space-y-1 dark:bg-zinc-900/60">
                    <p>
                      チーム総塁打 ＝ 内野安打 ＋ 単打 ＋ 二塁打×2 ＋ 三塁打×3 ＋ 本塁打×4
                    </p>
                    <p>チーム長打率 ＝ チーム総塁打 ÷ チーム打数</p>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>内野安打も 1 塁打としてカウントし、二塁打以上は塁打数として加重しています。</li>
                  </ul>
                </div>

                {/* チーム OPS */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム OPS
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    チーム OPS ＝ チーム出塁率 ＋ チーム長打率
                  </div>
                </div>

                {/* チーム RC */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム RC（Runs Created）
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono space-y-1 dark:bg-zinc-900/60">
                    <p>
                      チーム RC ＝ （チーム安打数 ＋ チーム四球） × チーム総塁打
                      ÷ （チーム打席数 ＋ チーム四球）
                    </p>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>チーム打席数は、全選手の打席数（totalBats）の合計を使っています。</li>
                    <li>分母（チーム打席数 ＋ チーム四球）が 0 の場合は 0 として扱います。</li>
                  </ul>
                </div>
              </div>

              {/* チーム投手成績 */}
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  チーム投手成績
                </p>

                {/* チーム防御率 */}
                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム防御率（ERA）
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    チーム防御率 ＝ チーム自責点 × 7 ÷ チーム投球回
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>自責点・投球回は、全投手の成績を合算して計算します。</li>
                    <li>草野球を 7 イニング制と想定し、「7イニング換算」の防御率として算出しています。</li>
                  </ul>
                </div>
              </div>
            </div>
                          {/* チーム守備成績 */}
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  チーム守備成績
                </p>

                {/* チーム守備率 */}
                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    チーム守備率
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    チーム守備率 ＝
                    （チーム刺殺 ＋ チーム補殺）
                    ÷
                    （チーム刺殺 ＋ チーム補殺 ＋ チーム失策）
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>刺殺・補殺・失策は、全守備機会の合計値を使用します。</li>
                  </ul>
                </div>

                {/* キャッチャー盗塁阻止率（チーム） */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    キャッチャー盗塁阻止率（チーム）
                  </p>
                  <div className="mt-1 rounded-lg bg-zinc-50 p-2 text-sm font-mono dark:bg-zinc-900/60">
                    盗塁阻止率 ＝ チーム盗塁刺 ÷ チーム盗塁企図数
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    <li>チーム盗塁刺・盗塁企図数も、捕手のプレーを全試合ぶん合計した値を使っています。</li>
                  </ul>
                </div>
              </div>
          </div>

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
