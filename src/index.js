import _ from "lodash";
import './assets/styles/style.scss';
import './assets/js/img-path';
import findCorrectImg from './assets/js/changeImage';
import cart from './assets/js/cartLogic';

// Event handling
addEventListener('click', findCorrectImg);
// addEventListener('click', cart);
cart();
