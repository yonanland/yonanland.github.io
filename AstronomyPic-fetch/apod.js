$(document).ready(function () {
  $("#view_button").click(getPicture);
  console.log("apod");
});
function getPicture() {
  var url =
    "https://api.nasa.gov/planetary/apod?api_key=gyhaJ2GQ5PF58E8w6iESVvscg2en3nrGcOqczI2s&date=" +
    $("#date").val();

  let fetch = fetch(url);

  fetch
    .then((res) => res.json())
    .then((d) => {
      showPicture(d);
    })
    .catch((d) => {
      noPicture(d);
    });
  console.log("getpic");
}

function showPicture(data) {
  console.log("Picture: found");
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
}
function noPicture(error) {
  console.log("Picture: not found");
  alert(error.responseText);
}
