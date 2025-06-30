
// page.jsx: Metadata and main page structure
export const metadata = {
    title: 'About Us | RK Webs',
    description: 'Learn about RK Webs, our mission, vision, and the team behind innovative web solutions.',
    openGraph: {
      title: 'About Us | RK Webs',
      description: 'Discover the story of RK Webs, our passion for web development, and our commitment to excellence.',
      url: 'https://rkwebs.vercel.app/about',
      siteName: 'RK Webs',
      images: [
        {
          url: 'https://rkwebs.vercel.app/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'RK Webs About Us',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };

  import AboutContent from './AboutContent';
import EducationSectionComponent from './EducationSection';
import Background from '../objects/Background';

// Main Page Component
const page = () => {
    return (
      <>
      <Background quantity={5}/>
      <EducationSectionComponent/>
        <AboutContent />
        
      </>
    );
  };
  
  export default page;