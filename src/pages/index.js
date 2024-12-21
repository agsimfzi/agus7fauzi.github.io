import React from 'react';
import { Helmet } from 'react-helmet';
import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';
import { navigate } from 'gatsby';
import App from '../components/App';
import {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data.en';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    const langKey = getUserLangKey(['en', 'id'], 'en');

    if (langKey === 'id') {
      const homeUrl = withPrefix(`/${langKey}`);

      navigate(homeUrl, { replace: true });
    }
  }

  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App
        heroData={heroData}
        aboutData={aboutData}
        projectsData={projectsData}
        contactData={contactData}
        footerData={footerData}
      />
    </>
  );
};
