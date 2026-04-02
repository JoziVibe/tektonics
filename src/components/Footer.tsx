import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CookieSettingsModal } from "./ui/cookie-settings-modal";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group shrink-0 h-12 py-1.5">
              <div className="relative h-full aspect-[4/1]">
                <Image 
                  src="/assets/Brand Identity/D2 High-Resolution White Transparent.png" 
                  alt="Tektonics Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/50 leading-relaxed mb-6">
              Empowering the next generation of African digital infrastructure with world-class DCIM and IT management excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/tektonics-systems/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <Link href="#" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <a href="https://wa.me/27615441608" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/50 hover:text-white flex items-center gap-1 group">Home</Link></li>
              <li><Link href="/#solutions" className="text-white/50 hover:text-white flex items-center gap-1 group">Solutions</Link></li>
              <li><Link href="/product/notifications-gateway" className="text-white/50 hover:text-white flex items-center gap-1 group">Notifications Gateway</Link></li>
              <li><Link href="/product/flux" className="text-white/50 hover:text-white flex items-center gap-1 group">Flux</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white flex items-center gap-1 group">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Use Cases</h4>
            <ul className="space-y-4">
              <li><Link href="/use-cases/dcim" className="text-white/50 hover:text-white flex items-center gap-1 group">DCIM</Link></li>
              <li><Link href="/use-cases/environmental-monitoring" className="text-white/50 hover:text-white flex items-center gap-1 group">Environmental Monitoring</Link></li>
              <li><Link href="/use-cases/notifications-gateway" className="text-white/50 hover:text-white flex items-center gap-1 group">Notifications Gateway</Link></li>
              <li><Link href="/use-cases/tektonics-flux" className="text-white/50 hover:text-white flex items-center gap-1 group">Tektonics Flux</Link></li>
              <li><Link href="/use-cases/dry-contact-monitoring" className="text-white/50 hover:text-white flex items-center gap-1 group">Dry Contact Monitoring</Link></li>
              <li><Link href="/use-cases/netxms" className="text-white/50 hover:text-white flex items-center gap-1 group">NetXMS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/50 hover:text-white flex items-center gap-1 group">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white flex items-center gap-1 group">Terms of Service</Link></li>
              <li>
                <CookieSettingsModal>
                  <button className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group">Cookie Settings</button>
                </CookieSettingsModal>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Tektonics Systems. All rights reserved.
          </p>
          <div className="text-sm text-white/30 flex items-center gap-1">
            Made with 🤍 by <a href="https://virtuosodevs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium transition-colors">Virtuoso Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
