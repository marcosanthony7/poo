let cel1 = new Celular("Apple", "iPhone 8 Plus", "3GB", "64GB", "A11 Bionic", "3 câmeras", "iphone8plus.jpg");
let cel2 = new Celular("Apple", "iPhone Pro Max", "3GB", "64GB", "A12 Bionic", "3 câmeras", "iphonepromax.jpg");
let cel3 = new Celular("Apple", "iPhone 11", "4GB", "128GB", "A13 Bionic hexa-core", "3 câmeras", "iphone11.jpg");
let cel4 = new Celular("Apple", "iPhone 13", "4GB", "256GB", "A15 Bionic", "3 câmeras", "iphone13.jpg");
let cel5 = new Celular("Apple", "iPhone 14", "6GB", "256GB", "A16 Bionic", "4 câmeras", "iphone14.jpg");

let listaDeCelulares = [cel1, cel2, cel3, cel4, cel5];

for (let i = 0; i < listaDeCelulares.length; i++) {
    document.write(`
        <div class='card'>
            <img class='foto' src='img/celulares/${listaDeCelulares[i].foto}' />
            <div class='info'>
                <h3 class='modelo'>${listaDeCelulares[i].modelo}</h3>
                <p class='marca'>${listaDeCelulares[i].marca}</p>

                <span class='outros'>${listaDeCelulares[i].ram}</span>
                <span class='separator'>|</span>
                <span class='outros'>${listaDeCelulares[i].armazenamento}</span>
                <span class='separator'>|</span>
                <span class='outros'>${listaDeCelulares[i].processador}</span>
                <span class='separator'>|</span>
                <span class='outros'>${listaDeCelulares[i].qtdDeCameras}</span>
            </div>
        </div>
    `);
}

let tv1 = new TV("Samsung", "Crystal 4K 43AU7700", "43 polegadas", "samsung43.jpg");
let tv2 = new TV("Samsung", "Crystal 4K 50AU7700", "50 polegadas", "samsung50.jpg");
let tv3 = new TV("Samsung", "Crystal 4K 55AU7700", "55 polegadas", "samsung55.jpg");
let tv4 = new TV("Samsung", "4K Crystal UHD UN60BU8000", "60 polegadas", "samsung60.jpg");
let tv5 = new TV("Samsung", "4K Crystal UHD UN65BU8000", "65 polegadas", "samsung65.jpg");

let listaDeTelevisoes = [tv1, tv2, tv3, tv4, tv5];

for (let i = 0; i < listaDeTelevisoes.length; i++) {
    document.write(`
        <div class='card'>
            <img class='foto' src='img/televisoes/${listaDeTelevisoes[i].foto}' />
            <div class='info'>
                <h3 class='modelo'>${listaDeTelevisoes[i].modelo}</h3>
                <p class='marca'>${listaDeTelevisoes[i].marca}</p>

                <span class='outros'>${listaDeTelevisoes[i].tamanho}</span>
            </div>
        </div>
    `);
}