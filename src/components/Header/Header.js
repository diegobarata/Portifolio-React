import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alinngItens: "center", color: 'white',  marginBottom: '20',}}>
          <DiCssdeck size="3rem" />
          <Span>Portifolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Technologles</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/diegobarata'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/diegobarata/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/diegobarata/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
