const addAction = (todo) => ({ type: "ADD", todo });
const deleteAction = (id) => ({ type: "DELETE", id });
const deleteallAction = () => ({ type: "DELETEALL" });
const editAction = (id, todo) => ({ type: "EDIT", id, todo });

export { addAction, deleteAction, deleteallAction, editAction };