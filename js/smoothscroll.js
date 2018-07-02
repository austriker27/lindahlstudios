//-------------------------------------------------------------
// smooth scrolling
//-------------------------------------------------------------

if (typeof window !== 'undefined') {

  // Make scroll behavior of internal links smooth

  // eslint-disable-next-line global-require

  require('smooth-scroll')('a[href*="#"]');

}
