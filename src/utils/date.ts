export function dateFormat(stringDate: any){
  let newDate = new Date(stringDate)
  const year = newDate.getFullYear()
  const date = newDate.getDate()
  const month = newDate.getMonth() + 1
  const hour = newDate.getHours()
  const minutes = newDate.getMinutes()
  const second = newDate.getSeconds()
  return date+"-"+month+"-"+year+" "+hour+":"+minutes+":"+second;
}