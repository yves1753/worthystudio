import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroScene } from "@/components/HeroScene";
import { Nav } from "@/components/Nav";
import { Loader } from "@/components/Loader";
import { TiltCard } from "@/components/TiltCard";
import logo from "@/assets/worthy-logo.jpg";
import tee from "@/assets/product-tee.jpg";
import tee2 from "@/assets/product-tee2.jpg";
import tee3 from "@/assets/product-tee3.jpg";
import teeBadHabit from "@/assets/product-tee-badhabit.jpg";
import teeNewBreed from "@/assets/product-tee-newbreed.jpg";
import teePink255 from "@/assets/product-tee-pink255.jpg";
import teeFortitudine from "@/assets/product-tee-fortitudine.jpg";
import cap from "@/assets/product-cap.jpg";
import cap2 from "@/assets/product-cap2.jpg";
import capGlobeRed from "@/assets/product-cap-globe-red.jpg";
import capGlobeBrown from "@/assets/product-cap-globe-brown.jpg";
import capGlobeCollection from "@/assets/product-cap-globe-collection.jpg";
import capTeal from "@/assets/product-cap-teal.jpg";
import capBlackGold from "@/assets/product-cap-black-gold.jpg";
import capCreamBrown from "@/assets/product-cap-cream-brown.jpg";
import phoneCase from "@/assets/product-case.jpg";
import caseOldMoney from "@/assets/product-case-oldmoney.jpg";
import caseBelleAme from "@/assets/product-case-belleame.jpg";
import caseSmiley from "@/assets/product-case-smiley.jpg";
import caseFloral from "@/assets/product-case-floral.jpg";
import caseEspresso from "@/assets/product-case-espresso.jpg";
import hoodie from "@/assets/product-hoodie.jpg";
import aboutBg from "@/assets/about-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Worthy Studios — Wear Your Worth | Streetwear from Dar es Salaam" },
      {
        name: "description",
        content:
          "Worthy Studios is a premium streetwear brand from Dar es Salaam, Tanzania. Tees, caps, and accessories crafted for identity, culture, and self-worth.",
      },
      { property: "og:title", content: "Worthy Studios — Wear Your Worth" },
      { property: "og:description", content: "Premium streetwear from Dar es Salaam." },
    ],
  }),
  component: Home,
});

type Product = {
  id: string;
  name: string;
  category: "T-Shirts" | "Caps" | "Accessories";
  price: string;
  image: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    id: "worthy-red-tee",
    name: "Worthy Red Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: tee,
    description:
      "Bold red statement tee with the iconic WORTHY block print. Heavyweight cotton, oversized fit.",
  },
  {
    id: "stay-weird-tee",
    name: "Stay Weird Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: hoodie,
    description:
      "Olive long-sleeve from the Stay Weird drop. For the kulture — premium combed cotton.",
  },
  {
    id: "worthy-cream-tee",
    name: "Worthy Cream Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: tee2,
    description:
      "Soft cream tee with the signature worthy. wordmark. Minimal, everyday luxury.",
  },
  {
    id: "worthy-block-tee",
    name: "Worthy Block Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: tee3,
    description:
      "Black tee with bold blue WORTHY side print. Tanzanian luxury, creative dept.",
  },
  {
    id: "wave-cap",
    name: "Wave Studios Cap",
    category: "Caps",
    price: "TZS 40,000",
    image: cap,
    description:
      "Two-tone cream and navy cap with embroidered wave mark and WORTHYSTUDIOS script.",
  },
  {
    id: "unleashed-cap",
    name: "Unleashed Cap",
    category: "Caps",
    price: "TZS 40,000",
    image: cap2,
    description:
      "Forest green dad cap with hand-stitched Unleashed embroidery in gold.",
  },
  {
    id: "monogram-case",
    name: "Monogram Phone Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: phoneCase,
    description:
      "Soft-touch matte case with the gold W mark. Drop-tested. Available for major models.",
  },
  {
    id: "bad-habit-tee",
    name: "Bad Like A Habit Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: teeBadHabit,
    description:
      "Black tee with playful pink graphic print — strawberry, camera, bow & love notes. From the Femme line.",
  },
  {
    id: "new-breed-tee",
    name: "New Breed Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: teeNewBreed,
    description:
      "Black tee repping the global cities — Dar es Salaam, Seoul, Melbourne, London, New York.",
  },
  {
    id: "pink-255-tee",
    name: "Worthystudios 255 Jersey",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: teePink255,
    description:
      "Soft pink jersey-style tee with crest and cursive Worthystudios script. 255 edition.",
  },
  {
    id: "fortitudine-tee",
    name: "Fortitudine Vincimus Tee",
    category: "T-Shirts",
    price: "TZS 30,000",
    image: teeFortitudine,
    description:
      "Cream textured tee with deep burgundy crest and cursive Worthystudios script. By endurance, we conquer.",
  },
  {
    id: "globe-cap-red",
    name: "Globe Cap — Red Brim",
    category: "Caps",
    price: "TZS 40,000",
    image: capGlobeRed,
    description:
      "Two-tone suede cap with embroidered globe-in-hand mark. Black crown, red brim.",
  },
  {
    id: "globe-cap-brown",
    name: "Globe Cap — Brown Suede",
    category: "Caps",
    price: "TZS 40,000",
    image: capGlobeBrown,
    description:
      "Brown suede dad cap with white embroidered globe and WORTHYSTUDIOS script.",
  },
  {
    id: "globe-cap-collection",
    name: "Globe Cap — Burgundy Edition",
    category: "Caps",
    price: "TZS 40,000",
    image: capGlobeCollection,
    description:
      "Limited burgundy & black colorway from the Globe collection. Embroidered crest.",
  },
  {
    id: "old-money-case",
    name: "Old Money Phone Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: caseOldMoney,
    description:
      "Forest green case with Recreation Club crest. Refined, sporty, timeless.",
  },
  {
    id: "belle-ame-case",
    name: "Belle Âme Phone Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: caseBelleAme,
    description:
      "Black checkered case with cherry graphic and Belle Âme typography.",
  },
  {
    id: "smiley-case",
    name: "Whatever Happens Next Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: caseSmiley,
    description:
      "Clean white case with a smiley and the mantra: whatever happens next… happens next.",
  },
  {
    id: "teal-wave-cap",
    name: "Wave Cap — Teal Brim",
    category: "Caps",
    price: "TZS 40,000",
    image: capTeal,
    description:
      "Cream crown with deep teal brim. Embroidered wave mark and gold WORTHYSTUDIOS script.",
  },
  {
    id: "black-gold-wave-cap",
    name: "Wave Cap — Black & Gold",
    category: "Caps",
    price: "TZS 40,000",
    image: capBlackGold,
    description:
      "All-black cap with tonal wave embroidery and gold WORTHYSTUDIOS lettering.",
  },
  {
    id: "cream-brown-wave-cap",
    name: "Wave Cap — Cream & Brown",
    category: "Caps",
    price: "TZS 40,000",
    image: capCreamBrown,
    description:
      "Cream crown with espresso brown brim. Brown wave embroidery and gold script.",
  },
  {
    id: "floral-case",
    name: "Wildflower Phone Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: caseFloral,
    description:
      "Cream case dressed in a vintage wildflower print. Soft, romantic, statement.",
  },
  {
    id: "espresso-martini-case",
    name: "Espresso Martini Phone Case",
    category: "Accessories",
    price: "TZS 25,000",
    image: caseEspresso,
    description:
      "Minimal white case with hand-drawn espresso martinis, hearts and florals.",
  },
];

const WHATSAPP = (msg: string) =>
  `https://wa.me/255788626375?text=${encodeURIComponent(msg)}`;

function Home() {
  const [active, setActive] = useState<Product | null>(null);
  const [category, setCategory] = useState<"T-Shirts" | "Caps" | "Accessories">("T-Shirts");
  const visibleProducts = PRODUCTS.filter((p) => p.category === category);
  const TABS: Array<{ key: "T-Shirts" | "Caps" | "Accessories"; label: string }> = [
    { key: "T-Shirts", label: "T-Shirts" },
    { key: "Caps", label: "Caps" },
    { key: "Accessories", label: "Accessories" },
  ];
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
        delay: 1.6,
      });
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2.6,
        ease: "power2.out",
      });

      // Scroll word reveals
      gsap.utils.toArray<HTMLElement>(".pillar-word").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Section headings
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Parallax on about bg
      gsap.to(".about-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Loader />
      <Nav />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden grain"
      >
        <HeroScene />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, oklch(0.13 0 0 / 0.6) 60%, oklch(0.08 0 0) 100%)",
          }}
        />

        <div ref={heroTextRef} className="relative z-10 px-6 text-center">
          <p className="hero-sub mb-6 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
            Crafted in Dar es Salaam
          </p>
          <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85]">
            <span className="block overflow-hidden">
              <span className="hero-line block shimmer-text">WORTHY</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">STUDIOS</span>
            </span>
          </h1>
          <p className="hero-sub mx-auto mt-8 max-w-md text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Wear Your Worth
          </p>
          <a
            href="#shop"
            className="hero-sub mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-background transition-transform hover:scale-105"
          >
            Explore Collection
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground float-y">
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/50 py-6 overflow-hidden">
        <div className="marquee text-3xl md:text-5xl font-display uppercase tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              <span>Identity</span>
              <span className="text-gold">✦</span>
              <span>Culture</span>
              <span className="text-gold">✦</span>
              <span>Confidence</span>
              <span className="text-gold">✦</span>
              <span>Worth</span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <p data-reveal className="mb-6 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
          The Worthy Code
        </p>
        <div className="space-y-4">
          {["Identity.", "Culture.", "Confidence."].map((w) => (
            <h2
              key={w}
              className="pillar-word font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]"
            >
              {w}
            </h2>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p data-reveal className="mb-3 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
              The Collection
            </p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl">Shop</h2>
          </div>
          <p data-reveal className="max-w-sm text-sm text-muted-foreground">
            Limited drops. Premium materials. Pieces that speak before you do.
          </p>
        </div>

        {/* Category Tabs */}
        <div data-reveal className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {TABS.map((t) => {
            const isActive = category === t.key;
            const count = PRODUCTS.filter((p) => p.category === t.key).length;
            return (
              <button
                key={t.key}
                onClick={() => setCategory(t.key)}
                className={`group relative rounded-full border px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition-all ${
                  isActive
                    ? "border-gold bg-gold text-accent-foreground shadow-gold"
                    : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-foreground"
                }`}
              >
                {t.label}
                <span
                  className={`ml-3 text-[9px] ${isActive ? "text-accent-foreground/70" : "text-muted-foreground/70"}`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div key={category} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          {visibleProducts.map((p) => (
            <TiltCard key={p.id} className="group cursor-pointer">
              <button
                onClick={() => setActive(p)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      View
                    </p>
                  </div>
                  <p className="text-sm text-gold">{p.price}</p>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden py-40"
      >
        <div
          className="about-parallax absolute inset-0 -z-10 opacity-25"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p data-reveal className="mb-6 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
            Our Story
          </p>
          <h2
            data-reveal
            className="font-display text-4xl leading-tight md:text-6xl"
          >
            Worthy Studios is more than clothing.{" "}
            <span className="gradient-gold-text">It is a statement.</span>
          </h2>
          <p
            data-reveal
            className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Born in Dar es Salaam, we craft pieces that carry identity, culture,
            and self-worth. Each drop is a conversation between heritage and the
            future of African streetwear.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p data-reveal className="mb-6 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
          Get in Touch
        </p>
        <h2 data-reveal className="font-display text-5xl md:text-7xl leading-none">
          Order Direct.
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-md text-muted-foreground">
          Slide into our WhatsApp to place an order, request a custom piece, or
          ask anything about a drop.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP("Hello Worthy Studios, I want to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-105 shadow-gold"
          >
            Order on WhatsApp
          </a>
          <a
            href="https://instagram.com/worthystudios.tz"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-[0.3em] transition-colors hover:text-gold"
          >
            @worthystudios.tz
          </a>
        </div>

        <div className="mt-16 grid gap-8 text-sm text-muted-foreground sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Phone</p>
            <p className="mt-2">0788 626 375</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Studio</p>
            <p className="mt-2">Dar es Salaam, Tanzania</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Hours</p>
            <p className="mt-2">Mon — Sat · 09:00 – 19:00</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded object-cover" />
            <span className="text-xs uppercase tracking-[0.3em]">Worthy Studios</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Worthy Studios. Wear Your Worth.
          </p>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="glass relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl shadow-deep md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scale-in 0.4s ease-out" }}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/60 text-lg backdrop-blur hover:bg-background"
              aria-label="Close"
            >
              ×
            </button>
            <div className="aspect-square md:aspect-auto">
              <img
                src={active.image}
                alt={active.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
                {active.category}
              </p>
              <h3 className="font-display text-4xl leading-tight">{active.name}</h3>
              <p className="text-2xl text-gold">{active.price}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              <a
                href={WHATSAPP(
                  `Hello Worthy Studios, I want to order: ${active.name} (${active.price}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02] shadow-gold"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
