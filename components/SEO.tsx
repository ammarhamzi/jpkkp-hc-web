import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Laman Web Rasmi JPKKP Hulu Chuchoh. Badan akar umbi yang bertanggungjawab merancang dan mengurus komuniti setempat.", 
  image = "/img/hc-bg.png", 
  url = window.location.href 
}) => {
  const siteTitle = "JPKKP Hulu Chuchoh";
  const fullTitle = `${title} | ${siteTitle}`;
  const keywords = "JPKKP, Hulu Chuchoh, Sepang, Selangor, komuniti, kampung, pembangunan, keselamatan";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JPKKP Hulu Chuchoh" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;