//DEFINIMOS EL OBJETO PRODUCTO EN LA APP
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//NOS PERMITIRA AGREGAR ALGO EN EL INTERFAS/HTML
class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    //Diseñamos los Elementos que iran el el HTML
    element.innerHTML = `
      <div class="card text-center mb-4"> 
        <div class="card-body">
          <strong>Product Name: </strong> ${product.name},
          <strong>Product Price: </strong> ${product.price},
          <strong>Product Year: </strong> ${product.year},

          <a href='#' class="btn btn-danger" name="delete">Delete</a>
        </div>
      </div>
    `;
    //Le agregamos el elemento que acabamos de diseñar en el div 'product-list'
    productList.appendChild(element);
  }

  reserForm() {
    //Vaciamos todos los inputs del formulario
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
    }
    this.showMessage("Product Deleted Succesfully", "danger");
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4 `;
    div.appendChild(document.createTextNode(message));

    //Mostrando en el DOM
    const container = document.querySelector(".container");
    document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

// DOM Event (Son todos los eventos que se dan en el HTML)

//Creamos una funcion apartir del click al boton SAVE
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    //Totamos los valores de los Inputs
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    //Genera un objeto Product con los valores tomados en el formulario
    const product = new Product(name, price, year);

    //Instanciamos la clase UI y la almacenamos en la constante ui
    const ui = new UI();
    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Complete Fields Please", "info");
    }
    ui.addProduct(product); //Accedemos a addProduct y le pasamos el producto creado anteriormente
    ui.reserForm();
    ui.showMessage("Product Added Succesfully", "success");

    //Se quitan el actualizado por defecto que trae la opcion submit
    e.preventDefault();
  });
//Creamos una funcion apartir del click al boton DELETE
document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
