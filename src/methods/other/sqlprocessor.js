/**
 * @Copyright 2021 Arth(https://github.com/4i8/)
 */
function sqlprocessor(str, code, sigh = ",") {
  let Central = `${str}`.split(sigh);
  let Output = [];
  for (let index = 0; index < Central.length; index++) {
    Output.push(`${code}${Central[index]}${code}`);
  }
  return Output.toString();
}
module.exports = sqlprocessor;
/**
 * @Copyright 2021 Arth(https://github.com/4i8/)
 */
