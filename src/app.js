require('../assets/stylesheets/main.scss');
import profile from '../assets/images/profile-placeholder.jpg';
import logo from '../assets/images/logo.png';

import TomSelect from 'tom-select';
import { collapse } from './components/collapse';
import { datatable } from './components/table';
import { tooltip } from './components/tooltip';

collapse();

datatable('.is-datatable', {
  searchable: true,
  sortable: true,
});

new TomSelect('#language-select', {
  create: false,
  valueField: 'id',
  items: [1],
  controlInput: '<input/>',
  hideSelected: true,
  options: [
    { id: 1, option: 'Français', flag: 'fr' },
    { id: 2, option: 'English', flag: 'gb' },
  ],
  render: {
    option(data, escape) {
      return (
        `${
          '<div class="language-option">' + '<span class="flag-icon flag-icon-'
        }${escape(data.flag)}"></span>` +
        `<span>${escape(data.option)}</span>` +
        `</div>`
      );
    },
    item(data, escape) {
      return (
        `${
          '<div class="language-option">' + '<span class="flag-icon flag-icon-'
        }${escape(data.flag)}"></span>` +
        `<span>${escape(data.option)}</span>` +
        `</div>`
      );
    },
  },
});