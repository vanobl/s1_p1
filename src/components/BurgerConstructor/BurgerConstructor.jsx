import React, { useState } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails";


const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  function openModal() {
    setOrderNumber(getNumberOrder());
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  function getNumberOrder() {
    let stringNumber = '';

    for (let i = 0; i < 6; i++) {
        let itemNumber = Math.floor(Math.random() * 9);
        stringNumber += itemNumber;
    }

    return stringNumber;
  }

  return(
    <div className={styles.BurgerConstructor}>
     <SectionBurger />
      <section>
        <div className={styles.ingredientSpace}>
          <p className="text text_type_digits-medium">4925</p>&nbsp;
          <CurrencyIcon type="primary" />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="ml-10"
            onClick={openModal}
          >Оформить заказ</Button>
        </div>
      </section>
      {isOpen && <Modal offModal={closeModal} header="">
        <OrderDetails numberOrder={orderNumber} />
      </Modal>}
    </div>
  );
}

export default BurgerConstructor;