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

export async function getAllWorks() {
  return client.fetch(
    groq`*[_type == "works"]{
        _id,
        worksHeader,
        worksSubHeader,
        techTitle,
        frontendTechTitle,
        backendTechTitle,
        animationTechTitle,
        projects[]{
          _key,
          projectTitle,
          slug {
            current
          },
          projectYear,
          projectDescription,
          projectWebsite,
          frontendTech[],
          backendTech[],
          animationTech[],
          deliverables[],
          thumbnail {
            asset-> {
              url
            }
          },
          thumbnailAlt,
          "images": images[].asset->url,
          "imageAlts": images[].alt
        }
      }`
  );
}

export async function getWorksBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "works" && slug.current == $slug][0]]{
        _id,
        worksHeader,
        worksSubHeader,
        "thumbnail": projects[].thumbnail.asset->url,
        "thumbnailAlt": projects[].thumbnailAlt,
        "images":projects[].images[].asset->url,
        "imageAlts": projects[].images[].alt,
        "slug": projects[].slug.current
      }`,
    { slug }
  );
}
