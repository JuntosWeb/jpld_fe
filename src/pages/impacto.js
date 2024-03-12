import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import nuestro_impacto from '../assets/images/impacto/nuestro_camino.jpg';
// Importar imágenes de los testimonios
import Evelyn from '../assets/images/impacto/20.png';
import Andres from '../assets/images/impacto/30.png';
import Miranda from '../assets/images/impacto/40.png';
import Juan from '../assets/images/impacto/50.png';
import Cambio from '../assets/images/impacto/TeoriadeCambio.png';
// Importar imágenes de niños
import foto1 from '../assets/images/impacto/1.png';
import foto10 from '../assets/images/impacto/10.png';
import foto2 from '../assets/images/impacto/2.png';
import foto3 from '../assets/images/impacto/3.png';
import foto4 from '../assets/images/impacto/4.png';
import foto5 from '../assets/images/impacto/5.png';
import foto6 from '../assets/images/impacto/6.png';
import foto7 from '../assets/images/impacto/7.png';
import foto8 from '../assets/images/impacto/8.png';
import foto9 from '../assets/images/impacto/9.png';

function Impacto() {
  return (
    <div>
        <div className='container-fluid bg-secondary-subtle'>
            <div className="container p-3 p-md-5 text-start">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <h1>Nuestro impacto </h1>
                        <p>Desde junio de 2006, nuestra dedicación incansable ha estado centrada en cada paciente que llega la Fundación. Cada esfuerzo, logro y sonrisa nos impulsa, pero sobre todo, celebramos cada paso que lleva a la autonomía. La fundación Juntos por los Demás se enfoca en respaldar a niños y jóvenes con discapacidad de escasos recursos económicos, asegurándose de que tengan acceso a las terapias necesarias. Nos enorgullece presentar la gráfica que refleja el impacto positivo en sus vidas, evidenciando la transformación y el progreso que hemos facilitado a lo largo de los años.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={nuestro_impacto} className="card-img" alt="gráfica de impacto" />
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid rgb-color-border'>
            <div className="container pt-4 pb-4 p-md-5 text-start">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={Cambio} className="card-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-secondary-subtle">
                <div className="container pt-4 pb-4 p-md-5 text-center">
                <h1>Conoce nuestras histórias de éxito</h1>
                <br/><br/>
                    <div className="row">
                    <div className="col-12 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Juan} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Juan Pablo</h5>
                            <p className="card-text">A pesar de su displasia frontonasal y genopatía dismórfica, Juan Pablo demuestra que con deseo y pasión, todo es posible. Su perseverancia y alegría son inspiradoras.</p>
                            <a href="https://www.youtube.com/watch?v=7BiJLUpZhYM" className="btn btn-primary">Conoce su historia</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Miranda} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Miranda</h5>
                            <p className="card-text">Ella, que perdió la movilidad de repente, ahora camina, salta y corre. A pesar de bajas expectativas, el programa terapéutico hizo posible su recuperación en un año.</p>
                            <a href="https://www.youtube.com/watch?v=SB4SJs8rQqY" className="btn btn-primary">Conoce su historia</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Andres} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Andrés</h5>
                            <p className="card-text">Al cumplir los 2 años Andrés fue diagnosticado con autismo y aunque aún tiene mucho camino por delante, gracias a la Fundación Juntos, ha tenido un gran avance</p>
                            <a href="https://www.youtube.com/watch?v=82rm0PPrWmU" className="btn btn-primary">Conoce su historia</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Evelyn} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Evelyn</h5>
                            <p className="card-text">Ella nació prematura y vine a juntos buscando apoyo por su retraso psicomotriz, y aquí le damos terapia física para que pueda gatear y así después caminar.</p>
                            <a href="https://www.youtube.com/watch?v=zK78mASbxfY" className="btn btn-primary">Conoce su historia</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <br/><br/>
                    <h5>Así como ellas y ellos, hay muchos más que necesitan tu ayuda...</h5>
                    <br/>
                    <Button variant="warning" href='/campanias'>Realiza un donativo</Button>
                </div>
                </div>

                <div className="container-fluid p-md-5 text-center">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto1} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto2} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto3} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto4} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto5} className="card-img" alt="..." />
                    </div>
                {/* </div>
                </div>

                <div className="container-fluid p-md-5 text-center">
                <div className="row d-flex justify-content-center align-items-center"> */}
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto6} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto7} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto8} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto9} className="card-img" alt="..." />
                    </div>
                    <div className="col-4 col-md-3 mt-3 mb-3 mt-md-2 mb-md-2">
                    <img src={foto10} className="card-img" alt="..." />
                    </div>
                </div>
                </div>
    </div>
    
  );
}

export default Impacto;