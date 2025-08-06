import React from 'react';
import { Column } from './types';
import { ListColumn } from './ListColumn';
import { AddItemForm } from './AddItemForm';
import { useToDoList } from './useToDoList';

export function ToDoList() {
  const { getItemsByStatus, addTodo, moveItem } = useToDoList();

  const toDoColumn: Column = {
    status: 'todo',
    title: 'Todo',
    items: getItemsByStatus('todo')
  };

  const inProgressColumn: Column = {
    status: 'in-progress',
    title: 'In Progress',
    items: getItemsByStatus('in-progress')
  };

  const doneColumn: Column = {
    status: 'done',
    title: 'Done',
    items: getItemsByStatus('done')
  };

  const handleMoveLeft = (itemId: string) => {
    moveItem(itemId, 'left');
  };

  const handleMoveRight = (itemId: string) => {
    moveItem(itemId, 'right');
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
          column={toDoColumn}
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
        />
        <ListColumn
          column={inProgressColumn}
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
        />
        <ListColumn
          column={doneColumn}
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
        />
      </div>

      <AddItemForm onSubmit={handleAddTodo} />
    </div>
  );
}
