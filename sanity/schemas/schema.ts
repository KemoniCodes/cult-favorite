import { type SchemaTypeDefinition } from 'sanity'
import services from './services'
import works from './works'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, works],
}
