import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { User, ZoomIn, X } from 'lucide-react';
import { client, urlFor } from '../sanity';

const Structure: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    useEffect(() => {
        const query = '*[_type == "structurePage"][0]';
        client.fetch(query).then(setData).catch(console.error);

        const subscription = client.listen('*[_type == "structurePage"]').subscribe(() => {
            client.fetch(query).then(setData);
        });

        return () => subscription.unsubscribe();
    }, []);

    const header = data?.header || {
        title: 'Carta Organisasi',
        subtitle: 'Barisan kepimpinan JPKKP Hulu Chuchoh bagi sesi terkini.'
    };

    const orgChart = data?.orgChart || {
        placeholderTitle: 'Carta Organisasi Akan Datang',
        placeholderDesc: 'Pihak pentadbiran sedang mengemaskini maklumat carta organisasi rasmi. Gambar carta organisasi akan dipaparkan di sini dalam masa terdekat.'
    };

    const committee = data?.committee || {
        title: 'Jawatankuasa Tertinggi',
        members: [
            { position: 'Pengerusi', name: 'Ketua Kampung' },
            { position: 'Setiausaha', name: 'Setiausaha JPKKP' }
        ]
    };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={data?.title || "Carta Organisasi"} 
        description={data?.description || "Barisan kepimpinan dan struktur organisasi JPKKP Hulu Chuchoh."}
      />
       <div className="bg-stone-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-stone-900 font-serif">{header.title}</h1>
          <p className="mt-4 text-xl text-stone-500">
            {header.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Org Chart Image or Placeholder */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden relative group">
            {orgChart.image ? (
                <div 
                    className="cursor-zoom-in relative"
                    onClick={() => setIsPreviewOpen(true)}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg translate-y-4 group-hover:translate-y-0">
                            <ZoomIn className="h-6 w-6 text-stone-800" />
                        </div>
                    </div>
                    <img 
                        src={urlFor(orgChart.image).url()} 
                        alt="Carta Organisasi JPKKP" 
                        className="w-full h-auto object-contain" 
                    />
                </div>
            ) : (
                <div className="aspect-w-16 aspect-h-9 w-full bg-stone-100 flex flex-col items-center justify-center p-16 text-center min-h-[500px]">
                    <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                        <User className="h-16 w-16 text-stone-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">{orgChart.placeholderTitle}</h3>
                    <p className="text-stone-500 max-w-md mx-auto mb-8">
                    {orgChart.placeholderDesc}
                    </p>
                </div>
            )}
        </div>

        {/* Text based summary (Optional fallback) */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-serif">{committee.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committee.members.map((member: any, index: number) => (
                <div key={index} className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <p className="text-sm text-jpkkRed font-bold uppercase tracking-wider mb-1">{member.position}</p>
                    <h4 className="text-xl font-semibold text-stone-900">{member.name}</h4>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isPreviewOpen && orgChart.image && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setIsPreviewOpen(false)}
        >
            <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setIsPreviewOpen(false)}
            >
                <X size={32} />
            </button>
            <div 
                className="relative max-w-full max-h-full overflow-auto"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking on image wrapper
            >
                <img 
                    src={urlFor(orgChart.image).url()} 
                    alt="Carta Organisasi Full Preview" 
                    className="max-h-[90vh] max-w-[95vw] object-contain rounded-md shadow-2xl"
                />
            </div>
        </div>
      )}
    </div>
  );
};

export default Structure;
