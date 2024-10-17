import { MetaDataType } from "@/types/Metadata";

export const createMetaData = ({ title, description, url}: MetaDataType) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fetchyourbrain.github.io/next_rick-n-morty';

  return {
    title: title ? `${title} | Rick and Morty` : 'Rick and Morty Fan Site',
    description: description || 'Explore the multiverse of Rick and Morty!',
    openGraph: {
      title: title || 'Rick and Morty Fan Site',
      description: description || 'Explore the multiverse of Rick and Morty!',
      url: url ? `${baseUrl}${url}` : baseUrl,
      siteName: 'Rick and Morty Fan Site',
      locale: 'en_US',
      type: 'website',
    },
  };
};