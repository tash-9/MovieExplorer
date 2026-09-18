import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>🎬 MovieExplorer</p>
        <p>© 2026 MovieExplorer. All rights reserved.</p>
        
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-accent transition-colors"
        >
          <ExternalLink size={16} /> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;