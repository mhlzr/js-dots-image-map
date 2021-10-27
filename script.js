const safeArea = document.querySelector('.js-safe-area');
const safeAreaToggle = document.querySelector('.js-safe-area-toggle');
const dotsContainer = document.querySelector('.js-dots');

const form = document.querySelector('.js-form');
const fieldsets = form.querySelectorAll('fieldset');

const render = () => {
  const html = Array.from(fieldsets)
    .map((fieldset) => {
      const [x, y] = Array.from(fieldset.querySelectorAll('input')).map(
        (node) => parseInt(node.value, 10)
      );
      return `<li class="stage__dot" style="left:${x}%;top:${y}%"></li>`;
    })
    .join('');

  const fragment = document.createRange().createContextualFragment(html);

  dotsContainer.innerHTML = '';
  dotsContainer.appendChild(fragment.firstChild);
};

form.addEventListener('input', render);

safeAreaToggle.addEventListener('change', (event) => {
  safeArea.hidden = !event.target.checked;
});

render();
