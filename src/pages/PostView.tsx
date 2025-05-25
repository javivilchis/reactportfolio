import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { logClick, logBlogInteraction, logPageView } from '../lib/firebase';
import { typographyClass } from '../styles/typography'; // <-- make sure this exports a string of Tailwind classes

interface Post {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  html_content?: string;
  image_url?: string;
  categories?: string[];
  created_at: string | Timestamp;
  user_id: string;
  published: boolean;
  slug: string;
}

const PostView: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          throw new Error('Post not found');
        }

        const doc = querySnapshot.docs[0];
        const data = doc.data();

        const created_at = data.created_at instanceof Timestamp
          ? data.created_at.toDate().toISOString()
          : data.created_at;

        const postData: Post = {
          id: doc.id,
          ...data,
          created_at
        } as Post;

        setPost(postData);

        logPageView('blog_post', {
          post_id: postData.id,
          post_title: postData.title,
          post_slug: postData.slug,
          categories: postData.categories
        });

        logBlogInteraction('post_view', postData);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const handleBackClick = () => {
    logClick('back_to_blog');
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-600">Loading post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {error || 'Post not found'}
        </h2>
        <button
          onClick={handleBackClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={handleBackClick}
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 my-8"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Blog
      </button>

      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full max-h-[500px] object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

      {post.subtitle && (
        <p className="text-xl text-gray-600 mb-6">{post.subtitle}</p>
      )}

      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Calendar className="h-4 w-4 mr-1" />
        <time dateTime={post.created_at.toString()}>
          {format(new Date(post.created_at.toString()), 'MMMM d, yyyy')}
        </time>
      </div>

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
            >
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </span>
          ))}
        </div>
      )}

      <div
        className={typographyClass}
        dangerouslySetInnerHTML={{ __html: post.html_content || post.content }}
      />
    </article>
  );
};

export default PostView;