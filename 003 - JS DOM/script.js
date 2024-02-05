function abc() {
  //   console.log(event.target);
  var name = "Bilal";

  alert(name);
}

function changeStyle() {
  //   console.log(event);
  if (event.type === "mouseover") {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
  } else {
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "green";
  }
}

function expand() {
  let shortText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dignissimos?";
  let fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dignissimos? Dicta ipsam illum rem, ut nihil eveniet, provident necessitatibus cumque atque maiores fugit ipsum. Alias id magni facere neque. Eveniet.";
  let text = document.getElementById("text");
  let changeText = document.getElementById("change-text");

  if (changeText.innerText === "See More") {
    text.textContent = fullText;
    changeText.textContent = "See less";
  } else {
    text.textContent = shortText;
    changeText.textContent = "See More";
  }
}

// function render() {
//   let count = [1, 2, 3, 4, 5];
//   const list = document.getElementById("list");

//   list.innerHTML = count.map((val, i) => `<li>${val}</li>`);
// }
// render();
