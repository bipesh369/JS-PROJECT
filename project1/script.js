const colorElements = document.querySelectorAll("[data-color]");

colorElements.forEach(element => {
  element.addEventListener("click", () => {
    const color = element.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  });
});
