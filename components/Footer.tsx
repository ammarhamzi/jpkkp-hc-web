import React from 'react';
import { Facebook, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Identity */}
          <div>
            <img src="/img/hc-bg.png" alt="JPKKP Logo" className="h-24 mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-4">JPKKP Hulu Chuchoh</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Jawatankuasa Pembangunan dan Keselamatan Kampung Persekutuan (JPKKP). 
              Komited untuk kemajuan dan kesejahteraan penduduk Hulu Chuchoh.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-4 border-jpkkRed pl-3">Pautan Pantas</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><a href="#/" className="hover:text-jpkkRed transition-colors">Utama</a></li>
              <li><a href="#/about" className="hover:text-jpkkRed transition-colors">Tentang Kami</a></li>
              <li><a href="#/structure" className="hover:text-jpkkRed transition-colors">Carta Organisasi</a></li>
            </ul>
          </div>

          {/* Column 3: Contact (Mock Data) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-4 border-jpkkRed pl-3">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-jpkkRed shrink-0" />
                <span>Balai Raya Kampung Hulu Chuchoh,<br/>Sepang, Selangor</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-jpkkRed shrink-0" />
                <span>+60 12-345 6789 (Ketua Kampung)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} JPKKP Hulu Chuchoh. Hak Cipta Terpelihara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;