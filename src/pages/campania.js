import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Manager } from "socket.io-client";
import JPLD_Logo from '../assets/images/recursos/FJPLD_logo.png';
import Esperanza from '../assets/images/recursos/esperanza.png';
import { API_URL } from "../config";

const Campania = () => {
    const { id } = useParams()
    const [campaniaData, setCampaniaData] = useState()
    const [recaudado, setRecaudado] = useState(0.00)
    const [email, setEmail] = useState()
    const [cellphone, setCellphone] = useState()
    const [showForm, setShowForm] = useState(true)
    const getDataCampania = useCallback(
        async () => {
            try {
                const response = await axios.get(`${API_URL}/cases/${id}`)
                if (response.status === 200)
                    setCampaniaData(response.data)
            } catch (error) {
                console.error(error);
            }
        },
        [id],
    )

    const getReport = useCallback(
        () => {
            try {
                const url = `${API_URL}/socket.io/socket.io.js`
                const manager = new Manager(url)

                const socketActive = manager.socket('/reportingPayments')
                socketActive.emit('hello-client', { id })
                socketActive.on('hello-server', (args) => {
                    setRecaudado(args.data.sum);
                })
            } catch (error) {
                console.error(error);
            }
        },
        [id],
    )

    useEffect(() => {
        console.log(`check-form`);
        getDataCampania()
        getReport()
    }, [getDataCampania, getReport])

    const handleOnSubmit = async (ev) => {
        ev.preventDefault();
        try {
            await axios.post(`${API_URL}/contact`, {
                campania_key: id,
                email,
                cellphone
            })
            alert("Gracias, tus datos fueron enviados")
            setShowForm(false)
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <section className="fondoGeneral">
                {campaniaData &&
                    <div className="PersonaContenedor">
                        <div className="row grid gap-0 column-gap-4 paddingSection">
                            <div className="col-12">
                                <img src={`${API_URL}/pictures/${campaniaData.image}`} className="casosImagenCampania" />
                                <h2 className="nombreCampania">Juntos por '{campaniaData.nickname}'</h2>
                            </div>
                            <div className="col-12 col-md-3 order-md-2 recaudacion">
                                <img src={JPLD_Logo} className="img-fluid maxImgW" />
                                <p>Meta:<strong>'
                                    <CurrencyFormat>
                                        {campaniaData.meta}
                                    </CurrencyFormat>
                                    '</strong></p>
                                <p className="mbText">Recaudado:<strong>'
                                    <CurrencyFormat>
                                        {recaudado}
                                    </CurrencyFormat>
                                    '</strong></p>
                                <img src={Esperanza} className="img-fluid sImage" />
                            </div>
                            <div className="col-12 col-md-8 order-md-1 personaText">
                                <p>Hola, soy '{campaniaData.nickname}' nací con <b>'{campaniaData.discapacidad}'</b>, Este mes la fundación Juntos por los Demás me está ayudando a recibir donativos para mis terapias.</p>
                                {/* <p>Este mes la fundación Juntos por los Demás me está ayudando a recibir donativos para mis terapias.</p> */}
                                <p>Tú puedes hacer la diferencia. <strong>Gracias por tu ayuda</strong></p>
                                {/* <p>Gracias por tu ayuda</p> */}
                                <div className="col-12 mt-5 contactoInfo">
                                    {showForm && <form>
                                        <fieldset>
                                            <legend><h3>Si deseas mas información ingresa tu correo o número de telefono (Contacto para whastapp)</h3></legend>
                                            <div className="mb-3">
                                                <label htmlFor="Correo" className="form-label">Ingresa tu correo</label>
                                                <input
                                                    onChange={(ev) => setEmail(ev.target.value)} type="text" id="email" className="form-control" placeholder="correo@correo.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Telefono" className="form-label">Ingresa tu Número celular</label>
                                                <input
                                                    onChange={(ev) => setCellphone(ev.target.value)} type="number" id="cellphone" className="form-control" placeholder="33-44-55-66-77" />
                                            </div>
                                            <button onClick={handleOnSubmit} className="btn btn-primary btn-lg">Enviar</button>
                                        </fieldset>
                                    </form>}
                                </div>
                                <Link to="/campanias">
                                    <button className="btn btn-primary btn-lg btn-lger">Regresar</button>
                                </Link>
                            </div>
                            <img src={Esperanza} className="img-fluid hImage" />
                        </div>
                    </div>
                }
            </section>
        </>
    );
}

const CurrencyFormat = ({ children }) => {
    return `${new Intl.NumberFormat('es-MX',
        {
            style: 'currency',
            currency: 'MXN',
            maximumFractionDigits: 2
        })
        .format(children)}`;
}

export default Campania;