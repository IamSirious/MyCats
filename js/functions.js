function createCat(pet, el = box) {
  const card = document.createElement("div");
  card.className = "card";

  const btnDelete = document.createElement("button");
  btnDelete.className = "btnDelete";
  btnDelete.classList.add("btn");
  const iDelete = document.createElement("i");
  iDelete.className = "fa-solid";
  iDelete.classList.add("fa-trash");
  btnDelete.append(iDelete);
  btnDelete.addEventListener("click", (e) => {
    e.stopPropagation();
    let isDelete = confirm(
      `Удалить этого котика ${pet.name}?`
    );
    if (isDelete) {
      deleteCat(pet.id);
    }
  });


  card.addEventListener("click", (e) => {
    createModelWindow(pet, "Редактирование");
    mdBox.classList.toggle("active");
  });
  const pic = document.createElement("div");
  pic.className = "pic";
  const name = document.createElement("h3");
  name.innerText = pet.name;
  const like = document.createElement("i");
  like.className = "fa-heart card__like";
  like.classList.add(pet.favorite ? "fa-solid" : "fa-regular");


  // поставить лайк (сердечко, id котика, явяляется ли любимчиком true/false)
  like.addEventListener("click", (e) => {
    e.stopPropagation();
    setLike(like, pet.id, !pet.favorite); // (true => false; false => true)
  });
  if (!pet.image) {
    pic.classList.add("default");
  } else {
    pic.style.backgroundImage = `url(${pet.image})`;
  }

  card.append(pic, like, name, btnDelete);

  const rateDiv = document.createElement("div");
  rateDiv.className = "rating";

  card.append(rateDiv);
  el.append(card);
}