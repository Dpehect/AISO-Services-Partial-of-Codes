import HeroSection from '@/components/HeroSection';
import SolutionsGrid from '@/components/SolutionsGrid';
import WhoItsFor from '@/components/WhoItsFor';
import SEOAgencySection from '@/components/SEOAgencySection';
import ImplementationSection from '@/components/ImplementationSection';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'Solutions | AISO Hub',
  description: 'AI Search Optimization solutions for your business growth',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SolutionsGrid />
      <WhoItsFor />
      <SEOAgencySection />
      <ImplementationSection />
      <FAQSection />
    </div>
  );
}
