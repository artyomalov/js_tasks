const exp = (number, extent) => {
  if (extent === 0) return 1;

  return number * exp(number, extent - 1);
};
console.log(exp(2, 4));

const testArray = [1, [2, 3, [4, 5, 6, [7, 8, 9]]]];

const arrayFlatter = (arr) =>
  arr.reduce(
    (flatArray, element) =>
      flatArray.concat(
        Array.isArray(element) ? arrayFlatter(element) : element
      ),
    []
  );
console.log(arrayFlatter(testArray));

function translator(number) {
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
  const two_digit_teen = [
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
  const two_digit = [
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
  const three_digit = [
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

  let numberString = number.toString();
  const splittedNumber = numberString.split("").map(Number);

  if (numberString.length === 1) {
    if (numberString[0] === "0") {
      return "ноль";
    }
    return simple[number - 1];
  }

  if (numberString.length === 2) {
    if (splittedNumber[0] === 1 && splittedNumber[1] === 0) {
      return two_digit[0];
    } else if (splittedNumber[0] === 1) {
      return two_digit_teen[number - 11];
    } else if (splittedNumber[0] > 1) {
      if (splittedNumber[1] === 0) {
        return two_digit[splittedNumber[0] - 1];
      } else {
        return `${two_digit[splittedNumber[0] - 1]} ${
          simple[splittedNumber[1] - 1]
        }`;
      }
    }
  }
  if (numberString.length === 3) {
    if (splittedNumber[1] === 0) {
      if (splittedNumber[2] === 0) {
        return three_digit[splittedNumber[0] - 1];
      } else {
        return `${three_digit[splittedNumber[0] - 1]} ${
          simple[splittedNumber[2] - 1]
        }`;
      }
    } else if (splittedNumber[2] === 0) {
      return `${three_digit[splittedNumber[0] - 1]} ${
        two_digit[splittedNumber[1] - 1]
      }`;
    } else
      return `${three_digit[splittedNumber[0] - 1]} ${
        two_digit[splittedNumber[1] - 1]
      } ${simple[splittedNumber[2] - 1]}
    `;
  }

  if (numberString.length === 4) {
    if (splittedNumber[0] === 1) {
      if (
        splittedNumber[1] === 0 &&
        splittedNumber[2] === 0 &&
        splittedNumber[3] === 0
      ) {
        return thousand[0];
      } else if (splittedNumber[1] === 0 && splittedNumber[2] === 0) {
        return `${thousand[0]} ${simple[splittedNumber[3] - 1]}`;
      } else if (splittedNumber[1] === 0) {
        if (splittedNumber[2] === 1) {
          if (splittedNumber[3] === 0) return `${thousand[0]} десять`;
          return `${thousand[0]} ${two_digit_teen[number - 1011]}`;
        } else if (splittedNumber[2] > 1) {
          if (splittedNumber[3] === 0) {
            return `${thousand[0]} ${two_digit[splittedNumber[2] - 1]}`;
          }
          return `${thousand[0]} ${two_digit[splittedNumber[2] - 1]} ${
            simple[splittedNumber[3] - 1]
          }`;
        }
      } else {
        if (splittedNumber[3] === 0) {
          if (splittedNumber[2] === 0) {
            return `${thousand[0]} ${three_digit[splittedNumber[1] - 1]}`;
          }
          return `${thousand[0]} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          }`;
        }
      }

      return splittedNumber[2] === 1
        ? ` ${thousand[0]} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit_teen[Number(splittedNumber.slice(2).join("")) - 11]
          }`
        : `${thousand[0]} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          } ${simple[splittedNumber[3] - 1]}`;
    } else if (splittedNumber[0] > 1 && splittedNumber[0] < 5) {
      const twoChoice =
        splittedNumber[0] === 2
          ? `две ${thousand[1]}`
          : `${simple[splittedNumber[0] - 1]} ${thousand[1]}`;
      if (
        splittedNumber[1] === 0 &&
        splittedNumber[2] === 0 &&
        splittedNumber[3] === 0
      ) {
        return twoChoice;
      } else if (splittedNumber[1] === 0 && splittedNumber[2] === 0) {
        return `${twoChoice} ${simple[splittedNumber[3] - 1]}`;
      } else if (splittedNumber[1] === 0) {
        if (splittedNumber[2] === 1) {
          if (splittedNumber[3] === 0) return `${twoChoice} десять`;
          return `${twoChoice} ${two_digit_teen[number - 1011]}`;
        } else if (splittedNumber[2] > 1) {
          if (splittedNumber[3] === 0) {
            return `${twoChoice} ${two_digit[splittedNumber[2] - 1]}`;
          }
          return `${twoChoice} ${two_digit[splittedNumber[2] - 1]} ${
            simple[splittedNumber[3] - 1]
          }`;
        }
      } else {
        if (splittedNumber[3] === 0) {
          if (splittedNumber[2] === 0) {
            return `${twoChoice} ${three_digit[splittedNumber[1] - 1]}`;
          }
          return `${twoChoice} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          }`;
        }
      }

      return splittedNumber[2] === 1
        ? ` ${twoChoice} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit_teen[Number(splittedNumber.slice(2).join("")) - 11]
          }`
        : `${twoChoice} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          } ${simple[splittedNumber[3] - 1]}`;
    } else {
      const nThousand = `${simple[splittedNumber[0] - 1]} ${thousand[2]}`;
      if (
        splittedNumber[1] === 0 &&
        splittedNumber[2] === 0 &&
        splittedNumber[3] === 0
      ) {
        return nThousand;
      } else if (splittedNumber[1] === 0 && splittedNumber[2] === 0) {
        return `${nThousand} ${simple[splittedNumber[3] - 1]}`;
      } else if (splittedNumber[1] === 0) {
        if (splittedNumber[2] === 1) {
          if (splittedNumber[3] === 0) return `${nThousand} десять`;
          return `${nThousand} ${two_digit_teen[number - 1011]}`;
        } else if (splittedNumber[2] > 1) {
          if (splittedNumber[3] === 0) {
            return `${nThousand} ${two_digit[splittedNumber[2] - 1]}`;
          }
          return `${nThousand} ${two_digit[splittedNumber[2] - 1]} ${
            simple[splittedNumber[3] - 1]
          }`;
        }
      } else {
        if (splittedNumber[3] === 0) {
          if (splittedNumber[2] === 0) {
            return `${nThousand} ${three_digit[splittedNumber[1] - 1]}`;
          }
          return `${nThousand} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          }`;
        }
      }

      return splittedNumber[2] === 1
        ? ` ${nThousand} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit_teen[Number(splittedNumber.slice(2).join("")) - 11]
          }`
        : `${nThousand} ${three_digit[splittedNumber[1] - 1]} ${
            two_digit[splittedNumber[2] - 1]
          } ${simple[splittedNumber[3] - 1]}`;
    }
  }
  if (numberString.length === 5) {
    const tenChoice =
      splittedNumber[0] === 1
        ? "десять"
        : `${two_digit[splittedNumber[0] - 1]}`;

    if (
      splittedNumber[1] === 0 &&
      splittedNumber[2] === 0 &&
      splittedNumber[3] === 0 &&
      splittedNumber[4] === 0
    ) {
      return `${tenChoice} ${thousand[2]}`;
    } else if (
      splittedNumber[1] === 0 &&
      splittedNumber[2] === 0 &&
      splittedNumber[3] === 0
    ) {
      if (splittedNumber[0] > 0) {
        return `${tenChoice} ${thousand[2]} ${simple[splittedNumber[4] - 1]}`;
      }
    } else if (splittedNumber[1] === 0 && splittedNumber[2] === 0) {
      const teensChoice =
        splittedNumber[3] === 1
          ? `${tenChoice} ${thousand[2]} ${
              two_digit_teen[Number(splittedNumber.slice(3, 5).join("")) - 11]
            }`
          : `${tenChoice} ${thousand[2]} ${two_digit[splittedNumber[3] - 1]} ${
              simple[splittedNumber[4] - 1]
            }`;
      return teensChoice;
    } else if (splittedNumber[1] === 0) {
      const teensChoice =
        splittedNumber[3] === 1
          ? `${tenChoice} ${thousand[2]} ${
              three_digit[splittedNumber[3] - 1]
            }  ${
              two_digit_teen[Number(splittedNumber.slice(3, 5).join("")) - 11]
            }`
          : `${tenChoice} ${thousand[2]} ${
              three_digit[splittedNumber[2] - 1]
            } ${two_digit[splittedNumber[3] - 1]} ${
              simple[splittedNumber[4] - 1]
            }`;
      return teensChoice;
    } else {
      const teensChoice =
        splittedNumber[3] === 1
          ? `${
              two_digit_teen[Number(splittedNumber.slice(3, 5).join("")) - 11]
            }`
          : `${two_digit[splittedNumber[3] - 1]} ${
              simple[splittedNumber[4] - 1]
            }`;
      if (splittedNumber[0] === 1) {
        return `${
          two_digit_teen[Number(splittedNumber.slice(0, 2).join("")) - 11]
        } ${thousand[2]} ${three_digit[splittedNumber[2] - 1]} ${teensChoice}`;
      } else if (splittedNumber[0] > 1) {
        if (splittedNumber[1] === 1) {
          return `${two_digit[splittedNumber[0] - 1]} одна ${thousand[0]} ${
            three_digit[splittedNumber[2] - 1]
          } ${teensChoice}`;
        } else if (splittedNumber[1] === 2) {
          return `${two_digit[splittedNumber[0] - 1]} две ${thousand[1]} ${
            three_digit[splittedNumber[2] - 1]
          } ${teensChoice}`;
        } else if (splittedNumber[1] > 2 && splittedNumber[1] < 5) {
          return `${two_digit[splittedNumber[0] - 1]} ${
            simple[splittedNumber[1] - 1]
          } ${thousand[1]} ${
            three_digit[splittedNumber[2] - 1]
          } ${teensChoice}`;
        } else
          return `${two_digit[splittedNumber[0] - 1]} ${
            simple[splittedNumber[1] - 1]
          } ${thousand[2]} ${
            three_digit[splittedNumber[2] - 1]
          } ${teensChoice}`;
      }
    }
  }

  return `${three_digit[0]} ${thousand[2]}`;
}

console.log(translator(19323));

// return two_digit_teen[Number(splittedNumber.slice(0, 2).join("")) - 1];
