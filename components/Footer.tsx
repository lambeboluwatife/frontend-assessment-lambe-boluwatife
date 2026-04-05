const Footer = () => {
  return (
    <footer className="bg-[#131314] w-full py-12 mt-20 border-t border-[#d0c5b2]/10 flex flex-col items-center gap-6 px-10">
      <div className="flex flex-col items-center gap-2 mb-4">
        <span className="text-primary font-bold font-headline text-2xl tracking-tighter">
          THE ARCHIVE
        </span>
        <span className="font-label text-[9px] tracking-[0.5em] text-on-surface-variant/40 uppercase">
          The Archive&apos;s Journal
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <a
          className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#d0c5b2]/60 hover:text-primary transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#d0c5b2]/60 hover:text-primary transition-colors"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#d0c5b2]/60 hover:text-primary transition-colors"
          href="#"
        >
          Press Kit
        </a>
        <a
          className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#d0c5b2]/60 hover:text-primary transition-colors"
          href="#"
        >
          Archive Access
        </a>
      </div>
      <div className="mt-8 text-center">
        <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#d0c5b2]/40">
          © {new Date().getFullYear()} THE ARCHIVE CINEMATIC EDITORIAL. ALL
          RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
