import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://twitter.com' target="_blank" rel="noreferrer">
      <BsTwitter />
    </a>
    <a href='https://www.linkedin.com/in/alkis-siokas/' target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href='https://instagram.com' target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;