// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// src/routes/+page.js

import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "hnzv88np",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load({ params }) {
    const data = await client.fetch(`*[_type == "products"]`);
  
    if (data) {
      return {
        products: data
      };
    }
    return {
      status: 500,
      body: new Error("error")
    };
  }

export const prerender = true;
