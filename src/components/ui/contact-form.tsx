"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

const fieldClass =
  "mt-2 w-full border border-line/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/60 transition focus:border-primary";

const labelClass =
  "text-[9px] font-medium uppercase tracking-[0.28em] text-primary";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${siteConfig.name} — ${name}`;
    const body = [
      `${t("name")}: ${name}`,
      `${t("email")}: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setReady(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{t("name")}</span>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t("namePlaceholder")}
            autoComplete="name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{t("email")}</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>{t("message")}</span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t("messagePlaceholder")}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="w-full border border-primary bg-primary px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.32em] text-background transition hover:bg-transparent hover:text-primary"
      >
        {t("submit")}
      </button>

      <p className="text-[11px] font-light leading-relaxed text-foreground/60">
        {t("note")}
      </p>

      <p className="text-[11px] font-light leading-relaxed text-foreground/60">
        {t("privacy")}
      </p>

      {ready ? (
        <p
          role="status"
          aria-live="polite"
          className="text-[11px] font-light leading-relaxed text-primary"
        >
          {t("success", { email: siteConfig.email })}
        </p>
      ) : null}
    </form>
  );
}
