import Service from '@/components/services/service'
import { serviceQuery } from '@/sanity/lib/queries'
import { useLiveQuery } from '@sanity/preview-kit'
import { useRouter } from 'next/router'

const PreviewServices = ({ service }) => {
  const params = useRouter().query
  const [data] = useLiveQuery(service, serviceQuery, params)

  return <Service service={data} />
}
export default PreviewServices
