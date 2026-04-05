import { BookA, Search, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-secondary backdrop-blur-md shadow-2xl shadow-black/50 border-none transition-colors duration-300">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-full">
        <div className="flex items-center gap-12">
          <a
            className="text-2xl font-black text-primary uppercase font-serif tracking-tight"
            href="#"
          >
            THE ARCHIVE
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <input
              className="bg-primary border-b border-outline-variant focus:border-primary outline-none py-2 px-4 w-64 font-label text-xs tracking-widest uppercase transition-all focus:w-80"
              placeholder="Search the archive..."
              type="text"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
              size={16}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="hover:bg-white/5 p-2 transition-all"
              title="Open library"
              aria-label="Open library"
            >
              <BookA className="text-primary" size={20} />
            </button>
            <button
              className="hover:bg-white/5 p-2 transition-all"
              title="Open profile"
              aria-label="Open profile"
            >
              <UserCircle className="text-primary" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
