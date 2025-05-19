import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { blogData, BlogPost } from '@/data/blogData';
import NotFound from '@/pages/NotFound';
import { ArrowLeft } from 'lucide-react';

// Helper function to format content with paragraphs
const formatContent = (content: string) => {
  return content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
      {paragraph.split('\n').map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < paragraph.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find(p => p.slug === slug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  const siteUrl = "https://www.trenermb.cz/";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = post.image ? `${siteUrl}${post.image.startsWith('/') ? '' : '/'}${post.image}` : `${siteUrl}/images/default-blog-og-image.jpg`;

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Marek Studnička Blog`}</title>
        <meta name="description" content={post.description} />

        <meta property="og:title" content={`${post.title} | Marek Studnička Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={post.title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Marek Studnička Blog`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>
      <div className="bg-white dark:bg-gray-900 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-marek-cta hover:underline">
              <ArrowLeft size={18} className="mr-2" />
              Zpět na hlavní stránku
            </Link>
          </div>
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{post.title}</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Publikováno: {post.date}</p>
            </header>

            {post.image && (
              <div className="mb-8 aspect-video rounded-lg overflow-hidden shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {formatContent(post.content)}
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link to="/" className="inline-flex items-center text-marek-cta hover:underline">
              <ArrowLeft size={18} className="mr-2" />
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
