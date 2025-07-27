let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://688623e9f52d34140f6b8053.mockapi.io/api/v1/todos";

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let result = await response.json();

  if (result) {
    todoContainer.innerHTML = "";

    result.forEach((element) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
      <p class="paraText">${element.text}</p>
      <input id="editInput" type="text" placeholder="Enter your task..." value='${element.text}'>
          <div>
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
          </div>`;

      let deleteBtn = div.querySelector(".deleteBtn");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let paraText = div.querySelector(".paraText");
      let editInput = div.querySelector("#editInput");

      deleteBtn.addEventListener("click", function () {
        deleteData(element.id);
      });

      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        paraText.style.display = "none";
        editInput.style.display = "inline";
      });

      saveBtn.addEventListener("click", function () {
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
        paraText.style.display = "inline";
        editInput.style.display = "none";
      });

      todoContainer.append(div);
    });
  }
}

async function postData() {
  let value = taskInput.value;
  console.log(value);

  let objData = {
    text: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  console.log(response);
  if (response.status === 200) {
    fetchData();
  }
}

fetchData();
