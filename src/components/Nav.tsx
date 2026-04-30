import logo from "@/assets/worthy-logo.jpg";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Worthy Studios logo" className="h-10 w-10 rounded-md object-cover" />
          <span className="hidden text-sm font-semibold tracking-[0.3em] sm:block">WORTHY STUDIOS</span>
        </a>
        <nav className="glass hidden items-center gap-8 rounded-full px-6 py-2 text-xs font-medium tracking-[0.2em] uppercase md:flex">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href="https://wa.me/255788626375?text=Hello%20Worthy%20Studios%2C%20I%20want%20to%20place%20an%20order."
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
        >
          Order
        </a>
      </div>
    </header>
  );
}
