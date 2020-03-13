const today = new Date()
const todayDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
const sevenDaysDate = new Date();
sevenDaysDate.setDate(sevenDaysDate.getDate()-7);
const startDate =  sevenDaysDate.getFullYear() + '-' + ('0' + (sevenDaysDate.getMonth() + 1)).slice(-2) + '-' + ('0' + sevenDaysDate.getDate()).slice(-2);

export {todayDate, startDate}