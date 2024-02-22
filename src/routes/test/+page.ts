import { createClient } from '@sanity/client';

// Sanity Client
const sanityClient = createClient({
  projectId: 'hnzv88np',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25',
});

// Universal Load Function
export async function load() {
  try {
    const products = await sanityClient.fetch('*[_type == "products"]');
    return {
      props: { products }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }
    };
  }
}