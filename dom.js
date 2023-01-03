window.btnRemover = btnRemover;

export function render(data_array) {
  const [t_body] = document.getElementsByTagName("tbody");
  const add_tittle = document.querySelector(".tittle");
  const add_describtion = document.querySelector(".describtion");
  const add_dueDate = document.querySelector(".dueDate");
  t_body.innerHTML = "";

  for (const key of data_array) {
    const html = ` <tr class="tr_job" id="${key.id}">
                 <td>
                     <input type="checkbox" id="checkbox">
                   </td>
                   <td>
                     <p id="todo_job">${key.valTittle}</p>
                 </td>
                   <td>
                     <p id="todo_job1">${key.valDescribtion}</p>
                 </td>
                   <td>
                     <p id="todo_job2">${key.valDate}</p>
                 </td>
                 <td>
                      <button class="btn" id="${key.id}" onclick="btnRemover(${key.id})" >delete</button>
                   </td>
                 <td>
                    <a href="./index.html"><button class="btn btn1" id="${key.id}" onclick="btnEditor(${key.id})" >edit</button></a>
                   </td>

             </tr>`;
    t_body.innerHTML += html;
    btnRemover();
  }
}

export function btnAdder(addTodoFunction) {
  const add_tittle = document.querySelector(".tittle");
  const add_describtion = document.querySelector(".describtion");
  const add_dueDate = document.querySelector(".dueDate");
  const btn_add = document.getElementById("btn_add");
  const succesMessage = document.querySelector(".succes-container");
  const overlay = document.querySelector(".overlay");
  btn_add.addEventListener("click", () => {
    // succesMessage.style.visibility = "visible";
    // overlay.style.visibility = "visible";

    const valTittle = add_tittle.value;
    const valDescribtion = add_describtion.value;
    const valDate = add_dueDate.value;
    addTodoFunction({ valTittle, valDate, valDescribtion });
  });
}

export function btnRemover(del) {
  const [t_body] = document.getElementsByTagName("tbody");
  const tr_job = document.getElementsByClassName("tr_job");
  for (const iter of tr_job) {
    if (+iter.id === del) {
      iter.innerHTML = "";
    }
  }
}
export function btnEditor(del) {
  const [t_body] = document.getElementsByTagName("tbody");
  const tr_job = document.getElementsByClassName("tr_job");
  for (const iter of tr_job) {
    if (+iter.id === del) {
      iter.innerHTML = "";
    }
    console.log(iter.valDescribtion);
  }
}
