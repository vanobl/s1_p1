// export const getIngredients = () => {
//   return fetch("https://norma.nomoreparties.space/api/ingredients").then(
//     response => response.json()
//   ).then((data) => {
//     let res = data.data.reduce((acc, curVal) => {
//       let type = curVal.type;

//       if (!acc[type]) {
//         acc[type] = [];
//       }

//       acc[type].push(curVal);
//       return acc;
//     }, {});
//     console.log(res);
//     return res;
//   }).catch(err => alert(err))
// }

// export const promise = new Promise((resolve, reject) => {
//   let res = fetch("https://norma.nomoreparties.space/api/ingredients");

//   if (res.ok) {
//     let resJson = res.json();
//     let resObj = resJson.data.reduce((acc, curVal) => {
//       let type = curVal.type;

//       if (!acc[type]) {
//         acc[type] = [];
//       }

//       acc[type].push(curVal);
//       return acc;
//     }, {});
//     resolve(resObj);
//   } else {
//     reject("что-то пошло не так");
//   }
// })

export function getData() {
  return fetch("https://norma.nomoreparties.space/api/ingredients").then(
    response => response.json()
  ).then((data) => {
    let res = data.data.reduce((acc, curVal) => {
      let type = curVal.type;

      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(curVal);
      return acc;
    }, {});
    return res;
  }).catch(err => alert(err))
}