import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const Header = lazy(() => import("./component/Header"))
const Hero = lazy(() => import("./component/Hero"))
const About = lazy(() => import("./component/About"))
const Projects = lazy(() => import("./component/Projects"))
const Contact = lazy(() => import("./component/Contact"))
const StarsCanvas = lazy(() => import("./component/canvas/Stars"))

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Suspense fallback={<h1>LOADING .....</h1>}>
        <div className='bg-primary overflow-hidden' >
          <Header />
          <Hero />
          <About />
          <Projects />
          <div className='pb-80 lg:pb-7 px-2 relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>

  )
}