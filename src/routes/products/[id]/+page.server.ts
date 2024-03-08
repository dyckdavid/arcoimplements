import { getProductById, getProducts } from "$lib/data/products";
import type { PageServerLoad } from "./$types";

export async function entries() {
	const products = await getProducts();

	return products.map((product) => ({
		id: product._id,
	}));
}


export const load: PageServerLoad = async ({ params }) => {
  try {
    const product = await getProductById(params.id);
    return {
      product,
    };
  } catch (error) {
    console.error("Failed to fetch products", error);
    return {
      status: 500,
      error: "Failed to fetch products",
    };
  }
};
