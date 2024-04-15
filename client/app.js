const showWrapper = document.getElementById("showWrapper");

// get the show from my api
async function getShow() {
  const response = await fetch(
    "https://guest-book-gj49.onrender.com/show",
    "https://guest-book-1.onrender.com/show",
    // "http://localhost:8080/show",
  );
  const show = await response.json();
  console.log(show);

  // put the show onto the page
  show.forEach(function (show) {
    // DOM manipulation to put the show onto the html
    const number = document.createElement("number");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = `No.${show.number} - ${show.title}`
    p.textContent = `This was the ${show.episode} episode in season ${show.season}`;
    img.src = show.imgUrl;
    img.alt = show.episode;


    showWrapper.appendChild(number);
    showWrapper.appendChild(h2);
    showWrapper.appendChild(p);
    showWrapper.appendChild(img);
  });
}

getShow();

const messageForm = document.querySelector("#message-form");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Review submitted!")

  const formData = new FormData(messageForm);
  const user = formData.get("user");
  const episode = document.getElementById("episode").value;
  const review = formData.get("review");
  const opinion = formData.get("opinion");
  
  
  

    fetch("http://localhost:8080/messages", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ user, episode, review, opinion }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      displayReview(user, episode, review, opinion);
      messageForm.reset();
    });
}
function displayReview(user, episode, review, opinion) {
  const submittedPost = document.getElementById('submittedPost');
  const reviewPost = document.createElement('div');
  reviewPost.innerHTML = `
    <p><strong>Name:</strong> ${user}</p>
    <p><strong>Review:</strong> ${review}</p>
    <p><strong>Episode:</strong> ${episode}</p>
    <p><strong>Opinion:</strong> ${opinion}</p>
  `;
  submittedPost.appendChild(reviewPost);

  
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("gif-button");
  var gifContainer = document.getElementById("gif-container");
  function showGif() {
    gifContainer.innerHTML = '<img src="./troy_thumbs_up.gif" alt="GIF">';
  }
  button.addEventListener("click", showGif);
});