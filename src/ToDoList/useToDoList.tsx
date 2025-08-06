import { useState } from 'react';
import { Item, TodoStatus } from './types';

const initialItems: Item[] = [
  { id: '1', text: 'Learn React', status: 'todo' },
  { id: '2', text: 'Build todo app', status: 'todo' },
  { id: '3', text: 'Write tests', status: 'in-progress' },
  { id: '4', text: 'Deploy application', status: 'done' },
];

export function useToDoList() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const getItemsByStatus = (status: TodoStatus): Item[] => {
    return items.filter(item => item.status === status);
  };

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newItem: Item = {
        id: Date.now().toString(),
        text: text.trim(),
        status: 'todo'
      };
      setItems(prevItems => [...prevItems, newItem]);
    }
  };

  const moveItem = (itemId: string, direction: 'left' | 'right') => {
    console.log('Move item:', itemId, direction);
  };

  return {
    items,
    getItemsByStatus,
    addTodo,
    moveItem,
  };
}