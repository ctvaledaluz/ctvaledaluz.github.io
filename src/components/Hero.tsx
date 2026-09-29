export default function Hero({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="relative flex min-h-[45vh] items-end border-b-2 border-black bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="container-page relative py-16">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
