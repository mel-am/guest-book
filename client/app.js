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

const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:8080/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}
app.use(express.json()); // ensure this is present so the server can understand JSON data

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});// do something with the form data here
}

messageForm.addEventListener("submit", handleSubmitMessageForm);