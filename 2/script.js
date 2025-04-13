const cart = {};

function scrollRight(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({ left: 220, behavior: 'smooth' });
}

document.querySelectorAll('.actions').forEach(div => {
  const id = div.getAttribute('data-id');
  renderButtons(div, id);
});

function renderButtons(container, id) {
  const quantity = cart[id] || 0;
  container.innerHTML = '';

  if (quantity === 0) {
    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.className = 'add-btn';
    btn.onclick = () => {
      cart[id] = 1;
      renderButtons(container, id);
    };
    container.appendChild(btn);
  } else {
    const minus = document.createElement('button');
    minus.textContent = '–';
    minus.className = 'qty-btn';
    minus.onclick = () => {
      cart[id]--;
      if (cart[id] <= 0) delete cart[id];
      renderButtons(container, id);
    };

    const plus = document.createElement('button');
    plus.textContent = '+';
    plus.className = 'qty-btn';
    plus.onclick = () => {
      if (cart[id] < 10) {
        cart[id]++;
        renderButtons(container, id);
      }
    };

    const label = document.createElement('span');
    label.textContent = ` ${cart[id]} `;
    label.style.margin = "0 10px";

    container.appendChild(minus);
    container.appendChild(label);
    container.appendChild(plus);
  }
}
