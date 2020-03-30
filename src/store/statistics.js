export const state = () => ({
    list: [],
    error: null
});

export const mutations = {
    setData(state, data) {
        state.list = data
    },
    setError(state, error) {
        state.error = error
    },
};

export const getters = {
    getAll: (state) => () => {
        return state.list;
    }
};

export const actions = {
    async fetchDepartments({ commit }) {
        let data = [];
        try {
            let response = await this.$dataService.get();
            data = response.data;
        }
        catch (e) {
            console.error(e);
            commit('setError', e)
        }
        commit('setData', data)
    },
    clear({ commit }) {
        commit('setData', [])
    }

};