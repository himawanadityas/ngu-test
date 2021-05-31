import axios from "axios";


export const GET_DATA_LIST = 'GET_DATA_LIST';
export const GET_IMAGE = 'GET_IMAGE';
export const POST_DATA = 'POST_DATA';
const url = 'http"//localhost:1234/input';

const dataAction = {
    getData: () => async (dispatch) => {
        try {
            const dataClient = (await axios.get(url + "/input"))
                .data;
            console.log('WHAAAAA')
            console.log(dataClient)
            const payload = {dataGrid: dataClient};
            dispatch({type: GET_DATA_LIST, payload});
            // return payload;
        } catch (e) {
            console.log(e);
            const payload = {dataGrid: []};
            // dispatch({type: candidateTypes.GET_DATA, payload});
            return payload;
        }
    }
}

export default dataAction;