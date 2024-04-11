const showWrapper = document.getElementById("Wrapper");

// get the show from my api
async function getShow() {
  const response = await fetch(
    "https://guest-book-1.onrender.com"
  );
  const show = await response.json();
  console.log(show);

  // put the show onto the page
  show.forEach(function (show) {
    // DOM manipulation to put the show onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = show.name;
    p.textContent = `Came out in ${show.year}`;
    img.src = show.imgUrl;
    img.alt = show.name;

    showWrapper.appendChild(h2);
    showWrapper.appendChild(p);
    showWrapper.appendChild(img);
  });
}

getShow();