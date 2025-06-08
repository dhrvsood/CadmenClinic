import { groq } from 'next-sanity'

import { client } from './client'

const serviceFields = groq`
  _id,
  title,
  "slug": slug.current
`

// Get all conditions
export const conditionsQuery = groq`*[_type == "condition"] {
  ...,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  icon {
    asset->{
      _id,
      url
    },
    alt
  },
  "services": *[_type == "service" && references(^._id)] {
   ...
  }
}`

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current,
  "services": *[(_type == "service" || _type == "servicenew" || _type == "serviceV2") && references(^._id)  && defined(nav) && nav == true] {
    title,
    subTitle,
    categoryOrder,
    heroImage {
    asset->{
      _id,
      url
    },
    alt
  },
   "slug": slug.current,
  }
}`


export const servicesV2Query = groq`*[_type == "serviceV2"] {
  ...,
  "slug": slug.current,
    heroImage {
      asset->{
        url
      },
      alt
    }
}`

// Get all services
export const servicesQuery = groq`*[(_type == "service" || _type == "servicenew" || _type == "serviceV2") && defined(nav) && nav == true]{
  ...,
  "slug": slug.current,
  heroImage {
    asset->{
      _id,
      url
    },
    alt
  },
  beforeAfterImages {
    images[]{
      asset->{
        url
      },
      alt,
      generalTerms,
    }
  }
}`
// Get a single service by its slug
export const serviceQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
   
  packagesImage {
      asset->{
        _id,
        url
      },
      alt
    },
    beforeAfterImages {
      images[]{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    conditions[]-> {
      ...,
      icon {
      asset->{
        _id,
        url
      },
      alt
    },
    },
  }
`

export const serviceV2Query = groq`
  *[_type == "serviceV2" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
      leftImage {
      asset->{
        _id,
        url
      },
      alt
    },
     rightImage {
      asset->{
        _id,
        url
      },
      alt
    },
  packagesImage {
      asset->{
        _id,
        url
      },
      alt
    },
    beforeAfterImages {
      images[]{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    conditions[]-> {
      ...,
      icon {
      asset->{
        _id,
        url
      },
      alt
    },
    },
  }
`

// Get a single service by its slug
export const serviceNewQuery = groq`
  *[_type == "servicenew" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    stepOneImage {
      asset->{
        _id,
        url
      },
      alt
    },
    stepTwoImage {
      asset->{
        _id,
        url
      },
      alt
    },
    stepThreeImage {
      asset->{
        _id,
        url
      },
      alt
    },
    dosingPlan {
      asset->{
        _id,
        url
      },
      alt
    },
  packagesImage {
      asset->{
        _id,
        url
      },
      alt
    },
    beforeAfterImages {
      images[]{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    conditions[]-> {
      ...,
      icon {
      asset->{
        _id,
        url
      },
      alt
    },
    },
  }
`

export const getServiveByRef =  groq`*[_type == "service" && _id == $serviceReferenceId] {
  _id,
  _ref,
  title,
  slug,
}`

export const serviceAreasQuery = groq`
  *[_type == "serviceareas" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    conditions[]-> {
      ...,
      icon {
      asset->{
        _id,
        url
      },
      alt
    },
    },
  }
`

export const blogListQuery = groq`
 *[_type == "blogpages"] {
    "slug": slug.current,
    title,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
 }
`

export const blogPagesQuery = groq`
  *[_type == "blogpages" && slug.current == $slug][0] {
    ...,
    body[]{
        ...,
        _type == "image" => {
          asset->{
            _id,
            width,
            height,
            url
          },
          alt
        }
    },
    "slug": slug.current,
    "relatedBlogs": relatedBlogs[]->{
        title,
        "slug": slug.current,
        heroImage {
          asset->{
            _id,
            url
          },
          alt
        },
    },
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
  }
`

export const botoxPagesQuery = groq`
  *[_type == "botoxpages" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    section4 {
        ...,
        packagesImage {
          asset->{
            _id,
            url
          },
          alt
        },
        beforeAfterImages {
          images[]{
            asset->{
              _id,
              url
            },
            alt
          }
        },
        conditions[]-> {
          ...,
          icon {
          asset->{
            _id,
            url
          },
          alt
        },
        },
      }
  }
`

export const serviceLandingQuery = groq`
  *[_type == "servicelanding" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
  packagesImage {
      asset->{
        _id,
        url
      },
      alt
    },
    beforeAfterImages {
      images[]{
        asset->{
          _id,
          url
        },
        alt
      }
    },
    conditions[]-> {
      ...,
      icon {
      asset->{
        _id,
        url
      },
      alt
    },
    },
  }
`



export const generalQuery = groq`
  *[_type == "general" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    beforeAfterImages {
      images[]{
        asset->{
          _id,
          url
        },
        alt,
        title,
        slug,
        category
      }
    },
  }
`

// Get all service paths
export const servicePathsQuery = groq`*[(_type == "service" || _type == "servicenew" || _type == "servicelanding" || _type == "serviceV2") && defined(slug.current)][]{
    "params": { "slug": slug.current }
}`

// Get all service-areas paths
export const serviceAreasPathsQuery = groq`*[(_type == "serviceareas") && defined(slug.current)][]{
  "params": {
    "slug": slug.current,
    title,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
  }
}`

// Get services for navbar
export const serviceSlugsQuery = groq`*[(_type == "service" || _type == "servicenew" || _type == "servicelanding" || _type == "serviceV2")  && defined(nav) && nav == true] {
  _id,
  title,
  "slug": slug.current
}`

export const serviceBySlugQuery = groq`
*[(_type == "service" || _type == "servicenew" || _type == "servicelanding"  || _type == "serviceV2") && slug.current == $slug][0] {
  ${serviceFields}
}
`
export const isServiceNewQuery = groq`*[(_type == "service" || _type == "servicenew" || _type == "servicelanding" || _type == "serviceV2") && slug.current == $slug][0]{
  "isNew": _type == "servicenew",
}`

export const isServiceAreasQuery = groq`*[(_type == "serviceareas") && slug.current == $slug][0]{
  "isServiceareas": _type == "serviceareas",
}`

export const isServiceLandingQuery = groq`*[(_type == "service" || _type == "servicelanding" || _type == "servicenew"  || _type == "serviceV2") && slug.current == $slug][0]{
  "isLanding": _type == "servicelanding",
}`

export const isServicV2Query = groq`*[(_type == "service" || _type == "servicelanding" || _type == "servicenew" || _type == "serviceV2") && slug.current == $slug][0]{
  "isServiceV2": _type == "serviceV2",
}`

export async function getNavItems() {
  const res = await client.fetch(categoriesQuery)

  const cats = res.reduce((acc, c) => {
    acc[c.title] = { services: c.services }
    return acc
  }, {})

  // Reversing the object order
  const categories = Object.keys(cats)
    .reverse()
    .reduce((acc, key) => {
      acc[key] = cats[key]
      return acc
    }, {})

  return categories
}
