import { BookingRequest } from "../types/booking"

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

export const doRequest = <T>(method: HttpMethod, url: string, body: BookingRequest = undefined): Promise<T> => {
  return new Promise<T>((resolve: (value: T) => void, reject: (any) => void) => {
    run(method, url, body, (request: XMLHttpRequest) => {
      if (request.readyState !== 4) {
        return
      }
      switch (request.status) {
        case 200:
          resolve(JSON.parse(request.responseText) as T)
          break
        case 204:
          resolve(undefined)
          break
        case 500:
          const isJson = request.getResponseHeader('content-type') === 'application/json'
          reject(isJson ? JSON.parse(request.responseText) : undefined)
        default:
          reject(undefined)
          break
      }
    })
  })
}

const run = (method: HttpMethod, url: string, body: BookingRequest = undefined, stateChange: (request: XMLHttpRequest) => void): void => {
  const xmlHttpRequest = new XMLHttpRequest()
  xmlHttpRequest.onreadystatechange = () => stateChange(xmlHttpRequest)
  xmlHttpRequest.open(method, url)
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json")
  xmlHttpRequest.send(body != null ? JSON.stringify(body) : undefined)
}