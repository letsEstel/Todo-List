const createItem = function (
  title,
  description = "",
  dueDate = null,
  priority = "low",
  check = false
) {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _check = check;

  return {
    getTitle: function () {
      return _title;
    },
    getDescription: function () {
      return _description;
    },
    getDueDate: function () {
      return _dueDate;
    },
    getPriority: function () {
      return _priority;
    },
    isCompleted: function () {
      return _check;
    },
    setTitle: function (newTitle) {
      _title = newTitle;
    },
    setDescription: function (newDescription) {
      _description = newDescription;
    },
    setDueDate: function (newDueDate) {
      _dueDate = newDueDate;
    },
    setPriority: function (newPriority) {
      _priority = newPriority;
    },
    markCompleted: function () {
      _check = true;
    },
  };
};

export { createItem };
