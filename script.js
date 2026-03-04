async function loadPortfolios() {
  const response = await fetch("data/portfolios.json");
  const portfolios = await response.json();

  renderPortfolios(portfolios);

  document
    .getElementById("searchInput")
    .addEventListener("input", function () {

      const value = this.value.toLowerCase();

      const filtered = portfolios.filter(p =>
        p.name.toLowerCase().includes(value) ||
        (p.tagline && p.tagline.toLowerCase().includes(value))
      );

      renderPortfolios(filtered);
    });
}

function renderPortfolios(portfolios) {

  const container = document.getElementById("portfolio-grid");

  container.innerHTML = "";

  portfolios.forEach(p => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.tagline || ""}</p>
      <a href="${p.url}" target="_blank">Visit Portfolio</a>
    `;

    container.appendChild(card);
  });
}

loadPortfolios();