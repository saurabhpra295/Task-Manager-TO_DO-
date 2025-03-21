"use client"
import { useState } from "react";
import TodoForm from "@/app/components/TodoForm";
import TableView from "@/app/components/TableView";
import KanbanBoard from "@/app/components/KanbanBoard";

interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; 
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "kanban">("table"); 

  const addOrUpdateTodo = (todo: Todo) => {
    if (editingTodo) {
      
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setEditingTodo(null);
    } else {
      
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <main className="p-4">
      
      <div className="mb-4">
        <button 
          onClick={() => setViewMode("table")} 
          className={`p-2 ${viewMode === "table" ? "bg-purple-500 text-white" : ""}`}>
          Table View
        </button>
        <button 
          onClick={() => setViewMode("kanban")} 
          className={`p-2 ${viewMode === "kanban" ? "bg-violet-500 text-white" : ""}`}>
          Kanban View
        </button>
      </div>

      
      <TodoForm initialData={editingTodo} onSubmit={addOrUpdateTodo} />

      
      {viewMode === "table" ? (
        <TableView todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo} />
      ) : (
        <KanbanBoard todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo} />
      )}
    </main>
  );
};

export default Home;
