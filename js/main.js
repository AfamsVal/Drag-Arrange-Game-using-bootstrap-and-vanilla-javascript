const listGroupItem = document.querySelectorAll(".list-group-item");
const lists = document.querySelectorAll(".card-body");

let dragItem = null;

for (let item of listGroupItem) {
  item.addEventListener("dragstart", () => {
    dragItem = item;
    setTimeout(() => (item.style.display = "none"), 0);
  });

  item.addEventListener("dragend", () => {
    setTimeout(() => {
      dragItem.style.display = "block";
      dragItem = null;
    }, 0);
  });

  let leave;
  for (let j = 0; j < lists.length; j++) {
    let list = lists[j];
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      leave = list;
      setTimeout(() => (this.style.border = "1px dashed black"), 0);
    });

    list.addEventListener("dragleave", (e) => {
      if (leave == list) {
        leave.style.border = "1px dashed gray";
      }
    });

    list.addEventListener("drop", function (e) {
      this.append(dragItem);
      this.style.border = "1px dashed grey";
    });
  }
}
