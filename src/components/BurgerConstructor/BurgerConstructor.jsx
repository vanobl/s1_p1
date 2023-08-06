import React, { useState } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails";
import PropTypes from 'prop-types';


const BurgerConstructor = (props) => {
  const [total, setTotal] = useState(0);
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
      {props.ingridients && <SectionBurger ingridients={props.ingridients} setTotal={setTotal} />}
      <section>
        <div className={styles.ingredientSpace}>
          <p className="text text_type_digits-medium">{total}</p>&nbsp;
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
      {isOpen && <Modal offModal={closeModal} header="Детали ингредиента">
        <OrderDetails numberOrder={orderNumber} />
      </Modal>}
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingridients: PropTypes.object
};

export default BurgerConstructor;