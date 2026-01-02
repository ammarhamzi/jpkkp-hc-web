import React from 'react';
import SEO from '../components/SEO';
import { User } from 'lucide-react';

const Structure: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Carta Organisasi" 
        description="Barisan kepimpinan dan struktur organisasi JPKKP Hulu Chuchoh."
      />
       <div className="bg-stone-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-stone-900 font-serif">Carta Organisasi</h1>
          <p className="mt-4 text-xl text-stone-500">
            Barisan kepimpinan JPKKP Hulu Chuchoh bagi sesi terkini.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Placeholder container for the image */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 w-full bg-stone-100 flex flex-col items-center justify-center p-16 text-center min-h-[500px]">
            
            <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                <User className="h-16 w-16 text-stone-300" />
            </div>
            
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Carta Organisasi Akan Datang</h3>
            <p className="text-stone-500 max-w-md mx-auto mb-8">
              Pihak pentadbiran sedang mengemaskini maklumat carta organisasi rasmi. Gambar carta organisasi akan dipaparkan di sini dalam masa terdekat.
            </p>
            
            {/* 
                INSTRUCTION FOR DEVELOPER:
                Replace the above mock content with an <img> tag once the user provides the file.
                Example: <img src="/path/to/org-chart.jpg" alt="Carta Organisasi JPKK" className="w-full h-auto" />
            */}
          </div>
        </div>

        {/* Text based summary (Optional fallback) */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-serif">Jawatankuasa Tertinggi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="text-sm text-jpkkRed font-bold uppercase tracking-wider mb-1">Pengerusi</p>
                <h4 className="text-xl font-semibold text-stone-900">Ketua Kampung</h4>
             </div>
             <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="text-sm text-jpkkRed font-bold uppercase tracking-wider mb-1">Setiausaha</p>
                <h4 className="text-xl font-semibold text-stone-900">Setiausaha JPKKP</h4>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;