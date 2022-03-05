export default {
    get(url){
        return this.$api.get(url)
    },
    getId(url,id){
        return this.$api.get(`${url}/${id}`)
    }
}