const NORMA_API = "https://norma.nomoreparties.space";
const NORMA_API_CREATE_ORDER = 'https://norma.nomoreparties.space/api/orders';

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

function status(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response
}