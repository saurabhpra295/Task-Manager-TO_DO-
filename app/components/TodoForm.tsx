"use client"
import { useState, useEffect } from "react";

interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed";
}

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
  initialData?: Todo | null; 
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialData }) => {
  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<"todo" | "in-progress" | "completed">("todo");

  useEffect(() => {
    if (initialData) {
      setText(initialData.text);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id || Date.now().toString(), text, status });
    setText("");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task"
        required
        className="border p-2"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as "todo" | "in-progress" | "completed")} className="border p-2">
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        {initialData ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
