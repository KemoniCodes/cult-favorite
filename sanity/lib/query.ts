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
};

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
          slug,
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
};

export async function getWorkBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "works"]{
      _id,
      techTitle,
      frontendTechTitle,
      backendTechTitle,
      animationTechTitle,
      projects[slug.current == $slug] {
        _key,
        projectTitle,
        slug,
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
    }`,
    { slug }
  );
}



