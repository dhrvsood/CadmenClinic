import Container from '@/components/container';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const BlogPage = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPages = async (cursor = null, limit = 9) => {
    const url = cursor
      ? `/api/fetchPages?limit=${limit}&cursor=${cursor}`
      : `/api/fetchPages?limit=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Failed to fetch data from the API");
      return { results: [], nextCursor: null, hasMore: false };
    }

    return await response.json();
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const data = await fetchPages();
      setPages(data.results);
      setNextCursor(data.nextCursor);
      setHasMore(data.hasMore);
      setLoading(false);
      console.log(data.results)
    };

    loadInitialData();
  }, []);

  const loadMorePages = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    const data = await fetchPages(nextCursor);
    setPages((prevPages) => [...prevPages, ...data.results]);
    setNextCursor(data.nextCursor);
    setHasMore(data.hasMore);
    setLoading(false);
  };

  return (
    <>
      <NextSeo
        title={`Blog | CADMEN Clinic`}
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

      <section className='mt-10 bg-wildSand px-5 py-20'>
        <Container>
          <div className='grid items-center gap-10 space-y-5'>
            <h3 className='text-center flex items-center justify-center font-display text-4xl font-light text-teal-900 md:text-6xl'>
              Our Blog
            </h3>
          </div>
        </Container>
      </section>
      <section className='bg-white-200 py-10 mt-0'>
        <Container classList='md:px-5 px-5'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {pages.map((blog) => (
              <div
                key={blog.id}
                className='relative cursor-pointer rounded-xl bg-wildSand shadow-lg overflow-hidden'
              >

                {/* Content */}
                <div className='relative flex flex-col p-5'>
                  <p className='mb-4 text-left text-lg text-black line-clamp-3'>
                    {blog.title || 'No Title'}
                  </p>
                  <div>
                    <Link
                      href={{
                        pathname: `/blog/${blog.id}`,
                      }}
                      className='rounded border px-3 py-2 bg-beaver/90 hover:bg-beaver text-sm text-white transition'
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loading &&
            <div className="flex items-center justify-center min-h-[500px] bg-white">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800"></div>
                <p className="text-gray-600 text-lg">Loading blogs...</p>
              </div>
            </div>
          }
          {hasMore && !loading && (
            <div className='flex justify-center my-8'>
              <button
                className='rounded border border-beaver/90 bg-beaver/90 px-10 py-3 font-light text-white hover:bg-beaver hover:border-beaver'
                onClick={loadMorePages}
                disabled={loading}
              >
                Load More
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
