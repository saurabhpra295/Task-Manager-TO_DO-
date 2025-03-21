import React from "react";


interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; 
}


interface TodoItemProps {
  todo: Todo; 
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border p-2">
      <span>{todo.text} - <strong>{todo.status}</strong></span>
      <div className="flex gap-2">
        <button onClick={() => onEdit(todo)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

