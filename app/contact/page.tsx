"use client";

import { useMemo, useState } from "react";

type Category =
  | "不具合・エラー"
  | "機能の要望"
  | "お支払い・サブスク"
  | "データ削除・アカウント"
  | "その他";

const SUPPORT_EMAIL = "support@baseball-net.jp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState<Category>("不具合・エラー");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `[ベースボールネット] お問い合わせ（${category}）`;
    const bodyLines = [
      "【お名前】",
      name || "（未入力）",
      "",
      "【ご連絡先メール】",
      email || "（未入力）",
      "",
      "【カテゴリ】",
      category,
      "",
      "【内容】",
      message || "（未入力）",
      "",
      "※可能であれば、以下も教えてください",
      "- 端末 / OS：",
      "- アプリのバージョン：",
      "- 発生日時：",
      "- 再現手順：",
      "- スクリーンショット：",
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join("\n"),
    });

    return `mailto:${SUPPORT_EMAIL}?${params.toString()}`;
  }, [name, email, category, message]);

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-6 sm:pt-10">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        お問い合わせ
      </h1>

      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
        ベースボールネットに関するご質問・不具合報告・ご要望などはこちらからご連絡ください。
      </p>

      <div className="mt-8 space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            まずはFAQをご確認ください
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            よくある質問に回答がある場合があります。特に、サブスクの仕様や更新頻度などはFAQにまとめています。
          </p>
          <a
            href="/faq"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
          >
            FAQを見る
          </a>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            お問い合わせ方法
          </h2>
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                1) アプリ内から
              </span>
              <br />
              設定画面の「お問い合わせ」から送信できます。（アプリ内に項目がある場合はこちらが最も確実です）
            </p>

            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                2) メールで
              </span>
              <br />
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="cursor-pointer underline underline-offset-2 hover:opacity-80"
              >
                {SUPPORT_EMAIL}
              </a>
              宛にご連絡ください。
            </p>

            <p className="text-sm text-zinc-700 dark:text-zinc-200">
              ※ 本フォームでは、<span className="font-semibold">アカウント削除および関連データの削除依頼</span>も受け付けています。
              アプリにログインできない場合や、アプリを削除済みの場合でも、こちらからご連絡ください。
            </p>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              ※原則として、1〜3営業日以内の返信を目安に対応します。内容によってはお時間をいただく場合があります。
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            フォームから送る（メールが起動します）
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            以下に入力すると、メールアプリが起動し、入力内容が本文に入った状態で送信できます（Web上で直接送信はしません）。
          </p>

          <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                お名前（任意）
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
                placeholder="例：田中 太郎"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                ご連絡先メール（任意）
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
                placeholder="例：example@email.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                カテゴリ
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
              >
                <option value="不具合・エラー">不具合・エラー</option>
                <option value="機能の要望">機能の要望</option>
                <option value="お支払い・サブスク">お支払い・サブスク</option>
                <option value="データ削除・アカウント">データ削除・アカウント</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                内容
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
                placeholder="例：ランキングが更新されない / ログインできない など。再現手順があると助かります。"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
                aria-label="メールで問い合わせる"
              >
                メールを作成する
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
              >
                空メールを作成
              </a>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              ※「メールを作成する」を押しても送信はされません。メールアプリ側で内容をご確認のうえ送信してください。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            規約・ポリシー
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
            <li>
              <a
                href="/terms"
                className="cursor-pointer underline underline-offset-2 hover:opacity-80"
              >
                利用規約
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="cursor-pointer underline underline-offset-2 hover:opacity-80"
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
