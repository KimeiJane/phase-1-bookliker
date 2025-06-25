document.addEventListener("DOMContentLoaded", () => {
  const listPanel = document.getElementById("list");
  const showPanel = document.getElementById("show-panel");

  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((books) => {
      books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book.title;
        listPanel.appendChild(li);
      });
    });
});
