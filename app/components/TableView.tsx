import React from "react";

interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; 
}

interface TableViewProps {
  todos: Todo[]; 
  onEdit: (todo: Todo) => void; 
  onDelete: (id: string) => void; 
}

const TableView: React.FC<TableViewProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-2">Task</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td className="border p-2">{todo.text}</td>
            <td className="border p-2">{todo.status}</td>
            <td className="border p-2">
              <button onClick={() => onEdit(todo)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
              <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
