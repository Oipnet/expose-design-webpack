const collapse = (selector = '.is-collapsable') => {
  const cards = [...document.querySelectorAll(selector)];

  cards.map((card) => {
    const target = card.dataset.target || '.card-content';
    const headerSelector = card.dataset.header || '.card-header';
    const collapseBtn = document.createElement('a');
    collapseBtn.innerHTML = `
      <i class="ri-arrow-drop-down-line"></i> 
    `;
    card.querySelector(headerSelector).appendChild(collapseBtn);

    collapseBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const targetElement = card.querySelector(target);
      targetElement.classList.toggle('is-hidden');
      e.target.classList.toggle('reverse');
    });
  });
};

export default {};
export { collapse };
