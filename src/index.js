const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", handleSubmit);
};

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.target.children.searchByID.value);
  //e.target.children[1].value
  const input = document.querySelector("input#searchByID");
  console.log(input.value);

  fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const title = document.querySelector("section#movieDetails h4");
      const summary = document.querySelector("section#movieDetails p");

      title.innerText = data.title || `Title`;
      summary.innerText = data.summary || `Summary`;
      if (title.innerHTML === `Title`) alert("The Movie Doesn't Exist");
    });
}

document.addEventListener("DOMContentLoaded", init);