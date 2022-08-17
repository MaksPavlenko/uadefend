/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import 'bootstrap/dist/css/bootstrap.css';
// impor/t 'bootstrap/scss/bootstrap-grid.scss';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/mixins/_breakpoints.scss';

import ThemeProvider from './src/context/ThemeProvider';
export const wrapRootElement = ThemeProvider;

// const loadableReady = require('@loadable/component').loadableReady;

// const replaceHydrateFunction = () => {
//   return (element, container, callback) => {
//     loadableReady(() => {
//       ReactDOM.render(element, container, callback);
//     });
//   };
// };

// export default replaceHydrateFunction

// import './src/styles/style.sass';
