function myFunction() {
  let s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  for(let i = 0; i<3; i++)
  {
    let rng = s.getRange(Math.random()*6+2, 9)
    let tsb = SpreadsheetApp.newTextStyle()
    tsb.setBold(Math.random() > .5)
    .setFontSize(Math.ceil(Math.random()*40))
    .setForegroundColor("#"+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10))
    .setItalic(Math.random() > .5)
    .setStrikethrough(Math.random() > .5)
    .setUnderline(Math.random() > .5)
    let ts = tsb.build()
    let rots = []
    for(let i=0; i<rng.getNumRows(); i++) rots.push(Math.random()*14-7)
    Logger.log(rots)
    rng.setTextRotation(Math.random()*-7)
    rng.setTextStyle(ts)
    rng.setBackgroundColor("#"+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10))
//    Utilities.sleep(500)
  }
}
