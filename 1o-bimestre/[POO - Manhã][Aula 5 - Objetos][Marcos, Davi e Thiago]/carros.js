let carro1 = {
    modelo: "Ka",
    marca: "Ford",
    anoDeFabricacao: 2018,
    preco: 40000,
    foto: 'ka-2018.jpg'
};

let carro2 = {
    modelo: "Civic",
    marca: "Honda",
    anoDeFabricacao: 2022,
    preco: 67000,
    foto: 'civic-2022.jpg'
};

let carro3 = {
    modelo: "Gol",
    marca: "VW",
    anoDeFabricacao: 2020,
    preco: 55000,
    foto: 'gol-2020.png'
};

let carro4 = {
    modelo: "Corolla",
    marca: "Toyota",
    anoDeFabricacao: 2019,
    preco: 65000,
    foto: 'corolla-2019.jpg'
};

let carro5 = {
    modelo: "HB20",
    marca: "Hyundai",
    anoDeFabricacao: 2015,
    preco: 30000,
    foto: 'hb20-2015.jpg'
};

let carro6 = {
    modelo: "ITZ",
    marca: "Cobalt",
    anoDeFabricacao: 2018,
    preco: 70000,
    foto: 'cobalt-2018.jpg'
}

let carro7 = {
    modelo: "Tracker",
    marca: "Chevrolet",
    anoDeFabricacao: 2023,
    preco: 80000,
    foto: 'tracker-2023.jpg'
};

let carro8 = {
    modelo: "Evoque",
    marca: "Land Rover",
    anoDeFabricacao: 2021,
    preco: 500000,
    foto: 'evoque-2021.jpg'
};

let carro9 = {
    modelo: "Fox",
    marca: "VW",
    anoDeFabricacao: 2020,
    preco: 50000,
    foto: 'fox-2020.jpg'
};

let listaDeCarros = [];
listaDeCarros.push(carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8, carro9);

for (let i = 0; i < listaDeCarros.length; i++) {
    document.write(
        `<div class = 'card'>
            <img src='img/${listaDeCarros[i].foto}' />
            <h2 class="modelo">Modelo: ${listaDeCarros[i].modelo} </h2>
            <p class="marca">Marca: ${listaDeCarros[i].marca} </p>
            <p class="ano">Ano de Fabricação: ${listaDeCarros[i].anoDeFabricacao} </p>
            <p class="preco">Preço: R$${listaDeCarros[i].preco.toFixed(2)} </p>
        </div>
    `);
}