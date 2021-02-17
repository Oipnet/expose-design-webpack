import tippy from 'tippy.js';

const tooltip = (selector, message) => {
  console.log(selector);
  tippy(selector, {
    content: message,
  });
};

export default {};
export { tooltip };
