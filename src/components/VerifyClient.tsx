"use client";

import { useState } from "react";
import { Search, Shield, CheckCircle, XCircle, User, Church, Calendar, Phone, Mail, QrCode } from "lucide-react";
import type { Member } from "../lib/data";

function StatusBadge({ status }: { status: Member["status"] }) {
  if (status === "ACTIVE")
    return (
      <div className="badge-active">
        <CheckCircle size={12} />
        Mwanachama Halali
      </div>
    );
  if (status === "INACTIVE")
    return (
      <div className="badge-inactive">
        <XCircle size={12} />
        Hana Uanachama Hai
      </div>
    );
  return (
    <div className="badge-suspended">
      <XCircle size={12} />
      Imesimamishwa
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  const joinedDate = new Date(member.joinedAt).toLocaleDateString("sw-TZ", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div style={{ border: "1px solid var(--rule)", background: "white" }}>
      {/* Header band */}
      <div
        className="p-8 flex items-start justify-between gap-6"
        style={{
          background: member.status === "ACTIVE" ? "#F0FAF4" : "#FFF5F5",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="flex items-start gap-5">
          {/* Avatar placeholder */}
          <div
            className="w-20 h-20 flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--rule)" }}
          >
            <User size={36} style={{ color: "var(--muted)" }} />
          </div>
          <div>
            <div className="meta-label mb-2">Kitambulisho: {member.id}</div>
            <h2 className="font-editorial text-2xl md:text-3xl mb-1">{member.fullName}</h2>
            <p className="text-sm font-medium" style={{ color: "var(--mid)" }}>{member.role}</p>
            <div className="mt-3">
              <StatusBadge status={member.status} />
            </div>
          </div>
        </div>

        {/* Shield icon */}
        <div
          className="w-12 h-12 flex items-center justify-center flex-shrink-0"
          style={{ background: member.status === "ACTIVE" ? "#1A8549" : "#C53030" }}
        >
          <Shield size={22} style={{ color: "white" }} />
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {[
          { icon: <Church size={15} />, label: "Kanisa", value: member.church },
          { icon: <Shield size={15} />, label: "Mkoa", value: member.region },
          { icon: <Phone size={15} />, label: "Simu", value: member.phone },
          { icon: <Mail size={15} />, label: "Barua Pepe", value: member.email },
          { icon: <Calendar size={15} />, label: "Alijiunga", value: joinedDate },
          { icon: <User size={15} />, label: "Namba ya Uanachama", value: member.id },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-5"
            style={{
              borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
              borderBottom: i < 4 ? "1px solid var(--rule)" : "none",
            }}
          >
            <span style={{ color: "var(--muted)", marginTop: "2px" }}>{row.icon}</span>
            <div>
              <div className="meta-label mb-1">{row.label}</div>
              <div className="text-sm font-medium" style={{ color: "var(--ink)" }}>{row.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--rule)", background: "var(--paper)" }}
      >
        <span className="meta-label">
          Uhakikiwa: {new Date().toLocaleString("sw-TZ")}
        </span>
        <span className="meta-label" style={{ color: "var(--accent)" }}>
          umkkt.org/verify/{member.id}
        </span>
      </div>
    </div>
  );
}

export default function VerifyClient({ members }: { members: Member[] }) {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState<Member | null | "not-found">(null);

  function handleSearch() {
    const q = query.trim().toUpperCase();
    if (!q) return;
    const result = members.find(
      (m) =>
        m.id.toUpperCase() === q ||
        m.fullName.toUpperCase().includes(q) ||
        m.id.toUpperCase().includes(q)
    );
    setFound(result ?? "not-found");
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-ink text-paper py-16 md:py-24">
        <div className="container-editorial">
          <div className="meta-label mb-4" style={{ color: "#666" }}>
            Mfumo wa Uhakiki
          </div>
          <h1 className="font-editorial text-4xl md:text-6xl font-black mb-4">
            Hakiki<br />
            <span className="italic font-bold">Uanachama</span>
          </h1>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#888" }}>
            Ingiza namba ya kitambulisho au jina la mwanachama, au scan QR Code
            iliyopo kwenye kitambulisho cha mwanachama wa UMKKT.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="section-pad">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <div className="editorial-rule mb-8" />
            <div className="meta-label mb-6">Tafuta kwa Namba au Jina</div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--muted)" }}
                />
                <input
                  type="text"
                  placeholder="Mfano: UMK-2024-001 au Emmanuel Mwanga"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKey}
                  className="input-base"
                  style={{ paddingLeft: "2.75rem" }}
                />
              </div>
              <button onClick={handleSearch} className="btn-primary whitespace-nowrap">
                <Shield size={14} />
                Hakiki
              </button>
            </div>

            {/* QR hint */}
            <div
              className="mt-6 flex items-center gap-3 p-4"
              style={{ background: "#F0F4FA", border: "1px solid #D0DCF0" }}
            >
              <QrCode size={20} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--accent)" }}>
                Scan QR Code ya kitambulisho kwa kutumia kamera ya simu yako. 
                Itakupeleka moja kwa moja kwenye ukurasa huu ukiwa na namba ya mwanachama tayari imejazwa.
              </p>
            </div>
          </div>

          {/* Results */}
          {found !== null && (
            <div className="max-w-3xl mt-12">
              <div className="editorial-rule mb-8" />
              {found === "not-found" ? (
                <div
                  className="p-10 flex flex-col items-center text-center gap-4"
                  style={{ border: "1px solid #FEB2B2", background: "#FFF5F5" }}
                >
                  <div className="w-14 h-14 flex items-center justify-center" style={{ background: "#FEB2B2" }}>
                    <XCircle size={28} style={{ color: "#C53030" }} />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl mb-2">Mwanachama Hapatikani</h3>
                    <p className="text-sm" style={{ color: "var(--mid)" }}>
                      Hakuna mwanachama anayelingana na utafutaji &ldquo;<strong>{query}</strong>&rdquo;.
                      Angalia namba au jina na ujaribu tena.
                    </p>
                  </div>
                </div>
              ) : (
                <MemberCard member={found} />
              )}
            </div>
          )}

          {/* How it works */}
          {found === null && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--rule)" }}>
              {[
                {
                  step: "01",
                  title: "Scan QR Code",
                  desc: "Tumia simu yako scan QR Code iliyopo kwenye kitambulisho cha mwanachama.",
                },
                {
                  step: "02",
                  title: "Taarifa Zinaonekana",
                  desc: "Ukurasa huu utaonyesha picha, jina, cheo, kanisa, na hali ya uanachama.",
                },
                {
                  step: "03",
                  title: "Thibitisha Ukweli",
                  desc: "Rangi ya kijani inamaanisha mwanachama hai na halisi wa UMKKT.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-paper p-8">
                  <div
                    className="font-editorial text-5xl font-black mb-4 leading-none"
                    style={{ color: "var(--rule)" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-editorial text-lg mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}