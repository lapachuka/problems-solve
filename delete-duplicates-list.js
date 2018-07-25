var deleteDuplicates = function(head) {
  let newList = head;
  let startPoint = newList;

  while (startPoint && startPoint.next) {
    if (startPoint.val === startPoint.next.val) {
      startPoint.next = startPoint.next.next;
    } else {
      startPoint = startPoint.next;
    }
  }

  return newList;
};

let some = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
};

console.log(deleteDuplicates(some));
