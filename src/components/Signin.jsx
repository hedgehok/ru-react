import React, { useState } from 'react';
import { TextInput } from './TextInput';
import "./Signin.css";

export function Signin({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <TextInput
        type="email"
        placeholder="Введите ваш email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Введите ваш пароль"
        label="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="signin-button">
        Войти
      </button>
    </form>
  );
}
