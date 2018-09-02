

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'
export const PATCH = 'PATCH'


const defaultHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export function xhr (route, verb, params, headers) {
  let options = Object.assign({ method: verb }, params ? { body: headers && headers['Content-Type'] === 'multipart/form-data' ? params : JSON.stringify(params) } : null )
  options.headers =  headers || defaultHeader
  return fetch(route, options).then( resp => {
    let json =  resp.json()
    if(resp.ok){
      return json
    }
    return json.then(err => {throw err})
  }).then( json => json )
}
