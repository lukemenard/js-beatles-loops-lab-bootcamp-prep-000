function theBeatlesPlay(musicians, instruments){
  var array = []
  var i = 0
  for (i; i < musicians.length; i++){
    array.push(musicians[i] + 'plays' + instruments[i])
  }
  return array
}