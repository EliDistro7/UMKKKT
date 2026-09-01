import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Search, Phone } from "lucide-react";
import { leaders } from "../lib/data";

export default function HomePage() {
  const president = leaders.find((l) => l.title.includes("Rais"));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-ink text-paper relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          {/* gradient so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="py-24 md:py-36 max-w-3xl">
            <div className="meta-label text-gray-400 mb-6">
              Umoja wa Makanisa Tanzania
            </div>
            <h1 className="font-editorial text-5xl md:text-7xl font-black leading-none mb-6">
              Uhakiki.<br />
              <span className="italic font-bold">Uaminifu.</span><br />
              Umoja.
            </h1>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10">
              Mfumo rasmi wa uhakiki wa uanachama wa UMKKT. Scan QR Code yoyote
              ya kitambulisho cha mwanachama kupata taarifa kamili na za kweli.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/verify" className="btn-primary" style={{ background: "white", color: "#0A0A0A" }}>
                Hakiki Mwanachama
              </Link>
              <Link href="/members" className="btn-outline" style={{ borderColor: "#555", color: "white" }}>
                Tazama Wanachama
              </Link>
            </div>
          </div>
        </div>

    
      </section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-editorial">
          <div className="editorial-rule mb-8" />
          <div className="meta-label mb-8">Huduma za Haraka</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {[
              {
                icon: <Shield size={24} />,
                title: "Hakiki Uanachama",
                desc: "Thibitisha ukweli wa kitambulisho cha mwanachama wowote wa UMKKT kwa sekunde chache.",
                href: "/verify",
                cta: "Hakiki sasa",
                img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&q=75&auto=format&fit=crop",
                imgAlt: "Uhakiki wa kitambulisho",
              },
              {
                icon: <Search size={24} />,
                title: "Tafuta Kanisa",
                desc: "Pata kanisa la UMKKT karibu nawe kwa kuchagua mkoa, wilaya, au kanda yako.",
                href: "/churches",
                cta: "Tafuta kanisa",
                img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=75&auto=format&fit=crop",
                imgAlt: "Kanisa",
              },
              {
                icon: <Phone size={24} />,
                title: "Wasiliana Nasi",
                desc: "Pata mawasiliano ya viongozi wa kitaifa na wa kanda yako kwa msaada wowote.",
                href: "/leadership",
                cta: "Mawasiliano",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=75&auto=format&fit=crop",
                imgAlt: "Viongozi wa kanisa",
              },
            ].map((item) => (
              <div key={item.title} className="bg-paper flex flex-col">
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.imgAlt}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-ink/10" />
                </div>
                {/* Card body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4 text-accent">{item.icon}</div>
                  <h3 className="font-editorial text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-mid leading-relaxed flex-1">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium hover:text-accent transition-colors"
                  >
                    {item.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── President's Message ─────────────────────────────────── */}
      {president && (
        <section className="section-pad bg-white">
          <div className="container-editorial">
            <div className="editorial-rule mb-8" />
            <div className="meta-label mb-10">Ujumbe wa Rais</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] overflow-hidden bg-rule">
                  <Image
                    src="/joshua.jpeg"
                    alt={president.fullName}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Name overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)" }}
                  >
                    <div className="font-editorial text-lg text-paper">{president.fullName}</div>
                    <div className="meta-label mt-1 text-gray-300">{president.title}</div>
                  </div>
                </div>
              </div>
              {/* Message */}
              <div className="md:col-span-2">
                <h2 className="font-editorial text-4xl md:text-5xl mb-6 leading-tight">
                  "Twajengana katika<br />
                  <em>imani na umoja.</em>"
                </h2>
                <div className="light-rule mb-6" />
                <p className="text-mid leading-relaxed mb-4 max-w-prose">
                  Karibuni katika mfumo rasmi wa UMKKT. Umoja wetu umejengwa
                  juu ya misingi imara ya imani, uwazi, na ushirikiano wa kweli
                  kati ya makanisa yetu yote nchini Tanzania.
                </p>
                <p className="text-mid leading-relaxed max-w-prose">
                  Mfumo huu wa kidijitali ni hatua muhimu katika kuhakikisha
                  kwamba taarifa za wanachama wetu ni salama, zinapatikana, na
                  zinaweza kuthibitishwa kwa urahisi na muda wowote.
                </p>
                <div className="mt-8">
                  <Link href="/leadership" className="btn-outline inline-flex items-center gap-2">
                    Uongozi Wote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <section style={{ background: "#1A3C5E" }} className="py-16 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=60&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-center opacity-10"
          />
        </div>
        <div className="container-editorial text-center relative z-10">
          <div className="meta-label text-blue-300 mb-4">Jiunge Nasi</div>
          <h2 className="font-editorial text-4xl text-white mb-4">
            Je, kanisa lako liko kwenye mfumo?
          </h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Pakua fomu ya usajili na uwasiliane na ofisi ya UMKKT kwa mkoa wako.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/downloads" className="btn-primary" style={{ background: "white", color: "#1A3C5E" }}>
              Pakua Fomu
            </Link>
            <Link href="/churches" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
              Makanisa Yaliyosajiliwa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}