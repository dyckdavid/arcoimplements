import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type ImageAsset = {
  asset: {
    _ref: string;
  };
};

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
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
    '*[_type == "products"]{_id, name, description, price, "imageUrls": images[].asset->url}'
  );

  return products;
}

export async function getProductById(id: string): Promise<Product> {
  const product = await sanityClient.fetch(
    '*[_type == "products" && _id == $id]{_id, name, description, price, "imageUrls": images[].asset->url}',
    { id }
  );

  return product[0];
}
