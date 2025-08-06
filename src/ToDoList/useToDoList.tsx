import { useState } from 'react';
import { Item, TodoStatus, Direction } from './types';

type ItemsByStatus = Record<TodoStatus, Item[]>;

const initialItemsByStatus: ItemsByStatus = {
  [TodoStatus.TODO]: [
    { id: '1', text: 'Learn React', status: TodoStatus.TODO },
    { id: '2', text: 'Build todo app', status: TodoStatus.TODO },
  ],
  [TodoStatus.IN_PROGRESS]: [
    { id: '3', text: 'Write tests', status: TodoStatus.IN_PROGRESS },
  ],
  [TodoStatus.DONE]: [
    { id: '4', text: 'Deploy application', status: TodoStatus.DONE },
  ],
};

const statusTransitions = {
  [TodoStatus.TODO]: {
    [Direction.NEXT]: TodoStatus.IN_PROGRESS,
    [Direction.PREV]: TodoStatus.TODO, // No change
  },
  [TodoStatus.IN_PROGRESS]: {
    [Direction.NEXT]: TodoStatus.DONE,
    [Direction.PREV]: TodoStatus.TODO,
  },
  [TodoStatus.DONE]: {
    [Direction.NEXT]: TodoStatus.DONE, // No change
    [Direction.PREV]: TodoStatus.IN_PROGRESS,
  },
};

export function useToDoList() {
  const [itemsByStatus, setItemsByStatus] = useState<ItemsByStatus>(initialItemsByStatus);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newItem: Item = {
        id: Date.now().toString(),
        text: text.trim(),
        status: TodoStatus.TODO
      };
      setItemsByStatus(prev => ({
        ...prev,
        [TodoStatus.TODO]: [...prev[TodoStatus.TODO], newItem]
      }));
    }
  };

  const moveItem = (itemId: string, direction: Direction) => {
    setItemsByStatus(prev => {
      const currentItem = Object.values(prev)
        .flat()
        .find(item => item.id === itemId);
      
      if (!currentItem) return prev;
      
      const currentStatus = currentItem.status;
      const newStatus = statusTransitions[currentStatus][direction];
      
      if (currentStatus === newStatus) return prev;
      
      const updatedItem = { ...currentItem, status: newStatus };
      
      return {
        ...prev,
        [currentStatus]: prev[currentStatus].filter(item => item.id !== itemId),
        [newStatus]: [...prev[newStatus], updatedItem]
      };
    });
  };

  return {
    todoItems: itemsByStatus[TodoStatus.TODO],
    inProgressItems: itemsByStatus[TodoStatus.IN_PROGRESS],
    doneItems: itemsByStatus[TodoStatus.DONE],
    addTodo,
    moveItem,
  };
}
