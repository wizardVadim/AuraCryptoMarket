// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Пример функции для получения данных пользователей
export const getUsers = () => {
  return apiClient.get('/users');
};

// Пример функции для логина
export const login = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};

// Добавь другие функции по необходимости
