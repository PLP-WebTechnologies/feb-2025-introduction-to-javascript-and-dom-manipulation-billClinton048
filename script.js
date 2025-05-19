function changeText() {
    const textElement = document.getElementById("text");
    textElement.textContent = "Am Changed changed!";
  }
  
  function changeStyle() {
    const textElement = document.getElementById("text");
    textElement.style.color = "tomato";
    textElement.style.fontSize = "1.5rem";
    textElement.style.fontWeight = "bold";
  }
  
  function addElement() {
    const container = document.getElementById("element-container");
    const newElement = document.createElement("p");
    newElement.textContent = "Here i am the new element!";
    newElement.className = "dynamic-element";
    container.appendChild(newElement);
  }
  
  function removeElement() {
    const container = document.getElementById("element-container");
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  }