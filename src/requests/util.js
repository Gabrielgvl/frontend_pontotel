/**
 * Arquivo responsável por lidar com a parte de protocolo que iremos utilizar junto a API
 */

/**
 * Retorna se estamos usando conexão segura com Backend
 *
 * @returns {boolean}
 */
const isSecure = process.env.REACT_APP_USE_SECURE === 'true';

/**
 * Retorna o protocolo HTTPS/HTTP
 *
 * @returns {string} HTTP/HTTPS - string
 */
const httpProtocol = isSecure ? 'https' : 'http';

export const link = `${httpProtocol}://${process.env.REACT_APP_API_URL}/api`;

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
