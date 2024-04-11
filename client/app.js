const showWrapper = document.getElementById("showWrapper");

// get the show from my api
async function getShow() {
  const response = await fetch(
    "https://guest-book-gj49.onrender.com"
  );
  const show = await response.json();
  console.log(show);

  // put the show onto the page
  show.forEach(function (show) {
    // DOM manipulation to put the show onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = show.title;
    p.textContent = `Was the ${show.episode} in ${show.season}`;
    img.src = show.imgUrl;
    img.alt = show.title;

    showWrapper.appendChild(h2);
    showWrapper.appendChild(p);
    showWrapper.appendChild(img);
  });
}

getShow();