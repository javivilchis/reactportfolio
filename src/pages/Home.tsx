import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Calendar, Tag } from 'lucide-react';
import { logClick } from '../lib/firebase';
import { RootState } from '../store/store';
import { fetchPosts } from '../store/slices/blogSlice';
import { format } from 'date-fns';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.blog);
  const handleSocialClick = (platform: string) => {
    logClick('social_link_click', { platform });
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostClick = (post: any) => {
    logClick('home_post_click', {
      post_id: post.id,
      post_title: post.title,
      post_slug: post.slug
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/22/00/19/hexagon-8588837_1280.jpg"
            alt="javivilchis backgroun image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80" />
        </div>
      <section className="relative h-[90vh] w-full">
        {/* Background Image with Overlay */}
        

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Full Stack Developer
              <span className="block text-indigo-400">& Multi Media Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Creating beautiful, functional, and user-friendly digital experiences. Passionate about clean code and modern design.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/javivilchis"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('github')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/javier-vilchis-8843226/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('linkedin')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:javivilchis@gmail.com?subject=from jv website"
                onClick={() => handleSocialClick('email')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`}
                  alt="Project preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Project {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <a
                    href="#"
                    onClick={() => logClick('project_link', { project_id: item })}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}


 {/* Latest Posts Section */}
 <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
            <Link
              to="/blog"
              onClick={() => logClick('view_all_posts')}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading latest posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(0, 2).map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
                      <div className="flex items-center gap-2 mb-4">
                        <Terminal className="h-4 w-4 text-gray-500" />
                        <div className="flex flex-wrap gap-2">
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
                      </div>
                    )}
                    <Link
                      to={`/blog/${post.slug}`}
                      onClick={() => handlePostClick(post)}
                      className="block group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-2">
                        {post.title}
                      </h3>
                    </Link>
                    {post.subtitle && (
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.subtitle}</p>
                    )}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time dateTime={post.created_at}>
                        {format(new Date(post.created_at), 'MMMM d, yyyy')}
                      </time>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      onClick={() => handlePostClick(post)}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts available yet.</p>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <a
            href="mailto:javivilchis@gmail.com?subject=from jv website"
            onClick={() => logClick('contact_button')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;