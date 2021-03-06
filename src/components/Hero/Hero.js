import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo ao <br/>
        Meu portfólio!
      </SectionTitle>
      <SectionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tortor rhoncus sem convallis tempus. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> 
        Learn More 
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;