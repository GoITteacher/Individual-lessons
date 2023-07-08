console.log("first");
const refs = {
  formEl: document.querySelector(".js-form1"),
  boxElem: document.querySelector(".js-form-container"),
};

// refs.formEl.addEventListener("click", onFormClick);

// function onFormClick(event) {
//   event.preventDefault();

//   if (event.currentTarget === event.target) return;
//   if (event.target.nodeName !== "BUTTON") return;

//   console.log(event.target.textContent);
// }

refs.boxElem.addEventListener("click", onBoxElemClick);
function onBoxElemClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) return;
  if (event.target.nodeName !== "BUTTON") return;
  console.log(event.target.textContent);
  console.log(event.target.closest("form.form").dataset.index);
}
