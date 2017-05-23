import axios from 'axios'

class committeeApi {
  static getCommittees(pepiteId) {
    return axios.get(`/pepite/${pepiteId}/committee`)
      .then((res) => {
        return res.data
      })
  }

  static getNextCommittee(pepiteId) {
    return axios.get(`/pepite/${pepiteId}/committee/next`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return null
        }
        throw err
      })
  }

  static deleteCommittee(committeeId, pepiteId, userToken) {
    return axios.delete(`pepite/${pepiteId}/committee/${committeeId}`,
      {
        'headers': {
          'Authorization': `Bearer ${userToken}`
        }
      })
  }

  static addCommittee(committee, pepiteId, userToken) {
    return axios.post(`pepite/${pepiteId}/committee/`, committee,
      {
        'headers': {
          'Authorization': `Bearer ${userToken}`
        }
      })
      .then((res) => {
        return res.data
      })
  }

  static updateCommittee(committee, pepiteId, userToken) {
    return axios.put(`pepite/${pepiteId}/committee/${committee._id}`, committee,
      {
        'headers': {
          'Authorization': `Bearer ${userToken}`
        }
      })
      .then((res) => {
        return res.data
      })
  }
}

export default committeeApi
