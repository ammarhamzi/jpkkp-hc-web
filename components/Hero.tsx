import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { urlFor } from '../sanity';

interface HeroProps {
  data?: {
    tagline?: string;
    titlePart1?: string;
    titlePart2?: string;
    description?: string;
    heroImage?: any;
  }
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { 
    tagline = "Selamat Datang",
    titlePart1 = "Komuniti Sejahtera",
    titlePart2 = "Hulu Chuchoh",
    description = "Laman web rasmi Jawatankuasa Pembangunan dan Keselamatan Kampung Persekutuan (JPKKP) Hulu Chuchoh. Badan akar umbi untuk perancangan, pengurusan komuniti, dan perantaraan.",
    heroImage
  } = data || {};

  const bgImage = heroImage ? urlFor(heroImage).url() : "https://images.unsplash.com/photo-1568036410361-c115b973681c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Diagonal SVG Shape for dynamic look */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-stone-100 text-jpkkRed text-xs font-bold tracking-wider mb-4 uppercase">
                {tagline}
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-stone-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{titlePart1}</span>{' '}
                <span className="block text-jpkkRed xl:inline">{titlePart2}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/structure"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-jpkkRed hover:bg-jpkkDarkRed md:py-4 md:text-lg transition-all"
                  >
                    Carta Organisasi
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-jpkkRed bg-stone-100 hover:bg-stone-200 md:py-4 md:text-lg transition-all"
                  >
                    Tentang Kami <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full brightness-90"
          src={bgImage}
          alt="Pemandangan Malaysia"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-transparent lg:from-white/0"></div>
      </div>
    </div>
  );
};

export default Hero;
