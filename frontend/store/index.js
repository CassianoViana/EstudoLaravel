export const strict = false;

export const state = () => ({
    toast: {}
});

export const getters = {
    getToast(state){
        return state.toast;
    }
}

export const mutations = {
    setToast(state, toast){
        state.toast = toast;
    },
};
