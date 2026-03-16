import Link from "next/link";
import { Cpu, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-headline uppercase">
                TEKTONICS
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-6">
              Empowering the next generation of African digital infrastructure with world-class DCIM and IT management excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-accent hover:bg-white/10 transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/50 hover:text-white flex items-center gap-1 group">Power Intelligence <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white flex items-center gap-1 group">Environmental Guardian <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white flex items-center gap-1 group">Asset Management <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white flex items-center gap-1 group">SecureGate <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#overview" className="text-white/50 hover:text-white">Our Mission</Link></li>
              <li><Link href="#success" className="text-white/50 hover:text-white">Case Studies</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white">African Presence</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-headline">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Stay updated with the latest in DCIM technology and African IT trends.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent w-full"
              />
              <button className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Tektonics Systems. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/30">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
