let portfolios = [];
let selectedLetter = "all";
let selectedTagline = "all";

async function loadPortfolios() {

  const res = await fetch("data/portfolios.json");
  portfolios = await res.json();

  updateWebsiteCount(portfolios.length);
  // Sort A-Z automatically
  portfolios.sort((a, b) => a.name.localeCompare(b.name));

  populateTaglines();
  createAlphabetFilter();
  renderPortfolios(portfolios);

  document
    .getElementById("searchInput")
    .addEventListener("input", applyFilters);

  document
    .getElementById("taglineFilter")
    .addEventListener("change", applyFilters);
}



function populateTaglines() {

  const select = document.getElementById("taglineFilter");

  const taglines = [...new Set(
    portfolios
      .map(p => p.tagline)
      .filter(Boolean)
  )];

  taglines.sort();

  taglines.forEach(tag => {

    const option = document.createElement("option");

    option.value = tag;
    option.textContent = tag;

    select.appendChild(option);

  });
}



function createAlphabetFilter() {

  const container = document.getElementById("alphabetFilter");

  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  letters.forEach(letter => {

    const btn = document.createElement("button");

    btn.textContent = letter;
    btn.className = "alphabet-btn";

    btn.onclick = () => {

      selectedLetter = letter.toLowerCase();

      document
        .querySelectorAll(".alphabet-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      applyFilters();
    };

    container.appendChild(btn);

  });

  container.firstChild.classList.add("active");
}



function applyFilters() {

  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  selectedTagline = document
    .getElementById("taglineFilter")
    .value;

  let filtered = portfolios.filter(p => {

    const nameMatch = p.name.toLowerCase().includes(search);

    const taglineMatch = (p.tagline || "")
      .toLowerCase()
      .includes(search);

    const searchMatch = nameMatch || taglineMatch;

    const letterMatch =
      selectedLetter === "all" ||
      p.name.toLowerCase().startsWith(selectedLetter);

    const roleMatch =
      selectedTagline === "all" ||
      p.tagline === selectedTagline;

    return searchMatch && letterMatch && roleMatch;

  });

  renderPortfolios(filtered);
}



function renderPortfolios(list) {

  const container = document.getElementById("portfolio-grid");

  container.innerHTML = "";

  list.forEach(p => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <img
        loading="lazy"
        src="https://image.thum.io/get/width/800/${p.url}"
        onerror="this.src='https://placehold.co/800x400?text=Website+Preview'"
      >
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>${p.tagline || ""}</p>
      </div>
    `;

    card.onclick = () => window.open(p.url, "_blank");

    container.appendChild(card);

  });

}
function updateWebsiteCount(count) {

  const desc = document.getElementById("site-description");

  desc.innerHTML =
    `A curated collection of <strong>${count}</strong> personal websites`;

}


loadPortfolios();