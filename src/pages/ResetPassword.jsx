import React from "react";
import { EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ForgotPassword.module.css'
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";


const ResetPassword = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.loginPlace}>
        <form className={styles.loginForm}>
          <p className={`text text_type_main-medium mb-6 ${styles.formHeader}`}>
            Восстановление пароля
          </p>
          <PasswordInput
            placeholder="Введите новый пароль"
            name={'password'}
            extraClass="mb-6"
          />
          <Input
            type={'text'}
            placeholder="Введите код из письма"
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="ml-1 mb-6"
          />
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
          <p className="text text_type_main-small text_color_inactive mt-20">
            Вспомнили пароль? <Link to="/login" className={styles.formLink}>Войти</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;