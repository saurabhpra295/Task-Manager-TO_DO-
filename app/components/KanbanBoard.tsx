import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; 
}

interface KanbanBoardProps {
  todos: Todo[]; 
  onEdit: (todo: Todo) => void; 
  onDelete: (id: string) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ todos, onEdit, onDelete }) => {
  const statuses = ["todo", "in-progress", "completed"];

  return (
    <div className="flex gap-4">
      {statuses.map((status) => (
        <div key={status} className="w-1/3 border p-4">
          <h3>{status.replace("-", " ").toUpperCase()}</h3>
          {todos.filter((todo) => todo.status === status).map((todo) => (
            <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
