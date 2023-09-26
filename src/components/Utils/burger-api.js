const NORMA_API = "https://norma.nomoreparties.space";
const NORMA_API_CREATE_ORDER = 'https://norma.nomoreparties.space/api/orders';
const NORMA_API_FORGOT_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset';
const NORMA_API_RESET_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset/reset';
const NORMA_API_REGISTER = 'https://norma.nomoreparties.space/api/auth/register';

export async function getIngredients() {
  try {
    const response = await fetch(NORMA_API + "/api/ingredients");

    status(response);

    const data = await response.json();
    return data;
  } catch (err) {
    alert("Ошибка " + err);
  }
};


/**
 * Возвращает полученный JSON от API
 * @param {object} ingredientsList 
 * @returns {json} content
 */
export async function createOrder(ingredientsList) {
  try {
    const response = await fetch(NORMA_API_CREATE_ORDER, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ingredients: ingredientsList})
    });

    status(response);

    const content = await response.json();

    return content;
  } catch (err) {
    alert("Ошибка оформления заказа " + err);
  }
}


/**
 * Возвращает полученный JSON от API восстановления пароля.
 * @param {string} forgotEmail Email, на который отправляется письмо с кодом.
 * @returns {json} content JSON, в котором содержится ответ
 */
export async function forgotPassword(forgotEmail) {
  try {
    const response = await fetch(NORMA_API_FORGOT_PASSWORD, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: forgotEmail})
    });

    status(response);

    const content = await response.json();

    return content;
  } catch (err) {
    alert("Ошибка отправки восстановительного письма " + err);
  }
}


/**
 * Возвращает полученный JSON от API
 * @param {string} newPassword 
 * @param {string} newToken 
 * @returns {json} content
 */
export async function resertPassword(newPassword, newToken) {
  try {
    const response = await fetch(NORMA_API_RESET_PASSWORD, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password: newPassword, token: newToken})
    });

    status(response);

    const content = await response.json();
    return content
  } catch (err) {
    alert("Ошибка сброса пароля " + err);
  }
}

/**
 * Возвращает полученный JSON от API
 * @param {string} newEmail 
 * @param {string} newPassword 
 * @param {string} newName 
 * @returns {json} content
 */
export async function registerUser(newEmail, newPassword, newName) {
  try {
    const response = await fetch(NORMA_API_REGISTER, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password: newPassword, email: newEmail, name: newName})
    });

    status(response);

    const content = await response.json();
    return content
  } catch (err) {
    alert("Ошибка регистрации пользователя " + err);
  }
}

function status(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response
}