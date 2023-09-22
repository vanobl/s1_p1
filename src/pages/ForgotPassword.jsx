import React from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ForgotPassword.module.css'
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.loginPlace}>
        <form className={styles.loginForm}>
          <p className={`text text_type_main-medium mb-6 ${styles.formHeader}`}>
            Восстановление пароля
          </p>
          <EmailInput
            name={'email'}
            placeholder="Укажите e-mail"
            isIcon={false}
            extraClass="mb-6"
          />
          <Button htmlType="button" type="primary" size="medium">
            Восстановить
          </Button>
          <p className="text text_type_main-small text_color_inactive mt-20">
            Вспомнили пароль? <Link to="/login" className={styles.formLink}>Войти</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;