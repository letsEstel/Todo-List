import { createItem } from "./createItem";
import { createProject } from "./createProject";
import { renderProject } from "./renderProject";

const task1 = createItem(
  "Learn JavaScript",
  "Complete the module pattern section",
  "2024-11-30",
  "high"
);
const project1 = createProject("Study web development.");
project1.addItem(task1);

let projectList = [project1];
console.log(projectList);
const ui = function () {
  const content = document.querySelector("#content");
  for (let project of projectList) {
    let projectContent = renderProject(project);
    console.log(projectContent);
    content.appendChild(projectContent);
    content.addEventListener("click", () => {
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      let projectContent = renderProject(project);
      console.log(projectContent);
      content.appendChild(projectContent);
    });
  }
};
ui();
