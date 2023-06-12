import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dropmail.me/api/graphql/web-test-20230611vPMTP',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  },
})

export { api }
