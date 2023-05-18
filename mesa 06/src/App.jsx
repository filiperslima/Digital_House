import './App.css' //CSS público para toda a aplicação👍
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarouselCidades} from './components/CarouselCidades';





/* Array de cidades que deve ser utilizado na atividade */
const cities = [
  {
    id: 1,
    country: "BRA",
    city: "São Paulo",
    population: "12.396.372",
    color: "#A440E2",
    img: "https://direcional.com.br/wp-content/uploads/2020/08/sao-paulo-cidade.jpg"
  },
  {
    id: 2,
    country: "AR",
    city: "Buenos Aires",
    population: "2.890.151",
    color: "#D7B81D",
    img: "https://neve-api.neve.com.br/wp-content/uploads/2018/09/Buenos-Aires-informa%C3%A7%C3%B5es-gerais-3.jpg"
  },
  {
    id: 3,
    country: "BRA",
    city: "Rio de Janeiro",
    population: "6.775.561",
    color: "#470F69",
    img: "https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73"
  },
  {
    id: 4,
    country: "AR",
    city: "La Plata",
    population: "643.133",
    color: "#C37F19",
    img: "https://images.adsttc.com/media/images/5f77/388b/63c0/17ae/2200/0958/large_jpg/La_Plata.jpg?1601648761"
  },
  {
    id: 5,
    country: "BRA",
    city: "Brasília",
    population: "3.094.325",
    color: "#97198B",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg"
  },
  {
    id: 6,
    country: "BRA",
    city: "Salvador",
    population: "2.900.319",
    color: "#6550ED",
    img: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/01/Encante-se-com-alguns-dos-lugares-mais-bonitos-em-Salvador.png"
  },

  {
    id: 7,
    country: "BRA",
    city: "Fortaleza",
    population: "2.703.391",
    color: "#2E15D0",
    img: "https://www.fortaleza.ce.gov.br/images/images2/TURISMO/Beira-Mar%20Fco%20Fontenele.jpeg"
  },
  {
    id: 8,
    country: "AR",
    city: "Córdoba",
    population: "1.317.298",
    color: "#ED3D48",
    img: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt9c8b0c70a4e2f5e4/6035d84bef12eb44c84c1f58/ES_Co_rdoba_ES_Header.jpg"
  },
  {
    id: 9,
    country: "AR",
    city: "Rosário",
    population: "1.193.605",
    color: "#DA0C19",
    img: "https://cdn.britannica.com/00/161000-050-6BE21903/Rosario-bank-Argentina-Parana-River.jpg"
  },
  {
    id: 10,
    country: "AR",
    city: "Mendoza",
    population: "1.200.000",
    color: "#B94310",
    img: "https://revista.sociedadedamesa.com.br/wp-content/uploads/2020/08/sociedade_da_mesa_vinhos_clube_de_vinhos_revista_digital_as_varias_faces_de_mendoza.jpg"
  }
];

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <CarouselCidades
          cities={cities.filter( item => item.country == "BRA")} //Apenas países do brasil👍
        />
      </React.Fragment>
    </div>
  )
}

export default App