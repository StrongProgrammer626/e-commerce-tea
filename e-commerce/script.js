/* =========================================================
   ALMA NATURAL
   script.js
========================================================= */


/* =========================================================
   PRODUCTOS PRINCIPALES
========================================================= */

const products = [

    {
        id: "green-tea",
        name: "Té Verde",
        category: "tes",
        price: 5.90,
        description:
            "Descubre nuestras diferentes variedades de té verde.",
        emoji: "🍵",
        bg: "product-bg-1",
        family: "green-tea"
    },


    {
        id: "negro",
        name: "Té Negro",
        category: "tes",
        price: 9.50,
        description:
            "Té negro aromático con notas cítricas.",
        emoji: "🫖",
        bg: "product-bg-2"
    },


    {
        id: "matcha",
        name: "Té Matcha",
        category: "tes",
        price: 10.50,
        description:
            "Una mezcla cálida de té y especias.",
        emoji: "☕",
        bg: "product-bg-3"
    },


    {
        id: "rojo",
        name: "Te Rojo",
        category: "tes",
        price: 8.20,
        description:
            "Rojo.",
        emoji: "🌿",
        bg: "product-bg-5"
    },

    {
        id: "blanco",
        name: "Te Blanco",
        category: "tes",
        price: 8.20,
        description:
            "Blanco.",
        emoji: "🌿",
        bg: "product-bg-6"
    },

    {
        id: "oolong",
        name: "Te Azul u Oolong",
        category: "tes",
        price: 8.20,
        description:
            "Oolong.",
        emoji: "🌿",
        bg: "product-bg-7"
    },

    {
        id: "ecologico",
        name: "Te Ecologico",
        category: "tes",
        price: 8.20,
        description:
            "Eco.",
        emoji: "🌿",
        bg: "product-bg-8"
    },

    {
        id: "acc",
        name: "Accesorios de Te y mas",
        category: "tes",
        price: 8.20,
        description:
            "Acc.",
        emoji: "🌿",
        bg: "product-bg-9"
    },

    {
        id: "rooibos",
        name: "Rooibos",
        category: "tes",
        price: 8.20,
        description:
            "Rooibos suave con delicioso aroma de vainilla.",
        emoji: "🌿",
        bg: "product-bg-10"
    },


    {
        id: "manzanilla",
        name: "Manzanilla Floral",
        category: "infusiones",
        price: 7.50,
        description:
            "Infusión floral delicada y aromática.",
        emoji: "🌼",
        bg: "product-bg-11"
    },


    {
        id: "canela",
        name: "Canela de Ceylán",
        category: "infusiones",
        price: 6.90,
        description:
            "Canela seleccionada de sabor suave.",
        emoji: "🪵",
        bg: "product-bg-12"
    },


    {
        id: "curcuma",
        name: "Cúrcuma Premium",
        category: "infusiones",
        price: 6.50,
        description:
            "Cúrcuma aromática seleccionada.",
        emoji: "🟠",
        bg: "product-bg-13"
    },


    {
        id: "cosmetica",
        name: "Aceite Natural",
        category: "belleza",
        price: 12.90,
        description:
            "Aceite natural para el cuidado de la piel.",
        emoji: "🧴",
        bg: "product-bg-14"
    },


    {
        id: "minerales",
        name: "Minerales Naturales",
        category: "hogar",
        price: 9.90,
        description:
            "Selección de minerales naturales.",
        emoji: "💎",
        bg: "product-bg-15"
    },


    {
        id: "regalo",
        name: "Caja Regalo Natural",
        category: "regalos",
        price: 24.90,
        description:
            "Una selección especial para regalar.",
        emoji: "🎁",
        bg: "product-bg-16"
    }

];


/* =========================================================
   VARIEDADES TÉ VERDE
========================================================= */

const greenTeaVariants = [

    {
        id: "jazmin",
        name: "Té Verde Jazmín Flores",
        description:
            "Té verde aromatizado con delicadas flores de jazmín.",
        emoji: "🌸",
        formats: [
            {
                name: "50 g",
                price: 5.90
            },
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "sencha",
        name: "Té Verde Sencha",
        description:
            "Clásico té verde japonés de sabor fresco y vegetal.",
        emoji: "🍃",
        formats: [
            {
                name: "50 g",
                price: 5.90
            },
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "suenos-invierno",
        name: "Té Verde Sueños de Invierno",
        description:
            "Mezcla aromática perfecta para los días fríos.",
        emoji: "❄️",
        formats: [
            {
                name: "50 g",
                price: 5.90
            },
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "menta-moruno",
        name: "Té Verde Menta Moruno",
        description:
            "Té verde con refrescante menta moruna.",
        emoji: "🌿",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "pina-colada",
        name: "Té Verde Piña Colada",
        description:
            "Té verde tropical con notas de piña y coco.",
        emoji: "🍍",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "mango-sweet",
        name: "Té Verde Mango Sweet",
        description:
            "Aromático té verde con sabor dulce de mango.",
        emoji: "🥭",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "green-chai",
        name: "Té Verde Green Chai",
        description:
            "Té verde combinado con una selección de especias.",
        emoji: "🌱",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "drena-liquidos",
        name: "Té Verde Drena Líquidos",
        description:
            "Mezcla aromática pensada para acompañar tu rutina.",
        emoji: "💧",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "curcuma-premium",
        name: "Té Verde Cúrcuma Premium",
        description:
            "Té verde combinado con cúrcuma aromática.",
        emoji: "🟠",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "kukicha",
        name: "Té Verde Kukicha Japonés",
        description:
            "Té japonés tradicional de sabor suave.",
        emoji: "🍵",
        formats: [
            {
                name: "80 g",
                price: 8.90
            }
        ]
    },


    {
        id: "lima-japonesa",
        name: "Té Verde Lima Japonesa",
        description:
            "Té verde con notas frescas de lima.",
        emoji: "🍋",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "pastel-navideno",
        name: "Té Verde Pastel Navideño",
        description:
            "Mezcla aromática inspirada en los sabores navideños.",
        emoji: "🎄",
        formats: [
            {
                name: "100 g",
                price: 9.90
            }
        ]
    },


    {
        id: "jengibre-limon",
        name: "Té Verde Jengibre y Limón Bio",
        description:
            "Té verde ecológico con jengibre y limón.",
        emoji: "🍋",
        formats: [
            {
                name: "100 g",
                price: 10.90
            }
        ]
    },


    {
        id: "gunpowder",
        name: "Té Verde Gunpowder",
        description:
            "Té verde clásico de hojas enrolladas.",
        emoji: "🍃",
        formats: [
            {
                name: "100 g",
                price: 8.90
            }
        ]
    },


    {
        id: "champan-fresas",
        name: "Té Verde Champán & Fresas",
        description:
            "Aromática combinación de champán y fresas.",
        emoji: "🍓",
        formats: [
            {
                name: "80 g",
                price: 8.90
            }
        ]
    },


    {
        id: "naranja-canela",
        name: "Té Verde Naranja y Canela",
        description:
            "Una mezcla cálida de naranja y canela.",
        emoji: "🍊",
        formats: [
            {
                name: "80 g",
                price: 8.90
            }
        ]
    },


    {
        id: "chun-mee",
        name: "Té Verde Chun Mee",
        description:
            "Té verde tradicional de carácter fresco.",
        emoji: "🍃",
        formats: [
            {
                name: "100 g",
                price: 8.90
            }
        ]
    },


    {
        id: "pera-bio",
        name: "Té Verde Pera Bio",
        description:
            "Té verde ecológico con delicado aroma de pera.",
        emoji: "🍐",
        formats: [
            {
                name: "80 g",
                price: 8.90
            }
        ]
    }

];


/* =========================================================
   ESTADO
========================================================= */

let cart = [];

let currentCategory = "todos";

let currentGreenTeaSearch = "";


/* =========================================================
   ELEMENTOS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const mainCatalog =
    document.getElementById("mainCatalog");

const greenTeaFamily =
    document.getElementById("greenTeaFamily");

const greenTeaGrid =
    document.getElementById("greenTeaGrid");

const emptyGreenTea =
    document.getElementById("emptyGreenTea");

const greenTeaSearch =
    document.getElementById("greenTeaSearch");

const greenTeaCounter =
    document.getElementById("greenTeaCounter");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartFooter =
    document.getElementById("cartFooter");

const cartCount =
    document.getElementById("cartCount");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartShipping =
    document.getElementById("cartShipping");

const cartTotal =
    document.getElementById("cartTotal");

const shippingMessage =
    document.getElementById("shippingMessage");

const toast =
    document.getElementById("toast");


/* =========================================================
   FORMATO MONEDA
========================================================= */

const money = new Intl.NumberFormat(
    "es-ES",
    {
        style: "currency",
        currency: "EUR"
    }
);


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveCart() {

    localStorage.setItem(
        "alma-natural-cart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    const saved =
        localStorage.getItem(
            "alma-natural-cart"
        );

    if (!saved) {
        return;
    }

    try {

        cart = JSON.parse(saved);

    } catch {

        cart = [];

    }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts() {

    const search =
        document
            .getElementById("searchInput")
            ?.value
            .toLowerCase()
            .trim() || "";


    let filtered =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "todos" ||
                product.category === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);


            return categoryMatch && searchMatch;

        });


    const sort =
        document.getElementById(
            "sortProducts"
        ).value;


    if (sort === "price-low") {

        filtered.sort(
            (a,b) => a.price - b.price
        );

    }


    if (sort === "price-high") {

        filtered.sort(
            (a,b) => b.price - a.price
        );

    }


    if (sort === "name") {

        filtered.sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name,
                    "es"
                )
        );

    }


    productsGrid.innerHTML = "";


    if (!filtered.length) {

        emptyProducts.classList.add("show");

        return;

    }


    emptyProducts.classList.remove("show");


    filtered.forEach(
        product => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";


            const familyClass =
                product.family
                    ? "product-family-trigger"
                    : "";


            card.innerHTML = `

                <div
                    class="product-image ${product.bg}"
                >

                    ${
                        product.family
                        ? `
                            <span class="product-badge">
                                VARIEDADES
                            </span>
                        `
                        : ""
                    }

                    <span class="product-emoji">
                        ${product.emoji}
                    </span>

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${getCategoryName(product.category)}
                    </span>


                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${
                                product.family
                                ? "Desde " + money.format(product.price)
                                : money.format(product.price)
                            }
                        </strong>


                        ${
                            product.family

                            ? `
                                <button
                                    class="add-button family-open"
                                    data-family="${product.family}"
                                    aria-label="Ver variedades"
                                >
                                    →
                                </button>
                            `

                            : `
                                <button
                                    class="add-button"
                                    data-add="${product.id}"
                                    aria-label="Añadir al carrito"
                                >
                                    +
                                </button>
                            `
                        }

                    </div>


                    ${
                        product.family
                        ? `
                            <div class="family-link">
                                Ver variedades
                            </div>
                        `
                        : ""
                    }

                </div>
            `;


            productsGrid.appendChild(card);

        }
    );


    attachProductEvents();

}


/* =========================================================
   CATEGORÍAS
========================================================= */

function getCategoryName(category) {

    const names = {

        tes:
            "Tés y más",

        infusiones:
            "Infusiones y Especias",

        belleza:
            "Belleza y Cosmética",

        hogar:
            "Hogar, Minerales y Otros",

        regalos:
            "Regalos y Ofertas"

    };


    return names[category] || category;

}


/* =========================================================
   EVENTOS PRODUCTOS
========================================================= */

function attachProductEvents() {

    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addToCart(
                        button.dataset.add
                    );

                }
            );

        });


    document
        .querySelectorAll(".family-open")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openFamily(
                        button.dataset.family
                    );

                }
            );

        });


    document
        .querySelectorAll(".product-family-trigger")
        .forEach(card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".family-open"
                        )
                    ) {
                        return;
                    }

                    openFamily(
                        "green-tea"
                    );

                }
            );

        });

}


/* =========================================================
   ABRIR FAMILIA
========================================================= */

function openFamily(family) {

    if (family !== "green-tea") {
        return;
    }


    mainCatalog.style.display = "none";

    greenTeaFamily.classList.add("active");


    renderGreenTea();


    document
        .getElementById("productos")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   CERRAR FAMILIA
========================================================= */

function closeFamily() {

    greenTeaFamily.classList.remove(
        "active"
    );

    mainCatalog.style.display = "block";

    currentGreenTeaSearch = "";

    greenTeaSearch.value = "";

    renderProducts();

}


/* =========================================================
   RENDER TÉS VERDES
========================================================= */

function renderGreenTea() {

    const search =
        currentGreenTeaSearch
            .toLowerCase()
            .trim();


    const filtered =
        greenTeaVariants.filter(
            tea => {

                return (

                    tea.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    tea.description
                        .toLowerCase()
                        .includes(search)

                );

            }
        );


    greenTeaGrid.innerHTML = "";


    greenTeaCounter.textContent =
        `${filtered.length} ${
            filtered.length === 1
            ? "variedad"
            : "variedades"
        }`;


    if (!filtered.length) {

        emptyGreenTea.classList.add(
            "show"
        );

        return;

    }


    emptyGreenTea.classList.remove(
        "show"
    );


    filtered.forEach(
        tea => {

            const card =
                document.createElement("article");

            card.className =
                "green-tea-card";


            const hasMultipleFormats =
                tea.formats.length > 1;


            const defaultFormat =
                tea.formats[0];


            card.innerHTML = `

                <div class="green-tea-image">

                    <span class="green-tea-emoji">
                        ${tea.emoji}
                    </span>

                </div>


                <div class="green-tea-info">

                    <h3>
                        ${tea.name}
                    </h3>


                    <p>
                        ${tea.description}
                    </p>


                    ${
                        hasMultipleFormats

                        ? `
                            <span class="formats-title">
                                Elige el formato
                            </span>

                            <div class="format-options">

                                ${tea.formats
                                    .map(
                                        (format,index) => `
                                            <button
                                                class="
                                                    format-button
                                                    ${
                                                        index === 0
                                                        ? "active"
                                                        : ""
                                                    }
                                                "
                                                data-tea="${tea.id}"
                                                data-format="${index}"
                                            >
                                                ${format.name}
                                            </button>
                                        `
                                    )
                                    .join("")}

                            </div>
                        `

                        : `
                            <span class="formats-title">
                                Formato disponible
                            </span>

                            <div class="format-options">

                                <button
                                    class="
                                        format-button
                                        active
                                    "
                                >
                                    ${defaultFormat.name}
                                </button>

                            </div>
                        `
                    }


                    <div class="green-tea-bottom">

                        <strong
                            class="green-tea-price"
                            data-price-for="${tea.id}"
                        >
                            ${money.format(
                                defaultFormat.price
                            )}
                        </strong>


                        <button
                            class="green-tea-add"
                            data-green-add="${tea.id}"
                            data-format-index="0"
                        >
                            Añadir
                        </button>

                    </div>

                </div>
            `;


            greenTeaGrid.appendChild(card);

        }
    );


    attachGreenTeaEvents();

}


/* =========================================================
   EVENTOS TÉS VERDES
========================================================= */

function attachGreenTeaEvents() {

    document
        .querySelectorAll(".format-button[data-tea]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const teaId =
                        button.dataset.tea;

                    const formatIndex =
                        Number(
                            button.dataset.format
                        );


                    const tea =
                        greenTeaVariants.find(
                            item =>
                                item.id === teaId
                        );


                    if (!tea) {
                        return;
                    }


                    const price =
                        tea.formats[
                            formatIndex
                        ].price;


                    const card =
                        button.closest(
                            ".green-tea-card"
                        );


                    card
                        .querySelectorAll(
                            ".format-button"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    card
                        .querySelector(
                            `[data-price-for="${teaId}"]`
                        )
                        .textContent =
                            money.format(price);


                    card
                        .querySelector(
                            "[data-green-add]"
                        )
                        .dataset.formatIndex =
                            formatIndex;

                }
            );

        });


    document
        .querySelectorAll("[data-green-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const teaId =
                        button.dataset.greenAdd;

                    const formatIndex =
                        Number(
                            button.dataset.formatIndex
                        );


                    addGreenTeaToCart(
                        teaId,
                        formatIndex
                    );

                }
            );

        });

}


/* =========================================================
   AÑADIR TÉ VERDE
========================================================= */

function addGreenTeaToCart(
    teaId,
    formatIndex
) {

    const tea =
        greenTeaVariants.find(
            item =>
                item.id === teaId
        );


    if (!tea) {
        return;
    }


    const format =
        tea.formats[formatIndex];


    const cartId =
        `green-${tea.id}-${formatIndex}`;


    const existing =
        cart.find(
            item =>
                item.cartId === cartId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            cartId,

            id: tea.id,

            name:
                `${tea.name} - ${format.name}`,

            price:
                format.price,

            quantity: 1,

            emoji: tea.emoji

        });

    }


    saveCart();

    updateCart();


    showToast(
        `${tea.name} (${format.name}) añadido al carrito`
    );

}


/* =========================================================
   AÑADIR PRODUCTO NORMAL
========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.cartId === product.id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            cartId:
                product.id,

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            quantity:
                1,

            emoji:
                product.emoji

        });

    }


    saveCart();

    updateCart();


    showToast(
        `${product.name} añadido al carrito`
    );

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function updateCart() {

    cartItems.innerHTML = "";


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="cart-empty">

                <div class="cart-empty-icon">
                    🛒
                </div>

                <h4>
                    Tu carrito está vacío
                </h4>

                <p>
                    Añade productos para comenzar.
                </p>

            </div>

        `;


        cartFooter.style.display = "none";

    } else {

        cartFooter.style.display = "block";


        cart.forEach(item => {

            const element =
                document.createElement("div");

            element.className =
                "cart-item";


            element.innerHTML = `

                <div
                    class="cart-item-image"
                    style="
                        background:
                        #e4ecdf;
                    "
                >
                    ${item.emoji}
                </div>


                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        ${money.format(item.price)}
                    </div>


                    <div class="quantity-controls">

                        <button
                            data-minus="${item.cartId}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-plus="${item.cartId}"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    data-remove="${item.cartId}"
                >
                    ×
                </button>

            `;


            cartItems.appendChild(element);

        });


        attachCartEvents();

    }


    const quantity =
        cart.reduce(
            (total,item) =>
                total + item.quantity,
            0
        );


    const subtotal =
        cart.reduce(
            (total,item) =>
                total +
                item.price *
                item.quantity,
            0
        );


    const shipping =
        subtotal >= 35
            ? 0
            : subtotal > 0
                ? 4.90
                : 0;


    const total =
        subtotal + shipping;


    cartCount.textContent =
        quantity;


    cartSubtotal.textContent =
        money.format(subtotal);


    cartShipping.textContent =
        shipping === 0
            ? "Gratis"
            : money.format(shipping);


    cartTotal.textContent =
        money.format(total);


    if (subtotal > 0 && subtotal < 35) {

        shippingMessage.textContent =
            `Te faltan ${money.format(
                35 - subtotal
            )} para conseguir envío gratis.`;

    } else if (subtotal >= 35) {

        shippingMessage.textContent =
            "¡Has conseguido envío gratis!";

    } else {

        shippingMessage.textContent =
            "";

    }

}


/* =========================================================
   EVENTOS CARRITO
========================================================= */

function attachCartEvents() {

    document
        .querySelectorAll("[data-minus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        button.dataset.minus,
                        -1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-plus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        button.dataset.plus,
                        1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-remove]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        button.dataset.remove
                    );

                }
            );

        });

}


/* =========================================================
   CANTIDAD
========================================================= */

function changeQuantity(
    cartId,
    amount
) {

    const item =
        cart.find(
            product =>
                product.cartId === cartId
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.cartId !== cartId
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   ELIMINAR
========================================================= */

function removeFromCart(cartId) {

    cart =
        cart.filter(
            item =>
                item.cartId !== cartId
        );


    saveCart();

    updateCart();

}


/* =========================================================
   FILTROS
========================================================= */

document
    .querySelectorAll(".filter-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter-button"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.filter;


                renderProducts();

            }
        );

    });


/* =========================================================
   ORDENAR
========================================================= */

document
    .getElementById("sortProducts")
    .addEventListener(
        "change",
        renderProducts
    );


/* =========================================================
   BUSCADOR PRINCIPAL
========================================================= */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        renderProducts
    );


/* =========================================================
   BUSCADOR TÉ VERDE
========================================================= */

greenTeaSearch.addEventListener(
    "input",
    event => {

        currentGreenTeaSearch =
            event.target.value;

        renderGreenTea();

    }
);


/* =========================================================
   CATEGORÍAS
========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;


                currentCategory =
                    category;


                document
                    .querySelectorAll(
                        ".filter-button"
                    )
                    .forEach(button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter ===
                            category
                        );

                    });


                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });


                renderProducts();

            }
        );

    });


/* =========================================================
   VOLVER DEL TÉ VERDE
========================================================= */

document
    .getElementById("backToCatalog")
    .addEventListener(
        "click",
        closeFamily
    );


/* =========================================================
   CARRITO ABRIR
========================================================= */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        () => {

            cartOverlay.classList.add(
                "active"
            );

        }
    );


/* =========================================================
   CARRITO CERRAR
========================================================= */

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        () => {

            cartOverlay.classList.remove(
                "active"
            );

        }
    );


cartOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            cartOverlay
        ) {

            cartOverlay.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   SEARCH PANEL
========================================================= */

document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        () => {

            const panel =
                document.getElementById(
                    "searchPanel"
                );


            panel.classList.toggle(
                "active"
            );


            if (
                panel.classList.contains(
                    "active"
                )
            ) {

                document
                    .getElementById(
                        "searchInput"
                    )
                    .focus();

            }

        }
    );


/* =========================================================
   CHECKOUT
========================================================= */

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );


document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Tu carrito está vacío."
                );

                return;

            }


            checkoutModal.classList.add(
                "active"
            );

        }
    );


document
    .getElementById("closeCheckout")
    .addEventListener(
        "click",
        () => {

            checkoutModal.classList.remove(
                "active"
            );

        }
    );


document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const orderNumber =
                Math.floor(
                    100000 +
                    Math.random() *
                    900000
                );


            checkoutModal.classList.remove(
                "active"
            );


            cart = [];


            saveCart();

            updateCart();


            cartOverlay.classList.remove(
                "active"
            );


            event.target.reset();


            showToast(
                `Pedido #${orderNumber} realizado correctamente.`
            );

        }
    );


/* =========================================================
   NEWSLETTER
========================================================= */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            event.target.reset();


            showToast(
                "¡Gracias por suscribirte!"
            );

        }
    );


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        cartOverlay.classList.remove(
            "active"
        );


        checkoutModal.classList.remove(
            "active"
        );


        document
            .getElementById("searchPanel")
            .classList.remove(
                "active"
            );

    }
);


/* =========================================================
   INICIO
========================================================= */

loadCart();

renderProducts();

updateCart();