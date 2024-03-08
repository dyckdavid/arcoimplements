import { getProducts } from "$lib/data/products";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
       const products = await getProducts();
       return {
        products
       }
    } catch (error) {
        console.error("Failed to fetch products", error);
        return {
            status: 500,
            error: "Failed to fetch products"
        }
    }
}
