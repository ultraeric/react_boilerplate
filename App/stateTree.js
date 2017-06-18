import * as Footer from 'Footer';
import * as Header from 'Header';
import * as MainMenu from 'MainMenu';
import * as Pages from 'Pages';

let stateTree = {
  headerData: Header.stateTree,
  mainMenuData: MainMenu.stateTree,
  pagesData: Pages.stateTree,
  footerData: Footer.stateTree
};

export {stateTree};
