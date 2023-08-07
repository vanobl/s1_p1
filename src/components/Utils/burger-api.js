const norma_api = "https://norma.nomoreparties.space";

export async function getIngredients() {
  try {
    const response = await fetch(norma_api + "/api/ingredients");
    const data = await response.json();
    console.log("данные получены");
    console.log(data);
    return data;
  } catch (err) {
    alert("Ошибка " + err);
  }
};