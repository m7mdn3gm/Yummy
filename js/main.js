// ====== Show NavBar ======
const moveIcon = document.getElementById("moveIcon");
const navMove = document.getElementById("navMove");
const closeIcon = document.getElementById("closeIcon");

moveIcon.addEventListener("click", () => {
  moveIcon.classList.replace("d-block", "d-none");
  closeIcon.classList.replace("d-none", "d-block");
  navMove.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  moveIcon.classList.replace("d-none", "d-block");
  closeIcon.classList.replace("d-block", "d-none");
  navMove.classList.toggle("show");
});

// ======================== All Product Page ========================
// ====== Get Yummy Data Main ======
let responseData;
async function getYummyData() {
  let apiResponse = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  responseData = await apiResponse.json();
  displayProduct();
  displaySinglePage1();
  document.getElementById("loading").style.display = "none";
}
getYummyData();

// ====== Display Main Products ======
function displayProduct() {
  let temp = "";
  responseData.meals.forEach((item) => {
    temp += `     <div class="box">
                      <div class="image">
                          <img src="${item.strMealThumb}" class="w-100" alt="">
                          <div class="layer">
                              <h3 class="text-center">${item.strMeal}</h3>
                          </div>
                      </div>
                  </div>`;
  });
  document.getElementById("showBox1").innerHTML = temp;
}

// ====== Show Single Page ======
function displaySinglePage1() {
  const SinglePage = document.querySelector(".single-page");
  const contentBox = document.querySelectorAll(".header-content .boxs .box");
  contentBox.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentBox.forEach((el) => {
        el.style.display = "none";
      });
      SinglePage.classList.replace("d-none", "d-flex");
      let temp = `                <div class="left">
                      <div class="image">
                          <img src="${responseData.meals[index].strMealThumb}" alt="">
                          <h2>${responseData.meals[index].strMeal}</h2>
                      </div>
                  </div>
                  <div class="right text-light">
                      <h2>Instructions</h2>
                      <P>${responseData.meals[index].strInstructions}</P>
                      <h3 class="fs-2"><span class="text-warning">Area :</span> ${responseData.meals[index].strArea}</h3>
                      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${responseData.meals[index].strCategory}</h4>
                      <h5 class="fs-2 text-warning">Recipes :</h5>
                      <div class="boxs">
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure1}  ${responseData.meals[index].strIngredient1}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure2}  ${responseData.meals[index].strIngredient2}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure3}  ${responseData.meals[index].strIngredient3}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure4}  ${responseData.meals[index].strIngredient4}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure5}  ${responseData.meals[index].strIngredient5}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure6}  ${responseData.meals[index].strIngredient6}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure7}  ${responseData.meals[index].strIngredient7}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure8}  ${responseData.meals[index].strIngredient8}</div>
                          <div class="box bg-info-subtle text-black"> ${responseData.meals[index].strMeasure9}  ${responseData.meals[index].strIngredient9}</div>
                      </div>
                      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
                      <div class="boxs">
                          <div class="box bg-danger-subtle text-black"> ${responseData.meals[index].strTags}</div>
                      </div>
                      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${responseData.meals[index].strSource}">Source</a></button>
                      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${responseData.meals[index].strYoutube}">YouTube</a></button>
                  </div>
  `;
      document.getElementById("showSingle").innerHTML = temp;
    });
  });
}

// ======================== Search Page ========================
// ====== Search By Name ======
const searchName = document.getElementById("searchName");
if (searchName != null) {
  searchName.addEventListener("keyup", () => {
    document.getElementById("loading").classList.replace("d-none", "d-flex");
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value}`
    ).then((req) => {
      req.json().then((data) => {
        let temp = "";
        data.meals.forEach((item, index) => {
          temp += `<div class="box" onclick = "displaySinglePage2(${index} , '${searchName.value}')">
                        <div class="image">
                            <img src="${data.meals[index].strMealThumb}" class="w-100" alt="">
                            <div class="layer">
                                <h3 class="text-center">${data.meals[index].strMeal}</h3>
                            </div>
                        </div>
                    </div>`;
          document.getElementById("showBox2").innerHTML = temp;
          document.getElementById("loading").classList.replace("d-flex", "d-none");
        });
      });
    });
  });
}

// ====== Search By First Letter ======
const searchLetter = document.getElementById("searchLetter");
if (searchLetter != null) {
  searchLetter.addEventListener("keyup", () => {
    document.getElementById("loading").classList.replace("d-none", "d-flex");
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter.value}`
    ).then((req) => {
      req.json().then((data) => {
        let temp = "";
        data.meals.forEach((item, index) => {
          temp += `<div class="box" onclick = "displaySinglePage3(${index} , '${searchLetter.value}')">
                        <div class="image">
                            <img src="${data.meals[index].strMealThumb}" class="w-100" alt="">
                            <div class="layer">
                                <h3 class="text-center">${data.meals[index].strMeal}</h3>
                            </div>
                        </div>
                    </div>`;
          document.getElementById("showBox2").innerHTML = temp;
          document.getElementById("loading").classList.replace("d-flex", "d-none");

        });
      });
    });
  });
}

// ====== display single page In Search Name ======
function displaySinglePage2(i, val) {
  const SinglePage = document.querySelector(".single-page");
  const container_search = document.querySelector(".container_search");
  console.log(i, val);
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`).then(
    (req) => {
      req.json().then((data) => {
        const meal = data.meals[i];
        let temp = `<div class="left">
      <div class="image">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
      </div>
  </div>
  <div class="right text-light">
      <h2>Instructions</h2>
      <P>${meal.strInstructions}</P>
      <h3 class="fs-2"><span class="text-warning">Area :</span> ${meal.strArea}</h3>
      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${meal.strCategory}</h4>
      <h5 class="fs-2 text-warning">Recipes :</h5>
      <div class="boxs">
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure1}  ${meal.strIngredient1}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure2}  ${meal.strIngredient2}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure3}  ${meal.strIngredient3}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure4}  ${meal.strIngredient4}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure5}  ${meal.strIngredient5}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure6}  ${meal.strIngredient6}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure7}  ${meal.strIngredient7}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure8}  ${meal.strIngredient8}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure9}  ${meal.strIngredient9}</div>
      </div>
      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
      <div class="boxs">
          <div class="box bg-danger-subtle text-black"> ${meal.strTags}</div>
      </div>
      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${meal.strSource}">Source</a></button>
      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${meal.strYoutube}">YouTube</a></button>
  </div>
`;
        document.getElementById("showSingle").innerHTML = temp;
      });
    }
  );
  SinglePage.classList.replace("d-none", "d-flex");
  container_search.classList.replace("d-block", "d-none");
}

// ====== display single page In First Letter  ======
function displaySinglePage3(i, val) {
  const SinglePage = document.querySelector(".single-page");
  const container_search = document.querySelector(".container_search");
  console.log(i, val);
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`).then(
    (req) => {
      req.json().then((data) => {
        const meal = data.meals[i];
        let temp = `<div class="left">
      <div class="image">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
      </div>
  </div>
  <div class="right text-light">
      <h2>Instructions</h2>
      <P>${meal.strInstructions}</P>
      <h3 class="fs-2"><span class="text-warning">Area :</span> ${meal.strArea}</h3>
      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${meal.strCategory}</h4>
      <h5 class="fs-2 text-warning">Recipes :</h5>
      <div class="boxs">
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure1}  ${meal.strIngredient1}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure2}  ${meal.strIngredient2}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure3}  ${meal.strIngredient3}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure4}  ${meal.strIngredient4}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure5}  ${meal.strIngredient5}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure6}  ${meal.strIngredient6}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure7}  ${meal.strIngredient7}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure8}  ${meal.strIngredient8}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure9}  ${meal.strIngredient9}</div>
      </div>
      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
      <div class="boxs">
          <div class="box bg-danger-subtle text-black"> ${meal.strTags}</div>
      </div>
      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${meal.strSource}">Source</a></button>
      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${meal.strYoutube}">YouTube</a></button>
  </div>
`;
        document.getElementById("showSingle").innerHTML = temp;
      });
    }
  );
  SinglePage.classList.replace("d-none", "d-flex");
  container_search.classList.replace("d-block", "d-none");
}

// ======================== Category Page ========================
// ====== Display Product In Category ======
fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((req) => {
  req.json().then((data) => {
    let temp = "";
    data.categories.forEach((item, index) => {
      temp += `           <div class="box" onclick="filterCategory('${data.categories[index].strCategory}')">
                            <div class="image">
                                <img src="${data.categories[index].strCategoryThumb}" class="w-100 p-1" alt="">
                                <div class="layer">
                                    <h2 class="text-center fs-6 text-light mb-0">${data.categories[index].strCategory}</h2>
                                </div>
                            </div>
                        </div>
`;
    });
    document.getElementById("showBox3").innerHTML = temp;
    document.getElementById("loading").style.display ="none";
  });
});

// ====== open new page ======
function filterCategory(cate) {
  document.getElementById("loading").style.display ="flex";
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`).then(
    (req) => {
      req.json().then((data) => {
        let temp = "";
        data.meals.forEach((item, index) => {
          temp += `     <div class="box" onclick = "displaySinglePage4('${data.meals[index].idMeal}')">
        <div class="image">
            <img src="${data.meals[index].strMealThumb}" class="w-100" alt="">
            <div class="layer">
                <h3 class="text-center">${data.meals[index].strMeal}</h3>
            </div>
        </div>
        </div>`;
        });
        document.querySelector("#showFilters").innerHTML = temp;
        document.querySelector("#showBox3").style.display = "none";
        document.getElementById("loading").style.display ="none";

      });
    }
  );
}

// ====== show single box ======
function displaySinglePage4(cate) {
  const SinglePage = document.querySelector(".single-page");
  document.getElementById("loading").style.display ="flex";
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cate}`).then(
    (req) => {
      req.json().then((data) => {
        const meal = data.meals[0];
        console.log(data);
        let temp = `<div class="left">
      <div class="image">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
      </div>
  </div>
  <div class="right text-light">
      <h2>Instructions</h2>
      <P>${meal.strInstructions}</P>
      <h3 class="fs-2"><span class="text-warning">Area :</span> ${meal.strArea}</h3>
      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${meal.strCategory}</h4>
      <h5 class="fs-2 text-warning">Recipes :</h5>
      <div class="boxs">
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure1}  ${meal.strIngredient1}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure2}  ${meal.strIngredient2}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure3}  ${meal.strIngredient3}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure4}  ${meal.strIngredient4}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure5}  ${meal.strIngredient5}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure6}  ${meal.strIngredient6}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure7}  ${meal.strIngredient7}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure8}  ${meal.strIngredient8}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure9}  ${meal.strIngredient9}</div>
      </div>
      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
      <div class="boxs">
          <div class="box bg-danger-subtle text-black"> ${meal.strTags}</div>
      </div>
      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${meal.strSource}">Source</a></button>
      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${meal.strYoutube}">YouTube</a></button>
  </div>
`;
        document.getElementById("showSingle").innerHTML = temp;
      });
    }
  );
  document.querySelector("#showFilters").style.display = "none";
  SinglePage.classList.replace("d-none", "d-flex");
  document.getElementById("loading").style.display ="none";
}

// ======================== Area Page ========================
// ====== Display Product In Area ======
fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((req) => {
  req.json().then((data) => {
    let temp = "";
    data.meals.forEach((item, index) => {
      temp += `      <div class="box-area" onclick = "filterCategory2('${data.meals[index].strArea}')">
                            <a href="#">
                             <i class="fa-solid fa-house-laptop fa-4x"></i>
                             <h2>${data.meals[index].strArea}</h2>
                            </a>
                         </div>
`;
    });
    document.getElementById("showBox4").innerHTML = temp;
    document.getElementById("loading").style.display ="none";
  });
});

// ====== open new page ======
function filterCategory2(area) {
  document.getElementById("loading").style.display ="flex";
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then(
    (req) => {
      req.json().then((data) => {
        console.log(area);
        let temp = "";
        data.meals.forEach((item, index) => {
          temp += `     <div class="box" onclick = "displaySinglePage4('${data.meals[index].idMeal}')">
        <div class="image">
            <img src="${data.meals[index].strMealThumb}" class="w-100" alt="">
            <div class="layer">
                <h3 class="text-center">${data.meals[index].strMeal}</h3>
            </div>
        </div>
        </div>`;
        });
        document.querySelector("#showFilters").innerHTML = temp;
        document.querySelector("#showBox4").style.display = "none";
        document.getElementById("loading").style.display ="none";

      });
    }
  );
}

// ====== show single box ======
function displaySinglePage4(cate) {
  const SinglePage = document.querySelector(".single-page");
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cate}`).then(
    (req) => {
      req.json().then((data) => {
        const meal = data.meals[0];
        console.log(data);
        let temp = `<div class="left">
      <div class="image">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
      </div>
  </div>
  <div class="right text-light">
      <h2>Instructions</h2>
      <P>${meal.strInstructions}</P>
      <h3 class="fs-2"><span class="text-warning">Area :</span> ${meal.strArea}</h3>
      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${meal.strCategory}</h4>
      <h5 class="fs-2 text-warning">Recipes :</h5>
      <div class="boxs">
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure1}  ${meal.strIngredient1}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure2}  ${meal.strIngredient2}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure3}  ${meal.strIngredient3}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure4}  ${meal.strIngredient4}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure5}  ${meal.strIngredient5}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure6}  ${meal.strIngredient6}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure7}  ${meal.strIngredient7}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure8}  ${meal.strIngredient8}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure9}  ${meal.strIngredient9}</div>
      </div>
      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
      <div class="boxs">
          <div class="box bg-danger-subtle text-black"> ${meal.strTags}</div>
      </div>
      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${meal.strSource}">Source</a></button>
      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${meal.strYoutube}">YouTube</a></button>
  </div>
`;
        document.getElementById("showSingle").innerHTML = temp;
      });
    }
  );
  document.querySelector("#showFilters").style.display = "none";
  SinglePage.classList.replace("d-none", "d-flex");
}

// ======================== Ingredient Page ========================
// ====== Display Product In Ingredient ======
fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then((req) => {
  req.json().then((data) => {
    let temp = "";
    data.meals.forEach((item, index) => {
      temp += `     <div class="box-ingredient text-light" onclick="filterCategory3('${data.meals[index].strIngredient}')">
                            <i class="fa-solid fa-drumstick-bite fa-4x py-3"></i>
                            <h2>${data.meals[index].strIngredient}</h2>
                            <p>${data.meals[index].strDescription}</p>
                        </div>`;
    });
    document.getElementById("showBox5").innerHTML = temp;
    document.getElementById("loading").style.display ="none";
  });
});

// ====== open new page ======
function filterCategory3(ingredient) {
  document.getElementById("loading").style.display ="flex";
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  ).then((req) => {
    req.json().then((data) => {
      console.log(data.meals);

      let temp = "";
      data.meals.forEach((item, index) => {
        temp += `     <div class="box" onclick = "displaySinglePage4('${data.meals[index].idMeal}')">
        <div class="image">
            <img src="${data.meals[index].strMealThumb}" class="w-100" alt="">
            <div class="layer">
                <h3 class="text-center">${data.meals[index].strMeal}</h3>
            </div>
        </div>
        </div>`;
      });
      document.querySelector("#showFilters").innerHTML = temp;
      document.querySelector("#showBox5").style.display = "none";
      document.getElementById("loading").style.display ="none";
    });
  });
}

// ====== show single box ======
function displaySinglePage4(cate) {
  const SinglePage = document.querySelector(".single-page");
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cate}`).then(
    (req) => {
      req.json().then((data) => {
        const meal = data.meals[0];
        console.log(data);
        let temp = `<div class="left">
      <div class="image">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
      </div>
  </div>
  <div class="right text-light">
      <h2>Instructions</h2>
      <P>${meal.strInstructions}</P>
      <h3 class="fs-2"><span class="text-warning">Area :</span> ${meal.strArea}</h3>
      <h4 class="fs-2"> <span class="text-warning">Category :</span>  ${meal.strCategory}</h4>
      <h5 class="fs-2 text-warning">Recipes :</h5>
      <div class="boxs">
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure1}  ${meal.strIngredient1}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure2}  ${meal.strIngredient2}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure3}  ${meal.strIngredient3}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure4}  ${meal.strIngredient4}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure5}  ${meal.strIngredient5}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure6}  ${meal.strIngredient6}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure7}  ${meal.strIngredient7}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure8}  ${meal.strIngredient8}</div>
          <div class="box bg-info-subtle text-black"> ${meal.strMeasure9}  ${meal.strIngredient9}</div>
      </div>
      <h5 class="fs-2 text-warning mt-3">Tags :</h5>
      <div class="boxs">
          <div class="box bg-danger-subtle text-black"> ${meal.strTags}</div>
      </div>
      <button class="btn btn-info fs-5 my-4"><a class="text-dark" target="_blank" href=" ${meal.strSource}">Source</a></button>
      <button class="btn btn-danger fs-5  my-4"><a class="text-dark" target="_blank" href=" ${meal.strYoutube}">YouTube</a></button>
  </div>
`;
        document.getElementById("showSingle").innerHTML = temp;
      });
    }
  );
  document.querySelector("#showFilters").style.display = "none";
  SinglePage.classList.replace("d-none", "d-flex");
}

// ======================== Contact Page ========================
const alertInputs = document.getElementById("alertInputs");

const textInput = document.getElementById("textInput");
if (textInput != null) {
  textInput.addEventListener("change", validName);
  function validName() {
    let regexName = /^[a-zA-Z]{3,15}$/;
    if (regexName.test(textInput.value)) {
      textInput.classList.add("is-valid");
      textInput.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      textInput.classList.add("is-invalid");
      textInput.classList.remove("is-valid");
      alertInputs.innerHTML = "Name Is Not Valid";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}

const emailInput = document.getElementById("emailInput");
if (emailInput != null) {
  emailInput.addEventListener("change", validEmail);
  function validEmail() {
    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(emailInput.value)) {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      alertInputs.innerHTML = "Email Not Valid *example@yyy.zzz";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}

const phoneInput = document.getElementById("phoneInput");
if (phoneInput != null) {
  phoneInput.addEventListener("change", validPhone);
  function validPhone() {
    let regexPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (regexPhone.test(phoneInput.value)) {
      phoneInput.classList.add("is-valid");
      phoneInput.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      phoneInput.classList.add("is-invalid");
      phoneInput.classList.remove("is-valid");
      alertInputs.innerHTML = "Phone Number Not Correct *01205273829";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}

const ageInput = document.getElementById("ageInput");
if (ageInput != null) {
  ageInput.addEventListener("change", validAge);
  function validAge() {
    let regexAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    if (regexAge.test(ageInput.value)) {
      ageInput.classList.add("is-valid");
      ageInput.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      ageInput.classList.add("is-invalid");
      ageInput.classList.remove("is-valid");
      alertInputs.innerHTML = "Enter Invalid Age Please";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}

const passwordInput1 = document.getElementById("passwordInput1");
if (passwordInput1 != null) {
  passwordInput1.addEventListener("change", validPassword1);
  function validPassword1() {
    let regexPassword = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
    if (regexPassword.test(passwordInput1.value)) {
      passwordInput1.classList.add("is-valid");
      passwordInput1.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      passwordInput1.classList.add("is-invalid");
      passwordInput1.classList.remove("is-valid");
      alertInputs.innerHTML =
        "Enter valid password *Minimum eight characters, at least one letter and one number:*";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}

const passwordInput2 = document.getElementById("passwordInput2");
if (passwordInput2 != null) {
  passwordInput2.addEventListener("change", validPassword2);
  function validPassword2() {
    let regexPassword2 = passwordInput1.value == passwordInput2.value;
    if (regexPassword2.test(passwordInput2.value)) {
      passwordInput2.classList.add("is-valid");
      passwordInput2.classList.remove("is-invalid");
      alertInputs.classList.replace("d-block", "d-none");
      return true;
    } else {
      passwordInput2.classList.add("is-invalid");
      passwordInput2.classList.remove("is-valid");
      alertInputs.innerHTML = "Enter valid repassword";
      alertInputs.classList.replace("d-none", "d-block");
      return false;
    }
  }
}