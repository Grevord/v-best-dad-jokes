export const state = () => ({});
export const actions = {
    async nuxtServerInit(store,context){
        this.$axios.get('http://localhost:3001/posts').then((response) =>{
            this.commit('setPosts', response.data);
        })
    },
    async getData(){
       this.$axios.get('http://localhost:3001/posts').then((response) =>{
        this.commit('setPosts', response.data);
       })
       
    }
};
export const mutations = {
    setPosts(state, res){
        this.state.posts.all = res;
        console.log(this.state.posts.all)
    }
};
export const getters = {};
