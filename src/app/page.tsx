import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo, } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Innovation for all"
        title="Mission Statement"
      >
        Ending generational poverty 
        through experiential education in uplifting communities 
        and building access to the innovation econom

      </SectionTitle>

      <Benefits data={benefitOne} />
      

      

      <SectionTitle
        preTitle="Our Team"
        title="What our crew looks like"
      >
        
      </SectionTitle>

      <Testimonials />

      <Cta />
    </Container>
  );
}
