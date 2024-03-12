import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import LogoFull from '../assets/icons/Logo_full.png';
// Imagágenes de secciones
import Mision from '../assets/images/homepage/Mision.jpg';
import Submain from '../assets/images/homepage/Submain.JPG';
import Vision from '../assets/images/homepage/Vision.jpeg';
// Importando imagenes de terapias
import Comunicacion from "../assets/images/homepage/Terapias/comunicacion.png";
import Equinoterapia from "../assets/images/homepage/Terapias/equinoterapia.webp";
import Estimulacion from "../assets/images/homepage/Terapias/Estimulacion Sensorial.png";
import Hidroterapia from "../assets/images/homepage/Terapias/Hidroterapia.png";
import Logofoniatria from "../assets/images/homepage/Terapias/logofoniatria.webp";
import Magnetica from "../assets/images/homepage/Terapias/MagneticaTemp.jpg";
import Neurodesarrollo from "../assets/images/homepage/Terapias/Neurodesarrollo.png";
import Psicologia from "../assets/images/homepage/Terapias/psicologia.webp";
import TerapiaFisica from "../assets/images/homepage/Terapias/terapiafisica.png";
// Importando logos de universidades
import Tec from '../assets/images/homepage/Escuelas/tecnologico-de-monterrey-blue.png';
import U_Cuauhtemoc from '../assets/images/homepage/Escuelas/U_CUAUHTEMOC.png';
import UAG from '../assets/images/homepage/Escuelas/uag.jpg';
import UDG from '../assets/images/homepage/Escuelas/udg.png';
import UNIVA from '../assets/images/homepage/Escuelas/univa.png';
import UP from '../assets/images/homepage/Escuelas/up.jpg';
import UVM from '../assets/images/homepage/Escuelas/UVM.png';
// Importando logos de apoyos
import cemefi from '../assets/images/homepage/Apoyos/cemefi.png';
import CIDES from '../assets/images/homepage/Apoyos/CIDES.webp';
import IDEFT from '../assets/images/homepage/Apoyos/IDEFT.png';
import logo_RIO_2021 from '../assets/images/homepage/Apoyos/logo_RIO_2021_color.png';
import logotipo_CEDHJ from '../assets/images/homepage/Apoyos/logotipo_CEDHJ.png';
import REDECIM from '../assets/images/homepage/Apoyos/REDECIM.png';
import SALUD_DIGNA from '../assets/images/homepage/Apoyos/SALUDDIGNA.png';
// Immportando logos de empresas
import ambar_cargo from '../assets/images/homepage/Empresas/ambar cargo 2.png';
import aplamax from '../assets/images/homepage/Empresas/aplamax.png';
import apymsa from '../assets/images/homepage/Empresas/APYMSA-2020.png';
import bell_flavors from '../assets/images/homepage/Empresas/bell flavors.jpg';
import bexalta from '../assets/images/homepage/Empresas/Bexalta_Logo.jpg';
import cleaning_brands from '../assets/images/homepage/Empresas/cleaning brands.png';
import compu_soluciones from '../assets/images/homepage/Empresas/COMPUSOLUCIONES.png';
import cuesta_campos from '../assets/images/homepage/Empresas/CUESTA CAMPOS.jpg';
import dulces_de_la_rosa from '../assets/images/homepage/Empresas/dulces-de-la-rosa_marca.png';
import grupo_tenerife from '../assets/images/homepage/Empresas/grupoTenerife.png';
import interlub from '../assets/images/homepage/Empresas/interlub.png';
import tecnomex from '../assets/images/homepage/Empresas/Logocolor-TECNOMEX-alta solid-01 (002).png';
import punto_forza_mobile from '../assets/images/homepage/Empresas/logoPuntoForzaMobile.jpg';
import rigolo from '../assets/images/homepage/Empresas/logoRigolo.png';
import medicinas_del_rosario from '../assets/images/homepage/Empresas/medicinas del rosario.png';
import pijalsa from '../assets/images/homepage/Empresas/pijalsa logo.png';
import policrane from '../assets/images/homepage/Empresas/policrane.png';
import pratsa from '../assets/images/homepage/Empresas/pratsa logo.png';
import sello_rojo from '../assets/images/homepage/Empresas/SELLO ROJO.png';
import versa_muebles from '../assets/images/homepage/Empresas/versa muebles.png';

function Hompage() {
    return (
        <div className="Home">
            <header className="App-header" >
                {/* <img src={LogoFull} className="" alt="logo" height='290px' /> */}
                <img src={LogoFull} className="" alt="logo" />
                <Button variant="warning" href='/campanias'>¡Apadrina Hoy!</Button>
            </header>

            <body>
                <div className="container p-3 p-md-5 text-start">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1>¿Quienes somos?</h1>
                            <p>Fundación Juntos por los Demás A.C.® somos un Centro de Rehabilitación Integral que atiende a niñas, niños y jóvenes con discapacidad de escasos recursos económicos. Utilizamos recursos de alto nivel, tanto humanos como tecnológicos al servicio de nuestros pacientes, todo bajo la coordinación de un médico especialista y terapeutas certificados. Fijamos objetivos terapéuticos individualizados a cada paciente, combinamos avanzada tecnología con técnicas convencionales en instalaciones amplias y accesibles.<p> La discapacidad existe, la esperanza tú la creas.</p></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={Submain} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-secondary-subtle">
                    <div className="container pt-3 pt-md-5 pb-5 pb-md-5 text-center break-line">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Comunicacion} className="card-img-top" alt="..." />
                                    <div className="card-body" >
                                        <h5 className="card-title">Cognición y comunicación</h5>
                                        <p className="card-text">Potenciamos el crecimiento cerebral, impulsando la maduración y plasticidad para optimizar el desarrollo de quienes reciben nuestras terapias.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Equinoterapia} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Equinoterapia</h5>
                                        <p className="card-text">Aplicamos la equinoterapia para favorecer aspectos cognitivos, motores y lingüísticos, aprovechando los movimientos del caballo como herramienta terapéutica.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Estimulacion} className="card-img-top" alt="..." />
                                    <div className="card-body" width='10'>
                                        <h5 className="card-title">Estimulacion Sensorial</h5>
                                        <p className="card-text">Usamos dispositivos coordinados para estimular diversas áreas cerebrales, generando patrones neuronales estables que mejoran el desarrollo cognitivo, el lenguaje y la coordinación motora.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Hidroterapia} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Hidroterapia</h5>
                                        <p className="card-text">Optimizamos las propiedades terapéuticas del agua con ejercicios que promueven la claridad mental, aprovechando un ambiente acuático para potenciar los beneficios físicos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Logofoniatria} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Logofoniatria</h5>
                                        <p className="card-text">Nos especializamos en trastornos de lenguaje, voz y habla, abordando situaciones con o sin afectación neurológica de manera específica y efectiva.</p>
                                    </div>
                                </div>
                            </div>
                        {/* </div>
                    </div>
                </div>

                <div className="container-fluid bg-secondary-subtle">
                    <div className="container pb-5 pb-md-5 text-center break-line">
                        <div className="row d-flex justify-content-center"> */}
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Neurodesarrollo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Neurodesarrollo</h5>
                                        <p className="card-text">Potenciamos activamente la maduración, desarrollo y plasticidad cerebral en nuestros pacientes mediante estimulación intensiva.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Psicologia} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Psicologia</h5>
                                        <p className="card-text">Brindamos terapia de apoyo orientada a padres y pacientes, ofreciendo respaldo integral para el bienestar familiar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={TerapiaFisica} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Terapia Fisica</h5>
                                        <p className="card-text">Mejoramos la movilidad de los pacientes mediante la aplicación de agentes físicos como calor, frío, electricidad, luz y agua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-sm-4 mt-md-0 mt-lg-5">
                                <div className="card">
                                    <img src={Magnetica} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Estimulación Magnetica transcraneal</h5>
                                        <p className="card-text">Procedimiento ambulatorio no invasivo y sin dolor, con tecnología avanzada de modulación neuronal mediante pulsos magnéticos para estimular áreas cerebrales afectadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-5 text-center">
                    <h4>Universidades aliadas</h4>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-3 col-md-1">
                            <img src={UNIVA} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={UVM} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={UAG} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={Tec} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={UP} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={U_Cuauhtemoc} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={UDG} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="container p-5 text-center">
                    <h4>Apoyos</h4>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-3 col-md-1">
                            <img src={cemefi} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={SALUD_DIGNA} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={IDEFT} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={REDECIM} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={logo_RIO_2021} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={logotipo_CEDHJ} className="card-img" alt="..." />
                        </div>
                        <div className="col-3 col-md-1">
                            <img src={CIDES} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="container-fluid border-top">
                    <div className="container p-2 p-md-5 text-end">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 text-center">
                                <iframe
                                    title="YouTube Video"
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/zZCUawCRbZQ"
                                    allowFullScreen
                                    /* width="532" height="300" */
                                    width="100%" height="300"
                                ></iframe>
                            </div>
                            <div className="col-12 col-md-6">
                                <h1>¡Súmate!</h1>
                                <p>Tu contribución puede marcar la diferencia en la vida de niñas, niños y jóvenes que luchan contra las adversidades de la discapacidad. Cada donación, grande o pequeña, respalda la misión de nuestra fundación para proporcionar terapias vitales a aquellos con recursos limitados. Juntos, podemos allanar el camino hacia un futuro más brillante para estos valientes individuos. Invitamos a todos a unirse a nosotros en este viaje de impacto positivo. Tu generosidad es la chispa que enciende esperanzas y transforma vidas. ¡Dona hoy y sé parte de la fuerza que impulsa el cambio!</p>
                                <Button variant="warning" href='/campanias'>Realiza un donativo</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-secondary-subtle">
                    <div className="container p-2 p-md-5 text-center">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="card text-center mb-3">
                                    <img src={Vision} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Misión</h5>
                                        <p className="card-text">Contribuir al desarrollo de la independencia psicomotora y social de las niñas, niños y jóvenes con discapacidad provenientes de familias de escasos recursos económicos, brindándoles actividades terapéuticas en instalaciones de vanguardia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card text-center mb-3">
                                    <img src={Mision} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Visión</h5>
                                        <p className="card-text">En Juntos por los Demás tenemos la visión de que cada niña, niño y joven con discapacidad desarrolle al máximo sus aptitudes, logrando su mayor autonomía, mejorando así su calidad de vida y la de su familia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-5 text-center">
                    <h4>Empresas aliadas</h4>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-4 col-md-2 p-2">
                            <img src={ambar_cargo} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={aplamax} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={apymsa} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={bell_flavors} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={bexalta} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={compu_soluciones} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={cleaning_brands} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={cuesta_campos} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={dulces_de_la_rosa} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={grupo_tenerife} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={interlub} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={tecnomex} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={punto_forza_mobile} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={rigolo} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={medicinas_del_rosario} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={pijalsa} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={policrane} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={pratsa} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={sello_rojo} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                        <div className="col-4 col-md-2 p-2">
                            <img src={versa_muebles} className="d-inline-block align-top img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
export default Hompage;