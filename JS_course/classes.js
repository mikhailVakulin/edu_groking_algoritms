class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
}

const fistComment = new Comment("First comment");
fistComment.upvote();
console.log(fistComment.votesQty);
fistComment.upvote();
console.log(fistComment.votesQty);

// расширение классов
class NumberArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc *= el), 1);
  }
}

const myArray = new NumberArray(3, 3, 5);
console.log(myArray.sum());

console.log(myArray);
