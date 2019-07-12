function clockAngle(hour, min) {
  // 360 / 720 = 0.5    720 = number of minutes in a day
  var h = 0.5 * (60 * hour + min);
  // 360 degree / 60 minutes = min value
  // hour value = 360 / (60 * 12)
  var m = 6 * min; // each minute is 6 degrees
  var angle = Math.abs(h - m);
  return (angle > 180) ? 360 - angle : angle;
  }

  console.log(clockAngle(4,0))