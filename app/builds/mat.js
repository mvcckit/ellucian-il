// # matToggle
//
// Toggles the open and closed state for an element.
//
function $matToggle(selector) { document.querySelector(selector).classList.toggle("is-opened"); }

// # matReset
//
// Resets the state to closed for an element
//
function $matReset(selector) { document.querySelector(selector).classList.remove("is-opened"); }