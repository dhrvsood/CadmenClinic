import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import { createClient } from '@sanity/client'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published'
})

export const getClient = (previewToken) => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn
  })

  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts'
      })
    : client
}
