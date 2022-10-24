function getData(event) {
  event.preventDefault();
  const first = document.getElementById("first").value;
  const second = document.getElementById("second").value;
  const last = document.getElementById("last").value;

  let array = document.createElement("p");
  array.append(first,",", second,",", last);
  document.body.append(array);
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", getData);

});