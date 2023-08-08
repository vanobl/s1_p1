const NORMA_API = "https://norma.nomoreparties.space";

export async function getIngredients() {
  try {
    const response = await fetch(NORMA_API + "/api/ingredients");

    status(response);

    const data = await response.json();
    console.log("данные получены");
    console.log(data);
    return data;
  } catch (err) {
    alert("Ошибка " + err);
  }
};

function status(response) {
  if (!response.ok) {
    return Promise.reject();
  }
  return response
}