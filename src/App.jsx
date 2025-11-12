import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";
import CompletedTasks from "./components/CompletedTasks";
import Button from "./components/Button";
import { BeefIcon, GrapeIcon, SandwichIcon, ShoppingCartIcon, PillIcon, HouseIcon} from "lucide-react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  
  const [categoryFilter, setCategoryFilter] = useState("");
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, category) {
    const newTask = {
      id: v4(),
      title: title,
      category: category,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  const filteredTasks =
    categoryFilter === ""
      ? tasks
      : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div className="min-h-screen bg-sky-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>LISTA DE COMPRAS</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <div className="grid grid-cols-4 gap-2 bg-slate-400 p-2 rounded-lg">
          <Button 
            type="button" 
            onClick={() => setCategoryFilter("supermercado")}>
            <ShoppingCartIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("acougue")}>
            <BeefIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("sacolao")}>
            <GrapeIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("padaria")}>
            <SandwichIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("farmacia")}>
            <PillIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("casa")}>
            <HouseIcon />
          </Button>
          <Button type="button" onClick={() => setCategoryFilter("")} className="font-medium">
            TODOS
          </Button>
        </div>
        <h2 className="text-xl font-bold text-white">
          A comprar em {categoryFilter && <span>({categoryFilter})</span>}
        </h2>
        <Tasks
          tasks={filteredTasks.filter((task) => !task.isCompleted)}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <h2 className="text-xl font-bold text-white">Comprados</h2>
        <CompletedTasks
          tasks={filteredTasks.filter((task) => task.isCompleted)}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
