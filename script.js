showCats();

addBtn.addEventListener("click", (e) => {
  createModelWindow();
  mdBox.classList.toggle("active");
});

function showCats() {
  fetch(path + "/show")
    .then(function (res) {
      if (res.statusText === "OK") {
        return res.json();
      }
    })
    .then(function (data) {
      for (const iterator of data) {
        createCat(iterator, box);
      }
    });
}

function addCat(body) {
  let ids = [];
  fetch(path + "/ids")
    .then((res) => res.json())
    .then((data) => {
      ids = [...data];
      body.id = ids.length ? ids[ids.length - 1] + 1 : 1;
      return fetch(path + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.status === 200) {
          mdBox.classList.remove("active");
          createCat(body);
        }
      });
    });
}

function deleteCat(idCat) {
  if (idCat) {
    fetch(`${path}/delete/${idCat}`, { method: "delete" }).then((res) => {
      if (res.status == 200) {
        location.reload();
      }
    });
  }
}

function modifyCat(catID, bodyCat) {
  console.log(catID);
  fetch(path + `/update/${catID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyCat),
  }).then((res) => {
    if (res.status == 200) {
      location.reload();
    }
  });
}

function setLike(el, id, like) {
  el.classList.toggle("fa-solid");
  el.classList.toggle("fa-regular");
  fetch(path + "/update/" + id, {
    method: "put",
    // без headers на сервер прийдет undefined
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ favorite: like }),
  }).then((res) => res.json());
}