import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { toast } from 'sonner';



export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MESUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// Enhanced analytics helper functions
export const logPageView = (pageName: string, additionalParams = {}) => {
  logEvent(analytics, 'page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...additionalParams
  });
};

export const logClick = (elementName: string, additionalParams = {}) => {
  logEvent(analytics, 'click', {
    element_name: elementName,
    page_title: document.title,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...additionalParams
  });
};

export const logBlogInteraction = (action: string, post: any) => {
  logEvent(analytics, 'blog_interaction', {
    action,
    post_id: post.id,
    post_title: post.title,
    post_slug: post.slug,
    categories: post.categories,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  });
};

export const logSearch = (query: string, resultsCount: number) => {
  logEvent(analytics, 'search', {
    search_term: query,
    results_count: resultsCount,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  });
};

// Helper function for formatting Firestore timestamps
export const formatFirestoreDate = (timestamp: any) => {
  if (!timestamp) return '';
  return timestamp.toDate().toISOString();
};

// Push notification functions
export const initializeNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      });
      
      if (token) {
        console.log('FCM Token:', token);
        // Here you would typically send this token to your server
        return token;
      }
    }
  } catch (error) {
    console.error('Failed to get notification permission:', error);
    return null;
  }
};