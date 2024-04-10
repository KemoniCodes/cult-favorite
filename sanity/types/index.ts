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
  deliverablesTechTitle: string;
  projects: [
    {
      [x: string]: any;
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
          imageAlts: string;
        }
      ];
    }
  ];
};

export type AboutType = {
  [x: string]: any;
  _id: string;
  aboutHeader: string;
  aboutText: string;
  selectedClientsHeader: string;
  techStackHeader: string;
  selectedClients: [string];
  techStack: [string];
  profileImg: string | { asset: { url: string } };
  profileImgAlt: string;
}
