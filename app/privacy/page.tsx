"use client";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-6 sm:pt-10">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        プライバシーポリシー
      </h1>

      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
        ベースボールネット（以下「本サービス」といいます。）は、ユーザーの個人情報を適切に取り扱うことを重要な責務と考え、
        以下のとおりプライバシーポリシーを定めます。
      </p>

      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        最終更新日：2025年12月27日
      </p>

      <div className="mt-8 space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            1. 取得する情報
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            本サービスでは、以下の情報を取得する場合があります。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>メールアドレス、認証情報</li>
            <li>ユーザー名、都道府県、生年月日、ポジション、所属チーム情報</li>
            <li>試合結果、成績、目標、スケジュール、投稿、コメント、スタンプ等の入力データ</li>
            <li>端末情報、OS、アプリの利用状況（クラッシュログ等）</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            2. 利用目的
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            取得した情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>本サービスの提供・運営・本人確認</li>
            <li>成績集計、ランキング表示、目標管理等の機能提供</li>
            <li>お問い合わせ対応、重要なお知らせの通知</li>
            <li>不正利用の防止、セキュリティ向上</li>
            <li>サービス改善、新機能開発のための分析</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            3. 第三者提供
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            当運営は、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            ただし、以下の場合を除きます。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>本人の同意がある場合</li>
            <li>決済処理、通知配信等、業務委託先に必要な範囲で提供する場合</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            4. 外部サービスの利用
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            本サービスでは、機能提供や運営のため、以下の外部サービスを利用する場合があります。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>Firebase（認証、データベース、通知等）</li>
            <li>RevenueCat（サブスクリプション管理）</li>
            <li>Google Analytics 等の分析ツール</li>
          </ul>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            これらの外部サービスにおける情報の取扱いについては、各サービス提供者のプライバシーポリシーをご確認ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            5. 個人情報の管理
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            当運営は、個人情報の漏えい、滅失、改ざん等を防止するため、適切な安全管理措置を講じます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            6. 保存期間
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            個人情報は、利用目的の達成に必要な期間保存し、その後適切な方法で削除または匿名化します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            7. ユーザーの権利
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            ユーザーは、自身の個人情報について、確認・修正・削除等を求めることができます。
            ユーザーは、アプリ内の設定画面からアカウント削除を行うことができます。
            アカウント削除が完了すると、当該アカウントに紐づく個人情報は削除されます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            8. 未成年者の利用
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            未成年者が本サービスを利用する場合は、保護者の同意を得たうえで利用してください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            9. ポリシーの変更
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            当運営は、必要に応じて本ポリシーを変更することがあります。
            重要な変更を行う場合には、本サービス上での掲示等により周知します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            10. お問い合わせ
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            本ポリシーに関するお問い合わせは、本サービス内のお問い合わせ窓口よりご連絡ください。
          </p>
        </section>
      </div>
    </main>
  );
}
