import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const demoProjects = [{
//     title: 'Portfolio1',
//     description: 'A simple portfolio1 website',
//   },
//   {
//     title: 'Portfolio2',
//     description: 'A simple portfolio website',
//   },
//   {
//     title: 'Portfolio3',
//     description: 'A simple portfolio3 website',
//   },
//   {
//   title: 'Portfolio4',
//   description: 'A simple portfolio4 website',
//   },
//   {
//     title: 'Portfolio5',
//     description: 'A simple portfolio5 website',
//   },
//   {
//     title: 'Portfolio6',
//     description: 'A simple portfolio6 website',
//   }
//   ];


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>

    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit})=>(  
        <BlogCard key={id}>
          <Img src={image} alt={title} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map ((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>

          </UtilityList>
        </BlogCard>
      ))} 
    </GridContainer>
  </Section>
);

export default Projects;