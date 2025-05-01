
import { useState, useEffect } from "react";
import { Task } from "@/components/TaskList";

// Mock data - this would be replaced with actual database calls
const mockTasks: Task[] = [
  { id: "1", description: "Inspecter la machine 4" },
  { id: "2", description: "Vérifier la température" },
  { id: "3", description: "Remplacer l'opérateur zone B" },
];

const mockAnnouncements = [
  "Réunion d'équipe à 14h00",
  "Maintenance prévue demain à 10h00", 
  "Nouvelle procédure de sécurité en vigueur à partir de lundi"
];

// This hook would be replaced with actual API calls
export function useTaskData() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        // In a real implementation, this would be an API call
        // await fetch('your-api-endpoint')
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTasks(mockTasks);
        setAnnouncements(mockAnnouncements);
        setIsLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement des données");
        setIsLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();

    // Set up polling every 30 seconds to refresh data
    const interval = setInterval(fetchData, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    tasks,
    announcements,
    isLoading,
    error
  };
}
