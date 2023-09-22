import React from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Registration.module.css'
import AppHeader from "../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";


const Registration = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.loginPlace}>
        <form className={styles.loginForm}>
          <p className={`text text_type_main-medium mb-6 ${styles.formHeader}`}>
            Регистрация
          </p>
          <EmailInput
            name={'name'}
            placeholder="Имя"
            isIcon={false}
            extraClass="mb-6"
          />
          <EmailInput
            name={'email'}
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-6"
          />
          <PasswordInput
            name={'password'}
            extraClass="mb-6"
          />
          <Button htmlType="button" type="primary" size="medium">
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