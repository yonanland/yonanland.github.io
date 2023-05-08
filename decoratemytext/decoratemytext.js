// alert("Hello, World");

function onclick(){
    alert("Hello, world!");
} 

function biggerdecorations() {
  const textArea = document.getElementById("text");

  if (textArea.style.fontSize === "24pt") {
    textArea.style.fontSize = "medium";
  } else {
    textArea.style.fontSize = "24pt";
  }
}


function bling() {
    const checkBox = document.getElementById("check");
    const textArea = document.getElementById("text");
  
    if (checkBox.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "green";
      textArea.style.textDecoration = "underline";
      document.body.style.backgroundImage =  "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
      // document.body.style.backgroundImage = "url('https://media.giphy.com/media/3o7qE3vzVBKjhuHp0g/giphy.gif')";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "inherit";
      textArea.style.textDecoration = "none";
      document.body.style.backgroundImage = "url('image/background.png')";
    }

}
