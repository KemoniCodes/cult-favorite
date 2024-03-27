import { type } from "os";
import { defineField } from "sanity";

const services = {
  name: "services",
  title: "Services Component",
  type: "document",
  fields: [
    defineField({
        name: 'servicesHeader',
        title: 'Services Header',
        type: 'string'
    }),
    defineField({
        name: 'servicesSubHeader',
        title: 'Services Subheader',
        type: 'string'
    }),
    defineField({
        name: 'servicesList',
        title: 'Services List',
        type: 'array',
        of: [{type: 'string'}]
    })
  ],
};

export default services;
