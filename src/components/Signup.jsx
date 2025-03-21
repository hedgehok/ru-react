import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { FaUser } from 'react-icons/fa';
import "./Signup.css";

export function Signup({ onSubmit }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    onSubmit({ name, username, email, gender, password });
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <TextInput
        type="text"
        placeholder="Введите ваше имя"
        label="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextInput
        type="text"
        placeholder="Введите ваш ник"
        label="Ник"
        value={username}
        icon={<FaUser />}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextInput
        type="email"
        placeholder="Введите вашу почту"
        label="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="gender-selection">
        <label>Пол:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Женский
          </label>
        </div>
      </div>

      <TextInput
        type="password"
        placeholder="Введите ваш пароль"
        label="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Повторите ваш пароль"
        label="Повторить пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit" className="signup-button">
        Зарегистрироваться
      </button>
    </form>
  );
}
