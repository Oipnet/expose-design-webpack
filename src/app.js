import './scss/app.scss';
import profile from "../assets/images/profile-placeholder.jpg";
import logo from "../assets/images/logo.png";

import TomSelect from "tom-select";
import { collapse } from "./components/collapse";
import { datatable } from "./components/table";
import tippy, { roundArrow } from "tippy.js";

collapse();

datatable(".is-datatable", {
  searchable: true,
  sortable: true,
});

let tooltips = [...document.getElementsByClassName('tooltip')];

tooltips.forEach(tooltip => {
  tippy(tooltip, {
    arrow: roundArrow + roundArrow,
    theme: 'light-tooltip',
    content: tooltip.dataset.tooltipContent,
    placement: tooltip.dataset.tooltipPlacement,
    maxWidth: 470
  });
});

tippy('#messages', {
  theme: 'light',
  appendTo: 'parent',
  content: `
    <p>Aucuns massages<p>
  `,
  arrow: roundArrow,
  interactive: true,
  allowHTML: true,
  trigger: 'click',
});

tippy('#notifications', {
  theme: 'light',
  appendTo: 'parent',
  content: `
    <ul class="dropdown-list">
      <li class="unread"><a>Notification 1</a></li>
      <li class="unread"><a>Notification 2</a></li>
      <li class="read"><a>Notification 3</a></li>
    </ul>
  `,
  arrow: roundArrow,
  interactive: true,
  allowHTML: true,
  trigger: 'click'
});

tippy('#profile', {
  theme: 'light',
  appendTo: 'parent',
  content: `
    <ul class="dropdown-list">
     <li><a>Mon compte</a></li>
     <li>
      <a>Thème light</a>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
     </li>
     <li><a>Déconnexion</a></li> 
    </ul>
  `,
  arrow: roundArrow,
  interactive: true,
  allowHTML: true,
  trigger: 'click',
});

new TomSelect("#language-select", {
  create: false,
  valueField: "id",
  items: [1],
  controlInput: "<input/>",
  hideSelected: true,
  options: [
    { id: 1, option: "Français", flag: "fr" },
    { id: 2, option: "English", flag: "gb" },
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
