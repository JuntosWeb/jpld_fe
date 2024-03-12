import { API_URL } from '../../config';
const Cards = (props) => {
    const {
        nombre,
        nickname,
        descripcion,
        paymentlink,
        image
    } = props.data;


    return (
        <div className="col-10 col-md-3">
            <div className="card">
                <img src={`${API_URL}/pictures/${image}`} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h4 className="card-title">{nombre}</h4>
                    <hr />
                    <p className="card-text">{descripcion}</p>
                    <a href={paymentlink}>
                        <button className="btn btn-warning">
                            ¡Ayúdame a lograr mis sueños!
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;