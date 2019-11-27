import { observable } from "mobx"

class Store {
  @observable incidents = [
    {
      id: Math.random(),
      title: "Lorem Ipsum",
      location: "Lagos"
    }
  ]
}

export default new Store()
