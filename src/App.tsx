import { useState } from "react";

/* ============================================================
   Real client-supplied images (hosted on ibb.co)
   ============================================================ */
const IMG = {
  logo: "https://i.ibb.co/rfZQQ9jH/Untitled-1-copy.jpg",            // SK logo
  automationBoxes: "https://i.ibb.co/Nd1yxWFh/IMG-20260424-WA0009.jpg", // 6 grey boxes
  apfcPanel: "https://i.ibb.co/W4CJKjBX/IMG-20260424-WA0006.jpg",
  mccPanelPhoto: "https://i.ibb.co/TqLj1S5Y/IMG-20260424-WA0007.jpg",
  pccPanelPhoto: "https://i.ibb.co/WNtzSWf2/IMG-20260424-WA0005.jpg",
  mccPoster: "https://i.ibb.co/tyqvyfY/IMG-20260424-WA0002.jpg",
  pccPoster: "https://i.ibb.co/RGfLKXKs/IMG-20260424-WA0003.jpg",
  amfPoster: "https://i.ibb.co/q32vW6xs/IMG-20260424-WA0001.jpg",
  redPanel: "https://i.ibb.co/YFDCbw34/IMG-20260424-WA0000.jpg",
  controlBoxes: "https://i.ibb.co/nNWPMxXb/IMG-20260424-WA0010.jpg",
};

const WHATSAPP_LINK = "https://wa.me/917200744037";

/* ============================================================
   HEADER + HERO
   ============================================================ */
function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Products", "Projects", "About Us", "Contact Us"];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center">
            <img
              src={IMG.logo}
              alt="SK Power Solutions logo"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm sm:text-base font-black text-[#0a1f44] tracking-tight">
              SK POWER SOLUTIONS
            </div>
            <div className="hidden sm:block text-[9px] font-semibold uppercase tracking-wider text-orange-600">
              Reliable Power for Non-Stop India
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "")}`}
              className="text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-orange-600"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-[#0a1f44] hover:border-orange-500 hover:text-orange-600 md:flex"
          >
            📞 WhatsApp Support
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600 md:inline-block"
          >
            Free Consultation
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-slate-200 lg:hidden"
            aria-label="Menu"
          >
            <span className="h-0.5 w-5 bg-[#0a1f44]" />
            <span className="h-0.5 w-5 bg-[#0a1f44]" />
            <span className="h-0.5 w-5 bg-[#0a1f44]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-slate-700"
              >
                {l}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-bold text-white"
            >
              💬 WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#0e2a5c] to-[#0a1f44] text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-10 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300">
            ⚡ Bangalore's Trusted Electrical Partner
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
            HIGH-PERFORMANCE{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              ELECTRICAL PANEL
            </span>{" "}
            SOLUTIONS FOR <span className="text-orange-400">NON-STOP POWER.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Industrial electrical panels — <strong>PCCs, MCCs, and AMF panels.</strong> We offer
            expert sales, installation, and comprehensive service. Bangalore's trusted electrical
            partner for industries that simply cannot afford to stop.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/40 transition hover:bg-orange-600"
            >
              Request Free Onsite Consultation
            </a>
            <a
              href="#products"
              className="rounded-md border-2 border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:bg-white/10"
            >
              View Our Panels →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">★★★★★</div>
              <div>
                <div className="font-bold">4.8 / 5</div>
                <div className="text-xs text-slate-300">45 Customer Reviews</div>
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 font-bold backdrop-blur transition hover:bg-white/20"
            >
              💬 Chat with us (7200744037)
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="text-3xl font-black text-orange-400">500+</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-300">Panels Built</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-400">5+</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-300">Years</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-400">24/7</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-300">Support</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-orange-500/30 via-yellow-400/10 to-blue-400/20 blur-3xl" />
          <div className="relative flex h-[480px] w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-white p-4 shadow-2xl ring-4 ring-white/20 sm:h-[560px]">
            <img
              src={IMG.pccPoster}
              alt="PCC Power Control Center panel by SK Power Solutions"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-orange-500 p-4 text-white shadow-2xl sm:block">
            <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">Custom Built</div>
            <div className="text-base font-black">PCC · MCC · AMF</div>
            <div className="text-[10px] opacity-90">Up to 6300A · IP54 rated</div>
          </div>
          <div className="absolute -right-4 top-6 hidden rounded-xl bg-white p-3 text-[#0a1f44] shadow-2xl ring-1 ring-slate-200 sm:block">
            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">In Stock</div>
            <div className="text-sm font-black">Ready to ship</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY CHOOSE / SK ADVANTAGE
   ============================================================ */
function WhyChoose() {
  const items = [
    {
      icon: "⚙️",
      title: "End-To-End Solutions",
      desc: "From panel design and component selection to installation and ongoing maintenance, we handle it all under one roof.",
    },
    {
      icon: "⏱️",
      title: "Rapid Response Time",
      desc: "Local presence in Bangalore ensures quick on-site support whenever your facility needs us.",
    },
    {
      icon: "🛡️",
      title: "Genuine Parts & Warranty",
      desc: "We use only certified spares from authorised channel partners and back every panel with a written warranty.",
    },
    {
      icon: "👷",
      title: "Skilled Technicians",
      desc: "Our team brings deep expertise across every major electrical brand — precision wiring on every job.",
    },
    {
      icon: "🎧",
      title: "Dedicated Support",
      desc: "Get a dedicated account manager and a priority support hotline for fault calls.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      desc: "Direct manufacturer partnerships allow us to deliver the best value in the market.",
    },
  ];
  return (
    <section id="features" className="relative bg-[#0a1f44] py-20 text-white">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #f97316 1px, transparent 1px), radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
            The SK Advantage
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            WHY CHOOSE <span className="text-orange-400">SK POWER SOLUTIONS</span>
          </h2>
          <p className="mt-4 text-slate-300">
            Six concrete reasons industries across South India choose us as their long-term
            electrical partner.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/[0.08]"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/30" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-3xl shadow-lg shadow-orange-500/30">
                  {it.icon}
                </div>
                <h3 className="mt-5 text-xl font-black uppercase tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCT SHOWCASE
   ============================================================ */
type ProductProps = {
  tag: string;
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  imageContain?: boolean;
  bgTone?: "light" | "dark";
  cropPosition?: string;
  highlightInfo?: string;
};

function ProductCard({
  tag,
  title,
  subtitle,
  features,
  image,
  alt,
  reverse,
  imageContain,
  bgTone = "light",
  cropPosition = "center 25%",
  highlightInfo,
}: ProductProps) {
  const dark = bgTone === "dark";
  return (
    <div
      className={`grid overflow-hidden rounded-2xl shadow-lg ring-1 lg:grid-cols-2 ${
        dark
          ? "bg-[#0a1f44] text-white ring-[#0a1f44]/30"
          : "bg-white text-slate-800 ring-slate-200"
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-slate-100 ${
          reverse ? "lg:order-2" : ""
        }`}
        style={{ minHeight: imageContain ? "420px" : "480px", maxHeight: "560px" }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full ${
            imageContain ? "object-contain p-6" : "object-cover"
          }`}
          style={imageContain ? undefined : { objectPosition: cropPosition }}
        />
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <span
          className={`inline-block w-fit rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
            dark ? "bg-orange-500/20 text-orange-300" : "bg-orange-100 text-orange-600"
          }`}
        >
          {tag}
        </span>
        <h3
          className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${
            dark ? "text-white" : "text-[#0a1f44]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm font-semibold ${
            dark ? "text-orange-300" : "text-orange-600"
          }`}
        >
          {subtitle}
        </p>
        {highlightInfo && (
          <p className={`mt-4 text-lg font-black uppercase tracking-tight ${dark ? 'text-white' : 'text-[#0a1f44]'}`}>
            {highlightInfo}
          </p>
        )}
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                  dark ? "bg-orange-400 text-[#0a1f44]" : "bg-[#0a1f44] text-white"
                }`}
              >
                ✓
              </span>
              <span className={dark ? "text-slate-200" : "text-slate-700"}>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className={`inline-block rounded-md px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
              dark
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-[#0a1f44] text-white hover:bg-[#0e2a5c]"
            }`}
          >
            Request Quote →
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductShowcase() {
  const fireFeatures = [
    "Star-Delta / DOL starter for jockey, main & diesel pumps",
    "Pressure-switch based auto cut-in logic",
    "Precision time-based sequential pump operation",
    "Integrated dual-mode Auto/Manual control systems",
  ];

  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            Our Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-black text-[#0a1f44] sm:text-5xl">
            OUR RANGE OF <span className="text-orange-500">CUSTOM-BUILT</span> ELECTRICAL PANELS
          </h2>
          <p className="mt-4 text-slate-600">
            Every panel is engineered, wired and tested in-house using only branded components from
            ABB, Schneider, C&amp;S, Salzer, Lauritz Knudsen, Orbit and Polycab.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <ProductCard
            tag="PCC Series"
            title="PCC (Power Control Center) Panel"
            subtitle="Centralized control for the entire facility"
            features={[
              "High current handling capacity (up to 6300A)",
              "Main circuit protection with ACB / MCCB",
              "Comprehensive monitoring & metering",
              "Mechanical & electrical interlocking capabilities",
            ]}
            image={IMG.pccPoster}
            alt="PCC Power Control Center Panel"
            imageContain
          />

          <ProductCard
            tag="MCC Series"
            title="MCC (Motor Control Center) Panel"
            subtitle="Grouped, modular motor control"
            features={[
              "Individual motor protection per starter",
              'Modular "bucket" design for easy maintenance',
              "Centralized control & automation ready",
              "Soft-start & VFD speed-control compatible",
            ]}
            image={IMG.mccPoster}
            alt="MCC Motor Control Center Panel"
            imageContain
            reverse
            bgTone="dark"
          />

          {/* New PLC Section — Using the grey boxes image as requested */}
          <ProductCard
            tag="Automation"
            title="PLC & Automation Control Panels"
            subtitle="Intelligent process control and data acquisition"
            features={[
              "Custom PLC logic integration (Siemens, Delta, Schneider)",
              "HMI touch-screen interface for real-time monitoring",
              "PID loop control for temperature and pressure precision",
              "SCADA compatible communication architecture",
            ]}
            image={IMG.automationBoxes}
            alt="PLC & Automation Control Panels"
            imageContain
          />

          <ProductCard
            tag="AMF Series"
            title="AMF (Automatic Mains Failure) Panel"
            subtitle="Seamless power restoration in seconds"
            features={[
              "Automatic changeover (Mains → DG)",
              "Auto-restoration & DG shutdown logic",
              "Battery charging & live monitoring",
              "Safety interlocking — mechanical & electrical",
            ]}
            image={IMG.amfPoster}
            alt="AMF Automatic Mains Failure panel"
            imageContain
            reverse
            bgTone="dark"
          />

          <ProductCard
            tag="APFC / Capacitor"
            title="APFC Capacitor Panel"
            subtitle="Cut your electricity bill, eliminate PF penalties"
            features={[
              "8-step / 12-step APFC controller (Trinity / EPCOS)",
              "Heavy-duty contactors & detuned reactors",
              "Manual / Auto selectable per stage",
              "Real-time PF display & alarm logic",
            ]}
            image={IMG.apfcPanel}
            alt="APFC Capacitor Panel"
            imageContain
          />

          <ProductCard
            tag="Fire Safety"
            title="Fire-Fighting & Pump Control Panel"
            subtitle="Industrial-grade reliability for critical safety systems"
            features={fireFeatures}
            image={IMG.redPanel}
            alt="Red fire-fighting pump control panel"
            imageContain
            reverse
            bgTone="dark"
          />

          {/* Fire Fighting Panel (HP Variant) — Reverted to correct boxes image */}
          <ProductCard
            tag="Fire Safety"
            title="Fire Fighting Panel"
            subtitle="High-capacity industrial pump solutions"
            highlightInfo="Capacity: 5HP to 1500HP — Available for immediate deployment"
            features={fireFeatures}
            image={IMG.controlBoxes}
            alt="Fire Fighting Panel HP Variant"
            imageContain
            reverse
            bgTone="dark"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENEFITS — PROVEN RELIABLE POWER
   ============================================================ */
function Benefits() {
  const cols = [
    {
      icon: "🛡️",
      title: "Reliability",
      text: "Every panel is built for 24/7 industrial duty. The intricate, color-coded internal wiring across our PCC, MCC and AMF jobs is proof — we engineer for decades, not days.",
    },
    {
      icon: "🏆",
      title: "Quality",
      text: "Genuine components sourced direct from ABB, Schneider, C&S, Lauritz Knudsen, Salzer, Orbit and Polycab — never grey-market. Every spare carries the manufacturer's warranty.",
    },
    {
      icon: "🔧",
      title: "On-Site Expertise",
      text: "Our certified engineers commission, terminate and label every panel by hand. The meticulous custom labels and clean terminations in our gallery are the standard, not the exception.",
    },
  ];
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            Built to Last
          </span>
          <h2 className="mt-3 text-3xl font-black text-[#0a1f44] sm:text-5xl">
            PROVEN RELIABLE POWER:{" "}
            <span className="text-orange-500">BUILT FOR A NON-STOP INDIA.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Three pillars that have made SK Power Solutions the preferred electrical partner for
            industries across Karnataka.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-[#0a1f44] via-orange-500 to-[#0a1f44]" />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a1f44] to-[#1e40af] text-3xl shadow-lg">
                {c.icon}
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#0a1f44]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function About() {
  return (
    <section id="aboutus" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-black text-[#0a1f44] sm:text-4xl">
            Bangalore's go-to manufacturer for{" "}
            <span className="text-orange-500">industrial electrical panels.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Founded and run by <strong>Sarath Kumar R</strong>, SK Power Solutions designs,
            manufactures, installs and services low-voltage electrical panels for industries
            across South India. Operating out of our Bommasandra workshop, we ship custom-built PCC,
            MCC, AMF, APFC and bespoke control panels to clients in pharma, food processing,
            automotive, real-estate and infrastructure.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black text-[#0a1f44]">500+</div>
              <div className="text-xs font-semibold uppercase text-slate-500">
                Panels Delivered
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black text-[#0a1f44]">100+</div>
              <div className="text-xs font-semibold uppercase text-slate-500">
                Repeat Clients
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black text-[#0a1f44]">7</div>
              <div className="text-xs font-semibold uppercase text-slate-500">
                Brand Partnerships
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black text-[#0a1f44]">5+</div>
              <div className="text-xs font-semibold uppercase text-slate-500">
                Years Experience
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-200 to-blue-200 blur-2xl opacity-60" />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:h-80">
                <img
                  src={IMG.pccPoster}
                  alt="PCC Power Control Center panel"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:h-80">
                <img
                  src={IMG.amfPoster}
                  alt="AMF Automatic Mains Failure panel"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="col-span-2 flex h-48 w-full items-center justify-center rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:h-56">
                <img
                  src={IMG.mccPoster}
                  alt="MCC Motor Control Center panel"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact() {
  const cards = [
    {
      icon: "📍",
      title: "Address",
      lines: [
        "No. 804/85, First Floor, Sy. No. 114",
        "Kachanayakanahalli, Bommasandra Industrial Area",
        "Near SBI Bank, Jigani Hobli, Anekal Taluk",
        "Bangalore — 560099, Karnataka",
      ],
    },
    {
      icon: "📞",
      title: "Call Us",
      lines: [
        "Sarath Kumar R",
        "+91 72007 44037",
        "Mon – Sat · 9am – 7pm",
        "WhatsApp available",
      ],
    },
    {
      icon: "✉️",
      title: "Email Us",
      lines: [
        "sarathkumar16218975@gmail.com",
        "GSTIN: 29KHDPS3158H1ZR",
        "Quotes within 24 hours",
        "Free site survey on request",
      ],
    },
  ];
  return (
    <section id="contactus" className="bg-[#0a1f44] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            LET'S DISCUSS YOUR{" "}
            <span className="text-orange-400">PROJECT REQUIREMENTS.</span>
          </h2>
          <p className="mt-4 text-slate-300">
            Talk to our engineers about your load, panel rating and timelines — we'll come back with
            a detailed quote and BOM within 24 hours.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400/50"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/20 blur-2xl transition group-hover:bg-orange-500/40" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl shadow-lg shadow-orange-500/40">
                  {c.icon}
                </div>
                <h3 className="mt-5 text-xl font-black uppercase">{c.title}</h3>
                <div className="mt-3 space-y-1 text-sm text-slate-200">
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-orange-400/30 bg-orange-500/10 p-8 text-center">
          <h3 className="text-2xl font-black sm:text-3xl">Need a panel urgently?</h3>
          <p className="max-w-xl text-sm text-slate-200">
            We keep PCC / MCC / AMF panel skeletons in stock for fast turnaround. Call us directly
            or chat on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/40 transition hover:bg-orange-600"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-green-500 px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg shadow-green-500/40 transition hover:bg-green-600"
            >
              💬 Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded bg-white flex items-center justify-center shrink-0">
                <img
                  src={IMG.logo}
                  alt="SK Power Solutions"
                  className="h-[150%] w-[150%] object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-base font-black text-white">SK POWER SOLUTIONS</div>
                <div className="text-[10px] uppercase tracking-wider text-orange-400">
                  Reliable Power for Non-Stop India
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Manufacturer & supplier of custom-built industrial electrical panels — PCC, MCC, AMF,
              APFC, VFD and bespoke control enclosures. Serving industries across Karnataka & South
              India.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {["Features", "Products", "Projects", "About Us", "Contact Us"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-orange-400"
                  >
                    → {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>GSTIN: 29KHDPS3158H1ZR</li>
              <li>Proprietor: Sarath Kumar R</li>
              <li>ISO-grade quality processes</li>
              <li>Authorised channel partner</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} SK Power Solutions. All Rights Reserved.</p>
          <p>
            Designed for industries that{" "}
            <span className="font-bold text-orange-400">cannot afford to stop.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WHATSAPP
   ============================================================ */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-3 py-3 text-white shadow-2xl shadow-green-500/40 ring-4 ring-green-300/30 transition hover:scale-105 hover:bg-green-600 sm:px-4"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6 fill-green-500">
          <path d="M16.001 2.667C8.638 2.667 2.668 8.637 2.668 16c0 2.628.769 5.077 2.094 7.144L2.667 29.333l6.36-2.069A13.27 13.27 0 0016 29.333c7.363 0 13.333-5.97 13.333-13.333S23.363 2.667 16.001 2.667zm0 24c-2.246 0-4.34-.692-6.072-1.875l-4.245 1.38 1.38-4.245A10.62 10.62 0 015.336 16c0-5.882 4.785-10.667 10.665-10.667 5.882 0 10.667 4.785 10.667 10.667S21.883 26.667 16.001 26.667zm5.787-7.967c-.318-.16-1.882-.928-2.174-1.034-.292-.106-.504-.16-.717.16-.213.318-.823 1.034-1.009 1.247-.186.213-.371.24-.69.08-.318-.16-1.343-.495-2.56-1.578-.946-.844-1.585-1.886-1.771-2.204-.186-.318-.02-.49.14-.65.144-.143.318-.371.477-.557.16-.186.213-.318.318-.531.106-.213.053-.398-.027-.557-.08-.16-.717-1.728-.982-2.367-.259-.622-.522-.537-.717-.547l-.611-.011a1.176 1.176 0 00-.851.398c-.292.318-1.115 1.09-1.115 2.658 0 1.567 1.142 3.082 1.301 3.295.16.213 2.247 3.43 5.443 4.81.76.328 1.354.524 1.817.671.764.243 1.46.209 2.011.127.613-.092 1.882-.769 2.148-1.512.265-.743.265-1.379.186-1.512-.08-.133-.292-.213-.61-.371z" />
        </svg>
      </span>
      <div className="hidden pr-2 text-left sm:block">
        <div className="text-[10px] font-bold uppercase tracking-wider text-green-100">
          Online now
        </div>
        <div className="text-sm font-black leading-tight">Chat with Us</div>
      </div>
    </a>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <ProductShowcase />
        <Benefits />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
