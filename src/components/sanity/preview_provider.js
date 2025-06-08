import { getClient } from '@/sanity/lib/client'
import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

const PreviewProvider = ({ children, previewToken }) => {
  const client = useMemo(() => getClient(previewToken), [previewToken])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
export default PreviewProvider
