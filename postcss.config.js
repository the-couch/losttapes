const p = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('postcss-nested'),
    require('postcss-cssnext'),
    require('postcss-calc'),
    require('postcss-discard-comments'),
    require('postcss-reporter'),
    p ? require('cssnano') : ''
  ]
}
