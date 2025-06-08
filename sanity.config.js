import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { media } from 'sanity-plugin-media'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), media(), visionTool({ defaultApiVersion: apiVersion })]
})
