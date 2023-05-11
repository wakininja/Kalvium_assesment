var selectElement;
const move = function (element) {
  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
      
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";

      selectElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;
        //for controlling the movement
        // -50 is for not get outside theweb page
        selectElement.style.left = x - 50 + "px";
        selectElement.style.top = y - 50 + "px";

        console.log(selectElement);
      };
    });
  });

  document.onmouseup = function (e) {
    selectElement = null;
  };
};
