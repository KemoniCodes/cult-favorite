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
    defineField({
      name: "techTitle",
      type: "string",
      title: "Tech Title",
    }),
    defineField({
      name: "frontendTechTitle",
      type: "string",
      title: "Frontend Tech Title",
    }),
    defineField({
      name: "backendTechTitle",
      type: "string",
      title: "Backend Tech Title",
    }),
    defineField({
      name: "animationTechTitle",
      type: "string",
      title: "Animation Tech Title",
    }),
    defineField({
      name: "deliverablesTechTitle",
      type: "string",
      title: "Deliverables Tech Title",
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
              name: "projectYear",
              type: "string",
              title: "Project Year",
            },
            {
              name: "projectDescription",
              type: "text",
              title: "Project Description",
            },
            {
              name: "projectWebsite",
              type: "string",
              title: "Project Website",
            },
            {
              name: "slug",
              type: "slug",
              title: "Slug",
            },
            {
              name: "deliverables",
              title: "Project Deliverables",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },

            {
              name: "frontendTech",
              title: "Frontend Tech",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
            {
              name: "backendTech",
              title: "Backend Tech",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },

            {
              name: "animationTech",
              title: "Animation Tech",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
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
          ],
        },
      ],
    },
  ],
};

export default works;
