export const state = () => ({
    user:{},
    userDataChange:false,
    refreshToken:'',
    login:{
        username:'',
        password:''
    },

})

export const mutations = {
    setUser(state,payload){
        state.User = payload
        localStorage.User = payload
    },
    refreshUserData(state){
        state.userDataChange = !state.userDataChange
    },
    refreshToken(state,payload){
        state.refreshToken = payload
    },
    login(state,payload){
        state.login=payload
    }
}