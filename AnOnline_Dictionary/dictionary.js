$(function () {
  const to_submit = $("#to_submit");
  const input = $("#input");

  to_submit.click(function () {
    const word = input.val();
    console.log("Entered word is", word);
    fetch(`http://localhost:8080/word?word=${word}`)
      .then((resp) => resp.json())
      .then(print_Result)
      .catch((error) => console.error(error));
  });
});

function print_Result(data) {
  const listdata = document.getElementById("output");

  // Clear the existing inner HTML
  listdata.innerHTML = "";

  for (const item of data) {
    const listElement = document.createElement("li");
    listElement.innerHTML +=
      '<span class="wordtype">(' +
      item.wordtype +
      ")</span>::" +
      item.definition;
    listdata.appendChild(listElement);
  }
}

function errorFunction(error) {
  alert(error.responseText);
}
