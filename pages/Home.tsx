import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, ShieldCheck, ArrowRight, LucideIcon } from 'lucide-react';
import { client, urlFor } from '../sanity';

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  ShieldCheck
};

const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "homePage"][0]';
    
    // Initial fetch
    client.fetch(query).then((result) => {
      setData(result);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });

    // Real-time subscription
    const subscription = client.listen('*[_type == "homePage"]').subscribe((update) => {
      console.log('Content updated:', update);
      // Re-fetch fresh data on update
      client.fetch(query).then(setData);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fallbacks
  const coreValues = data?.coreValues || {
    heading: 'Nilai Teras',
    subheading: 'Berkhidmat Untuk Masyarakat',
    description: 'Fokus utama kami adalah memastikan kesejahteraan, keselamatan, dan keharmonian penduduk kampung terpelihara.',
    values: [
       { title: 'Komuniti', desc: 'Memperkasa hubungan silaturrahim antara penduduk melalui program kemasyarakatan.', icon: 'Users' },
       { title: 'Pembangunan', desc: 'Merancang dan memantau pembangunan infrastruktur kampung demi keselesaan semua penduduk.', icon: 'TrendingUp' },
       { title: 'Keselamatan', desc: 'Bekerjasama dengan pihak berkuasa untuk memastikan keselamatan kampung sentiasa terjamin.', icon: 'ShieldCheck' }
    ]
  };

  const community = data?.community || {
    heading: 'Kenali Organisasi Kami',
    description: 'Ketahui lebih lanjut mengenai struktur pentadbiran dan ahli jawatankuasa yang menerajui JPKK Hulu Chuchoh.',
    ctaText: 'Lihat Carta Organisasi',
    ctaLink: '/structure',
    image: null
  };

  const cta = data?.cta || {
    heading: 'Ikuti Perkembangan Kami',
    description: 'Dapatkan maklumat terkini mengenai aktiviti dan pengumuman rasmi di laman Facebook kami.',
    buttonText: 'Lihat Facebook Rasmi',
    buttonLink: 'https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/'
  };

  const communityImageSrc = community.image 
    ? urlFor(community.image).url() 
    : "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="bg-white">
      <SEO 
        title="Utama" 
        description="Selamat datang ke laman web rasmi JPKKP Hulu Chuchoh. Komited untuk kemajuan, keselamatan dan kesejahteraan penduduk kampung."
      />
      
      <Hero data={data?.hero} />
      
      {/* Features/Values Section */}
      <div className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-jpkkRed font-semibold tracking-wide uppercase">{coreValues.heading}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
              {coreValues.subheading}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-stone-500 lg:mx-auto font-light">
              {coreValues.description}
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.values.map((item: any, index: number) => {
                const IconComponent = iconMap[item.icon] || Users;
                return (
                  <div key={index} className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full border-t-4 border-jpkkRed hover:-translate-y-1 transition-transform duration-300">
                      <div className="-mt-6">
                        <div className="inline-flex items-center justify-center p-3 bg-jpkkRed rounded-md shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-stone-900 tracking-tight">{item.title}</h3>
                        <p className="mt-5 text-base text-stone-500 text-justify">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="absolute top-4 -left-4 w-full h-full bg-stone-100 rounded-2xl z-0"></div>
                  <img 
                    src={communityImageSrc}
                    alt="Community Meeting" 
                    className="relative z-10 rounded-2xl shadow-lg w-full object-cover h-96"
                  />
               </div>
               <div className="md:pl-10">
                  <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">{community.heading}</h2>
                  <p className="text-stone-600 mb-8 text-lg font-light leading-relaxed">
                    {community.description}
                  </p>
                  <Link 
                    to={community.ctaLink} 
                    className="text-jpkkRed font-bold hover:text-stone-900 transition-colors inline-flex items-center gap-2 border-b border-jpkkRed pb-1"
                  >
                    {community.ctaText} <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <div className="bg-jpkkRed">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-serif">
            <span className="block">{cta.heading}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-stone-100">
            {cta.description}
          </p>
          <a
            href={cta.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-jpkkRed bg-white hover:bg-stone-100 sm:w-auto transition-colors shadow-lg"
          >
            {cta.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
