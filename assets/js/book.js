fetch('data/books.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.querySelector('.books-grid');
    grid.innerHTML = '';
    data.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <img src="${book.image}" class="book-cover" />
        <div class="book-title">${book.title}</div>
      `;
      grid.appendChild(card);
    });
  });
