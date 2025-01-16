import { NextSeo } from 'next-seo'

const Accessibility = () => (
  <>
    <NextSeo
      title='Our Web Accessibility Policy | CADMEN Clinic'
      description='Discover our commitment to digital accessibility, ensuring a user-friendly experience for all visitors, including those with disabilities. See more.'
      canonical='https://www.cadmenclinic.ca/accessibility'
      openGraph={{
        url: 'https://www.cadmenclinic.ca/accessibility',
        title: 'Our Web Accessibility Policy | CADMEN Clinic',
        description:
          'Discover our commitment to digital accessibility, ensuring a user-friendly experience for all visitors, including those with disabilities. See more.',
        siteName: 'CADMEN Clinic'
      }}
    />
    <section className='prose mx-auto px-5 py-32 lg:prose-xl'>
      <article>
        <h1>Web Accessibility Policy CADMEN</h1>
        <p>
          CADMEN is committed to ensuring digital accessibility for all
          visitors, including people with disabilities. Our goal is to provide a
          user-friendly and inclusive experience for everyone, regardless of
          their abilities. This policy outlines the steps we have taken and the
          ongoing efforts we are making to maintain and improve our website&apos;s
          accessibility. Conformance with Web Content Accessibility Guidelines
          (WCAG) Our website has been designed and developed to comply with the
          Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published
          by the World Wide Web Consortium (W3C). These guidelines define how to
          make web content more accessible to people with disabilities,
          including those with visual, auditory, physical, cognitive, and
          neurological impairments.
        </p>
        <p>
          Accessibility Features We have implemented a variety of accessibility
          features on our website, including:
        </p>
        <ul>
          <li>
            Alternative Text: Providing alternative text for images and other
            non-text content to assist users with screen readers.
          </li>
          <li>
            Keyboard Navigation: Ensuring that all interactive elements can be
            navigated and activated using the keyboard alone.
          </li>
          <li>
            Semantic Markup: Using appropriate HTML elements and attributes to
            convey meaning and structure, enabling a more accessible experience
            for users with assistive technologies.
          </li>

          <li>
            Closed Captions: Offering closed captions for all video and audio
            content.
          </li>
        </ul>
        <p>
          Ongoing Efforts We recognize that maintaining an accessible website is
          an ongoing effort, and we are committed to continually monitoring and
          improving our site&apos;s accessibility. We regularly conduct accessibility
          audits to identify potential barriers and implement improvements in
          accordance with evolving best practices and standards. Feedback and
          Assistance We welcome your feedback on our website&apos;s accessibility.
        </p>
        <p>
          If you encounter any issues, have questions, or require assistance,
          please contact us at:{' '}
        </p>
        <div className='flex flex-row'>
          Email:
          <a className='pl-2' href='mailto:info@cadmenclinic.ca'>
            info@cadmenclinic.ca
          </a>
        </div>
        <div className='flex flex-row'>
          Phone:
          <a className='pl-2' href='tel:+14165111337'>
            (416) 511-1337
          </a>
        </div>
        <p>
          We will make every effort to address your concerns and provide
          alternative access to content if needed. By providing a fully
          accessible and inclusive experience, we aim to create a welcoming
          environment for all visitors to our med spa website.
        </p>
      </article>
    </section>
  </>
)

export default Accessibility
