import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  MapPinned,
  MessageCircle,
  Newspaper,
} from "lucide-react";
import {
  ADDRESS,
  CNPJ,
  EMAIL,
  MAPS_URL,
  NAV_LINKS,
  PHONE,
  SITE_NAME,
  WHATSAPP_URL,
} from "@/lib/site";

const ICONS = {
  whatsapp: MessageCircle,
  facebook: Facebook,
  instagram: Instagram,
  blog: Newspaper,
  map: MapPinned,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-gray-200">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Ação assistencial desenvolvida pela SASIEQ — Serviço de Ação Social,
            Integração, Educação e Qualidade, de Joinville - SC, com o objetivo
            de acolher e reabilitar dependentes químicos, usuários de álcool e
            drogas.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Navegação
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Instituição
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {ADDRESS}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>CNPJ: {CNPJ}</li>
          </ul>

          <ul className="mt-5 flex items-center gap-4">
            {(
              [
                { label: "WhatsApp", href: WHATSAPP_URL, icon: "whatsapp" },
                { label: "Facebook", href: "https://www.facebook.com/ctvaledaluz", icon: "facebook" },
                { label: "Instagram", href: "https://www.instagram.com/valedaluzct/", icon: "instagram" },
                { label: "Blog", href: "https://blog.valedaluz.com.br/", icon: "blog" },
                { label: "Localização", href: MAPS_URL, icon: "map" },
              ] as const
            ).map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-500"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <div className="container-page flex flex-col gap-2 py-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_NAME}
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/je4npw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Je4nPw
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
