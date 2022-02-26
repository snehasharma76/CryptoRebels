import Head from "next/head";

const MetaTags = ({ title, desc, img, keywords }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />

      <meta property="og:site_name" content="CryptoRebels" />
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
};

export default MetaTags;
