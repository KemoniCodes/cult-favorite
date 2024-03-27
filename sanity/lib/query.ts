import { groq } from "next-sanity";
import { client } from "./client";

export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]{
      _id,
      servicesHeader,
      servicesSubHeader,
      servicesList[]
    }`
  );
}
