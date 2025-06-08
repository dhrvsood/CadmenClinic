import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import Link from 'next/link'

const linkSerializer = (props) => {
  const href = props.mark.href
  const linkClass = 'hover:underline'

  if (href.includes('imagelabmespa.com')) {
    return (
      <Link className={linkClass} href={href}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <a className={linkClass} href={href} target='_blank' rel='noopener'>
        {props.children}
      </a>
    )
  }
}

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: (props) => {
      const sizes = {
        sm: { width: 300, height: 200 },
        md: { width: 600, height: 400 },
        xl: { width: 900, height: 600 },
      }

      const displays = {
        left: {
          margin: '0 auto 0 0',
        },
        right: {
          margin: '0 0 0 auto'
        },
        center: {
          margin: 'auto'
        },
        ['inline-left']: {
          float: 'left',
          marginRight: 32
        },
        ['inline-right']: {
          float: 'right',
          marginLeft: 32
        }
      }

      return (
        <div style={{
            position: 'relative',
            width: sizes[props.node.size]?.width || 600,
            height: 'auto',
            ...displays[props.node.display],
            maxWidth: '100%',
        }}>
          <Image
            src={props.node.asset.url}
            alt={props.node.asset.alt}
            layout="responsive"
            width={sizes[props.node.size]?.width || 600}
            height={sizes[props.node.size]?.height || 600}
            objectFit="contain"
            style={{ margin: 0, padding: 0 }}
          />
        </div>
      )
    },
    list: (props) => (
      <ul className='list-inside list-disc'>{props.children}</ul>
    ),
    listItem: (props) => <li>{props.children}</li>
  },
  marks: {
    link: linkSerializer
  }
}

const SanityBlock = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
)

export default SanityBlock
