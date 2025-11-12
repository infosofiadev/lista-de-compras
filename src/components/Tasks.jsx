import { TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"

function Tasks(props) {
  const navigate = useNavigate()

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button 
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-sky-900 text-left text-2xl w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          
          <Button
            onClick={() => props.onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
