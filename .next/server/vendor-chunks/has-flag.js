"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag";
exports.ids = ["vendor-chunks/has-flag"];
exports.modules = {

/***/ "(rsc)/./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (flag, argv) {\n  argv = argv || process.argv;\n  var prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';\n  var pos = argv.indexOf(prefix + flag);\n  var terminatorPos = argv.indexOf('--');\n  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFLO0VBQ2hDQSxJQUFJLEdBQUdBLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJO0VBQzNCLElBQU1FLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFJSixJQUFJLENBQUNLLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUs7RUFDM0UsSUFBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLE9BQU8sQ0FBQ0osTUFBTSxHQUFHSCxJQUFJLENBQUM7RUFDdkMsSUFBTVEsYUFBYSxHQUFHUCxJQUFJLENBQUNNLE9BQU8sQ0FBQyxJQUFJLENBQUM7RUFDeEMsT0FBT0QsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLRSxhQUFhLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHRixHQUFHLEdBQUdFLGFBQWEsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdGVzdC1zZXR1cC8uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcz9mM2Y2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKGZsYWcsIGFyZ3YpID0+IHtcblx0YXJndiA9IGFyZ3YgfHwgcHJvY2Vzcy5hcmd2O1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvcyA9IGFyZ3YuaW5kZXhPZihwcmVmaXggKyBmbGFnKTtcblx0Y29uc3QgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcblx0cmV0dXJuIHBvcyAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3MgPT09IC0xID8gdHJ1ZSA6IHBvcyA8IHRlcm1pbmF0b3JQb3MpO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZmxhZyIsImFyZ3YiLCJwcm9jZXNzIiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImxlbmd0aCIsInBvcyIsImluZGV4T2YiLCJ0ZXJtaW5hdG9yUG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/has-flag/index.js\n");

/***/ })

};
;