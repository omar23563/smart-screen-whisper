
import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface Task {
  id: string;
  description: string;
  completed?: boolean;
}

interface TaskListProps {
  tasks: Task[];
  title?: string;
  isLoading?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  title = "Tâches du jour", 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-4">{title}</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 animate-pulse bg-white/70">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-4">{title}</h2>
        <Card className="p-6 text-center bg-white/70">
          <p className="text-gray-500">Aucune tâche pour aujourd'hui.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-800 mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="p-4 flex items-center space-x-4 bg-white/70 shadow-sm">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
              <Check className="h-5 w-5 text-teal-600" />
            </div>
            <span className="text-xl text-gray-800">{task.description}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
