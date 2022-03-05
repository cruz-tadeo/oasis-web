
import url from '~/constants/api';
const actions = {
    async obtenerHoteles({commit}){
        //console.log(url,"prueba")
        const {data} = await this.$axios.get(url + 'hotel');
        //console.log(data,"respuesta");
        commit("SET_DATA",data);
    }
}

export default actions;