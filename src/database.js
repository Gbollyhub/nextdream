const myModule = {
  firestorePath: 'Details',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'myModule',
  statePropName: 'data',
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/myModule')
  // you can also add state/getters/mutations/actions
  state: {
    data:[]
  },
  getters: {
    getData: state => state.data
  },
  mutations: {},
  actions: {},
}

export default myModule