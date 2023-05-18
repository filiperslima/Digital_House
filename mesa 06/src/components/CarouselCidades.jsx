import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagem from "../assets/react.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/CarouselCidades.module.css'




export function CarouselCidades({ cities }) {

    return (
        <Carousel >
            {
                cities.map((cidade) => {
                    return (
                        <Carousel.Item key={cidade.id} style={{ border:  "#FFFF90 5px solid" }} > {/** optei por deixar o id de fora.   */}
                            <img src={cidade.img} className='d-block w-100 ' style={{ height: "33rem" }} />
                            <Carousel.Caption className={styles.glass} style={{ background: cidade.color + "70" }}> {/**Cor exposta e CSS inline e module👍... o "70" foi pra dar transparência.  */}
                                <h3>{cidade.city} - {cidade.country}</h3> {/**Informações expostas👍 */}
                                <p>Com população de {cidade.population} habitantes a cidade de {cidade.city} oferece uma rica mistura de história,
                                    cultura e modernidade que atrai pessoas de todas as idades e origens. Um local vibrante e emocionante de se visitar.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    )
                })
            }
        </Carousel>


    )


}
