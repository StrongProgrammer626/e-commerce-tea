/* =========================================================
   ALMA NATURAL
   script.js
   =========================================================

   FAMILIAS DE TÉ:
   1. Té Verde
   2. Té Matcha
   3. Té Negro
   4. Té Rojo
   5. Rooibos

   FUNCIONES PRINCIPALES:
   - Catálogo
   - Familias de productos
   - Búsqueda
   - Filtros
   - Ordenación
   - Formatos
   - Carrito
   - LocalStorage
   - Checkout
   - Newsletter
   - Notificaciones
========================================================= */


/* =========================================================
   01. PRODUCTOS PRINCIPALES
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
        id: "matcha",
        name: "Té Matcha",
        category: "tes",
        price: 0,
        description:
            "Té Matcha y accesorios para su preparación.",
        emoji: "🍵",
        bg: "product-bg-2",
        family: "matcha"
    },

    {
        id: "black-tea",
        name: "Té Negro",
        category: "tes",
        price: 0,
        description:
            "Descubre nuestras diferentes variedades de té negro.",
        emoji: "🫖",
        bg: "product-bg-3",
        family: "black-tea"
    },

    {
        id: "red-tea",
        name: "Té Rojo",
        category: "tes",
        price: 0,
        description:
            "Descubre nuestras diferentes variedades de té rojo.",
        emoji: "🌿",
        bg: "product-bg-4",
        family: "red-tea"
    },

    {
        id: "rooibos",
        name: "Rooibos",
        category: "tes",
        price: 0,
        description:
            "Descubre nuestras diferentes variedades de Rooibos.",
        emoji: "🌿",
        bg: "product-bg-5",
        family: "rooibos"
    },

    {
        id: "blanco",
        name: "Té Blanco",
        category: "tes",
        price: 8.20,
        description:
            "Selección de té blanco.",
        emoji: "🌿",
        bg: "product-bg-6"
    },

    {
        id: "oolong",
        name: "Té Azul u Oolong",
        category: "tes",
        price: 8.20,
        description:
            "Selección de té azul u Oolong.",
        emoji: "🌿",
        bg: "product-bg-7"
    },

    {
        id: "ecologico",
        name: "Té Ecológico",
        category: "tes",
        price: 8.20,
        description:
            "Selección de té ecológico.",
        emoji: "🌱",
        bg: "product-bg-8"
    },

    {
        id: "acc",
        name: "Accesorios de Té y Más",
        category: "tes",
        price: 8.20,
        description:
            "Accesorios para preparar y disfrutar del té.",
        emoji: "🫖",
        bg: "product-bg-9"
    },

    {
        id: "manzanilla",
        name: "Manzanilla Floral",
        category: "infusiones",
        price: 7.50,
        description:
            "Infusión floral delicada y aromática.",
        emoji: "🌼",
        bg: "product-bg-10"
    },

    {
        id: "canela",
        name: "Canela de Ceylán",
        category: "infusiones",
        price: 6.90,
        description:
            "Canela seleccionada de sabor suave.",
        emoji: "🪵",
        bg: "product-bg-11"
    },

    {
        id: "curcuma",
        name: "Cúrcuma Premium",
        category: "infusiones",
        price: 6.50,
        description:
            "Cúrcuma aromática seleccionada.",
        emoji: "🟠",
        bg: "product-bg-12"
    },

    {
        id: "cosmetica",
        name: "Aceite Natural",
        category: "belleza",
        price: 12.90,
        description:
            "Aceite natural para el cuidado de la piel.",
        emoji: "🧴",
        bg: "product-bg-13"
    },

    {
        id: "minerales",
        name: "Minerales Naturales",
        category: "hogar",
        price: 9.90,
        description:
            "Selección de minerales naturales.",
        emoji: "💎",
        bg: "product-bg-14"
    },

    {
        id: "regalo",
        name: "Caja Regalo Natural",
        category: "regalos",
        price: 24.90,
        description:
            "Una selección especial para regalar.",
        emoji: "🎁",
        bg: "product-bg-15"
    }

];


/* =========================================================
   02. TÉ VERDE
========================================================= */

const greenTeaVariants = [

    {
        id: "jazmin",
        name: "Té Verde Jazmín Flores",
        description:
            "Té verde aromatizado con delicadas flores de jazmín.",
        emoji: "🌸",
        formats: [
            { name: "50 g", price: 5.90 },
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "sencha",
        name: "Té Verde Sencha",
        description:
            "Clásico té verde japonés de sabor fresco y vegetal.",
        emoji: "🍃",
        formats: [
            { name: "50 g", price: 5.90 },
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "suenos-invierno",
        name: "Té Verde Sueños de Invierno",
        description:
            "Mezcla aromática perfecta para los días fríos.",
        emoji: "❄️",
        formats: [
            { name: "50 g", price: 5.90 },
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "menta-moruno",
        name: "Té Verde Menta Moruno",
        description:
            "Té verde con refrescante menta moruna.",
        emoji: "🌿",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "pina-colada",
        name: "Té Verde Piña Colada",
        description:
            "Té verde tropical con notas de piña y coco.",
        emoji: "🍍",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "mango-sweet",
        name: "Té Verde Mango Sweet",
        description:
            "Aromático té verde con sabor dulce de mango.",
        emoji: "🥭",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "green-chai",
        name: "Té Verde Green Chai",
        description:
            "Té verde combinado con una selección de especias.",
        emoji: "🌱",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "drena-liquidos",
        name: "Té Verde Drena Líquidos",
        description:
            "Mezcla aromática pensada para acompañar tu rutina.",
        emoji: "💧",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "curcuma-premium",
        name: "Té Verde Cúrcuma Premium",
        description:
            "Té verde combinado con cúrcuma aromática.",
        emoji: "🟠",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "kukicha",
        name: "Té Verde Kukicha Japonés",
        description:
            "Té japonés tradicional de sabor suave.",
        emoji: "🍵",
        formats: [
            { name: "80 g", price: 8.90 }
        ]
    },

    {
        id: "lima-japonesa",
        name: "Té Verde Lima Japonesa",
        description:
            "Té verde con notas frescas de lima.",
        emoji: "🍋",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "pastel-navideno",
        name: "Té Verde Pastel Navideño",
        description:
            "Mezcla aromática inspirada en los sabores navideños.",
        emoji: "🎄",
        formats: [
            { name: "100 g", price: 9.90 }
        ]
    },

    {
        id: "jengibre-limon",
        name: "Té Verde Jengibre y Limón Bio",
        description:
            "Té verde ecológico con jengibre y limón.",
        emoji: "🍋",
        formats: [
            { name: "100 g", price: 10.90 }
        ]
    },

    {
        id: "gunpowder",
        name: "Té Verde Gunpowder",
        description:
            "Té verde clásico de hojas enrolladas.",
        emoji: "🍃",
        formats: [
            { name: "100 g", price: 8.90 }
        ]
    },

    {
        id: "champan-fresas",
        name: "Té Verde Champán & Fresas",
        description:
            "Aromática combinación de champán y fresas.",
        emoji: "🍓",
        formats: [
            { name: "80 g", price: 8.90 }
        ]
    },

    {
        id: "naranja-canela",
        name: "Té Verde Naranja y Canela",
        description:
            "Una mezcla cálida de naranja y canela.",
        emoji: "🍊",
        formats: [
            { name: "80 g", price: 8.90 }
        ]
    },

    {
        id: "chun-mee",
        name: "Té Verde Chun Mee",
        description:
            "Té verde tradicional de carácter fresco.",
        emoji: "🍃",
        formats: [
            { name: "100 g", price: 8.90 }
        ]
    },

    {
        id: "pera-bio",
        name: "Té Verde Pera Bio",
        description:
            "Té verde ecológico con delicado aroma de pera.",
        emoji: "🍐",
        formats: [
            { name: "80 g", price: 8.90 }
        ]
    }

];


/* =========================================================
   03. TÉ MATCHA
========================================================= */

const matchaProducts = [

    {
        id: "matcha-asia",
        name: "Té Matcha Asia",
        description:
            "Té Matcha de origen asiático.",
        emoji: "🍵",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "matcha-premium",
        name: "Té Matcha Premium",
        description:
            "Té Matcha de calidad premium.",
        emoji: "🍵",
        formats: [
            { name: "40 g", price: 0 }
        ]
    },

    {
        id: "batidor-bambu",
        name: "Batidor de Bambú",
        description:
            "Batidor tradicional de bambú para preparar Matcha.",
        emoji: "🎋",
        formats: [
            { name: "Unidad", price: 0 }
        ]
    },

    {
        id: "batidor-2",
        name: "Batidor 2",
        description:
            "Accesorio para preparar Té Matcha.",
        emoji: "🎋",
        formats: [
            { name: "Unidad", price: 0 }
        ]
    },

    {
        id: "cuenco-blanco-negro",
        name: "Cuenco Blanco/Negro",
        description:
            "Cuenco para la preparación tradicional del Matcha.",
        emoji: "🥣",
        formats: [
            { name: "Unidad", price: 0 }
        ]
    },

    {
        id: "cuenco-2",
        name: "Cuenco 2",
        description:
            "Cuenco para preparar y disfrutar tu Matcha.",
        emoji: "🥣",
        formats: [
            { name: "Unidad", price: 0 }
        ]
    },

    {
        id: "cuchara-bambu-matcha",
        name: "Cuchara de Bambú Matcha",
        description:
            "Cuchara tradicional de bambú para dosificar Matcha.",
        emoji: "🥄",
        formats: [
            { name: "Unidad", price: 0 }
        ]
    }

];


/* =========================================================
   04. TÉ NEGRO
========================================================= */

const blackTeaVariants = [

    {
        id: "negro-chocolate-vainilla",
        name: "Té Negro Chocolate y Vainilla",
        description:
            "Té negro aromático con notas de chocolate y vainilla.",
        emoji: "🍫",
        formats: [
            { name: "50 g", price: 0 },
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-mil-noches",
        name: "Té Negro Las Mil y una Noches",
        description:
            "Mezcla aromática inspirada en las noches orientales.",
        emoji: "🌙",
        formats: [
            { name: "50 g", price: 0 },
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-navidad-new",
        name: "Té Negro Navidad New",
        description:
            "Mezcla de té negro especial para Navidad.",
        emoji: "🎄",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-afrodisiaco",
        name: "Té Negro Afrodisíaco",
        description:
            "Té negro de aroma intenso y especiado.",
        emoji: "❤️",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "negro-vainilla",
        name: "Té Negro Vainilla",
        description:
            "Té negro aromatizado con delicadas notas de vainilla.",
        emoji: "🌿",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-lemon-fresh",
        name: "Té Negro Lemon Fresh",
        description:
            "Té negro fresco con notas de limón.",
        emoji: "🍋",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "negro-amor-abuela",
        name: "Té Negro Amor por la Abuela",
        description:
            "Mezcla aromática de carácter cálido y tradicional.",
        emoji: "💐",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "negro-happy-morning",
        name: "Té Negro Happy Morning",
        description:
            "Té negro pensado para comenzar el día.",
        emoji: "☀️",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "negro-darjeeling",
        name: "Té Negro Darjeeling",
        description:
            "Té negro de carácter aromático y elegante.",
        emoji: "🍃",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-fenix-dorado",
        name: "Té Negro Fénix Dorado",
        description:
            "Té negro de carácter intenso y aromático.",
        emoji: "🔥",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "negro-mil-flores",
        name: "Té Negro Mil Flores",
        description:
            "Té negro aromático con delicadas notas florales.",
        emoji: "🌸",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-pasion-turca",
        name: "Té Negro Pasión Turca",
        description:
            "Té negro inspirado en los aromas orientales.",
        emoji: "🌹",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "negro-earl-grey-bio",
        name: "Té Negro Earl Grey Bio",
        description:
            "Té negro ecológico con aroma característico de Earl Grey.",
        emoji: "🍋",
        formats: [
            { name: "100 g", price: 0 }
        ]
    }

];


/* =========================================================
   05. TÉ ROJO
========================================================= */

const redTeaVariants = [

    {
        id: "rojo-cereza-japonesa",
        name: "Té Rojo Cereza Japonesa",
        description:
            "Té rojo aromático con delicadas notas de cereza japonesa.",
        emoji: "🌸",
        formats: [
            { name: "50 g", price: 0 },
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-esbelt-line",
        name: "Té Rojo Esbelt Line",
        description:
            "Té rojo de carácter aromático.",
        emoji: "🌿",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-chocolate-vainilla",
        name: "Té Rojo Chocolate y Vainilla",
        description:
            "Té rojo con notas dulces de chocolate y vainilla.",
        emoji: "🍫",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-canela-limon",
        name: "Té Rojo Canela y Limón",
        description:
            "Té rojo con canela y frescas notas de limón.",
        emoji: "🍋",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-chai-massai",
        name: "Té Rojo Chai Massai",
        description:
            "Té rojo combinado con especias de estilo Chai.",
        emoji: "🌶️",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-pu-erh",
        name: "Té Rojo Pu Erh",
        description:
            "Té rojo tradicional de carácter profundo.",
        emoji: "🍵",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-tropical-sun",
        name: "Té Rojo Tropical Sun",
        description:
            "Té rojo con perfil tropical y aromático.",
        emoji: "🌴",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "rojo-vainilla",
        name: "Té Rojo Vainilla",
        description:
            "Té rojo aromatizado con vainilla.",
        emoji: "🌿",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-jazmin-premium",
        name: "Té Rojo Jazmín Premium",
        description:
            "Té rojo premium con delicadas notas de jazmín.",
        emoji: "🌸",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rojo-first-grade-bio",
        name: "Té Rojo First Grade Bio",
        description:
            "Té rojo ecológico de primera calidad.",
        emoji: "🍃",
        formats: [
            { name: "100 g", price: 0 }
        ]
    }

];


/* =========================================================
   06. ROOIBOS
========================================================= */

const rooibosVariants = [

    {
        id: "rooibos-chocolate-naranja",
        name: "Rooibos Chocolate y Naranja",
        description:
            "Rooibos aromático con notas de chocolate y naranja.",
        emoji: "🍫",
        formats: [
            { name: "50 g", price: 0 },
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rooibos-melon-mango",
        name: "Rooibos Melón y Mango",
        description:
            "Rooibos con una combinación tropical de melón y mango.",
        emoji: "🥭",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rooibos-limon-griego",
        name: "Rooibos Limón Griego",
        description:
            "Rooibos fresco con notas de limón.",
        emoji: "🍋",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rooibos-relax",
        name: "Rooibos Relax",
        description:
            "Rooibos aromático de carácter suave.",
        emoji: "🌿",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "rooibos-digestivo",
        name: "Rooibos Digestivo",
        description:
            "Rooibos de mezcla aromática.",
        emoji: "🌱",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rooibos-choco-menta",
        name: "Rooibos Choco Menta",
        description:
            "Rooibos con notas de chocolate y menta.",
        emoji: "🍫",
        formats: [
            { name: "100 g", price: 0 }
        ]
    },

    {
        id: "rooibos-divino-hogar",
        name: "Rooibos Divino Hogar",
        description:
            "Rooibos aromático de carácter cálido y acogedor.",
        emoji: "🏡",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "rooibos-canela-sweet",
        name: "Rooibos Canela Sweet",
        description:
            "Rooibos con un toque dulce de canela.",
        emoji: "🍂",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "rooibos-chai",
        name: "Rooibos Chai",
        description:
            "Rooibos combinado con especias de estilo Chai.",
        emoji: "☕",
        formats: [
            { name: "80 g", price: 0 }
        ]
    },

    {
        id: "rooibos-original-bio",
        name: "Rooibos Original Bio",
        description:
            "Rooibos ecológico de sabor suave y natural.",
        emoji: "🍃",
        formats: [
            { name: "100 g", price: 0 }
        ]
    }

];


/* =========================================================
   07. CONFIGURACIÓN DE FAMILIAS
========================================================= */

const teaFamilies = {

    "green-tea": {
        title: "Variedades de Té Verde",
        eyebrow: "TÉS VERDES",
        description:
            "Explora nuestra selección de tés verdes.",
        icon: "🍵",
        variants: greenTeaVariants
    },

    "matcha": {
        title: "Té Matcha y Accesorios",
        eyebrow: "TÉ MATCHA",
        description:
            "Descubre nuestros tés Matcha y accesorios.",
        icon: "🍵",
        variants: matchaProducts
    },

    "black-tea": {
        title: "Variedades de Té Negro",
        eyebrow: "TÉS NEGROS",
        description:
            "Explora nuestra selección de tés negros.",
        icon: "🫖",
        variants: blackTeaVariants
    },

    "red-tea": {
        title: "Variedades de Té Rojo",
        eyebrow: "TÉS ROJOS",
        description:
            "Explora nuestra selección de tés rojos.",
        icon: "🌿",
        variants: redTeaVariants
    },

    "rooibos": {
        title: "Variedades de Rooibos",
        eyebrow: "ROOIBOS",
        description:
            "Explora nuestra selección de Rooibos.",
        icon: "🌿",
        variants: rooibosVariants
    }

};


/* =========================================================
   08. ESTADO GLOBAL
========================================================= */

let cart = [];

let currentCategory = "todos";

let currentFamily = null;

let currentFamilySearch = "";

let toastTimer = null;


/* =========================================================
   09. ELEMENTOS DEL DOM
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

const checkoutModal =
    document.getElementById("checkoutModal");


/* =========================================================
   10. FORMATO DE MONEDA
========================================================= */

const money =
    new Intl.NumberFormat(
        "es-ES",
        {
            style: "currency",
            currency: "EUR"
        }
    );


/* =========================================================
   11. LOCAL STORAGE
========================================================= */

function saveCart() {

    localStorage.setItem(
        "alma-natural-cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   12. CARGAR CARRITO
========================================================= */

function loadCart() {

    const saved =
        localStorage.getItem(
            "alma-natural-cart"
        );

    if (!saved) {
        cart = [];
        return;
    }

    try {

        const parsed =
            JSON.parse(saved);

        cart =
            Array.isArray(parsed)
                ? parsed
                : [];

    } catch (error) {

        cart = [];

    }

}


/* =========================================================
   13. NOTIFICACIONES
========================================================= */

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   14. NOMBRE DE CATEGORÍA
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

    return (
        names[category] ||
        category
    );

}


/* =========================================================
   15. RENDER DEL CATÁLOGO
========================================================= */

function renderProducts() {

    if (!productsGrid) {
        return;
    }

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    let filtered =
        products.filter(
            product => {

                const categoryMatch =
                    currentCategory === "todos" ||
                    product.category ===
                        currentCategory;

                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(search) ||
                    product.description
                        .toLowerCase()
                        .includes(search);

                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    const sortElement =
        document.getElementById(
            "sortProducts"
        );

    const sort =
        sortElement
            ? sortElement.value
            : "default";


    if (sort === "price-low") {

        filtered.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "price-high") {

        filtered.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name,
                    "es"
                )
        );

    }


    productsGrid.innerHTML =
        "";


    if (!filtered.length) {

        emptyProducts?.classList.add(
            "show"
        );

        return;

    }


    emptyProducts?.classList.remove(
        "show"
    );


    filtered.forEach(
        product => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "product-card";


            const priceText =
                product.family

                    ? "Ver variedades"

                    : money.format(
                        product.price
                    );


            card.innerHTML = `

                <div
                    class="product-image ${
                        product.bg || ""
                    }"
                >

                    ${
                        product.family
                            ? `
                                <span
                                    class="product-badge"
                                >
                                    VARIEDADES
                                </span>
                            `
                            : ""
                    }

                    <span
                        class="product-emoji"
                    >
                        ${product.emoji}
                    </span>

                </div>


                <div
                    class="product-info"
                >

                    <span
                        class="product-category"
                    >
                        ${getCategoryName(
                            product.category
                        )}
                    </span>


                    <h3
                        class="product-name"
                    >
                        ${product.name}
                    </h3>


                    <p
                        class="product-description"
                    >
                        ${product.description}
                    </p>


                    <div
                        class="product-bottom"
                    >

                        <strong
                            class="product-price"
                        >
                            ${priceText}
                        </strong>


                        ${
                            product.family

                                ? `
                                    <button
                                        class="add-button family-open"
                                        data-family="${product.family}"
                                    >
                                        →
                                    </button>
                                `

                                : `
                                    <button
                                        class="add-button"
                                        data-add="${product.id}"
                                    >
                                        +
                                    </button>
                                `
                        }

                    </div>


                    ${
                        product.family

                            ? `
                                <div
                                    class="family-link"
                                >
                                    Ver variedades
                                </div>
                            `

                            : ""
                    }

                </div>

            `;


            productsGrid.appendChild(
                card
            );

        }
    );


    attachProductEvents();

}


/* =========================================================
   16. EVENTOS DE PRODUCTOS
========================================================= */

function attachProductEvents() {

    document
        .querySelectorAll(
            "[data-add]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        addToCart(
                            button.dataset.add
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".family-open"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        openFamily(
                            button.dataset.family
                        );

                    }
                );

            }
        );

}


/* =========================================================
   17. ABRIR FAMILIA
========================================================= */

function openFamily(family) {

    const selected =
        teaFamilies[family];

    if (!selected) {
        return;
    }


    currentFamily =
        family;

    currentFamilySearch =
        "";


    if (mainCatalog) {

        mainCatalog.style.display =
            "none";

    }


    if (greenTeaFamily) {

        greenTeaFamily.classList.add(
            "active"
        );

    }


    const icon =
        greenTeaFamily?.querySelector(
            ".family-icon"
        );

    const eyebrow =
        greenTeaFamily?.querySelector(
            ".eyebrow"
        );

    const title =
        greenTeaFamily?.querySelector(
            ".family-header h2"
        );

    const description =
        greenTeaFamily?.querySelector(
            ".family-header p"
        );


    if (icon) {
        icon.textContent =
            selected.icon;
    }


    if (eyebrow) {
        eyebrow.textContent =
            selected.eyebrow;
    }


    if (title) {
        title.textContent =
            selected.title;
    }


    if (description) {
        description.textContent =
            selected.description;
    }


    if (greenTeaSearch) {

        greenTeaSearch.value =
            "";

    }


    renderFamily();


    document
        .getElementById("productos")
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   18. CERRAR FAMILIA
========================================================= */

function closeFamily() {

    currentFamily =
        null;

    currentFamilySearch =
        "";


    greenTeaFamily?.classList.remove(
        "active"
    );


    if (mainCatalog) {

        mainCatalog.style.display =
            "block";

    }


    if (greenTeaSearch) {

        greenTeaSearch.value =
            "";

    }


    renderProducts();

}


/* =========================================================
   19. RENDER DE FAMILIA
========================================================= */

function renderFamily() {

    if (
        !currentFamily ||
        !greenTeaGrid
    ) {
        return;
    }


    const family =
        teaFamilies[
            currentFamily
        ];


    if (!family) {
        return;
    }


    const search =
        currentFamilySearch
            .toLowerCase()
            .trim();


    const filtered =
        family.variants.filter(
            item => {

                return (
                    item.name
                        .toLowerCase()
                        .includes(search) ||

                    item.description
                        .toLowerCase()
                        .includes(search)
                );

            }
        );


    greenTeaGrid.innerHTML =
        "";


    if (greenTeaCounter) {

        greenTeaCounter.textContent =
            `${filtered.length} ${
                filtered.length === 1
                    ? "producto"
                    : "productos"
            }`;

    }


    if (!filtered.length) {

        emptyGreenTea?.classList.add(
            "show"
        );

        return;

    }


    emptyGreenTea?.classList.remove(
        "show"
    );


    filtered.forEach(
        item => {

            renderFamilyCard(
                item
            );

        }
    );


    attachFamilyEvents();

}


/* =========================================================
   20. CREAR TARJETA DE FAMILIA
========================================================= */

function renderFamilyCard(item) {

    if (!greenTeaGrid) {
        return;
    }


    const card =
        document.createElement(
            "article"
        );


    card.className =
        "green-tea-card";


    const defaultFormat =
        item.formats[0];


    const hasMultipleFormats =
        item.formats.length > 1;


    const hasPrice =
        defaultFormat.price > 0;


    card.innerHTML = `

        <div
            class="green-tea-image"
        >

            <span
                class="green-tea-emoji"
            >
                ${item.emoji}
            </span>

        </div>


        <div
            class="green-tea-info"
        >

            <h3>
                ${item.name}
            </h3>


            <p>
                ${item.description}
            </p>


            <span
                class="formats-title"
            >
                ${
                    hasMultipleFormats
                        ? "Elige el formato"
                        : "Formato disponible"
                }
            </span>


            <div
                class="format-options"
            >

                ${item.formats
                    .map(
                        (format, index) => `

                            <button
                                type="button"
                                class="format-button ${
                                    index === 0
                                        ? "active"
                                        : ""
                                }"
                                data-family-item="${item.id}"
                                data-format="${index}"
                            >
                                ${format.name}
                            </button>

                        `
                    )
                    .join("")}

            </div>


            <div
                class="green-tea-bottom"
            >

                <strong
                    class="green-tea-price"
                    data-price-for="${item.id}"
                >

                    ${
                        hasPrice
                            ? money.format(
                                defaultFormat.price
                            )
                            : "Precio pendiente"
                    }

                </strong>


                <button
                    type="button"
                    class="green-tea-add"
                    data-family-add="${item.id}"
                    data-format-index="0"
                    ${
                        !hasPrice
                            ? "disabled"
                            : ""
                    }
                >

                    ${
                        hasPrice
                            ? "Añadir"
                            : "Próximamente"
                    }

                </button>

            </div>

        </div>

    `;


    greenTeaGrid.appendChild(
        card
    );

}


/* =========================================================
   21. EVENTOS DE FAMILIA
========================================================= */

function attachFamilyEvents() {

    document
        .querySelectorAll(
            ".format-button[data-family-item]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        selectFamilyFormat(
                            button
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-family-add]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        addFamilyProductToCart(
                            currentFamily,
                            button.dataset.familyAdd,
                            Number(
                                button.dataset.formatIndex
                            )
                        );

                    }
                );

            }
        );

}


/* =========================================================
   22. SELECCIONAR FORMATO
========================================================= */

function selectFamilyFormat(
    button
) {

    const itemId =
        button.dataset.familyItem;


    const formatIndex =
        Number(
            button.dataset.format
        );


    const family =
        teaFamilies[
            currentFamily
        ];


    if (!family) {
        return;
    }


    const item =
        family.variants.find(
            product =>
                product.id === itemId
        );


    if (!item) {
        return;
    }


    const format =
        item.formats[
            formatIndex
        ];


    if (!format) {
        return;
    }


    const card =
        button.closest(
            ".green-tea-card"
        );


    if (!card) {
        return;
    }


    card
        .querySelectorAll(
            ".format-button"
        )
        .forEach(
            element =>
                element.classList.remove(
                    "active"
                )
        );


    button.classList.add(
        "active"
    );


    const price =
        card.querySelector(
            `[data-price-for="${itemId}"]`
        );


    if (price) {

        price.textContent =
            format.price > 0
                ? money.format(
                    format.price
                )
                : "Precio pendiente";

    }


    const addButton =
        card.querySelector(
            "[data-family-add]"
        );


    if (!addButton) {
        return;
    }


    addButton.dataset.formatIndex =
        formatIndex;


    if (format.price > 0) {

        addButton.disabled =
            false;

        addButton.textContent =
            "Añadir";

    } else {

        addButton.disabled =
            true;

        addButton.textContent =
            "Próximamente";

    }

}


/* =========================================================
   23. AÑADIR PRODUCTO DE FAMILIA
========================================================= */

function addFamilyProductToCart(
    familyName,
    itemId,
    formatIndex
) {

    const family =
        teaFamilies[
            familyName
        ];


    if (!family) {
        return;
    }


    const item =
        family.variants.find(
            product =>
                product.id === itemId
        );


    if (!item) {
        return;
    }


    const format =
        item.formats[
            formatIndex
        ];


    if (!format) {
        return;
    }


    if (
        Number(format.price) <= 0
    ) {

        showToast(
            "El precio de este producto está pendiente."
        );

        return;
    }


    const cartId =
        `${familyName}-${item.id}-${formatIndex}`;


    const existing =
        cart.find(
            product =>
                product.cartId === cartId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            cartId:

                cartId,

            id:

                item.id,

            name:

                `${item.name} - ${format.name}`,

            price:

                Number(format.price),

            quantity:

                1,

            emoji:

                item.emoji

        });

    }


    saveCart();

    updateCart();


    showToast(
        `${item.name} (${format.name}) añadido al carrito`
    );

}


/* =========================================================
   24. COMPATIBILIDAD TÉ VERDE
========================================================= */

function renderGreenTea() {

    currentFamily =
        "green-tea";

    renderFamily();

}


function addGreenTeaToCart(
    teaId,
    formatIndex
) {

    addFamilyProductToCart(
        "green-tea",
        teaId,
        formatIndex
    );

}


/* =========================================================
   25. AÑADIR PRODUCTO NORMAL
========================================================= */

function addToCart(
    productId
) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) {
        return;
    }


    if (product.family) {

        openFamily(
            product.family
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                item.cartId ===
                product.id
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
                Number(product.price),

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
   26. ACTUALIZAR CARRITO
========================================================= */

function updateCart() {

    if (!cartItems) {
        return;
    }


    cartItems.innerHTML =
        "";


    if (!cart.length) {

        cartItems.innerHTML = `

            <div
                class="cart-empty"
            >

                <div
                    class="cart-empty-icon"
                >
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


        if (cartFooter) {

            cartFooter.style.display =
                "none";

        }

    } else {

        if (cartFooter) {

            cartFooter.style.display =
                "block";

        }


        cart.forEach(
            item => {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "cart-item";


                element.innerHTML = `

                    <div
                        class="cart-item-image"
                    >
                        ${
                            item.emoji ||
                            "🌿"
                        }
                    </div>


                    <div>

                        <h4>
                            ${item.name}
                        </h4>


                        <div
                            class="cart-item-price"
                        >
                            ${money.format(
                                item.price
                            )}
                        </div>


                        <div
                            class="quantity-controls"
                        >

                            <button
                                type="button"
                                data-minus="${item.cartId}"
                            >
                                −
                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                data-plus="${item.cartId}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="remove-item"
                        data-remove="${item.cartId}"
                    >
                        ×
                    </button>

                `;


                cartItems.appendChild(
                    element
                );

            }
        );


        attachCartEvents();

    }


    const quantity =
        cart.reduce(
            (total, item) =>
                total +
                item.quantity,
            0
        );


    const subtotal =
        cart.reduce(
            (total, item) =>
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
        subtotal +
        shipping;


    if (cartCount) {

        cartCount.textContent =
            quantity;

    }


    if (cartSubtotal) {

        cartSubtotal.textContent =
            money.format(
                subtotal
            );

    }


    if (cartShipping) {

        cartShipping.textContent =
            shipping === 0
                ? "Gratis"
                : money.format(
                    shipping
                );

    }


    if (cartTotal) {

        cartTotal.textContent =
            money.format(
                total
            );

    }


    if (shippingMessage) {

        if (
            subtotal > 0 &&
            subtotal < 35
        ) {

            shippingMessage.textContent =
                `Te faltan ${money.format(
                    35 - subtotal
                )} para conseguir envío gratis.`;

        } else if (
            subtotal >= 35
        ) {

            shippingMessage.textContent =
                "¡Has conseguido envío gratis!";

        } else {

            shippingMessage.textContent =
                "";

        }

    }

}


/* =========================================================
   27. EVENTOS DEL CARRITO
========================================================= */

function attachCartEvents() {

    document
        .querySelectorAll(
            "[data-minus]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeQuantity(
                            button.dataset.minus,
                            -1
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-plus]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeQuantity(
                            button.dataset.plus,
                            1
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-remove]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        removeFromCart(
                            button.dataset.remove
                        );

                    }
                );

            }
        );

}


/* =========================================================
   28. CAMBIAR CANTIDAD
========================================================= */

function changeQuantity(
    cartId,
    amount
) {

    const item =
        cart.find(
            product =>
                product.cartId ===
                cartId
        );


    if (!item) {
        return;
    }


    item.quantity +=
        amount;


    if (
        item.quantity <= 0
    ) {

        cart =
            cart.filter(
                product =>
                    product.cartId !==
                    cartId
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   29. ELIMINAR DEL CARRITO
========================================================= */

function removeFromCart(
    cartId
) {

    cart =
        cart.filter(
            item =>
                item.cartId !==
                cartId
        );


    saveCart();

    updateCart();

}


/* =========================================================
   30. FILTROS PRINCIPALES
========================================================= */

document
    .querySelectorAll(
        ".filter-button"
    )
    .forEach(
        button => {

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


                    closeFamily();

                    renderProducts();

                }
            );

        }
    );


/* =========================================================
   31. TARJETAS DE SUBCATEGORÍAS DE TÉ
========================================================= */

document
    .querySelectorAll(
        ".tea-category-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const family =
                        card.dataset.teaFamily;


                    if (
                        family &&
                        teaFamilies[family]
                    ) {

                        openFamily(
                            family
                        );

                    }

                }
            );

        }
    );


/* =========================================================
   32. ORDENAR PRODUCTOS
========================================================= */

const sortProducts =
    document.getElementById(
        "sortProducts"
    );


if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        () => {

            renderProducts();

        }
    );

}


/* =========================================================
   33. BUSCADOR PRINCIPAL
========================================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            renderProducts();

        }
    );

}


/* =========================================================
   34. BUSCADOR DE FAMILIAS
========================================================= */

if (greenTeaSearch) {

    greenTeaSearch.addEventListener(
        "input",
        event => {

            currentFamilySearch =
                event.target.value;

            renderFamily();

        }
    );

}


/* =========================================================
   35. CATEGORÍAS PRINCIPALES
========================================================= */

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".tea-category-card"
                        )
                    ) {
                        return;
                    }


                    const category =
                        card.dataset.category;


                    if (!category) {
                        return;
                    }


                    currentCategory =
                        category;


                    document
                        .querySelectorAll(
                            ".filter-button"
                        )
                        .forEach(
                            button => {

                                button.classList.toggle(
                                    "active",
                                    button.dataset.filter ===
                                    category
                                );

                            }
                        );


                    closeFamily();


                    document
                        .getElementById(
                            "productos"
                        )
                        ?.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                }
            );

        }
    );


/* =========================================================
   36. BOTÓN VOLVER
========================================================= */

const backToCatalog =
    document.getElementById(
        "backToCatalog"
    );


if (backToCatalog) {

    backToCatalog.addEventListener(
        "click",
        () => {

            closeFamily();

        }
    );

}


/* =========================================================
   37. ABRIR CARRITO
========================================================= */

const cartButton =
    document.getElementById(
        "cartButton"
    );


if (cartButton) {

    cartButton.addEventListener(
        "click",
        () => {

            cartOverlay?.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   38. CERRAR CARRITO
========================================================= */

const closeCart =
    document.getElementById(
        "closeCart"
    );


if (closeCart) {

    closeCart.addEventListener(
        "click",
        () => {

            cartOverlay?.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   39. CLIC FUERA DEL CARRITO
========================================================= */

if (cartOverlay) {

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

}


/* =========================================================
   40. PANEL DE BÚSQUEDA
========================================================= */

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchPanel =
    document.getElementById(
        "searchPanel"
    );


if (
    searchButton &&
    searchPanel
) {

    searchButton.addEventListener(
        "click",
        () => {

            searchPanel.classList.toggle(
                "active"
            );


            if (
                searchPanel.classList.contains(
                    "active"
                )
            ) {

                searchInput?.focus();

            }

        }
    );

}


/* =========================================================
   41. CHECKOUT
========================================================= */

const checkoutButton =
    document.getElementById(
        "checkoutButton"
    );


const closeCheckout =
    document.getElementById(
        "closeCheckout"
    );


const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Tu carrito está vacío."
                );

                return;

            }


            checkoutModal?.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   42. CERRAR CHECKOUT
========================================================= */

if (closeCheckout) {

    closeCheckout.addEventListener(
        "click",
        () => {

            checkoutModal?.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   43. FORMULARIO CHECKOUT
========================================================= */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const orderNumber =
                Math.floor(
                    100000 +
                    Math.random() *
                    900000
                );


            checkoutModal?.classList.remove(
                "active"
            );


            cart = [];


            saveCart();

            updateCart();


            cartOverlay?.classList.remove(
                "active"
            );


            checkoutForm.reset();


            showToast(
                `Pedido #${orderNumber} realizado correctamente.`
            );

        }
    );

}


/* =========================================================
   44. NEWSLETTER
========================================================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            newsletterForm.reset();


            showToast(
                "¡Gracias por suscribirte!"
            );

        }
    );

}


/* =========================================================
   45. TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        cartOverlay?.classList.remove(
            "active"
        );


        checkoutModal?.classList.remove(
            "active"
        );


        searchPanel?.classList.remove(
            "active"
        );


        if (
            currentFamily
        ) {

            closeFamily();

        }

    }
);


/* =========================================================
   46. FUNCIONES AUXILIARES
========================================================= */

function getFamilyProducts(
    family
) {

    if (
        !teaFamilies[family]
    ) {
        return [];
    }


    return teaFamilies[
        family
    ].variants;

}


/* =========================================================
   47. BUSCAR PRODUCTO DE FAMILIA
========================================================= */

function findFamilyProduct(
    family,
    productId
) {

    const products =
        getFamilyProducts(
            family
        );


    return products.find(
        product =>
            product.id ===
            productId
    );

}


/* =========================================================
   48. OBTENER PRECIO
========================================================= */

function getFamilyPrice(
    family,
    productId,
    formatIndex = 0
) {

    const product =
        findFamilyProduct(
            family,
            productId
        );


    if (!product) {
        return 0;
    }


    const format =
        product.formats[
            formatIndex
        ];


    return format
        ? Number(format.price)
        : 0;

}


/* =========================================================
   49. COMPROBAR FAMILIA
========================================================= */

function familyExists(
    family
) {

    return Boolean(
        teaFamilies[family]
    );

}


/* =========================================================
   50. OBTENER FAMILIA ACTUAL
========================================================= */

function getCurrentFamily() {

    return currentFamily;

}


/* =========================================================
   51. CONTAR PRODUCTOS
========================================================= */

function countFamilyProducts(
    family
) {

    return getFamilyProducts(
        family
    ).length;

}


/* =========================================================
   52. OBTENER FAMILIAS
========================================================= */

function getAvailableFamilies() {

    return Object.keys(
        teaFamilies
    );

}


/* =========================================================
   53. VALIDAR PRECIO
========================================================= */

function hasValidPrice(
    price
) {

    return (
        Number(price) > 0
    );

}


/* =========================================================
   54. TEXTO DEL PRECIO
========================================================= */

function getPriceText(
    price
) {

    return hasValidPrice(price)
        ? money.format(
            Number(price)
        )
        : "Precio pendiente";

}


/* =========================================================
   55. NORMALIZAR TEXTO
========================================================= */

function normalizeText(
    value
) {

    return String(
        value || ""
    )
        .toLowerCase()
        .normalize(
            "NFD"
        )
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .trim();

}


/* =========================================================
   56. BUSCAR DENTRO DE FAMILIA
========================================================= */

function searchFamily(
    family,
    query
) {

    const products =
        getFamilyProducts(
            family
        );


    const normalized =
        normalizeText(
            query
        );


    return products.filter(
        product => {

            return (

                normalizeText(
                    product.name
                ).includes(
                    normalized
                )

                ||

                normalizeText(
                    product.description
                ).includes(
                    normalized
                )

            );

        }
    );

}


/* =========================================================
   57. OBTENER FORMATO
========================================================= */

function getFamilyFormat(
    family,
    productId,
    formatIndex
) {

    const product =
        findFamilyProduct(
            family,
            productId
        );


    if (!product) {
        return null;
    }


    return (
        product.formats[
            formatIndex
        ] || null
    );

}


/* =========================================================
   58. OBTENER CANTIDAD DEL CARRITO
========================================================= */

function getCartQuantity() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            Number(
                item.quantity
            ),
        0
    );

}


/* =========================================================
   59. OBTENER SUBTOTAL
========================================================= */

function getCartSubtotal() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            (
                Number(
                    item.price
                ) *
                Number(
                    item.quantity
                )
            ),
        0
    );

}


/* =========================================================
   60. OBTENER ENVÍO
========================================================= */

function getShippingCost() {

    const subtotal =
        getCartSubtotal();


    if (
        subtotal <= 0
    ) {
        return 0;
    }


    if (
        subtotal >= 35
    ) {
        return 0;
    }


    return 4.90;

}


/* =========================================================
   61. OBTENER TOTAL
========================================================= */

function getCartTotal() {

    return (
        getCartSubtotal() +
        getShippingCost()
    );

}


/* =========================================================
   62. FAMILIA DISPONIBLE
========================================================= */

function openTeaFamily(
    family
) {

    if (
        !familyExists(
            family
        )
    ) {

        showToast(
            "Familia no disponible."
        );

        return;

    }


    openFamily(
        family
    );

}


/* =========================================================
   63. ACCESO DIRECTO ROOIBOS
========================================================= */

function openRooibos() {

    openFamily(
        "rooibos"
    );

}


/* =========================================================
   64. ACCESO DIRECTO TÉ ROJO
========================================================= */

function openRedTea() {

    openFamily(
        "red-tea"
    );

}


/* =========================================================
   65. ACCESO DIRECTO TÉ NEGRO
========================================================= */

function openBlackTea() {

    openFamily(
        "black-tea"
    );

}


/* =========================================================
   66. ACCESO DIRECTO MATCHA
========================================================= */

function openMatcha() {

    openFamily(
        "matcha"
    );

}


/* =========================================================
   67. ACCESO DIRECTO TÉ VERDE
========================================================= */

function openGreenTea() {

    openFamily(
        "green-tea"
    );

}


/* =========================================================
   68. INICIALIZACIÓN
========================================================= */

function initStore() {

    loadCart();

    renderProducts();

    updateCart();

}


/* =========================================================
   69. INICIAR TIENDA
========================================================= */

initStore();


/* =========================================================
   FIN DEL SCRIPT
========================================================= */