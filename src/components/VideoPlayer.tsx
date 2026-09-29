export default function VideoPlayer() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
      <video
        className="h-auto w-full"
        controls
        playsInline
        preload="metadata"
        poster="/head3-img.webp"
        aria-label="Vídeo institucional da Comunidade Terapêutica Vale da Luz"
      >
        <source src="/pitch.webm" type="video/webm" />
        Seu navegador não suporta vídeo HTML5. Acesse o arquivo
        diretamente:{" "}
        <a href="/pitch.webm" className="underline">
          pitch.webm
        </a>
        .
      </video>
    </div>
  );
}
