require("../assets/stylesheets/main.scss");
import profile from "../assets/images/profile-placeholder.jpg";
import logo from "../assets/images/logo.png";

import TomSelect from "tom-select";
import { collapse } from "./components/collapse";
import { datatable } from "./components/table";
import { tooltip } from "./components/tooltip";
import tippy, { roundArrow } from "tippy.js";

collapse();

datatable(".is-datatable", {
  searchable: true,
  sortable: true,
});

tippy('#profile', {
  theme: 'profile',
  content: `
    <ul>
     <li><a>Mon compte</a></li>
     <hr>
     <li>
      <a>Thème light</a>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
     </li>
     <hr>
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
