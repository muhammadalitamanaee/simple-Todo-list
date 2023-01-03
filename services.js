export function getData() {
  return fetch(`http://localhost:3000/databaceTo`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => {
      return false;
    });
}

export function addData(data) {
  return fetch(`http://localhost:3000/databaceTo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => {
      return false;
    });
}

export function deleteData(id) {
  return fetch(`http://localhost:3000/databaceTo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => console.log(response.json()));
}
