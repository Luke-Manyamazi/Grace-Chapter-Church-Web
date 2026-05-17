import React, { lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import PageNotFound from '@/lib/PageNotFound';
import Layout from '@/components/layout/Layout';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const HouseChurches = lazy(() => import('@/pages/HouseChurches'));
const Ministries = lazy(() => import('@/pages/Ministries'));
const Events = lazy(() => import('@/pages/Events'));
const Contact = lazy(() => import('@/pages/Contact'));
const Sermons = lazy(() => import('@/pages/Sermons'));

function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f7f4ef]" aria-label="Loading page">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4">
          <span className="font-heading text-black font-bold text-xl" aria-hidden="true">G</span>
        </div>
        <div className="w-6 h-6 border-2 border-black/10 border-t-black rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/house-churches" element={<HouseChurches />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sermons" element={<Sermons />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
