import { FooterSocialMedia } from './FooterSocialMedia';
import { Logo } from './Logo';
import { Tagline } from './Tagline';

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo />

        <Tagline />
        <FooterSocialMedia
          facebookURL="https://www.facebook.com/"
          instagramURL="https://www.instagram.com/"
          twitterURL="https://twitter.com/?lang=en"
          linkedinURL="https://ca.linkedin.com/"
        />
      </div>
    </footer>
  );
};
