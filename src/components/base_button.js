import Link from 'next/link'

const BaseButton = ({ path, text }) => (
  <Link
    href={path}
    className='rounded border border-beaver/90 bg-beaver/90 px-10 py-3 font-light text-white hover:bg-beaver hover:border-beaver'
  >
    {text}
  </Link>
)
export default BaseButton
