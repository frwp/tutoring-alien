// theme.config.js
const config = {
  github: 'https://github.com/RianWardanaPutra', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  titleSuffix: ' – TutorAlien',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © Rian Wardana.`,
  footerEditLink: `Have suggestions? Add issues here`,
  logo: (
    <>
      <span><img src="/ufo.png"/></span>{' '}
      <span>{' '}Tutoring Alien - Belajar Dasar Web dan Wordpress</span>
    </>
  ),
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Nextra: the next docs builder' />
      <meta name='og:title' content='Nextra: the next docs builder' />
    </>
  ),
};
export default config;
