import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "@/assets/worthy-logo.jpg";

export function Loader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setDone(true) });
    tl.fromTo(
      ".loader-logo",
      { scale: 0.6, opacity: 0, filter: "blur(20px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
    )
      .to(".loader-logo", { scale: 1.05, duration: 0.5, ease: "power2.inOut" }, "+=0.3")
      .to(ref.current, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "+=0.2");
  }, []);

  if (done) return null;
  return (
    <div ref={ref} className="loader-mask">
      <img src={logo} alt="Worthy Studios" className="loader-logo h-32 w-32 rounded-2xl object-cover shadow-gold" />
    </div>
  );
}
