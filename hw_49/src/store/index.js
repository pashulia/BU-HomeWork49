import { createStore } from 'vuex';

const Web3 = require('web3');
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

export default createStore({
    state: {
        blocks: [],
    },
    getters: {
    },
    mutations: {
        addBlock(state, newBlock) {
            state.blocks.unshift(newBlock)
        }
    },
    actions: {
        async newBlockHeaders({ commit }) {
            let subscribe = web3.eth.subscribe("newBlockHeaders")
            .on("data", block => {
                let newBlock = {
                    number: block.number,
                    hash: block.hash
                }
                commit("addBlock", newBlock)
            })
        },
        async getBlock({ commit }, blockNumberOrHash) {
            return await web3.eth.getBlock(blockNumberOrHash)
        }    
    },
    modules: {
    }
})
