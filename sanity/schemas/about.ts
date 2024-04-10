import { type } from "os";
import { defineField } from "sanity";

const about = {
    name: "about",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: 'aboutHeader',
            title: 'About Header',
            type: 'string'
        }),
        defineField({
            name: 'aboutText',
            title: 'About Text',
            type: 'text'
        }),
        defineField({
            name: 'selectedClientsHeader',
            title: 'Selected Clients Header',
            type: 'string'
        }),
        defineField({
            name: 'techStackHeader',
            title: 'Tech Stack Header',
            type: 'string'
        }),
        {
            name:'selectedClients',
            title:'Selected Clients',
            type: 'array',
            of: [
                {
                    type:'string'
                }
            ]
        },
        {
            name:'techStack',
            title:'Tech Stack',
            type: 'array',
            of: [
                {
                    type:'string'
                }
            ]
        },
        {
            name: "profileImg",
            type: "image",
            title: "Profile Image",
            options: {
              hotspot: true,
            },
          },
          {
            name: "profileImgAlt",
            type: "string",
            title: "Profile Image Alt",
          },
    ]

}

export default about;