import React, { useRef } from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен'),
});

const PasswordForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value || '';

    try {
      await schema.validate({ password });
      if (errorRef.current) {
        errorRef.current.textContent = ''; 
      }
      alert('Пароль принят!');
    } catch (error) {
      if (error instanceof Yup.ValidationError && errorRef.current) {
        errorRef.current.textContent = error.message;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" ref={passwordRef} />
        <div ref={errorRef} style={{ color: 'red', marginTop: '5px' }} />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default PasswordForm;
