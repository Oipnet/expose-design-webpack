import "./scss/app.scss";
import profile from "../assets/images/profile-placeholder.jpg";
import logo from "../assets/images/logo.png";
import wave from "../assets/images/wave-background.svg";
import bienvenue from "../assets/images/bienvenue-illustration.svg";

import TomSelect from "tom-select";
import { collapse } from "./components/collapse";
import { datatable } from "./components/table";
import tippy, { roundArrow } from "tippy.js";

const body = [...document.getElementsByTagName("body")][0];

body.classList.add("theme--dark");

let themeSwith = document.getElementById("theme-switch", toggleTheme);

function toggleTheme(checkbox) {
  body.classList.toggle("theme--default");
  body.classList.toggle("theme--dark");
}

collapse();

datatable(".is-datatable", {
  searchable: true,
  sortable: true,
});

let tooltips = [...document.getElementsByClassName("tooltip")];

tooltips.forEach((tooltip) => {
  tippy(tooltip, {
    arrow: roundArrow + roundArrow,
    theme: "tooltip",
    content: tooltip.dataset.tooltipContent,
    placement: tooltip.dataset.tooltipPlacement,
    maxWidth: 470,
  });
});

tippy("#messages", {
  theme: "default",
  appendTo: "parent",
  content: `
    <p>Aucuns massages<p>
  `,
  arrow: roundArrow,
  interactive: true,
  allowHTML: true,
  trigger: "click",
});

tippy("#notifications", {
  theme: "default",
  appendTo: "parent",
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
  trigger: "click",
});

tippy("#profile", {
  theme: "default",
  appendTo: "parent",
  onMount(instance) {
    document
      .getElementById("theme-switch")
      .addEventListener("click", toggleTheme);
  },
  content: `
    <ul class="dropdown-list">
     <li><a>Mon compte</a></li>
     <li>
      <a>Thème light</a>
      <label class="switch">
        <input type="checkbox" id="theme-switch">
        <span class="slider"></span>
      </label>
     </li>
     <li><a>Déconnexion</a></li>
    </ul>
  `,
  arrow: roundArrow,
  interactive: true,
  allowHTML: true,
  trigger: "click",
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
