const createProject = function (projectName) {
  let _name = projectName;
  let _itemsInProject = [];
  const getName = () => {
    return _name;
  };
  const addItem = (item) => {
    _itemsInProject.push(item);
  };
  const setName = (newName) => {
    _name = newName;
  };
  const delItem = (index) => {
    _itemsInProject.splice(index, 1);
  };
  const showItem = () => {
    return _itemsInProject;
  };
  return { getName, addItem, setName, delItem, showItem };
};

export { createProject };
