import React, { useCallback, useState } from "react";
import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Registration.module.css'
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";
import { registerUser } from "../components/Utils/burger-api";


const Registration = () => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // async function register(e) {
  //   e.preventDefault();
  //   const respJson = await registerUser(newEmail, newPassword, newName);
  //   alert(respJson.success + ' : ' + respJson.message);
  // }

  const register = useCallback(
    async e => {
      e.preventDefault();
      const respJson = await registerUser(newEmail, newPassword, newName);
      alert(respJson.success + ' : ' + respJson.message);
    },
    [newName, newEmail, newPassword]
  );

  return (
    <>
      <AppHeader />
      <div className={styles.loginPlace}>
        <form className={styles.loginForm}>
          <p className={`text text_type_main-medium mb-6 ${styles.formHeader}`}>
            Регистрация
          </p>
          <Input
            type={'text'}
            placeholder="Имя"
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
          <EmailInput
            name={'email'}
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-6"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
          />
          <PasswordInput
            name={'password'}
            extraClass="mb-6"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <Button htmlType="button" type="primary" size="medium" onClick={register}>
            Зарегистрироваться
          </Button>
          <p className="text text_type_main-small text_color_inactive mt-20">
            Уже зарегистрированы? <Link to="/login" className={styles.formLink}>Войти</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;