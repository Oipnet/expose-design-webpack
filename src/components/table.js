import { DataTable } from 'simple-datatables';

const customizeSearchInput = (datatable) => {
  const search = datatable.input;
  search.classList.add('input');

  const searchContainer = search.parentNode;
  searchContainer.classList.add('control', 'has-icon-left');

  const searchIcon = document.createElement('span');
  searchIcon.classList.add('icon', 'is-small');
  searchIcon.innerHTML = `
    <i class='ri-search-2-line'></i>
  `;

  searchContainer.appendChild(searchIcon);
};

const datatable = (selector = 'table', options = {}) => {
  [...document.querySelectorAll(selector)].map((table) => {
    const datatable = new DataTable(table, options);

    datatable.on('datatable.init', () => {
      customizeSearchInput(datatable);
    });
  });
};

export default {};
export { datatable };
