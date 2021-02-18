module.exports = {
   date(timestamp){
      const date = new Date()
      const utc_offset = date.getTimezoneOffset()

      date.setMinutes(date.getMinutes() - utc_offset)

      return date 
   }
}
