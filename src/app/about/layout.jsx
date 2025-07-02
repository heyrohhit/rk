
// page.jsx: Metadata and main page structure
export const metadata = {
  title: 'About Rohit Kumar | Innovative Web Solutions & Development',
  description: 'Explore Rohit Kumar’s journey, mission, and vision. Learn about our expert team delivering innovative web development and digital solutions for businesses worldwide.',
  keywords: ['Rohit Kumar', 'web development', 'innovative web solutions', 'digital solutions', 'web design', 'software development', 'about us'],
  alternates: {
    canonical: 'https://rkwebs.vercel.app/about',
  },
  openGraph: {
    title: 'About Rohit Kumar | Expert Web Development Solutions',
    description: 'Discover Rohit Kumar’s commitment to excellence in web development, innovative digital solutions, and our dedicated team driving business success.',
    url: 'https://rkwebs.vercel.app/about',
    siteName: 'Rohit Kumar',
    images: [
      {
        url: 'https://rkwebs.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohit Kumar About Us Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rohit Kumar | Web Development & Innovation',
    description: 'Learn about Rohit Kumar’s mission to deliver cutting-edge web solutions and the team behind our success.',
    images: ['https://rkwebs.vercel.app/images/og-image.jpg'],
  },
};
  
export default function AboutLayout({ children }) {
  return <>{children}</>;
}