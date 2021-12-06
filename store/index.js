export const state = () => ({});
export const actions = {
    async getData(){
       this.$axios.get('http://localhost:3001/posts').then((response) =>{
        console.log(response.data);
        this.commit('setPosts', response.data);
       })
       
    }
};
export const mutations = {
    setPosts(state, res){
        this.state.posts.all = res
    }
};
export const getters = {};
