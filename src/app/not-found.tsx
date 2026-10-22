import Link from "next/link";
import "./style.css";

export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <head>
        <title>404 · Page Not Found | An Khang</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] font-sans min-h-[100dvh] flex items-center justify-center relative overflow-hidden px-6">
        <div className="text-center max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-white/30" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-75">
              Error 404 · Page Not Found
            </span>
            <span className="h-px w-8 bg-white/30" />
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-6">
            404<span className="italic font-normal ml-3 opacity-60">.</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
            The route you requested does not exist.
          </p>

          <p className="font-light text-base sm:text-lg opacity-80 leading-relaxed mb-12 max-w-xl mx-auto">
            The URL may have moved, or the address entered was invalid. You can safely return to the home terminal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="border border-white bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-85 transition-opacity duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <span>Return to terminal</span>
            </Link>
            <Link
              href="/projects/"
              className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <span>Explore selected work</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
