export class Haiku {
  constructor(userInput) {
    this.userInput = userInput;
  }
  hasThreeLines() {
    let userInputArr = this.userInput.split(".");
    return userInputArr.length == 3;
  }

  hasFiveSevenFive(){
    let userInputArr = this.userInput.split(".");
    let splitWords = [userInputArr[0].split(" "), userInputArr[1].split(" "), userInputArr[2].split(" ")];
    let line1 = splitWords[0].toString().split("").filter(item => item !="ん" && item != "っ");
    let line2 = splitWords[1].toString().split("").filter(item => item !="ん" && item != "っ");
    let line3 = splitWords[2].toString().split("").filter(item => item !="ん" && item != "っ");
    return(line1.length == 5 && line2.length == 7 && line3.length == 5);
  }

  // filterOutExceptions(){
  //   let userInputArr = this.userInput.split(".");
  //   let splitWords = [userInputArr[0].split(" "), userInputArr[1].split(" "), userInputArr[2].split(" ")];
  //   console.log(splitWords);
  //   let line1 = splitWords[0].toString().split("").filter(item => item !="ん" && item != "っ");
  //   console.log(line1);
  // }


}