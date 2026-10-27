import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-[#0a0a0f]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#9b9ba6]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer-link text-sm">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
