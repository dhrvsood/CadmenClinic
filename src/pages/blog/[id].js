import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/container';
import Image from 'next/image'
import { NextSeo } from 'next-seo';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { query } = useRouter();
  const { id } = query;  // Extract `id` from URL

  useEffect(() => {
    if (!id) return;  // Exit if no `id` is found

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/fetchPageContent?id=${id}`);  // Call your API route
        if (!response.ok) throw new Error('Failed to fetch page content');

        const data = await response.json();
        console.log(data);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  const renderBlock = (block) => {
    switch (block.type) {
      case 'paragraph':
        if (block.paragraph.rich_text && block.paragraph.rich_text.length > 0) {
          return <p key={block.id} className='leading-relaxed mb-6'>{block.paragraph.rich_text.map(text => text.plain_text).join(' ')}</p>;
        }
        return null;
      case 'heading_1':
        if (block.heading_1.rich_text && block.heading_1.rich_text.length > 0) {
          return <h1 key={block.id} className='leading-relaxed text-4xl my-4 font-display font-semibold'>{block.heading_1.rich_text.map(text => text.plain_text).join(' ')}</h1>;
        }
        return null;
      case 'heading_2':
        if (block.heading_2.rich_text && block.heading_2.rich_text.length > 0) {
          return <h2 key={block.id} className='leading-relaxed text-3xl'>{block.heading_2.rich_text.map(text => text.plain_text).join(' ')}</h2>;
        }
        return null;
      case 'heading_3':
        if (block.heading_3.rich_text && block.heading_3.rich_text.length > 0) {
          return <h3 key={block.id} className='leading-relaxed text-2xl font-medium'>{block.heading_3.rich_text.map(text => text.plain_text).join(' ')}</h3>;
        }
        return null;
      case 'image':
        return (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            key={block.id}
            src={block.image.file.url}
            alt={block.image.caption ? block.image.caption.map(c => c.plain_text).join(' ') : 'Image'}
          />
        );
      default:
        return null;
    }
  };


  return (
    <>
      <NextSeo
        title={`${post.page.properties.Title.title[0].plain_text} | CADMEN Clinic`}
        description='Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.'
        openGraph={{
          url: 'https://www.cadmenclinic.ca/blog',
          title: 'Our Services | See All Premium Treatments | CADMEN Clinic',
          description:
            'Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.',
          images: [
            {
              url: 'https://www.cadmenclinic.ca/media/clinic_interior.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of CADMEN Clinic',
              type: 'image/jpeg'
            }
          ],
          siteName: 'CADMEN Clinic'
        }}
      />
      <Container classList='my-24'>
        <section className='overflow-hidden mb-5 mt-10'>
          <Container classList='md:px-5'>
            <div className='grid h-full md:h-[530px] md:grid-cols-2 lg:h-[550px] '>
              <div className='order-2 flex h-full flex-col justify-center space-y-5 bg-gray-100 px-5 py-5 md:order-1 md:py-0 lg:px-10'>
                <h1 className='font-display text-4xl font-light tracking-wide md:text-5xl xl:text-6xl'>
                  {post.page.properties.Title.title[0].plain_text}
                </h1>
              </div>
              <div className='order-1 h-[250px] md:order-2 md:h-full'>
                <Image
                  draggable='false'
                  src={post.page.icon.file.url}
                  alt={post.page.properties.Title.title[0].plain_text}
                  sizes='100vw'
                  className='h-full w-full object-cover object-center'
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </Container>
        </section>
        <article className='mx-5 py-16 px-12 border border-wildSand rounded-md'>
          {post.blocks.map(block => renderBlock(block))}
        </article>
      </Container>
    </>
  );
};

export default BlogPost;

