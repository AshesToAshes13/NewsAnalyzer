const moment = require("moment");

const todayDate = moment().format('YYYY-MM-DD');
const startDate = moment().add(-6,'days').format('YYYY-MM-DD');

export {todayDate, startDate};