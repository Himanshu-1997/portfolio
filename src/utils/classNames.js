import * as R from "ramda";


let takeZeroeth = R.nth(0);
let takeFirst = R.nth(1);
let takeWithFirstTrue = R.filter(takeFirst);
const getTruthfulKeys = R.compose(
  R.map(takeZeroeth),
  takeWithFirstTrue,
  R.toPairs
);
/**
 * It accepts strings, objects as arg and returns class string
 * e.g
 * 1. classNames('c1', 'c2', 'c3') => 'c1 c2 c3'
 * 2. classNames('c1', {c2: true, c3: false}) => 'c1 c2'
 * @returns {string}
 */

// type IArgType = string | ({ [key: string]: boolean });
const classNames = function (...args) {
  const classes = []
    .concat(...arguments)
    .reduce((acc, val) => {
      if (typeof val === "string") acc.push(val);
      else if (typeof val === "object") {
        const getClasses = R.compose(
          R.concat(acc),
          getTruthfulKeys
        );
        return getClasses(val);
      }
      return acc;
    }, []);
  return classes.join(" ");
};

export default classNames;
