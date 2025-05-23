import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../store/slices/blogSlice';
import { RootState } from '../store/store';
import { ImagePlus, X } from 'lucide-react';
import { logClick } from '../lib/firebase';

// Available categories for blog posts
const CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'DevOps',
  'Cloud Computing',
  'Artificial Intelligence',
  'Blockchain',
  'Cybersecurity',
];

const Admin: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleCategoryToggle = (category: string) => {
    logClick('category_toggle', { category });
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    setPreviewImage(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    logClick('publish_post', { title });
    
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      await dispatch(
        createPost({
          title,
          subtitle,
          content,
          html_content: content,
          image_url: imageUrl,
          categories: selectedCategories,
          slug,
          published: true,
        })
      );
      navigate('/blog');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            placeholder="Enter post title"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            placeholder="Enter post subtitle"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Featured Image URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {previewImage && (
            <div className="mt-2 relative">
              <img
                src={previewImage}
                alt="Preview"
                className="h-48 w-full object-cover rounded-md"
                onError={() => setPreviewImage('')}
              />
              <button
                type="button"
                onClick={() => {
                  setImageUrl('');
                  setPreviewImage('');
                  logClick('remove_image');
                }}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryToggle(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content (HTML supported)
          </label>
          <textarea
            id="content"
            rows={12}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            placeholder="Write your post content here... HTML tags are supported"
          />
        </div>

        {/* Preview */}
        {content && (
          <div className="border rounded-md p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Content Preview</h3>
            <div
              className="prose prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;