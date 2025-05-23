import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { auth, initializeNotifications, onMessageListener } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './store/slices/authSlice';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import PostView from './pages/PostView';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { logPageView } from './lib/firebase';
import { Toaster } from 'sonner';

// Serializable user interface
interface SerializableUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
}

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Log page view on route change
    const pageName = location.pathname.substring(1) || 'home';
    logPageView(pageName);
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Create a serializable user object
        const serializableUser: SerializableUser = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        };
        store.dispatch(setUser(serializableUser));
      } else {
        store.dispatch(setUser(null));
      }
    });
// Set up message listener for foreground notifications
onMessageListener();

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AnalyticsWrapper>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<PostView />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </AnalyticsWrapper>
      </Router>
    </Provider>
  );
}

export default App;