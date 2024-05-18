import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
  isOwner: boolean;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Add new task" required>
      <button type="submit">Add</button>
    </form>
    <ul id="todo-list"></ul>
  </div>
</body>
</html>
    `,
    css: ` body {
      font-family: Monospace;
      background-color: #d5dfed
      ;
    }
    
    .container {
      max-width: 400px;
      margin: 50px auto;
      background-color: #a1b3cd
      ;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      text-align: center;
    
    }
    
    form {
      margin-bottom: 20px;
    }
    
    input[type="text"] {
      width: 70%;
      padding: 8px;
      border-radius: 0.4em; 
      font-family: Monospace; 
    }
    
    button {
      padding: 8px 20px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: .4em; 
    }
    
    button:hover {
      background-color: #3f4d3f;
    }
    
    ul {
      list-style-type: none;
      padding: 0;
    }
    
  
   
    li {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between; 
      align-items: center; 
    }

    li:last-child {
      border-bottom: none; 
    }
    
    
    .completed {
      text-decoration: line-through;
      color: #999;
    }
    
    .delete-btn {
      background: none;
      border: none;
      cursor: pointer;
    }
    `,
    javascript: `const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    addTodo(todoText);
    todoInput.value = '';
  }
});

function addTodo(todoText) {
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.classList.add('delete-btn');
  
  todoItem.appendChild(deleteButton); // Append delete button after todo text
  
  todoList.appendChild(todoItem);

  todoItem.addEventListener('click', function() {
    todoItem.classList.toggle('completed');
  });

  deleteButton.addEventListener('click', function() {
    todoItem.remove();
  });
}

  
    `,
  },
  currentLanguage: "html",
  isOwner: false,
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateIsOwner: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  updateIsOwner,
} = compilerSlice.actions;
