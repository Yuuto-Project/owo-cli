/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/owoify.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/owoify-js/dist/owoify-js.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/owoify-js/dist/owoify-js.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction searchValueContainsReplacedWords(searchValue, replaceValue, replacedWords) {\n  return Array.from(replacedWords).some(function (word) {\n    return word.replace(searchValue, replaceValue) !== word;\n  });\n}\n\nvar Word =\n/*#__PURE__*/\nfunction () {\n  function Word(word) {\n    this.word = word.trim();\n    this.replacedWords = new Set();\n  }\n\n  var _proto = Word.prototype;\n\n  _proto.replace = function replace(searchValue, replaceValue, replaceReplacedWords) {\n    if (replaceReplacedWords === void 0) {\n      replaceReplacedWords = false;\n    }\n\n    if (!replaceReplacedWords && searchValueContainsReplacedWords(searchValue, replaceValue, this.replacedWords)) return this;\n    var replacingWord = this.word.replace(searchValue, replaceValue).trim();\n    var matchArray = this.word.match(searchValue);\n    var replacedWords = matchArray !== null ? Array.from(matchArray).map(function (x) {\n      return x.replace(x, replaceValue);\n    }) : [];\n\n    if (replacingWord !== this.word) {\n      for (var _iterator = replacedWords, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {\n        var _ref;\n\n        if (_isArray) {\n          if (_i >= _iterator.length) break;\n          _ref = _iterator[_i++];\n        } else {\n          _i = _iterator.next();\n          if (_i.done) break;\n          _ref = _i.value;\n        }\n\n        var word = _ref;\n        this.replacedWords.add(word);\n      }\n\n      this.word = replacingWord;\n    }\n\n    return this;\n  };\n\n  _proto.toString = function toString() {\n    return this.word;\n  };\n\n  return Word;\n}();\n\nfunction interleaveArrays(a, b) {\n  var arr = [];\n  var observed = a;\n  var other = b;\n  var temp = null;\n\n  while (observed.length > 0) {\n    arr.push(observed.shift());\n    temp = observed;\n    observed = other;\n    other = temp;\n  }\n\n  if (other.length > 0) arr.push.apply(arr, other);\n  return arr;\n}\n\nvar faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^', '(* ^ ω ^)', '(⌒ω⌒)', 'ヽ(*・ω・)ﾉ', '(o´∀`o)', '(o･ω･o)', '＼(＾▽＾)／'];\nvar Map_O_To_OwO = function Map_O_To_OwO(input) {\n  return input.replace(/o/g, function () {\n    return Math.round(Math.random()) ? 'owo' : 'o';\n  });\n};\nvar Map_Ew_To_UwU = function Map_Ew_To_UwU(input) {\n  return input.replace(/ew/g, 'uwu');\n};\nvar Map_Hey_To_Hay = function Map_Hey_To_Hay(input) {\n  return input.replace(/([Hh])ey/g, '$1ay');\n};\nvar Map_Dead_To_Ded = function Map_Dead_To_Ded(input) {\n  return input.replace(/Dead/g, 'Ded').replace(/dead/g, 'ded');\n};\nvar Map_N_Vowel_T_To_Nd = function Map_N_Vowel_T_To_Nd(input) {\n  return input.replace(/n[aeiou]*t/g, 'nd');\n};\nvar Map_Read_To_Wead = function Map_Read_To_Wead(input) {\n  return input.replace(/Read/g, 'Wead').replace(/read/g, 'wead');\n};\nvar Map_Brackets_To_StarTrails = function Map_Brackets_To_StarTrails(input) {\n  return input.replace(/[({<]/g, '｡･:*:･ﾟ★,｡･:*:･ﾟ☆').replace(/[)}>]/g, '☆ﾟ･:*:･｡,★ﾟ･:*:･｡');\n};\nvar Map_PeriodCommaExclamationSemicolon_To_Kaomojis = function Map_PeriodCommaExclamationSemicolon_To_Kaomojis(input) {\n  return input.replace(/[.,](?![0-9])/g, function () {\n    return ' ' + faces[Math.floor(Math.random() * faces.length)];\n  }).replace(/[!;]+/g, function () {\n    return ' ' + faces[Math.floor(Math.random() * faces.length)];\n  });\n};\nvar Map_That_To_Dat = function Map_That_To_Dat(input) {\n  return input.replace(/that/g, 'dat').replace(/That/g, 'Dat');\n};\nvar Map_Th_To_F = function Map_Th_To_F(input) {\n  return input.replace(/[Tt]h(?![Ee])/g, 'f').replace(/TH(?!E)/g, 'F');\n};\nvar Map_Le_To_Wal = function Map_Le_To_Wal(input) {\n  return input.replace(/le$/g, 'wal');\n};\nvar Map_Ve_To_We = function Map_Ve_To_We(input) {\n  return input.replace(/ve/g, 'we').replace(/Ve/g, 'We');\n};\nvar Map_Ry_To_Wwy = function Map_Ry_To_Wwy(input) {\n  return input.replace(/ry/g, 'wwy');\n};\nvar Map_ROrL_To_W = function Map_ROrL_To_W(input) {\n  return input.replace(/(?:r|l)/g, 'w').replace(/(?:R|L)/g, 'W');\n};\nvar Map_Ll_To_Ww = function Map_Ll_To_Ww(input) {\n  return input.replace(/ll/g, 'ww');\n};\nvar Map_VowelOrRExceptO_L_To_Wl = function Map_VowelOrRExceptO_L_To_Wl(input) {\n  return input.replace(/[aeiur]l$/g, 'wl').replace(/[AEIUR]([lL])$/g, 'W$1');\n};\nvar Map_Old_To_Owld = function Map_Old_To_Owld(input) {\n  return input.replace(/([Oo])ld/g, '$1wld').replace(/OLD/g, 'OWLD');\n};\nvar Map_Ol_To_Owl = function Map_Ol_To_Owl(input) {\n  return input.replace(/([Oo])l/g, '$1wl').replace(/OL/g, 'OWL');\n};\nvar Map_LOrR_O_To_Wo = function Map_LOrR_O_To_Wo(input) {\n  return input.replace(/[lr]o/g, 'wo').replace(/[LR]([oO])/g, 'W$1');\n};\nvar Map_SpecificConsonants_O_To_Letter_And_Wo = function Map_SpecificConsonants_O_To_Letter_And_Wo(input) {\n  return input.replace(/([bcdfghjkmnpqstxyz])o/g, '$1wo').replace(/([BCDFGHJKMNPQSTXYZ])([oO])/g, function (_, m1, m2) {\n    return m1 + (m2.toUpperCase() === m2 ? 'W' : 'w') + m2;\n  });\n};\nvar Map_VOrW_Le_To_Wal = function Map_VOrW_Le_To_Wal(input) {\n  return input.replace(/[vw]le/g, 'wal');\n};\nvar Map_Fi_To_Fwi = function Map_Fi_To_Fwi(input) {\n  return input.replace(/([Ff])i/g, '$1wi').replace(/FI/g, 'FWI');\n};\nvar Map_Ver_To_Wer = function Map_Ver_To_Wer(input) {\n  return input.replace(/([Vv])er/g, 'wer');\n};\nvar Map_Poi_To_Pwoi = function Map_Poi_To_Pwoi(input) {\n  return input.replace(/([Pp])oi/g, '$1woi');\n};\nvar Map_SpecificConsonants_Le_To_Letter_And_Wal = function Map_SpecificConsonants_Le_To_Letter_And_Wal(input) {\n  return input.replace(/([DdFfGgHhJjPpQqRrSsTtXxYyZz])le$/g, '$1wal');\n};\nvar Map_Consonant_R_To_Consonant_W = function Map_Consonant_R_To_Consonant_W(input) {\n  return input.replace(/([BbCcDdFfGgKkPpQqSsTtWwXxZz])r/g, '$1w');\n};\nvar Map_Ly_To_Wy = function Map_Ly_To_Wy(input) {\n  return input.replace(/ly/g, 'wy').replace(/Ly/g, 'Wy');\n};\nvar Map_Ple_To_Pwe = function Map_Ple_To_Pwe(input) {\n  return input.replace(/([Pp])le/g, '$1we');\n};\nvar Map_Nr_To_Nw = function Map_Nr_To_Nw(input) {\n  return input.replace(/nr/g, 'nw').replace(/NR/g, 'NW');\n};\nvar Map_Fuc_To_Fwuc = function Map_Fuc_To_Fwuc(input) {\n  return input.replace(/([Ff])uc/g, '$1wuc');\n};\nvar Map_Mom_To_Mwom = function Map_Mom_To_Mwom(input) {\n  return input.replace(/([Mm])om/g, '$1wom');\n};\nvar Map_Me_To_Mwe = function Map_Me_To_Mwe(input) {\n  return input.replace(/([Mm])e/g, '$1we');\n};\nvar Map_NVowel_To_Ny = function Map_NVowel_To_Ny(input) {\n  return input.replace(/n([aeiou])/g, 'ny$1').replace(/N([aeiou])/g, 'Ny$1').replace(/N([AEIOU])/g, 'NY$1');\n};\nvar Map_Ove_To_Uv = function Map_Ove_To_Uv(input) {\n  return input.replace(/ove/g, 'uv').replace(/OVE/g, 'UV');\n};\nvar Map_Haha_To_HehexD = function Map_Haha_To_HehexD(input) {\n  return input.replace(/\\b(ha|hah|heh|hehe)+\\b/g, 'hehe xD');\n};\nvar Map_The_To_Teh = function Map_The_To_Teh(input) {\n  return input.replace(/\\b([Tt])he\\b/g, '$1eh');\n};\nvar Map_You_To_U = function Map_You_To_U(input) {\n  return input.replace(/\\bYou\\b/g, 'U').replace(/\\byou\\b/g, 'u');\n};\nvar Map_Time_To_Tim = function Map_Time_To_Tim(input) {\n  return input.replace(/\\b([Tt])ime\\b/g, '$1im');\n};\nvar Map_Over_To_Owor = function Map_Over_To_Owor(input) {\n  return input.replace(/([Oo])ver/g, '$1wor');\n};\nvar Map_Worse_To_Wose = function Map_Worse_To_Wose(input) {\n  return input.replace(/([Ww])orse/g, '$1ose');\n};\n\nvar specificWordMappingArray = [Map_Fuc_To_Fwuc, Map_Mom_To_Mwom, Map_Time_To_Tim, Map_Me_To_Mwe, Map_NVowel_To_Ny, Map_Over_To_Owor, Map_Ove_To_Uv, Map_Haha_To_HehexD, Map_The_To_Teh, Map_You_To_U, Map_Read_To_Wead, Map_Worse_To_Wose];\nvar uvuMappingArray = [Map_O_To_OwO, Map_Ew_To_UwU, Map_Hey_To_Hay, Map_Dead_To_Ded, Map_N_Vowel_T_To_Nd];\nvar uwuMappingArray = [Map_Brackets_To_StarTrails, Map_PeriodCommaExclamationSemicolon_To_Kaomojis, Map_That_To_Dat, Map_Th_To_F, Map_Le_To_Wal, Map_Ve_To_We, Map_Ry_To_Wwy, Map_ROrL_To_W];\nvar owoMappingArray = [Map_Ll_To_Ww, Map_VowelOrRExceptO_L_To_Wl, Map_Old_To_Owld, Map_Ol_To_Owl, Map_LOrR_O_To_Wo, Map_SpecificConsonants_O_To_Letter_And_Wo, Map_VOrW_Le_To_Wal, Map_Fi_To_Fwi, Map_Ver_To_Wer, Map_Poi_To_Pwoi, Map_SpecificConsonants_Le_To_Letter_And_Wal, Map_Consonant_R_To_Consonant_W, Map_Ly_To_Wy, Map_Ple_To_Pwe, Map_Nr_To_Nw];\n\nfunction owoify(v, level) {\n  if (level === void 0) {\n    level = 'owo';\n  }\n\n  var whitespace = v.split(/[^\\s]+/g);\n  var words = v.split(/\\s+/g).map(function (x) {\n    return new Word(x);\n  });\n  words = words.map(function (x) {\n    x = specificWordMappingArray.reduce(function (word, f) {\n      return f(word);\n    }, x);\n\n    switch (level) {\n      case 'uvu':\n        x = uvuMappingArray.reduce(function (word, f) {\n          return f(word);\n        }, x);\n\n      case 'uwu':\n        x = uwuMappingArray.reduce(function (word, f) {\n          return f(word);\n        }, x);\n\n      case 'owo':\n        x = owoMappingArray.reduce(function (word, f) {\n          return f(word);\n        }, x);\n    }\n\n    return x;\n  });\n  return interleaveArrays(whitespace, words).join('');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (owoify);\n//# sourceMappingURL=owoify-js.esm.js.map\n\n\n//# sourceURL=webpack:///./node_modules/owoify-js/dist/owoify-js.esm.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/owoify.js":
/*!***********************!*\
  !*** ./src/owoify.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {const owoify = __webpack_require__(/*! owoify-js */ \"./node_modules/owoify-js/dist/owoify-js.esm.js\");\n\nconsole.log(owoify.default(process.argv[3], process.argv[2]));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/owoify.js?");

/***/ })

/******/ });