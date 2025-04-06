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

const loadCategoryVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
      .then((data) => displayCategoryVideo(data.videos))
      .catch((error) => console.log(error));
  };

const loadCategoriesBtn = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then( (data) => {
        displayCategoryVideo(data.category)
        
    })
    .catch((error) => console.log(error))
}  


const displayCategoryBtn = (items) => {
  const categoriyBtnContainer = document.getElementById("categoriyes");
  console.log(categoriyBtnContainer);

  items.forEach((item) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn");
    buttonDiv.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadCategoriesBtn(${item.category_id})" clasa="btn">${item.category} </button>

        `;
    categoriyBtnContainer.append(buttonDiv);
  });
};


const displayCategoryVideo = (videos) => {
  const CardContainer = document.getElementById("videos");
  CardContainer.innerHTML="";

  if(videos.length == 0){
    CardContainer.innerHTML = "No Data Found"
    return
  }


  videos.forEach((items) => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-base-100", "w-96", "shadow-xl")
    card.innerHTML = `
    <figure>
    <img
      src="${items.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
        
    `;
    CardContainer.append(card)
  });
};

loadCategoryVideos();
loadCategories();
