import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//importar informes
import Inf_2020 from '../assets/images/transparencia/2020.png';
import Inf_2021 from '../assets/images/transparencia/2021.png';
import Inf_2022 from '../assets/images/transparencia/2022.png';
import Foto from '../assets/images/transparencia/Fotoo.png';

function Transpafrencia() {
    return (
        <div>
            <div className='container-fluid rgb-color-border'>
                <div className="container p-3 p-md-5 text-start">
                    <div className="row align-items-center">
                        <div className="col">
                            <img src={Foto} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid rgb-color-border'>
                <div className="container p-5 text-start">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1>¿Cómo lo logramos?</h1>
                            <p>Nuestra misión sería solo un sueño sin tu generoso donativo. Asimismo, nos es posible ayudar a más niñas, niños y jóvenes gracias a nuestro programa de padrinos; quienes eligen dar un donativo mensual para mejorar la calidad de vida de nuestros pacientes. También las empresas y escuelas con las que nos hemos aliado nos ayudan a cumplir nuestra misión día con día.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-secondary-subtle">
                <div className="container p-3 p-md-5 text-center">
                <h1>Conoce nuestros informes anuales</h1>
                <br/><br/>
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-6 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Inf_2020} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="https://drive.google.com/file/d/1NxtXsrZYhFBFxAwexFGW83rKPvZ7yocE/view?usp=drive_link" className="btn btn-primary">Leer informe</a>
                        </div>
                        </div>
                    </div>
                    <div className="col col-6 col-md-6 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Inf_2021} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="https://drive.google.com/file/d/14mwO6Ezf2QjEuj_w20o9k_NDdZ-AC04p/view?usp=drive_link" className="btn btn-primary">Leer informe</a>
                        </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-12 mt-3 mb-3 mt-md-2 mb-md-2">
                        <div className="card">
                        <img src={Inf_2022} className="card-img-top" alt="..." />
                        <div className="card-body">
                             <a href="https://drive.google.com/file/d/1YRDeC6YPPhiI415XUK6zywf1UoNsgpu2/view?usp=drive_link" className="btn btn-primary">Leer informe</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transpafrencia;