import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type ImageAsset = {
  asset: {
    _ref: string;
  };
};

export type Product = {
  _id: string;
  name: string;
  specs: boolean;
  specWidth: string;
  specHeight: string;
  specWeight: string;
  features: boolean;
  featureDetails?: any;
  description: string;
  price: number;
  instructions?: any;
  imageUrls: string[];
  mainImage: string;
  youtubeId?: string;
};

const sanityClient = createClient({
  projectId: "hnzv88np",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(assetRef: string) {
  return builder.image(assetRef);
}

export async function getProducts(): Promise<Product[]> {
  const products = await sanityClient.fetch(
    `*[_type == "products"] | order(_createdAt desc) {
      _id, 
      name, 
      description,
      "mainImage": mainImage.asset->url, 
      price, 
      createdAt,
      specDetails, 
      featureDetails,
      specs,
      specWidth,
      specHeight,
      specWeight,
      features,
      youtubeId,
      featureDetails,
      "imageUrls": images[].asset->url
    }`
  );

  return products;
}


export async function getProductById(id: string): Promise<Product> {
  const product = await sanityClient.fetch(
    '*[_type == "products" && _id == $id]{_id, name, description, price, instructions, specs, specWidth, specHeight, specWeight, features, youtubeId, featureDetails, mainImage, "imageUrls": images[].asset->url}',
    { id }
  );

  return product[0];
}
