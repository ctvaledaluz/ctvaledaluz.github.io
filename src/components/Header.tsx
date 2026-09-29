"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/azul.png"
            alt={SITE_NAME}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="hidden text-base font-bold text-brand-900 sm:block">
            CT Vale da Luz
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-semibold text-brand-600 underline underline-offset-4"
                    : "text-sm font-medium text-gray-700 transition-colors hover:text-brand-600"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2 text-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contato
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <ul className="container-page flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Fale conosco no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
