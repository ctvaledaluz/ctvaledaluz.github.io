import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a CT Vale da Luz no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
