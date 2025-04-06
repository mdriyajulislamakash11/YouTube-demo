console.log("connected");

// const loadCategory = async () => {
//   try {
//     const res = await fetch(
//       "https://openapi.programming-hero.com/api/phero-tube/categories"
//     );
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryBtn(data.categories))
    .catch((err) => console.log(err));
};



const displayCategoryBtn = (items) => {
  const categoriyBtnContainer = document.getElementById("categoriyes");
  console.log(categoriyBtnContainer);

  items.forEach((item) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn");
    buttonDiv.innerHTML = `
            <button clasa="btn">${item.category} </button>

        `;
    categoriyBtnContainer.append(buttonDiv);
  });
};



loadCategories();
