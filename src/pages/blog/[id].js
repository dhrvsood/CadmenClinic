import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/container";
import { NextSeo } from "next-seo";
import Markdown from 'markdown-to-jsx'

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/fetchPageContent?id=${id}`);
        if (!response.ok) throw new Error("Failed to fetch page content");
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800"></div>
          <p className="text-gray-600 text-lg">Loading content...</p>
        </div>
      </div>
    );  
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  const title = post.page.properties.Title.title[0].plain_text;
  const markdown = post.markdown
  console.log(markdown)

  return (
    <>
      <NextSeo
        title={`${title} | CADMEN Clinic`}
        description="Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more."
        openGraph={{
          url: "https://www.cadmenclinic.ca/blog",
          title: `${title} | CADMEN Clinic`,
          description:
            "Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.",
          images: [
            {
              url: "https://www.cadmenclinic.ca/media/clinic_interior.jpg",
              width: 800,
              height: 800,
              alt: "Interior of CADMEN Clinic",
              type: "image/jpeg",
            },
          ],
          siteName: "CADMEN Clinic",
        }}
      />

      <Container classList="my-24">
        <section className="mb-5 mt-10">
          <Container classList="md:px-5">
            <div className="order-2 flex h-full flex-col justify-center items-center space-y-5 px-5 py-5 md:order-1 md:py-0 lg:px-10 text-center">
              <h1 className="font-display text-3xl font-light tracking-wide md:text-4xl xl:text-5xl">
                {title}
              </h1>
            </div>

          </Container>
        </section>

        <article 
          className="prose mx-5 py-16 px-12 border border-wildSand rounded-md"
        >
          <Markdown>{markdown}</Markdown>
        </article>
      </Container>
    </>
  );
};

export default BlogPost;
