import { type SchemaTypeDefinition } from 'sanity'
import services from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services],
}
