import { type SchemaTypeDefinition } from 'sanity'
import services from './services'
import works from './works'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, works, about]
}
