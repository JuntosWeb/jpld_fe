import Cards from "../components/campanias/Cards";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const Campanias = () => {
    const [data, setData] = useState([])
    const getCasesData = useCallback(
        async () => {
            try {
                const response = await axios.get(`${API_URL}/cases`)
                if (response.status === 200)
                    setData(response.data)
            } catch (error) {
                console.error(error);
            }
        },
        [],
    )

    useEffect(() => {
        console.log(`check`);
        getCasesData()
    }, [getCasesData])

    return (
        <section className='paddingSection fondoGeneral'>
            <h1>¡Transforma vidas con tu generosidad!</h1>
            <div className="row d-flex justify-content-center">
                {data.map(
                    (item, index) => <Cards
                        key={item.nickname + index}
                        data={item}
                    />
                )}
            </div>
        </section>
    );
}

export default Campanias;