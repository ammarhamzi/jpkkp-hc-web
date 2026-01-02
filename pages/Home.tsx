import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Users, TrendingUp, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Utama" 
        description="Selamat datang ke laman web rasmi JPKKP Hulu Chuchoh. Komited untuk kemajuan, keselamatan dan kesejahteraan penduduk kampung."
      />
      <Hero />
      
      {/* Features/Values Section */}
      <div className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-jpkkRed font-semibold tracking-wide uppercase">Nilai Teras</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
              Berkhidmat Untuk Masyarakat
            </p>
            <p className="mt-4 max-w-2xl text-xl text-stone-500 lg:mx-auto font-light">
              Fokus utama kami adalah memastikan kesejahteraan, keselamatan, dan keharmonian penduduk kampung terpelihara.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Komuniti',
                  desc: 'Memperkasa hubungan silaturrahim antara penduduk melalui program kemasyarakatan.',
                  icon: Users,
                },
                {
                  title: 'Pembangunan',
                  desc: 'Merancang dan memantau pembangunan infrastruktur kampung demi keselesaan semua penduduk.',
                  icon: TrendingUp,
                },
                {
                  title: 'Keselamatan',
                  desc: 'Bekerjasama dengan pihak berkuasa untuk memastikan keselamatan kampung sentiasa terjamin.',
                  icon: ShieldCheck,
                },
              ].map((item, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full border-t-4 border-jpkkRed hover:-translate-y-1 transition-transform duration-300">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-jpkkRed rounded-md shadow-lg">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-stone-900 tracking-tight">{item.title}</h3>
                      <p className="mt-5 text-base text-stone-500 text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-jpkkRed">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-serif">
            <span className="block">Ikuti Perkembangan Kami</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-stone-100">
            Dapatkan maklumat terkini mengenai aktiviti dan pengumuman rasmi di laman Facebook kami.
          </p>
          <a
            href="https://www.facebook.com/p/JPKK-Hulu-Chuchoh-61565435885599/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-jpkkRed bg-white hover:bg-stone-100 sm:w-auto transition-colors shadow-lg"
          >
            Lihat Facebook Rasmi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;