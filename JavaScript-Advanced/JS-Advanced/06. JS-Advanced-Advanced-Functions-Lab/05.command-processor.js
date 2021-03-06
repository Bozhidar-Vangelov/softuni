function commandProcessor(string) {
  let str = "";

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(strToAppend) {
    str += strToAppend;
  }

  function removeStart(n) {
    str = str.substring(n);
  }

  function removeEnd(n) {
    str = str.substring(0, str.length - n);
  }

  function print() {
    console.log(str);
  }
}

let firstZeroTest = commandProcessor();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = commandProcessor();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
