"use client";

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-6 sm:pt-10">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        よくある質問
      </h1>

      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
        ベースボールネットについて、よくいただく質問をまとめました。
      </p>

      <div className="mt-8 space-y-8">
        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. ベースボールネットは無料でも使えますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            はい、使えます。試合の記録、成績の確認、チームのスケジュール管理、試合一覧の閲覧などは、
            サブスク未登録でも利用可能です。より詳しい分析やランキング、目標管理などの機能は有料プランで利用できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. ゴールドプランとプラチナプランの違いは何ですか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            ゴールドプランでは、チーム内ランキングや詳細成績、目標管理などが利用できます。
            プラチナプランでは、MVP投票や全国ランキングなど、すべての機能が利用できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. チームのサブスク料金は誰が支払いますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            チームの代表者が支払います。サブスクに登録すると、チームに所属するメンバー全員が対象機能を利用できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. ランキングはリアルタイム更新ですか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            リアルタイム更新ではありません。
            個人ランキングとチームランキングは月1回更新されます。
            チーム内ランキングは週1回更新されます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. チーム成績はどのくらいの頻度で更新されますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            チーム成績（チーム全体の成績データ）は、週1回更新されます。
            試合結果をもとに定期的に集計されるため、最新の傾向を確認できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. MVPはどのように決まりますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            チーム内で投票を行い、月間・年間MVPを決めます。MVP機能はプラチナプラン限定です。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. 数値化できない目標も設定できますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            はい。「達成した」ボタンを押すことで、数値以外の目標も達成として記録できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. 試合一覧は誰でも見られますか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            はい。サブスク未登録の方はカレンダーから試合を確認できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. チームのスケジュール管理は有料ですか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            いいえ、サブスク未登録でも利用できます。スタンプやコメントで反応できます。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Q. データは消えたりしませんか？
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            記録されたデータは安全に保存されます。安心してご利用ください。
          </p>
        </section>
      </div>
    </main>
  );
}
