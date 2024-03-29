export type ServicesType = {
  [x: string]: any;
  _id: string;
  servicesHeader: string;
  servicesSubHeader: string;
  servicesList: [string];
};

export type WorksType = {
  [x: string]: any;
  _id: string;
  worksHeader: string;
  worksSubHeader: string;
  techTitle: string;
  frontendTechTitle: string;
  backendTechTitle: string;
  animationTechTitle: string;
  projects: [
    {
      projectTitle: string;
      projectYear: string;
      projectDescription: string;
      projectWebsite: string;
      frontendTech: [string];
      backendTech: [string];
      animationTech: [string];
      thumbnail: string | { asset: { url: string } };
      thumbnailAlt: string;
      slug: {
        current: string;
      };
      deliverables: [string];

      images: [
        {
          image: string;
          alt: string;
        }
      ];
    }
  ];
};
