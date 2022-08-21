import axios from 'axios';
import URL from '../../Url';

const TecnoActions = {
    getTecno: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${URL}tecnologias`)
                console.log(res)
                dispatch({type: 'GET_TECNOS', payload: res.data.response})
                }
            catch (err) {
                console.log(err)
            }
        }
    },
    // createTecno: (tecno) => {
}

export default TecnoActions;