import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { client, urlFor } from '../sanity';

const AboutPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const query = '*[_type == "aboutPage"][0]';
    
    client.fetch(query).then(setData).catch(console.error);

    const subscription = client.listen('*[_type == "aboutPage"]').subscribe(() => {
      client.fetch(query).then(setData);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fallbacks
  const header = data?.header || {
    title: 'Tentang Kami',
    subtitle: 'Badan peringkat akar umbi yang bertanggungjawab merancang dan mengurus komuniti setempat.'
  };

  const mainContent = data?.mainContent || [
    'JPKKP Hulu Chuchoh merujuk kepada Jawatankuasa Pembangunan dan Keselamatan Kampung Persekutuan Kampung Hulu Chuchoh, iaitu badan di peringkat akar umbi yang bertanggungjawab merancang dan melaksanakan projek di kampung, serta menjadi penghubung antara penduduk dan pihak berkuasa. Perlantikan bermula 1 Mac 2024 hingga 31 Disember 2025.',
    'Fungsi utama JPKKP adalah membuat perancangan dan pelaksanaan projek / program di kampung disamping menggerakkan penglibatan komuniti setempat. JPKKP juga adalah merupakan perantara di peringkat akar umbi yang akan menyalurkan sebarang permasalahan atau aduan kepada pihak-pihak yang berkuasa dan berkaitan terhadap sesuatu isu yang timbul.'
  ];

  const roles = data?.roleSection?.roles || [
    { role: 'Perancangan & Pelaksanaan', description: 'Merancang dan melaksanakan projek serta program di peringkat kampung.' },
    { role: 'Pengurusan Komuniti', description: 'Menggerakkan penglibatan penduduk setempat.' },
    { role: 'Perantaraan', description: 'Menjadi penghubung antara komuniti dan pihak berkuasa untuk isu-isu setempat.' }
  ];

  const roleTitle = data?.roleSection?.title || 'Peranan Utama JPKKP';

  const imageSrc = data?.image 
    ? urlFor(data.image).url() 
    : "https://images.unsplash.com/photo-1756130403367-3878c90c9203?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="bg-white">
      <SEO 
        title={data?.title || "Tentang Kami"} 
        description={data?.description || "Kenali JPKKP Hulu Chuchoh, peranan kami dalam pembangunan kampung, pengurusan komuniti, dan perantaraan dengan pihak berkuasa."}
      />
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif">{header.title}</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
             {header.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            {mainContent.map((text: string, index: number) => (
                <p key={index} className="text-justify">{text}</p>
            ))}
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif border-b pb-2">{roleTitle}</h3>
              <ul className="space-y-6">
                {roles.map((item: any, index: number) => (
                    <li key={index} className="flex">
                       <div className="flex-shrink-0 h-8 w-8 rounded-full bg-jpkkRed flex items-center justify-center text-white font-bold text-sm mt-1 shadow-sm">{index + 1}</div>
                       <div className="ml-4">
                         <p className="font-bold text-gray-900 text-lg">{item.role}</p>
                         <p className="text-gray-600">{item.description}</p>
                       </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative sticky top-24">
             <div className="absolute top-4 left-4 w-full h-full bg-jpkkRed/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={imageSrc}
              alt="Mesyuarat JPKKP" 
              className="rounded-lg shadow-xl w-full object-cover h-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
