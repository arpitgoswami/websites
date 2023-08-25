const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const warning = document.querySelector(".warning");

let keyword = "";
let page = 1;
let time = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url =
    "https://api.unsplash.com/search/photos?page=" +
    page +
    "&query=" +
    keyword +
    "&client_id=z-rsNbNC_0p4aX1LX0sSfMxNqeU49JUGMlOsnR64kok" +
    "&per_page=12";

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  if (results <= 0) {
    showMoreBtn.style.display = "none";
    warning.style.display = "block";
  } else {
    results.map((results) => {
      const image = document.createElement("img");
      image.src = results.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = results.links.html;
      imageLink.style = "--i: " + time + ";";
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
      time += 4;
    });
    showMoreBtn.style.display = "block";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  time = 1;
  searchImages();
  warning.style.display = "none";
});

showMoreBtn.addEventListener("click", () => {
  page++;
  time = 1;
  searchImages();
});
