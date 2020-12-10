 function getTodayDate() {
   let date = new Date();
   return date.getMonth() + 1 + '月' + date.getDate() + '日'
 }

 function parseDateToTimestamp(raw) {
   let ele = raw.split('-');
   let date = new Date(ele[0], ele[1] - 1, ele[2])
   return date.getTime()
 }

 function parseTimestampToDate(timestamp,separator = '-') {
  let date = new Date(timestamp);
  return date.getFullYear() + separator + (date.getMonth() + 1) + separator + date.getDate()
}

 function isMonday(raw) {
   let ele = raw.split('-');
   let date = new Date(ele[0], ele[1] - 1, ele[2])
   return date.getDay() == 1
 }


 export {
   getTodayDate,
   parseDateToTimestamp,
   parseTimestampToDate,
   isMonday
 }