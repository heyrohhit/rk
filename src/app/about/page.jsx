

  import AboutContent from './AboutContent';
import EducationSectionComponent from './EducationSection';
import Background from '../objects/Background';

// Main Page Component
const page = () => {
    return (
      <>
      <Background/>
      <EducationSectionComponent/>
        <AboutContent />
        
      </>
    );
  };
  
  export default page;