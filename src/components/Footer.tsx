import { Coffee } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cafe-dark text-cafe-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Coffee className="w-8 h-8" />
            <span>RanCafe</span>
          </div>

          {/* Social Media */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-cream/70 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-cream/70 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-cream/70 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-cafe-cream/70 text-sm">
            © 2025 RanCafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
