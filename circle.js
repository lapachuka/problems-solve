function areas(r, a) {
  let circleArea = Math.PI * Math.pow(r, 2);
  let segmentArea =
    (Math.pow(r, 2) / 2) *
    ((a * Math.PI) / 180 - Math.sin((a * Math.PI) / 180));

  let inside = segmentArea;
  let outside = circleArea - segmentArea;
  return [inside, outside];
}

let [inside, outside] = areas(10, 90);
console.log(inside + ' ' + outside);
