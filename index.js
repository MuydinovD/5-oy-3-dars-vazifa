// // 1-misol
// const content = document.querySelector("#content");
// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a random image from Picsum photos";
// paragraph.classList.add("caption");
// content.appendChild(paragraph);



// 2-misol
// let button = document.querySelector("#changeText");
// let text = document.querySelector("#text");

// button.addEventListener("click", () => {
//     text.textContent = 'This is new Text!';
// });



// 3-misol
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const image = document.querySelector("#image");

// button1.addEventListener("click", () => {
//      image.src = "https://picsum.photos/id/1/1200";
// });
// button2.addEventListener("click", () => {
//      image.src = "https://picsum.photos/id/2/1200";
// });


// 4-misol
// const styledText = document.getElementById("styledText");
// const styleButton = document.getElementById("styleButton");

// styleButton.addEventListener("click", () => {
//     styledText.style.color = "blue";
//     styledText.style.fontSize = "24px";
// });


// 5-misol
// const itemInput = document.getElementById("item");
// const addItemButton = document.getElementById("addItem");
// const list = document.getElementById("list");

// addItemButton.addEventListener("click", () => {
//     const newItem = document.createElement("li");
//     newItem.textContent = itemInput.value;
//     list.appendChild(newItem);
//     itemInput.value = "";
// });


// 6-misol
// const toggleText = document.getElementById("toggleText");
// const toggleButton = document.getElementById("toggleButton");

// toggleButton.addEventListener("click", () => {
//     if (toggleText.style.display == "none") {
//         toggleText.style.display = "block";
//     } else {
//         toggleText.style.display = "none";
//     }
// });


// 8-misol
// const clock = document.getElementById("clock");
// const updateButton = document.getElementById("updateButton");

// updateButton.addEventListener("click", () => {
//     const now = new Date();
//     const hours = (now.getHours() < 10 ? "0" : "") + now.getHours();
//     const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
//     const seconds = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
    
//     clock.textContent = hours + ":" + minutes + ":" + seconds;
// });


// 9-misol
// const colorButton = document.getElementById("colorButton");

// const colors = [
//     "red",     
//     "green",    
//     "blue",   
//     "yellow",  
//     "purple",     
//     "pink",       
//     "orange",     
//     "black",      
// ];

// colorButton.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomColor = colors[randomIndex];
//     document.body.style.backgroundColor = randomColor;
// });



// 10-misol
// const addTask = document.getElementById("addTask");
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// addTask.addEventListener("click", () => {
//      const li = document.createElement("li");
//      li.classList.add("todo-item");
//      li.textContent = taskInput.value;

//      taskList.appendChild(li);
//      taskInput.value ="";
// });

// document.addEventListener("click", (e) => {
//      if (e.target.classList.contains("todo-item")) {
//           const buttonStyle = getComputedStyle(e.target).textDecoration;
//           if(buttonStyle.includes("line-through")) {
//                e.target.style.textDecoration = "none";
//           } else {
//                e.target.style.textDecoration = "line-through";
//           }
//      }
// });

