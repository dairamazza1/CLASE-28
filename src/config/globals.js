require('dotenv').config()

module.exports = {
  MONGO_URI: process.env.MONGO_URI || '',
  TIEMPO_EXPIRACION: process.env.TIEMPO_EXPIRACION || 3000,
  MODO : process.env.MODO,
  PORT : process.env.PORT || 8080
}
