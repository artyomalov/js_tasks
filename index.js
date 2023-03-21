const simple = [
  "один",
  "два",
  "три",
  "четыре",
  "пять",
  "шесть",
  "семь",
  "восемь",
  "девять",
];
const twoDigitTeen = [
  "одиннацать",
  "двенадцать",
  "тринадцать",
  "четырнадцать",
  "пятнадцать",
  "шестнадцать",
  "семнадцать",
  "восемнадцать",
  "девятнадцать",
];
const twoDigit = [
  "десять",
  "двадцать",
  "тридцать",
  "сорок",
  "пятьдесят",
  "шестьдесят",
  "семьдесят",
  "восемьдесят",
  "девяносто",
];
const threeDigit = [
  "сто",
  "двести",
  "триста",
  "четыреста",
  "пятьсот",
  "шестьсот",
  "семьсот",
  "восемьсот",
  "девятьсот",
];
const thousand = ["тысяча", "тысячи", "тысяч"];
const [thousandOne, thousandTwo, thousandThree] = thousand;

function translateToOneDigitNumber(array, number) {
  if (array[0] === "0") {
    return "ноль";
  }
  return simple[number - 1];
}

function translateToTwoDigitNumber(array, number) {
  if (array[0] === 1 && array[1] === 0) {
    return twoDigit[0];
  } else if (array[0] === 1) {
    return twoDigitTeen[number - 11];
  } else if (array[0] > 1) {
    if (array[1] === 0) {
      return twoDigit[array[0] - 1];
    } else {
      return `${twoDigit[array[0] - 1]} ${simple[array[1] - 1]}`;
    }
  }
}

function translateToThreeDigitNumber(array, number) {
  if (array[1] === 0) {
    if (array[2] === 0) {
      return threeDigit[array[0] - 1];
    } else {
      return `${threeDigit[array[0] - 1]} ${simple[array[2] - 1]}`;
    }
  } else if (array[2] === 0) {
    return `${threeDigit[array[0] - 1]} ${twoDigit[array[1] - 1]}`;
  } else {
    return array[1] === 1
      ? `${threeDigit[array[0] - 1]} ${
          twoDigitTeen[Number(array.slice(1, 3).join("")) - 11]
        }`
      : `${threeDigit[array[0] - 1]} ${twoDigit[array[1] - 1]} ${
          simple[array[2] - 1]
        }
  `;
  }
}

function translateToFourDigitNumber(array, number) {
  const lastTwoTeenNumbersSetter =
    twoDigitTeen[Number(array.slice(2).join("")) - 11];

  const rightCaseSwitcher =
    array[0] === 2
      ? `две ${thousandTwo}`
      : `${simple[array[0] - 1]} ${thousandTwo}`;

  const twoDigitThousandMeaning = `${simple[array[0] - 1]} ${thousandThree}`;
  const threeDigitNumberCounter = threeDigit[array[1] - 1];

  if (array[0] === 1) {
    if (array[1] === 0 && array[2] === 0 && array[3] === 0) {
      return thousandOne;
    } else if (array[1] === 0 && array[2] === 0) {
      return `${thousandOne} ${simple[array[3] - 1]}`;
    } else if (array[1] === 0) {
      if (array[2] === 1) {
        if (array[3] === 0) return `${thousandOne} десять`;
        return `${thousandOne} ${twoDigitTeen[number - 1011]}`;
      } else if (array[2] > 1) {
        if (array[3] === 0) {
          return `${thousandOne} ${twoDigit[array[2] - 1]}`;
        }

        return `${thousandOne} ${twoDigit[array[2] - 1]} ${
          simple[array[3] - 1]
        }`;
      }
    } else {
      if (array[3] === 0) {
        if (array[2] === 0) {
          return `${thousandOne} ${threeDigitNumberCounter}`;
        }
        return `${thousandOne} ${threeDigitNumberCounter} ${
          twoDigit[array[2] - 1]
        }`;
      } else if (array[2] === 0)
        return `${thousandOne} ${threeDigitNumberCounter} ${
          simple[array[3] - 1]
        }`;
    }

    return array[2] === 1
      ? ` ${thousandOne} ${threeDigitNumberCounter} ${lastTwoTeenNumbersSetter}`
      : `${thousandOne} ${threeDigitNumberCounter} ${twoDigit[array[2] - 1]} ${
          simple[array[3] - 1]
        }`;
  } else if (array[0] > 1 && array[0] < 5) {
    if (array[1] === 0 && array[2] === 0 && array[3] === 0) {
      return rightCaseSwitcher;
    } else if (array[1] === 0 && array[2] === 0) {
      return `${rightCaseSwitcher} ${simple[array[3] - 1]}`;
    } else if (array[1] === 0) {
      if (array[2] === 1) {
        if (array[3] === 0) return `${rightCaseSwitcher} десять`;

        return `${rightCaseSwitcher} ${lastTwoTeenNumbersSetter}`;
      } else if (array[2] > 1) {
        if (array[3] === 0) {
          return `${rightCaseSwitcher} ${twoDigit[array[2] - 1]}`;
        }
        return `${rightCaseSwitcher} ${twoDigit[array[2] - 1]} ${
          simple[array[3] - 1]
        }`;
      }
    } else {
      if (array[3] === 0) {
        if (array[2] === 0) {
          return `${rightCaseSwitcher} ${threeDigitNumberCounter}`;
        }

        return `${rightCaseSwitcher} ${threeDigitNumberCounter} ${
          twoDigit[array[2] - 1]
        }`;
      }
    }
    return array[2] === 1
      ? ` ${rightCaseSwitcher} ${threeDigitNumberCounter} ${lastTwoTeenNumbersSetter}`
      : `${rightCaseSwitcher} ${threeDigitNumberCounter} ${
          array[2] === 0 ? "" : twoDigit[array[2] - 1] + ""
        }${simple[array[3] - 1]}`;
  } else {
    if (array[1] === 0 && array[2] === 0 && array[3] === 0) {
      return twoDigitThousandMeaning;
    } else if (array[1] === 0 && array[2] === 0) {
      return `${twoDigitThousandMeaning} ${simple[array[3] - 1]}`;
    } else if (array[1] === 0) {
      if (array[2] === 1) {
        if (array[3] === 0) return `${twoDigitThousandMeaning} десять`;

        return `${twoDigitThousandMeaning} ${lastTwoTeenNumbersSetter}`;
      } else if (array[2] > 1) {
        if (array[3] === 0) {
          return `${twoDigitThousandMeaning} ${twoDigit[array[2] - 1]}`;
        }

        return `${twoDigitThousandMeaning} ${twoDigit[array[2] - 1]} ${
          simple[array[3] - 1]
        }`;
      }
    } else {
      if (array[3] === 0) {
        if (array[2] === 0) {
          return `${twoDigitThousandMeaning} ${threeDigitNumberCounter}`;
        }
        return `${twoDigitThousandMeaning} ${threeDigitNumberCounter} ${
          twoDigit[array[2] - 1]
        }`;
      }
    }

    return array[2] === 1
      ? ` ${twoDigitThousandMeaning} ${threeDigitNumberCounter} ${lastTwoTeenNumbersSetter}`
      : `${twoDigitThousandMeaning} ${threeDigitNumberCounter} ${
          array[2] === 0 ? "" : twoDigit[array[2] - 1] + " "
        }${simple[array[3] - 1]}`;
  }
}

function translateToFiveDigitNumber(array, number) {
  const numberTenSwitcher =
    array[0] === 1 ? "десять" : `${twoDigit[array[0] - 1]}`;
  const TwoTeenNumbersSetter = (start, end) =>
    twoDigitTeen[Number(array.slice(start, end).join("")) - 11];
  const lastTenSwitcher =
    array.slice(3, 5)[0] === 1 && array.slice(3.5)[1] === 0
      ? "десять"
      : TwoTeenNumbersSetter(3, 5);
  const twoDigitTeenSelector =
    array[3] === 1
      ? `${numberTenSwitcher} ${thousandThree} ${TwoTeenNumbersSetter(3, 5)}`
      : `${numberTenSwitcher} ${thousandThree} ${twoDigit[array[3] - 1]} ${
          simple[array[4] - 1]
        }`;
  const twoLastDigitTeenSelector = () => {
    if (array[3] !== 1) {
      return `${array[3] === 0 ? "" : twoDigit[array[3] - 1] + " "}${
        array[4] === 0 ? "" : simple[array[4] - 1]
      }`;
    } else {
      return array.slice(3, 5)[0] === 1 && array.slice(3.5)[1] === 0
        ? "десять"
        : TwoTeenNumbersSetter(3, 5);
    }
  };
  const threeDigitSelector =
    array[2] === 0 ? "" : threeDigit[array[2] - 1] + " ";

  if (array[1] === 0 && array[2] === 0 && array[3] === 0 && array[4] === 0) {
    return `${numberTenSwitcher} ${thousandThree}`;
  } else if (array[1] === 0 && array[2] === 0 && array[3] === 0) {
    if (array[0] > 0) {
      return `${numberTenSwitcher} ${thousandThree} ${simple[array[4] - 1]}`;
    }
  } else if (array[1] === 0 && array[2] === 0) {
    return twoDigitTeenSelector;
  } else if (array[1] === 0) {
    return array[3] === 1
      ? `${numberTenSwitcher} ${thousandThree} ${threeDigitSelector} ${lastTenSwitcher}`
      : `${numberTenSwitcher} ${thousandThree} ${threeDigitSelector} ${
          array[3] === 0 ? "" : twoDigit[array[3] - 1] + " "
        }${simple[array[4] - 1]}`;
  } else {
    if (array[0] === 1) {
      return `${TwoTeenNumbersSetter(
        0,
        2
      )} ${thousandThree} ${threeDigitSelector}${
        array[3] === 0
          ? array[4] === 0
            ? ""
            : simple[array[4] - 1]
          : twoLastDigitTeenSelector()
      }`;
    } else if (array[0] > 1) {
      if (array[1] === 1) {
        if (array[2] === 0) {
          return `${
            twoDigit[array[0] - 1]
          } одна ${thousandOne} ${twoLastDigitTeenSelector()}`;
        }
        return `${
          twoDigit[array[0] - 1]
        } одна ${thousandOne} ${threeDigitSelector} ${twoLastDigitTeenSelector()}`;
      } else if (array[1] === 2) {
        if (array[2] === 0) {
          return `${
            twoDigit[array[0] - 1]
          } две ${thousandTwo} ${twoLastDigitTeenSelector()}`;
        }
        return `${
          twoDigit[array[0] - 1]
        } две ${thousandTwo} ${threeDigitSelector} ${twoLastDigitTeenSelector()}`;
      } else if (array[1] > 2 && array[1] < 5) {
        return `${twoDigit[array[0] - 1]} ${
          simple[array[1] - 1]
        } ${thousandTwo} ${
          threeDigitSelector + " "
        } ${twoLastDigitTeenSelector()}`;
      } else {
        if (array[2] === 0) {
          return `${twoDigit[array[0] - 1]} ${
            simple[array[1] - 1]
          } ${thousandThree} ${twoLastDigitTeenSelector()}`;
        }

        return `${twoDigit[array[0] - 1]} ${
          simple[array[1] - 1]
        } ${thousandThree} ${threeDigitSelector} ${twoLastDigitTeenSelector()}`;
      }
    }
  }
}

function translator(number) {
  const numberString = number.toString();
  const splittedNumber = numberString.split("").map(Number);
  if (number > 100000) {
    return "Число вне заданого диапазона";
  }
  if (splittedNumber.length === 1) {
    return translateToOneDigitNumber(splittedNumber, number);
  }

  if (splittedNumber.length === 2) {
    return translateToTwoDigitNumber(splittedNumber, number);
  }
  if (splittedNumber.length === 3) {
    return translateToThreeDigitNumber(splittedNumber, number);
  }

  if (splittedNumber.length === 4) {
    return translateToFourDigitNumber(splittedNumber, number);
  }
  if (splittedNumber.length === 5) {
    return translateToFiveDigitNumber(splittedNumber, number);
  }

  return `${threeDigit[0]} ${thousandThree}`;
}
// const getNumber = prompt("number");
console.log(translator(15032));
