var moment = require('moment');

const today = () => {
  const day = moment().format('dddd')
  return day
}

const calendar = () => {
  const today = moment().format('MMM DD, YYYY')
  return today;
}

const currentTime = () => {
  const time = moment().format('hh:mm:ss A')
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}