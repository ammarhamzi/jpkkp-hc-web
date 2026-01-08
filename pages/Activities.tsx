import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { client } from '../sanity';

const Activities: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const defaultFacebookUrl = "https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/";

    useEffect(() => {
        const query = '*[_type == "activitiesPage"][0]';
        client.fetch(query).then(setData).catch(console.error);

        const subscription = client.listen('*[_type == "activitiesPage"]').subscribe(() => {
            client.fetch(query).then(setData);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Fallbacks
    const facebookPageUrl = data?.facebookUrl || defaultFacebookUrl;
    
    const infoSection = data?.infoSection || {
        title: 'Sentiasa Berhubung',
        description: 'Kami aktif berkongsi maklumat terkini, gambar program, dan pengumuman penting di laman Facebook rasmi kami.',
        ctaText: 'Ikuti Laman Facebook'
    };

    const contactSection = data?.contactSection || {
        title: 'Ada Aduan?',
        description: 'Salurkan aduan atau cadangan anda terus kepada pihak admin melalui mesej Facebook.',
        buttonText: 'Mesej Kami'
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={data?.title || "Aktiviti"}
                description={data?.description || "Lihat aktiviti-aktiviti terkini dari JPKKP Hulu Chuchoh melalui laman Facebook rasmi kami."}
            />
            {/* Header */}
            <div className="bg-stone-50 py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-stone-900 font-serif mb-4">{data?.title || "Aktiviti Terkini"}</h1>
                    <p className="mt-4 text-xl text-stone-500 max-w-2xl mx-auto">
                        {data?.description || "Ikuti perkembangan semasa dan program yang dijalankan oleh JPKKP Hulu Chuchoh."}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Facebook Feed */}
                    <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[600px] bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-200">
                            <div className="bg-stone-50 p-4 border-b border-stone-200 flex items-center justify-between">
                                <span className="font-bold text-stone-700">Siaran Facebook</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <iframe 
                                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl)}&tabs=timeline&width=600&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                                width="600" 
                                height="800" 
                                style={{border: 'none', overflow: 'hidden'}} 
                                scrolling="no" 
                                frameBorder="0" 
                                allowFullScreen={true} 
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                className="w-full min-h-[800px]" 
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Info & CTA */}
                    <div className="lg:col-span-6 xl:col-span-7 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
                             <h2 className="text-3xl font-bold font-serif text-jpkkRed mb-4">{infoSection.title}</h2>
                             <p className="text-stone-600 text-lg leading-relaxed mb-6">
                                {infoSection.description}
                             </p>
                             <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-3 text-stone-600">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span>Berita terkini</span>
                                </div>
                                <div className="flex items-center space-x-3 text-stone-600">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span>Gambar program komuniti</span>
                                </div>
                                <div className="flex items-center space-x-3 text-stone-600">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span>Pengumuman rasmi</span>
                                </div>
                             </div>

                             <a
                                href={facebookPageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 block w-full text-center px-6 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {infoSection.ctaText}
                            </a>
                        </div>

                        <div className="bg-jpkkRed p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
                             <h3 className="text-2xl font-bold font-serif mb-2 relative z-10">{contactSection.title}</h3>
                             <p className="opacity-90 mb-6 relative z-10">
                                {contactSection.description}
                             </p>
                             <a
                                href={`${facebookPageUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-jpkkRed font-bold px-6 py-2 rounded-lg hover:bg-stone-100 transition-colors"
                            >
                                {contactSection.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
