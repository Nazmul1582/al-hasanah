import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

const API_URL = import.meta.env.VITE_API_URL

const decodeTextBody = (text) => {
  const response = JSON.parse(text)
  if (typeof response?.data !== 'string') {
    return text
  }

  const payload = response.data

  const tryDecode = (value) => {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/')
    const cleaned = normalized.replace(/[^A-Za-z0-9+/=]/g, '')
    const padded = cleaned + '='.repeat((4 - (cleaned.length % 4)) % 4)

    const buffer = new Uint8Array(
      [...atob(padded)].map((char) => char.charCodeAt(0))
    )
    const decodedText = new TextDecoder().decode(buffer)
    if (!decodedText.startsWith('{') && !decodedText.startsWith('[')) {
      return null
    }
    return JSON.parse(decodedText)
  }

  const attempts = [payload]
  if (payload.length > 5) {
    attempts.push(payload.slice(5))
  }

  let decoded = null
  for (const attempt of attempts) {
    try {
      decoded = tryDecode(attempt)
      if (decoded) break
    } catch {
      decoded = null
    }
  }

  if (!decoded) {
    throw new Error('Failed to decode API payload')
  }

  response.data = decoded.data
  return JSON.stringify(response)
}

const customFetch = async (uri, options) => {
  const response = await fetch(uri, options)
  const text = await response.text()
  let decodedText = text
  try {
    decodedText = decodeTextBody(text)
  } catch (error) {
    console.warn('Failed to decode API response', error)
  }
  return new Response(decodedText, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  })
}

const httpLink = new HttpLink({
  uri: API_URL,
  fetch: customFetch,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
})

export default apolloClient
