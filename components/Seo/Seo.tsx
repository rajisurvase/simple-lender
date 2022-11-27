import React from "react";
import { NextSeo } from "next-seo";

type SeoProps = {
  title: string;
  canonical: string;
  description: string;
  url: string;
  siteName?: string;
  handle_twiiter?: string;
  twitter_card_type?: string;
  twitter_site?: string;
  noindex?:boolean
};

const Seo = ({
  title,
  canonical,
  description,
  url,
  siteName,
  handle_twiiter,
  twitter_card_type = "summary_large_image",
  twitter_site,
  noindex=true
}: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      noindex={noindex}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg"
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg"
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" }
        ],
        siteName
      }}
      twitter={{
        handle: handle_twiiter,
        site: twitter_site,
        cardType: twitter_card_type
      }}
    />
  );
};

export default Seo;
