import Link from 'next/link'

const BaseButton = ({ path, text }) => (
  <Link
    href={path}
    className='rounded border border-teal-600 bg-teal-600 px-10 py-3 font-light text-white hover:bg-teal-700'
  >
    {text}
  </Link>
)
export default BaseButton
