import { Clapperboard, Globe, Mail, Share2 } from "lucide-react";

const socialLinks = [
  { icon: Share2, href: "https://twitter.com", label: "Twitter" },
  { icon: Globe, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:contact@movieexplorer.app", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col items-center justify-center gap-4 text-sm text-muted text-center">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Clapperboard className="text-red-500" size={18} />
          <span>
            Movie<span className="text-red-500">Explorer</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p>© 2026 MovieExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;