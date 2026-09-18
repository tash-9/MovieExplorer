import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>🎬 MovieExplorer</p>
        <p>© 2026 MovieExplorer. All rights reserved.</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          <ExternalLink size={16} /> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
