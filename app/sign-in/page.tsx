"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import { FaApple, FaGoogle } from "react-icons/fa";

type Message = {
  type: "success" | "error" | "info";
  text: string;
} | null;

export default function SignInPage() {
  const t = useTranslations("SignIn");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message>(null);

  function validateForm() {
    let valid = true;

    setEmailError("");
    setPasswordError("");
    setMessage(null);

    if (!email.trim()) {
      setEmailError(t("validation.emailRequired"));
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t("validation.emailInvalid"));
      valid = false;
    }

    if (!password) {
      setPasswordError(t("validation.passwordRequired"));
      valid = false;
    } else if (password.length < 6) {
      setPasswordError(t("validation.passwordMin"));
      valid = false;
    }

    return valid;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 1400));

    setLoading(false);

    setMessage({
      type: "success",
      text: t("messages.success"),
    });

    setTimeout(() => {
      router.push("/dashboard");
    }, 900);
  }

  function handleSocialLogin(provider: "Google" | "Apple") {
    setEmailError("");
    setPasswordError("");

    setMessage({
      type: "info",
      text: t("messages.socialDemo", { provider }),
    });
  }

  return (
    <main className="min-h-[100dvh] bg-white">
      <div className="grid min-h-[100dvh] lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT VISUAL */}
        <section className="relative hidden overflow-hidden bg-slate-950 p-12 lg:flex lg:flex-col lg:justify-between [@media(max-height:900px)]:p-9 [@media(max-height:780px)]:p-7">
          {/* Background glow */}
          <div className="absolute -left-32 top-20 size-[500px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute -bottom-40 right-[-100px] size-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex w-fit items-center gap-3 text-white"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#1597E5] font-bold">
              N
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Nexora ERP
            </span>
          </Link>

          {/* Main copy */}
          <div className="relative z-10 max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
              {t("left.eyebrow")}
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-white xl:text-6xl [@media(max-height:900px)]:text-5xl [@media(max-height:780px)]:text-4xl">
              {t("left.titleLine1")}
              <br />
              {t("left.titleLine2")}
              <br />
              {t("left.titleLine3")}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 [@media(max-height:780px)]:mt-4 [@media(max-height:780px)]:text-sm [@media(max-height:780px)]:leading-6">
              {t("left.description")}
            </p>
          </div>

          {/* Mini Dashboard */}
          <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur [@media(max-height:780px)]:p-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs text-slate-500">
                  {t("left.totalSales")}
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  {t("left.totalSalesValue")}
                </p>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                +12%
              </span>
            </div>

            <div className="mt-5 flex h-24 items-end gap-2 [@media(max-height:900px)]:h-20 [@media(max-height:780px)]:mt-3 [@media(max-height:780px)]:h-16">
              {[38, 50, 42, 70, 58, 82, 68, 90, 76, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-sky-500 to-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* RIGHT AUTH */}
        <section className="relative flex min-h-[100dvh] items-center justify-center overflow-y-auto px-6 py-10 sm:px-10 lg:px-16 [@media(max-height:900px)]:py-7 [@media(max-height:780px)]:py-5">
          {/* Back */}
          <Link
            href="/"
            className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 lg:left-10 lg:top-10"
          >
            <ArrowLeft size={16} />
            {t("back")}
          </Link>

          <div className="w-full max-w-[420px]">
            {/* Mobile Logo */}
            <Link
              href="/"
              className="mb-8 flex items-center gap-2 lg:hidden"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#1597E5] text-sm font-bold text-white">
                N
              </div>

              <span className="font-semibold text-slate-950">
                Nexora ERP
              </span>
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597E5]">
              {t("welcome")}
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-slate-950 [@media(max-height:780px)]:text-3xl">
              {t("title")}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {t("description")}
            </p>

            {/* Status Message */}
            {message && (
              <div
                className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                  message.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : message.type === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "border-sky-200 bg-sky-50 text-sky-700"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 size-4 shrink-0" />
                )}

                {message.text}
              </div>
            )}

            {/* Social Login */}
            <div className="mt-7 space-y-3 [@media(max-height:900px)]:mt-5 [@media(max-height:780px)]:space-y-2">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <FaGoogle size={17} />
                {t("continueWithGoogle")}
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin("Apple")}
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-slate-950 text-sm font-medium text-white transition-all hover:bg-slate-800"
              >
                <FaApple size={19} />
                {t("continueWithApple")}
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4 [@media(max-height:900px)]:my-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs text-slate-400">
                {t("or")}
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 [@media(max-height:780px)]:space-y-4"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {t("email")}
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (emailError) {
                      setEmailError("");
                    }
                  }}
                  placeholder={t("emailPlaceholder")}
                  className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 ${
                    emailError
                      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                      : "border-slate-200 focus:border-[#1597E5] focus:ring-4 focus:ring-sky-100"
                  }`}
                />

                {emailError && (
                  <p className="mt-2 text-xs text-red-500">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    {t("password")}
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setMessage({
                        type: "info",
                        text: t("messages.forgotPassword"),
                      })
                    }
                    className="text-xs font-medium text-[#1597E5] hover:text-[#0F86CC]"
                  >
                    {t("forgotPassword")}
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);

                      if (passwordError) {
                        setPasswordError("");
                      }
                    }}
                    placeholder={t("passwordPlaceholder")}
                    className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 ${
                      passwordError
                        ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                        : "border-slate-200 focus:border-[#1597E5] focus:ring-4 focus:ring-sky-100"
                    }`}
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                    aria-label={
                      showPassword
                        ? t("hidePassword")
                        : t("showPassword")
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {passwordError && (
                  <p className="mt-2 text-xs text-red-500">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1597E5] text-sm font-semibold text-white shadow-lg shadow-[#1597E5]/20 transition-all hover:bg-[#0F86CC] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {t("signingIn")}
                  </>
                ) : (
                  <>
                    {t("signIn")}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500 [@media(max-height:900px)]:mt-4">
              {t("noAccount")}{" "}
              <button
                type="button"
                onClick={() =>
                  setMessage({
                    type: "info",
                    text: t("messages.freeTrial"),
                  })
                }
                className="font-semibold text-[#1597E5] hover:text-[#0F86CC]"
              >
                {t("startFreeTrial")}
              </button>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400 [@media(max-height:900px)]:mt-5 [@media(max-height:780px)]:mt-4">
              {t("legal")}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}