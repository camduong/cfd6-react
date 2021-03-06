import { endpoint } from './config'

const Auth = {
  async refreshToken() {
    let rf_token = JSON.parse(localStorage.getItem('token'))?.refreshToken
    let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
      method: 'POST',
      body: JSON.stringify({
        refreshToken: rf_token
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    if (res?.data?.accessToken) {
      localStorage.setItem('token', JSON.stringify(res.data))
    }
    return true;
  },
  login(data) {
    return fetch(`${endpoint}/elearning/v4/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  },
  register() { },
  update(data) {
    let token = JSON.parse(localStorage.getItem('token'))?.accessToken
    return fetch(`${endpoint}/elearning/v4/profile/update`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(res => tokenHandle(res, () => {
      let token = JSON.parse(localStorage.getItem('token'))?.accessToken
      return fetch(`${endpoint}/elearning/v4/profile/update`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then(res => res.json())
    }))

  }
}

export async function tokenHandle(res, callback) {
  if (res.status === 200) {
    return res.json()
  }
  if (res.status === 403) {
    await Auth.refreshToken()
    // let token = JSON.parse(localStorage.getItem('token'))?.accessToken
    return callback()
  }
}

export default Auth