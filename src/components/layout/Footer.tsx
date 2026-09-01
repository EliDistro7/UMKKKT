import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-16">
        <div className="editorial-rule border-paper mb-10" style={{ borderColor: "#333" }} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="UMKKT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-editorial text-2xl">UMKKT</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Umoja wa Makanisa ya Kanisa la Kweli Tanzania. Mfumo rasmi wa uhakiki wa uanachama na taarifa za shirika.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="meta-label text-gray-500 mb-4">Viungo</div>
            <ul className="flex flex-col gap-2">
              {[
                ["Nyumbani", "/"],
                ["Uongozi", "/leadership"],
                ["Makanisa", "/churches"],
                ["Wanachama", "/members"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-paper transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="meta-label text-gray-500 mb-4">Huduma</div>
            <ul className="flex flex-col gap-2">
              {[
                ["Hakiki Mwanachama", "/verify"],
                ["Matukio", "/events"],
                ["Pakua", "/downloads"],
                ["Admin", "/admin"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-paper transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-start gap-4" style={{ borderTop: "1px solid #333" }}>
          <p className="meta-label text-gray-600">
            © {new Date().getFullYear()} UMKKT. Haki zote zimehifadhiwa.
          </p>
          <p className="meta-label text-gray-600">
            Mfumo wa Uhakiki wa Uanachama
          </p>
        </div>
      </div>
    </footer>
  );
}