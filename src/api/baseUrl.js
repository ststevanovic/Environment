export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  // in dev or in production
  return inDevelopment ? 'http://localhost:3001/' : '/'
}
