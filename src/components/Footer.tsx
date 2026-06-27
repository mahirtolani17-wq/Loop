import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-6" />
            <p className="font-sans text-xs tracking-widest text-white/50 uppercase">
              Where Style Meets Precision.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest mb-2 text-sm">Navigation</h4>
            <a href="#home" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#services" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Gallery</a>
            <a href="#about" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">About</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest mb-2 text-sm">Socials</h4>
            <a href="https://www.instagram.com/loopsalons?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Facebook</a>
            <a href="https://share.google/4nX2NQzVwY2ij6eLU" target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-wider text-white/60 hover:text-white transition-colors">Google Reviews</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} Loop Salon. All Rights Reserved.
          </p>
          
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/40">
            Founded by <span className="text-white">Dipak Totlani</span>
          </p>

          <button 
            onClick={scrollToTop}
            className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
