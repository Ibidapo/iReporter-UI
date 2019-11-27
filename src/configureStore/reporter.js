import { observable } from "mobx"

const apiBaseUrl = process.env.REACT_APP_API_URL

class Store {
  @observable reporter = {}

  // eslint-disable-next-line class-methods-use-this
  async registerUser(data) {
    try {
      const response = await fetch(`${apiBaseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      return await response.json()
    } catch (e) {
      return { error: "An unexpected error occurred", e }
    }
  }
}

export default new Store()
