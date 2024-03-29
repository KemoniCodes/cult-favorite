import { defineField } from "sanity";

const works = {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    defineField({
      name: "worksHeader",
      title: "Works Header",
      type: "string",
    }),
    defineField({
      name: "worksSubHeader",
      title: "Works Subheader",
      type: "string",
    }),

    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "projectTitle",
              type: "string",
              title: "Project Title",
            },
            {
                name: "slug",
                type: "slug",
                title: "Slug"
            },
            {
                name:"deliverables",
                title:"Project Deliverables",
                type:"array",
                of: [
                    {
                        type:"string"
                    }
                ]
            },
            {
                name: "thumbnail",
                type: "image",
                title: "Thumbnail Image",
                options: {
                  hotspot: true,
                },
              },
            {
              name: "thumbnailAlt",
              type: "string",
              title: "Thumbnail Alt",
            },
            {
                title: "Images",
                name: "images",
                type: "array",
                of: [
                  {
                    type: "image",
                    options: {
                      hotspot: true,
                    },
                    fields: [
                      {
                        name: "alt",
                        type: "string",
                        title: "Alt",
                      },
                    ],
                  },
                ],
              },
          
            // {
            //   name: "slug",
            //   type: "slug",
            //   title: "Slug",
            //   options: {
            //     source: "projectTitle",
            //     maxLength: 200
            //   }
            // },
          ],
        },
      ],
    },
  ],
};

export default works;
