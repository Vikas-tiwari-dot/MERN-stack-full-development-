// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');
// child.textContent = "This is a new paragraph.";
// parent.appendChild(child);

// remove child element
// parent.removeChild(child);

// replace child element
let newChild = document.querySelector('#fpara');
newChild.textContent = "This is a replaced paragraph.";
parent.replaceChild(newChild, child);
// console.log("Value of E:", value);
// 