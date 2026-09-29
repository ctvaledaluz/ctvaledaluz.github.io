"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PIX_KEY } from "@/lib/site";

export default function PixCopyButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = PIX_KEY;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="break-all rounded-lg bg-gray-100 px-4 py-3 font-mono text-lg font-semibold text-gray-900">
        {PIX_KEY}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={
          copied
            ? "btn-primary !bg-green-600 hover:!bg-green-700"
            : "btn-primary"
        }
      >
        {copied ? (
          <>
            <Check className="h-5 w-5" aria-hidden="true" />
            Copiado!
          </>
        ) : (
          <>
            <Copy className="h-5 w-5" aria-hidden="true" />
            Copiar Chave
          </>
        )}
      </button>
      <p className="text-sm text-gray-600">
        Ou faça a leitura do QR Code pelo app do seu banco.
      </p>
    </div>
  );
}
