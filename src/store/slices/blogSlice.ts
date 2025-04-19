import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  collection,
  query,
  getDocs,
  addDoc,
  Timestamp,
  orderBy,
  where
} from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';

interface Post {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  html_content?: string;
  image_url?: string;
  categories?: string[];
  user_id: string;
  created_at: string;
  published: boolean;
  slug: string;
}

interface BlogState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  try {
    const postsRef = collection(db, 'posts');
    // First try with just the published filter
    const q = query(
      postsRef,
      where('published', '==', true)
    );
    
    const snapshot = await getDocs(q);
    
    // Sort the results in memory if we can't use the index yet
    const posts = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at instanceof Timestamp 
          ? data.created_at.toDate().toISOString()
          : data.created_at
      } as Post;
    });

    // Sort posts by created_at in descending order
    return posts.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
});

export const createPost = createAsyncThunk(
  'blog/createPost',
  async (post: Omit<Post, 'id' | 'created_at' | 'user_id'>) => {
    if (!auth.currentUser) throw new Error('User must be logged in to create a post');

    const newPost = {
      ...post,
      user_id: auth.currentUser.uid,
      created_at: Timestamp.now()
    };

    const docRef = await addDoc(collection(db, 'posts'), newPost);
    return {
      id: docRef.id,
      ...newPost,
      created_at: newPost.created_at.toDate().toISOString()
    } as Post;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export default blogSlice.reducer;