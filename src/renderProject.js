const renderProject = function (Project) {
  const head = document.createElement("h3");
  head.textContent = `${Project.getName()}`;
  //items contains all items
  const items = document.createElement("div");
  items.appendChild(head);
  for (let item of Project.showItem()) {
    //itemDic is a div for single item.
    const itemDiv = document.createElement("div");
    const itemHead = document.createElement("h4");
    itemHead.textContent = item.getTitle();
    itemHead.appendChild(document.createElement("br"));
    itemHead.appendChild(
      document.createTextNode(
        `${item.isCompleted() ? "completed" : "not completed"}`
      )
    );
    const itemInfo = document.createElement("div");
    itemInfo.textContent = "Description:";
    itemInfo.appendChild(document.createElement("br"));
    itemInfo.appendChild(document.createTextNode(`${item.getDescription()}`));
    itemInfo.appendChild(document.createTextNode(" by "));

    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = `${item.getDueDate()}`;
    dueDateSpan.style.fontWeight = "bold";
    itemInfo.appendChild(dueDateSpan);

    const compeleteBtn = document.createElement("button");
    compeleteBtn.textContent = "Done";
    compeleteBtn.addEventListener("click", () => {
      item.markCompleted();
      console.log(item.isCompleted());
      renderProject(Project);
      console.log("ok");
    });
    //append ele to single item
    itemDiv.appendChild(itemHead);
    itemDiv.appendChild(itemInfo);
    itemDiv.appendChild(compeleteBtn);
    //append item to items
    items.appendChild(itemDiv);
  }
  return items;
};

export { renderProject };
