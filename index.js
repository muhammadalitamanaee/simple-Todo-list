import { getData, addData, deleteData } from "./services.js";
import { btnAdder, render, btnRemover, btnEditor } from "./dom.js";

getData().then((data) => {
  render(data);
});
btnAdder((data) => {
  addData(data).then(() =>
    getData().then((data) => {
      render(data);
    })
  );
});

// getData().then(data => {
//     for (const iter of data) {
//         console.log(iter.id)
//     }
// })
