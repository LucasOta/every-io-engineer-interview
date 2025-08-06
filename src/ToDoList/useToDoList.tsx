import { useState } from 'react';
import { Item, TodoStatus, Direction } from './types';

const initialItems: Item[] = [
  { id: '1', text: 'Learn React', status: TodoStatus.TODO },
  { id: '2', text: 'Build todo app', status: TodoStatus.TODO },
  { id: '3', text: 'Write tests', status: TodoStatus.IN_PROGRESS },
  { id: '4', text: 'Deploy application', status: TodoStatus.DONE },
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
        status: TodoStatus.TODO
      };
      setItems(prevItems => [...prevItems, newItem]);
    }
  };

  const moveItem = (itemId: string, direction: Direction) => {
    console.log('Move item:', itemId, direction);
  };

  return {
    items,
    getItemsByStatus,
    addTodo,
    moveItem,
  };
}