const db = wx.cloud.database()

export function whereQuery(collection, query = {}) {
  return new Promise((reslove, reject) => {
    db.collection(collection).where(query).get({
      success: res => {
        reslove(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}


export function upDateData(collection, doc, data = {}) {
  return new Promise((reslove, reject) => {
    db.collection(collection).doc(doc).update({
      data: data,
      success: res => {
        reslove(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}



export function addData(collection, data = {}) {
  return new Promise((reslove, reject) => {
    db.collection(collection).add({
      data: data,
      success: res => {
        reslove(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

export function getDataCount(collection, query = {}) {
  return new Promise((reslove, reject) => {
    db.collection(collection).where(query).count({
      success: function (res) {
        reslove(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

export function fieldQueryData(collection, field = {}) {
  return new Promise((reslove, reject) => {
    db.collection(collection).field(field)
      .get()
      .then(reslove)
      .catch(reject)
  })
}