import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { RootState } from '../store/store';
import { fetchPosts } from '../store/slices/blogSlice';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { logClick, logBlogInteraction } from '../lib/firebase';

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostClick = (post: any) => {
    logBlogInteraction('post_click', post);
    logClick('blog_post_click', {
      post_id: post.id,
      post_title: post.title,
      post_slug: post.slug,
      categories: post.categories
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-600">Loading posts...</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">No posts yet</h2>
        <p className="text-gray-600 mb-8">Be the first one to create a post!</p>
        <Link
          to="/admin"
          onClick={() => logClick('create_first_post')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create a post
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Post Hero */}
      {posts.length > 0 && (
        <div className="relative h-[70vh] mb-16 rounded-xl overflow-hidden">
          <Link
            to={`/blog/${posts[0].slug}`}
            onClick={() => handlePostClick(posts[0])}
            className="block h-full group"
          >
            <div className="absolute inset-0">
              <img
                src={posts[0].image_url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"}
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-3xl">
                {posts[0].categories && posts[0].categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {posts[0].categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 text-white backdrop-blur-sm"
                      >
                        <Tag className="h-4 w-4 mr-2" />
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {posts[0].title}
                </h1>
                {posts[0].subtitle && (
                  <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-2">
                    {posts[0].subtitle}
                  </p>
                )}
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-2" />
                  <time dateTime={posts[0].created_at}>
                    {format(new Date(posts[0].created_at), 'MMMM d, yyyy')}
                  </time>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
        {posts.slice(1).map((post) => (
          <article 
            key={post.id} 
            className="break-inside-avoid-column bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            {post.image_url && (
              <Link
                to={`/blog/${post.slug}`}
                onClick={() => handlePostClick(post)}
                className="block aspect-video relative overflow-hidden"
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
            )}
            <div className="p-6">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </span>
                  ))}
                </div>
              )}
              <Link 
                to={`/blog/${post.slug}`}
                onClick={() => handlePostClick(post)}
                className="block group"
              >
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-3">
                  {post.title}
                </h2>
              </Link>
              {post.subtitle && (
                <p className="text-gray-600 mb-4 line-clamp-2">{post.subtitle}</p>
              )}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.created_at}>
                  {format(new Date(post.created_at), 'MMM d, yyyy')}
                </time>
              </div>
              <div 
                className="text-gray-600 line-clamp-3 text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: post.html_content || post.content }}
              />
              <Link
                to={`/blog/${post.slug}`}
                onClick={() => handlePostClick(post)}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;