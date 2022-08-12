let darkBody = document.querySelector(".dark");
let darkTitle = document.querySelector("h1");
let parentContainer = document.getElementById("parent-Container");
let darkModeBttn = document.querySelector("button");

const animal = [{
    title: "O Tigre",
    description: `O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera.
    É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.`,
    image: `./imagens/tiger.jpg`,
},
{
    title: `O Leão`,
    description: `O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.`,
    image: `./imagens/leon.jpg`,
},
{
    title:`O leopardo`,
    description: `O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).`,
    image:`./imagens/leopardo.jpg`,
},
{
    title:`A pantera negra`,
    description: `A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.`,
    image:`./imagens/pantera-negra.jpg`,
},
{
    title:`O jaguar`,
    description: `O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).`,
    image:`./imagens/jaguar.jpg`,
},
{
    title:`O guepardo`,
    description: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
    image:`./imagens/chita.jpg`,
}];
function start() {
    createAnimalCards();
    darkModeBttn.addEventListener("click", changeMode)
}

function createAnimalCards(){
    animal.forEach(element => {
        createPost(element.image, element.title, element.description)
    });
}

function changeMode() {
    let darkItem = document.querySelectorAll(".item");
    darkBody.classList.toggle("dark-body")
    darkTitle.classList.toggle("dark-title")
    darkModeBttn.classList.toggle("dark-button")
    darkModeBttn.classList.contains("dark-button")? darkModeBttn.innerText = "Light mode" : darkModeBttn.innerText = "Dark mode" 
    darkItem.forEach(element => {
        element.classList.toggle("dark-item");
    });
}
function createPost(src, h2, p) {
    
    newDiv = document.createElement("div");
    newTitle = document.createElement("h2");
    newDescription = document.createElement("p");
    newImage = document.createElement("img");

    newDiv.classList.add("item");
    newImage.setAttribute("src", `${src}`);
    newTitle.innerText = `${h2}`;
    newDescription.innerText= `${p}`;

    newDiv.appendChild(newImage);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newDescription);
    parentContainer.appendChild(newDiv);
}

start()