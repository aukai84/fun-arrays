var dataset = require('./dataset.json');
let bankBalances = dataset.bankBalances;
/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
function greaterNumber(element, index, array) {
    if(element.amount > 100000){
        return true;
    } else {
        return false;
    }
}
var hundredThousandairs = bankBalances.filter(greaterNumber);

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
function rounded(element, index, array) {
    let object = {};
    object.rounded = Math.round(element.amount);
    object.state = element.state;
    return object;

}
var roundedDollar = bankBalances.map(rounded);
/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
function changeAmount(element, index, array) {
    let object = {};
    object.amount = Math.round(element.amount*10)/10;
    object.state = element.state;
    return object;
}
var roundedDime = bankBalances.map(changeAmount);

// set sumOfBankBalances to the sum of all amounts in bankBalances

function sumAmounts(previous, current, index, array) {
    let newNumber = previous + parseFloat(current.amount);
    return Math.round(newNumber*100)/100;
}

var sumOfBankBalances = bankBalances.reduce(sumAmounts, 0);

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
 function filterState(element, index, array) {
     switch (element.state) {
        case "WI":
            return true;
            break;
        case "IL":
            return true;
            break;
        case "WY":
            return true;
            break;
        case "OH":
            return true;
            break;
        case "GA":
            return true;
            break;
        case "DE":
            return true;
            break;
        default:
            return false;
     }
 }

 function sumInterest(prev, curr, index, array){
    let interest = curr.amount * (18.9/100);
    let total = prev + interest;
    return Math.round(total*100)/100;
 }

 var sumOfInterests = bankBalances.filter(filterState).reduce(sumInterest, 0);

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
