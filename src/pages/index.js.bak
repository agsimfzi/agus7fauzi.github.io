import React from 'react';
import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';
import { navigate } from 'gatsby';

function RedirectIndex() {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    const langKey = getUserLangKey(['en', 'id'], 'en');
    const homeUrl = withPrefix(`/${langKey}`);

    navigate(homeUrl, { replace: true });
  }
  return <div />;
}

export default RedirectIndex;
