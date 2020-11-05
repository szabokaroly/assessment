function  numsToEnglish () {
    let number = parseInt(document.getElementById("number").value);
    let output = "";
    let ones = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    function convertToWords(num) {
      let singleDigit = num % 10;
      let million = Math.pow(10,6);
      let billion = Math.pow(10,9);
      
      if (num < 0) return "Negative numbers are not accepted.";
      if (num < 20) return ones[num];
      if (num < 100) return tens[Math.floor((num / 10) - 2)] + (singleDigit ? "-" + ones[singleDigit]: "");
      if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 == 0 ? "" : " and " + convertToWords(num % 100));
      if (num < million) return convertToWords(Math.floor(num / 1000)) + " thousand" + (num % 1000 != 0 ? " " + convertToWords(num % 1000): "");
      if (num < billion) return convertToWords(Math.floor(num / million)) + " million" + (num % million != 0 ? " " + convertToWords(num % million): "");
    }
    output = convertToWords(number);
    document.getElementById("result").textContent = output;
};
