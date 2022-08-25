import axios from 'axios';
import URL from '../../Url';

const ProyectActions = {
    getProyects: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${URL}proyects`)
                console.log(res)
                dispatch({type: 'GET_PROYECTS', payload: res.data.response})
                }
            catch (err) {
                console.log(err)
            }
        }
    },
    // createTecno: (tecno) => {
}

export default ProyectActions;