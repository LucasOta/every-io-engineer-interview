import React from 'react';
import { TodoStatus, Direction } from './types';
import { ListColumn } from './ListColumn';
import { AddItemForm } from './AddItemForm';
import { useToDoList } from './useToDoList';

export function ToDoList() {
  const { todoItems, inProgressItems, doneItems, addTodo, moveItem } = useToDoList();

  const handleMove = (itemId: string, direction: Direction) => {
    moveItem(itemId, direction);
  };

  const handleAddTodo = (text: string) => {
    addTodo(text);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px'
      }}>
        To Do List
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '20px'
      }}>
        <ListColumn
          title="To Do"
          items={todoItems}
          onMove={handleMove}
        />
        <ListColumn
          title="In Progress"
          items={inProgressItems}
          onMove={handleMove}
        />
        <ListColumn
          title="Done"
          items={doneItems}
          onMove={handleMove}
        />
      </div>

      <AddItemForm onSubmit={handleAddTodo} />
    </div>
  );
}
