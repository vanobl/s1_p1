import React, { useState } from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Login.module.css'
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";


const Login = () => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <>
      <AppHeader />
      <div className={styles.loginPlace}>
        <form className={styles.loginForm}>
          <p className={`text text_type_main-medium mb-6 ${styles.formHeader}`}>
            Вход
          </p>
          <EmailInput
            name={'email'}
            placeholder="Логин"
            isIcon={false}
            extraClass="mb-6"
            value={emailText}
            onChange={e => {setEmailText(e.target.value)}}
          />
          <PasswordInput
            name={'password'}
            extraClass="mb-6"
            value={passwordText}
            onChange={e => {setPasswordText(e.target.value)}}
          />
          <Button htmlType="button" type="primary" size="medium">
            Войти
          </Button>
          <p className="text text_type_main-small text_color_inactive mt-20">
            Вы — новый пользователь? <Link to="/register" className={styles.formLink}>Зарегистрироваться</Link>
          </p>
          <p className="text text_type_main-small text_color_inactive mt-4">
            Забыли пароль? <Link to="/forgot-password" className={styles.formLink}>Восстановить пароль</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;