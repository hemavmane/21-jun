// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let amPm = (hr, min) => {
  if (hr == 0) {
    min = min < 10 ? "0" + min : min;
    hr = hr < 10 ? "0" + hr : hr;
    return "12:" + min + " AM";
  } else if (hr >= 12) {
    hr = hr - 12;
    min = min < 10 ? "0" + min : min;
    hr = hr < 10 ? "0" + hr : hr;
    if (hr == 0) {
      return "12:" + min + " PM";
    } else {
      return hr + ":" + min + " PM";
    }
  } else {
    min = min < 10 ? "0" + min : min;
    hr = hr < 10 ? "0" + hr : hr;
    return hr + ":" + min + " AM";
  }
};
console.log(amPm(17, 6));
