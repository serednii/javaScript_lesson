const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('2 sec'));