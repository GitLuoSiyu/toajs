'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SDK_NAME = 'mitojs';
var SDK_VERSION = '2.0.0';
var SERVER_URL = '//localhost:3000/api/error/upload';

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var ERRORTYPES;
(function (ERRORTYPES) {
    ERRORTYPES["UNKNOWN"] = "UNKNOWN";
    ERRORTYPES["UNKNOWN_FUNCTION"] = "UNKNOWN_FUNCTION";
    ERRORTYPES["JAVASCRIPT_ERROR"] = "JAVASCRIPT_ERROR";
    ERRORTYPES["LOG_ERROR"] = "LOG_ERROR";
    ERRORTYPES["FETCH_ERROR"] = "HTTP_ERROR";
    ERRORTYPES["VUE_ERROR"] = "VUE_ERROR";
    ERRORTYPES["REACT_ERROR"] = "REACT_ERROR";
    ERRORTYPES["RESOURCE_ERROR"] = "RESOURCE_ERROR";
    ERRORTYPES["PROMISE_ERROR"] = "PROMISE_ERROR";
    ERRORTYPES["ROUTE_ERROR"] = "ROUTE_ERROR";
})(ERRORTYPES || (ERRORTYPES = {}));
var WxAppEvents;
(function (WxAppEvents) {
    WxAppEvents["AppOnLaunch"] = "AppOnLaunch";
    WxAppEvents["AppOnShow"] = "AppOnShow";
    WxAppEvents["AppOnHide"] = "AppOnHide";
    WxAppEvents["AppOnError"] = "AppOnError";
    WxAppEvents["AppOnPageNotFound"] = "AppOnPageNotFound";
    WxAppEvents["AppOnUnhandledRejection"] = "AppOnUnhandledRejection";
})(WxAppEvents || (WxAppEvents = {}));
var WxPageEvents;
(function (WxPageEvents) {
    WxPageEvents["PageOnShow"] = "PageOnShow";
    WxPageEvents["PageOnHide"] = "PageOnHide";
    WxPageEvents["PageOnShareAppMessage"] = "PageOnShareAppMessage";
    WxPageEvents["PageOnShareTimeline"] = "PageOnShareTimeline";
    WxPageEvents["PageOnTabItemTap"] = "PageOnTabItemTap";
})(WxPageEvents || (WxPageEvents = {}));
var WxRouteEvents;
(function (WxRouteEvents) {
    WxRouteEvents["SwitchTab"] = "switchTab";
    WxRouteEvents["ReLaunch"] = "reLaunch";
    WxRouteEvents["RedirectTo"] = "redirectTo";
    WxRouteEvents["NavigateTo"] = "navigateTo";
    WxRouteEvents["NavigateBack"] = "navigateBack";
    WxRouteEvents["RouteFail"] = "routeFail";
})(WxRouteEvents || (WxRouteEvents = {}));
__assign(__assign(__assign({}, WxAppEvents), WxPageEvents), ERRORTYPES);
var BREADCRUMBTYPES;
(function (BREADCRUMBTYPES) {
    BREADCRUMBTYPES["ROUTE"] = "Route";
    BREADCRUMBTYPES["CLICK"] = "UI.Click";
    BREADCRUMBTYPES["CONSOLE"] = "Console";
    BREADCRUMBTYPES["XHR"] = "Xhr";
    BREADCRUMBTYPES["FETCH"] = "Fetch";
    BREADCRUMBTYPES["UNHANDLEDREJECTION"] = "Unhandledrejection";
    BREADCRUMBTYPES["VUE"] = "Vue";
    BREADCRUMBTYPES["REACT"] = "React";
    BREADCRUMBTYPES["RESOURCE"] = "Resource";
    BREADCRUMBTYPES["CODE_ERROR"] = "Code Error";
    BREADCRUMBTYPES["CUSTOMER"] = "Customer";
    BREADCRUMBTYPES["APP_ON_SHOW"] = "App On Show";
    BREADCRUMBTYPES["APP_ON_LAUNCH"] = "App On Launch";
    BREADCRUMBTYPES["APP_ON_HIDE"] = "App On Hide";
    BREADCRUMBTYPES["PAGE_ON_SHOW"] = "Page On Show";
    BREADCRUMBTYPES["PAGE_ON_HIDE"] = "Page On Hide";
    BREADCRUMBTYPES["PAGE_ON_SHARE_APP_MESSAGE"] = "Page On Share App Message";
    BREADCRUMBTYPES["PAGE_ON_SHARE_TIMELINE"] = "Page On Share Timeline";
    BREADCRUMBTYPES["PAGE_ON_TAB_ITEM_TAP"] = "Page On Tab Item Tap";
    BREADCRUMBTYPES["TAP"] = "UI.Tap";
    BREADCRUMBTYPES["TOUCHMOVE"] = "UI.Touchmove";
})(BREADCRUMBTYPES || (BREADCRUMBTYPES = {}));
var BREADCRUMBCATEGORYS;
(function (BREADCRUMBCATEGORYS) {
    BREADCRUMBCATEGORYS["HTTP"] = "http";
    BREADCRUMBCATEGORYS["USER"] = "user";
    BREADCRUMBCATEGORYS["DEBUG"] = "debug";
    BREADCRUMBCATEGORYS["EXCEPTION"] = "exception";
    BREADCRUMBCATEGORYS["LIFECYCLE"] = "lifecycle";
})(BREADCRUMBCATEGORYS || (BREADCRUMBCATEGORYS = {}));
var EVENTTYPES;
(function (EVENTTYPES) {
    EVENTTYPES["XHR"] = "xhr";
    EVENTTYPES["FETCH"] = "fetch";
    EVENTTYPES["CONSOLE"] = "console";
    EVENTTYPES["DOM"] = "dom";
    EVENTTYPES["HISTORY"] = "history";
    EVENTTYPES["ERROR"] = "error";
    EVENTTYPES["HASHCHANGE"] = "hashchange";
    EVENTTYPES["UNHANDLEDREJECTION"] = "unhandledrejection";
    EVENTTYPES["MITO"] = "mito";
    EVENTTYPES["VUE"] = "Vue";
    EVENTTYPES["MINI_ROUTE"] = "miniRoute";
})(EVENTTYPES || (EVENTTYPES = {}));
var HTTPTYPE;
(function (HTTPTYPE) {
    HTTPTYPE["XHR"] = "xhr";
    HTTPTYPE["FETCH"] = "fetch";
})(HTTPTYPE || (HTTPTYPE = {}));
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_CODE[HTTP_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_CODE[HTTP_CODE["INTERNAL_EXCEPTION"] = 500] = "INTERNAL_EXCEPTION";
})(HTTP_CODE || (HTTP_CODE = {}));
var globalVar = {
    isLogAddBreadcrumb: true,
    crossOriginThreshold: 1000
};

var nativeToString = Object.prototype.toString;
function isType(type) {
    return function (value) {
        return nativeToString.call(value) === "[object " + type + "]";
    };
}
var variableTypeDetection = {
    isNumber: isType('Number'),
    isString: isType('String'),
    isBoolean: isType('Boolean'),
    isNull: isType('Null'),
    isUndefined: isType('Undefined'),
    isSymbol: isType('Symbol'),
    isFunction: isType('Function'),
    isObject: isType('Object'),
    isArray: isType('Array'),
    isProcess: isType('process'),
    isWindow: isType('Window')
};
function isError(wat) {
    switch (nativeToString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}

var isNodeEnv = variableTypeDetection.isProcess(typeof process !== 'undefined' ? process : 0);
var isWxMiniEnv = variableTypeDetection.isObject(typeof wx !== 'undefined' ? wx : 0) &&
    variableTypeDetection.isFunction(typeof App !== 'undefined' ? App : 0);
var isBrowserEnv = variableTypeDetection.isWindow(typeof window !== 'undefined' ? window : 0);
function getGlobal() {
    if (isBrowserEnv)
        return window;
    if (isWxMiniEnv)
        return wx;
    if (isNodeEnv)
        return process;
}
var _global = getGlobal();
var _support = getGlobalMitoSupport();
_support.replaceFlag = _support.replaceFlag || {};
var replaceFlag = _support.replaceFlag;
function setFlag(replaceType, isSet) {
    if (replaceFlag[replaceType])
        return;
    replaceFlag[replaceType] = isSet;
}
function getFlag(replaceType) {
    return replaceFlag[replaceType] ? true : false;
}
function getGlobalMitoSupport() {
    _global.__MITO__ = _global.__MITO__ || {};
    return _global.__MITO__;
}

var PREFIX = 'MITO Logger';
var Logger = (function () {
    function Logger() {
        var _this = this;
        this.enabled = false;
        this._console = {};
        _global.console = console || _global.console;
        if (console || _global.console) {
            var logType = ['log', 'debug', 'info', 'warn', 'error', 'assert'];
            logType.forEach(function (level) {
                if (!(level in _global.console))
                    return;
                _this._console[level] = _global.console[level];
            });
        }
    }
    Logger.prototype.disable = function () {
        this.enabled = false;
    };
    Logger.prototype.bindOptions = function (debug) {
        this.enabled = debug ? true : false;
    };
    Logger.prototype.enable = function () {
        this.enabled = true;
    };
    Logger.prototype.getEnableStatus = function () {
        return this.enabled;
    };
    Logger.prototype.log = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        (_a = this._console).log.apply(_a, __spreadArrays([PREFIX + "[Log]:"], args));
    };
    Logger.prototype.warn = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        (_a = this._console).warn.apply(_a, __spreadArrays([PREFIX + "[Warn]:"], args));
    };
    Logger.prototype.error = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        (_a = this._console).error.apply(_a, __spreadArrays([PREFIX + "[Error]:"], args));
    };
    return Logger;
}());
var logger = _support.logger || (_support.logger = new Logger());

function getLocationHref() {
    if (typeof document === 'undefined' || document.location == null)
        return '';
    return document.location.href;
}
var defaultFunctionName = '<anonymous>';
function getFunctionName(fn) {
    if (!fn || typeof fn !== 'function') {
        return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
}
function getTimestamp() {
    return Date.now();
}
function typeofAny(target, type) {
    return typeof target === type;
}
function toStringAny(target, type) {
    return nativeToString.call(target) === type;
}
function validateOption(target, targetName, expectType) {
    if (typeofAny(target, expectType))
        return true;
    typeof target !== 'undefined' && logger.error(targetName + "\u671F\u671B\u4F20\u5165" + expectType + "\u7C7B\u578B\uFF0C\u76EE\u524D\u662F" + typeof target + "\u7C7B\u578B");
    return false;
}
function toStringValidateOption(target, targetName, expectType) {
    if (toStringAny(target, expectType))
        return true;
    typeof target !== 'undefined' && logger.error(targetName + "\u671F\u671B\u4F20\u5165" + expectType + "\u7C7B\u578B\uFF0C\u76EE\u524D\u662F" + nativeToString.call(target) + "\u7C7B\u578B");
    return false;
}
function slientConsoleScope(callback) {
    globalVar.isLogAddBreadcrumb = false;
    callback();
    globalVar.isLogAddBreadcrumb = true;
}
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
function unknownToString(target) {
    if (variableTypeDetection.isString(target)) {
        return target;
    }
    if (variableTypeDetection.isUndefined(target)) {
        return 'undefined';
    }
    return JSON.stringify(target);
}
function setUrlQuery(url, query) {
    var queryArr = [];
    Object.keys(query).forEach(function (k) {
        queryArr.push(k + "=" + query[k]);
    });
    if (url.indexOf('?') !== -1) {
        url = url + "&" + queryArr.join('&');
    }
    else {
        url = url + "?" + queryArr.join('&');
    }
    return url;
}
function getCurrentRoute() {
    if (!variableTypeDetection.isFunction(getCurrentPages)) {
        return '';
    }
    var pages = getCurrentPages();
    if (!pages.length) {
        return 'App';
    }
    var currentPage = pages.pop();
    return setUrlQuery(currentPage.route, currentPage.options);
}

function setSilentFlag(opitons) {
    if (opitons === void 0) { opitons = {}; }
    setFlag(EVENTTYPES.XHR, !!opitons.silentXhr);
    setFlag(EVENTTYPES.FETCH, !!opitons.silentFetch);
    setFlag(EVENTTYPES.CONSOLE, !!opitons.silentConsole);
    setFlag(EVENTTYPES.DOM, !!opitons.silentDom);
    setFlag(EVENTTYPES.HISTORY, !!opitons.silentHistory);
    setFlag(EVENTTYPES.ERROR, !!opitons.silentError);
    setFlag(EVENTTYPES.HASHCHANGE, !!opitons.silentHashchange);
    setFlag(EVENTTYPES.UNHANDLEDREJECTION, !!opitons.silentUnhandledrejection);
    setFlag(EVENTTYPES.VUE, !!opitons.silentVue);
    setFlag(WxAppEvents.AppOnError, !!opitons.silentWxOnError);
    setFlag(WxAppEvents.AppOnUnhandledRejection, !!opitons.silentUnhandledrejection);
    setFlag(WxAppEvents.AppOnPageNotFound, !!opitons.silentWxOnPageNotFound);
    setFlag(WxPageEvents.PageOnShareAppMessage, !!opitons.silentWxOnShareAppMessage);
    setFlag(EVENTTYPES.MINI_ROUTE, !!opitons.silentMiniRoute);
}
function extractErrorStack(ex, level) {
    var normal = {
        time: getTimestamp(),
        url: getLocationHref(),
        name: ex.name,
        level: level,
        message: ex.message
    };
    if (typeof ex.stack === 'undefined' || !ex.stack) {
        return normal;
    }
    var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/, lines = ex.stack.split('\n'), stack = [];
    var submatch, parts, element;
    for (var i = 0, j = lines.length; i < j; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0;
            var isEval = parts[2] && parts[2].indexOf('eval') === 0;
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                parts[2] = submatch[1];
                parts[3] = submatch[2];
                parts[4] = submatch[3];
            }
            element = {
                url: !isNative ? parts[2] : null,
                func: parts[1] || ERRORTYPES.UNKNOWN_FUNCTION,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || ERRORTYPES.UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = null;
            }
            else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
                stack[0].column = ex.columnNumber + 1;
            }
            element = {
                url: parts[3],
                func: parts[1] || ERRORTYPES.UNKNOWN_FUNCTION,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = ERRORTYPES.UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return __assign(__assign({}, normal), { stack: stack });
}

function nativeTryCatch(fn, errorFn) {
    try {
        fn();
    }
    catch (err) {
        console.log('err', err);
        if (errorFn) {
            errorFn(err);
        }
    }
}

var Queue = (function () {
    function Queue() {
        this.stack = [];
        this.isFlushing = false;
        if (!('Promise' in _global))
            return;
        this.micro = Promise.resolve();
    }
    Queue.prototype.addFn = function (fn) {
        var _this = this;
        if (typeof fn !== 'function')
            return;
        if (!('Promise' in _global)) {
            fn();
            return;
        }
        this.stack.push(fn);
        if (!this.isFlushing) {
            this.isFlushing = true;
            this.micro.then(function () { return _this.flushStack(); });
        }
    };
    Queue.prototype.clear = function () {
        this.stack = [];
    };
    Queue.prototype.getStack = function () {
        return this.stack;
    };
    Queue.prototype.flushStack = function () {
        var temp = this.stack.slice(0);
        this.stack.length = 0;
        this.isFlushing = false;
        for (var i = 0; i < temp.length; i++) {
            temp[i]();
        }
    };
    return Queue;
}());

var Severity;
(function (Severity) {
    Severity["Else"] = "else";
    Severity["Error"] = "error";
    Severity["Warning"] = "warning";
    Severity["Info"] = "info";
    Severity["Debug"] = "debug";
    Severity["Low"] = "low";
    Severity["Normal"] = "normal";
    Severity["High"] = "high";
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
(function (Severity) {
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
            case 'log':
            case 'assert':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case Severity.Low:
            case Severity.Normal:
            case Severity.High:
            case Severity.Critical:
            case 'error':
                return Severity.Error;
            default:
                return Severity.Else;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));

function getAppId() {
    return wx.getAccountInfoSync().miniProgram.appId;
}

var SpanStatus;
(function (SpanStatus) {
    SpanStatus["Ok"] = "ok";
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    SpanStatus["Unauthenticated"] = "unauthenticated";
    SpanStatus["PermissionDenied"] = "permission_denied";
    SpanStatus["NotFound"] = "not_found";
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    SpanStatus["InvalidArgument"] = "invalid_argument";
    SpanStatus["Unimplemented"] = "unimplemented";
    SpanStatus["Unavailable"] = "unavailable";
    SpanStatus["InternalError"] = "internal_error";
    SpanStatus["UnknownError"] = "unknown_error";
    SpanStatus["Cancelled"] = "cancelled";
    SpanStatus["AlreadyExists"] = "already_exists";
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    SpanStatus["Aborted"] = "aborted";
    SpanStatus["OutOfRange"] = "out_of_range";
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
function fromHttpStatus(httpStatus) {
    if (httpStatus < 400) {
        return SpanStatus.Ok;
    }
    if (httpStatus >= 400 && httpStatus < 500) {
        switch (httpStatus) {
            case 401:
                return SpanStatus.Unauthenticated;
            case 403:
                return SpanStatus.PermissionDenied;
            case 404:
                return SpanStatus.NotFound;
            case 409:
                return SpanStatus.AlreadyExists;
            case 413:
                return SpanStatus.FailedPrecondition;
            case 429:
                return SpanStatus.ResourceExhausted;
            default:
                return SpanStatus.InvalidArgument;
        }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
        switch (httpStatus) {
            case 501:
                return SpanStatus.Unimplemented;
            case 503:
                return SpanStatus.Unavailable;
            case 504:
                return SpanStatus.DeadlineExceeded;
            default:
                return SpanStatus.InternalError;
        }
    }
    return SpanStatus.UnknownError;
}

var Breadcrumb = (function () {
    function Breadcrumb() {
        this.maxBreadcrumbs = 10;
        this.beforePushBreadcrumb = null;
        this.stack = [];
    }
    Breadcrumb.prototype.push = function (data) {
        var _this = this;
        if (typeof this.beforePushBreadcrumb === 'function') {
            var result_1 = null;
            var beforePushBreadcrumb_1 = this.beforePushBreadcrumb;
            slientConsoleScope(function () {
                result_1 = beforePushBreadcrumb_1(_this, data);
            });
            if (!result_1)
                return;
            this.immediatePush(result_1);
            return;
        }
        this.immediatePush(data);
    };
    Breadcrumb.prototype.immediatePush = function (data) {
        data.time = getTimestamp();
        if (this.stack.length >= this.maxBreadcrumbs) {
            this.shift();
        }
        this.stack.push(data);
        logger.log(this.stack);
    };
    Breadcrumb.prototype.shift = function () {
        return this.stack.shift() !== undefined;
    };
    Breadcrumb.prototype.clear = function () {
        this.stack = [];
    };
    Breadcrumb.prototype.getStack = function () {
        return this.stack;
    };
    Breadcrumb.prototype.getCategory = function (type) {
        switch (type) {
            case BREADCRUMBTYPES.XHR:
            case BREADCRUMBTYPES.FETCH:
                return BREADCRUMBCATEGORYS.HTTP;
            case BREADCRUMBTYPES.CLICK:
            case BREADCRUMBTYPES.ROUTE:
            case BREADCRUMBTYPES.TAP:
            case BREADCRUMBTYPES.TOUCHMOVE:
                return BREADCRUMBCATEGORYS.USER;
            case BREADCRUMBTYPES.CUSTOMER:
            case BREADCRUMBTYPES.CONSOLE:
                return BREADCRUMBCATEGORYS.DEBUG;
            case BREADCRUMBTYPES.APP_ON_LAUNCH:
            case BREADCRUMBTYPES.APP_ON_SHOW:
            case BREADCRUMBTYPES.APP_ON_HIDE:
            case BREADCRUMBTYPES.PAGE_ON_SHOW:
            case BREADCRUMBTYPES.PAGE_ON_HIDE:
            case BREADCRUMBTYPES.PAGE_ON_SHARE_APP_MESSAGE:
            case BREADCRUMBTYPES.PAGE_ON_SHARE_TIMELINE:
            case BREADCRUMBTYPES.PAGE_ON_TAB_ITEM_TAP:
                return BREADCRUMBCATEGORYS.LIFECYCLE;
            case BREADCRUMBTYPES.UNHANDLEDREJECTION:
            case BREADCRUMBTYPES.CODE_ERROR:
            case BREADCRUMBTYPES.RESOURCE:
            case BREADCRUMBTYPES.VUE:
            case BREADCRUMBTYPES.REACT:
            default:
                return BREADCRUMBCATEGORYS.EXCEPTION;
        }
    };
    Breadcrumb.prototype.bindOptions = function (options) {
        if (options === void 0) { options = {}; }
        var maxBreadcrumbs = options.maxBreadcrumbs, beforePushBreadcrumb = options.beforePushBreadcrumb;
        validateOption(maxBreadcrumbs, 'maxBreadcrumbs', 'number') && (this.maxBreadcrumbs = maxBreadcrumbs);
        validateOption(beforePushBreadcrumb, 'beforePushBreadcrumb', 'function') && (this.beforePushBreadcrumb = beforePushBreadcrumb);
    };
    return Breadcrumb;
}());
var breadcrumb = _support.breadcrumb || (_support.breadcrumb = new Breadcrumb());

var allErrorNumber = {};
function createErrorId(data, apikey) {
    var id;
    switch (data.type) {
        case ERRORTYPES.FETCH_ERROR:
            id = data.type + data.request.method + data.response.status + getRealPath(data.request.url) + apikey;
            break;
        case ERRORTYPES.JAVASCRIPT_ERROR:
        case ERRORTYPES.VUE_ERROR:
        case ERRORTYPES.REACT_ERROR:
            id = data.type + data.name + data.message + apikey;
            break;
        case ERRORTYPES.LOG_ERROR:
            id = data.customTag + data.type + data.name + apikey;
            break;
        case ERRORTYPES.PROMISE_ERROR:
            id = generatePromiseErrorId(data, apikey);
            break;
        default:
            id = data.type + data.message + apikey;
            break;
    }
    id = hashCode(id);
    if (allErrorNumber[id] > 1) {
        return null;
    }
    if (typeof allErrorNumber[id] === 'number') {
        allErrorNumber[id]++;
    }
    else {
        allErrorNumber[id] = 1;
    }
    return id;
}
function generatePromiseErrorId(data, apikey) {
    var locationUrl = getRealPath(data.url);
    if (data.name === EVENTTYPES.UNHANDLEDREJECTION) {
        return data.type + objectOrder(data.message) + apikey;
    }
    return data.type + data.name + objectOrder(data.message) + locationUrl;
}
function objectOrder(reason) {
    var sortFn = function (obj) {
        return Object.keys(obj)
            .sort()
            .reduce(function (total, key) {
            if (variableTypeDetection.isObject(obj[key])) {
                total[key] = sortFn(obj[key]);
            }
            else {
                total[key] = obj[key];
            }
            return total;
        }, {});
    };
    try {
        if (/\{.*\}/.test(reason)) {
            var obj = JSON.parse(reason);
            obj = sortFn(obj);
            return JSON.stringify(obj);
        }
    }
    catch (error) {
        return reason;
    }
}
function getRealPath(url) {
    return url.replace(/[\?#].*$/, '').replace(/\/\d+([\/]*$)/, '{param}$1');
}
function getFlutterRealOrigin(url) {
    return removeHashPath(getFlutterRealPath(url));
}
function getFlutterRealPath(url) {
    return url.replace(/(\S+)(\/Documents\/)(\S*)/, "$3");
}
function getRealPageOrigin(url) {
    var fileStartReg = /^file:\/\//;
    if (fileStartReg.test(url)) {
        return getFlutterRealOrigin(url);
    }
    if (isWxMiniEnv) {
        return getAppId();
    }
    return getRealPath(removeHashPath(url).replace(/(\S*)(\/\/)(\S+)/, '$3'));
}
function removeHashPath(url) {
    return url.replace(/(\S+)(\/#\/)(\S*)/, "$1");
}
function hashCode(str) {
    var hash = 0;
    if (str.length == 0)
        return hash;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

var EMethods;
(function (EMethods) {
    EMethods["Get"] = "GET";
    EMethods["Post"] = "POST";
    EMethods["Put"] = "PUT";
    EMethods["Delete"] = "DELETE";
})(EMethods || (EMethods = {}));

var TransportData = (function () {
    function TransportData(url) {
        this.url = url;
        this.beforeDataReport = null;
        this.backTrackerId = null;
        this.configReportXhr = null;
        this.apikey = '';
        this.queue = new Queue();
    }
    TransportData.prototype.getRecord = function () {
        var recordData = _support.record;
        if (recordData && variableTypeDetection.isArray(recordData) && recordData.length > 2) {
            return recordData;
        }
        return [];
    };
    TransportData.prototype.beforePost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var errorId, transportData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorId = createErrorId(data, this.apikey);
                        if (!errorId)
                            return [2, false];
                        data.errorId = errorId;
                        transportData = this.getTransportData(data);
                        if (!(typeof this.beforeDataReport === 'function')) return [3, 2];
                        return [4, this.beforeDataReport(transportData)];
                    case 1:
                        transportData = _a.sent();
                        if (!transportData)
                            return [2, false];
                        _a.label = 2;
                    case 2: return [2, JSON.stringify(transportData)];
                }
            });
        });
    };
    TransportData.prototype.xhrPost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, requestFun;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.beforePost(data)];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            return [2];
                        requestFun = function () {
                            var xhr = new XMLHttpRequest();
                            xhr.open(EMethods.Post, _this.url);
                            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                            xhr.withCredentials = true;
                            if (typeof _this.configReportXhr === 'function') {
                                _this.configReportXhr(xhr);
                            }
                            xhr.send(result);
                        };
                        this.queue.addFn(requestFun);
                        return [2];
                }
            });
        });
    };
    TransportData.prototype.wxPost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, requestFun;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.beforePost(data)];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            return [2];
                        requestFun = function () {
                            wx.request({
                                method: 'POST',
                                header: {
                                    'Content-Type': 'application/json;charset=UTF-8'
                                },
                                url: _this.url,
                                data: result
                            });
                        };
                        this.queue.addFn(requestFun);
                        return [2];
                }
            });
        });
    };
    TransportData.prototype.getAuthInfo = function () {
        var trackerId = this.getTrackerId();
        return {
            trackerId: String(trackerId),
            sdkVersion: SDK_VERSION,
            sdkName: SDK_NAME,
            apikey: this.apikey
        };
    };
    TransportData.prototype.getApikey = function () {
        return this.apikey;
    };
    TransportData.prototype.getTrackerId = function () {
        if (typeof this.backTrackerId === 'function') {
            var trackerId = this.backTrackerId();
            if (typeof trackerId === 'string' || typeof trackerId === 'number') {
                return trackerId;
            }
            else {
                logger.error("trackerId:" + trackerId + " \u671F\u671B string \u6216 number \u7C7B\u578B\uFF0C\u4F46\u662F\u4F20\u5165 " + typeof trackerId);
            }
        }
        return '';
    };
    TransportData.prototype.getTransportData = function (data) {
        return {
            authInfo: this.getAuthInfo(),
            breadcrumb: breadcrumb.getStack(),
            data: data,
            record: this.getRecord()
        };
    };
    TransportData.prototype.isSdkTransportUrl = function (targetUrl) {
        return targetUrl.indexOf(this.url) !== -1;
    };
    TransportData.prototype.bindOptions = function (options) {
        if (options === void 0) { options = {}; }
        var dsn = options.dsn, beforeDataReport = options.beforeDataReport, apikey = options.apikey, configReportXhr = options.configReportXhr, backTrackerId = options.backTrackerId;
        validateOption(apikey, 'apikey', 'string') && (this.apikey = apikey);
        validateOption(dsn, 'dsn', 'string') && (this.url = dsn);
        validateOption(beforeDataReport, 'beforeDataReport', 'function') && (this.beforeDataReport = beforeDataReport);
        validateOption(configReportXhr, 'configReportXhr', 'function') && (this.configReportXhr = configReportXhr);
        validateOption(backTrackerId, 'backTrackerId', 'function') && (this.backTrackerId = backTrackerId);
    };
    TransportData.prototype.send = function (data) {
        if (isBrowserEnv) {
            return this.xhrPost(data);
        }
        if (isWxMiniEnv) {
            return this.wxPost(data);
        }
    };
    return TransportData;
}());
var transportData = _support.transportData || (_support.transportData = new TransportData(SERVER_URL));

function log(_a) {
    var _b = _a.message, message = _b === void 0 ? 'emptyMsg' : _b, _c = _a.tag, tag = _c === void 0 ? '' : _c, _d = _a.level, level = _d === void 0 ? Severity.Critical : _d, _e = _a.ex, ex = _e === void 0 ? '' : _e;
    var errorInfo = {};
    if (isError(ex)) {
        errorInfo = extractErrorStack(ex, level);
    }
    var error = __assign({ type: ERRORTYPES.LOG_ERROR, level: level, message: unknownToString(message), name: 'MITO.log', customTag: unknownToString(tag), time: getTimestamp(), url: isWxMiniEnv ? getCurrentRoute() : getLocationHref() }, errorInfo);
    breadcrumb.push({
        type: BREADCRUMBTYPES.CUSTOMER,
        category: breadcrumb.getCategory(BREADCRUMBTYPES.CUSTOMER),
        data: message,
        level: Severity.fromString(level.toString())
    });
    transportData.send(error);
}

function httpTransform(data) {
    var message = '';
    var elapsedTime = data.elapsedTime, time = data.time, method = data.method, traceId = data.traceId, type = data.type, status = data.status;
    var name = type + "--" + method;
    if (status === 0) {
        message =
            elapsedTime <= globalVar.crossOriginThreshold ? 'http请求失败，失败原因：跨域限制或域名不存在' : 'http请求失败，失败原因：超时';
    }
    else {
        message = fromHttpStatus(status);
    }
    message = message === SpanStatus.Ok ? message : message + " " + getRealPath(data.url);
    return {
        type: ERRORTYPES.FETCH_ERROR,
        url: getLocationHref(),
        time: time,
        elapsedTime: elapsedTime,
        level: Severity.Low,
        message: message,
        name: name,
        request: {
            httpType: type,
            traceId: traceId,
            method: method,
            url: data.url,
            data: data.reqData || ''
        },
        response: {
            status: status,
            data: data.responseText
        }
    };
}
var resourceMap = {
    img: '图片',
    script: 'js脚本'
};
function resourceTransform(target) {
    return {
        type: ERRORTYPES.RESOURCE_ERROR,
        url: getLocationHref(),
        message: '资源地址: ' + (target.src.slice(0, 100) || target.href.slice(0, 100)),
        level: Severity.Low,
        time: getTimestamp(),
        name: (resourceMap[target.localName] || target.localName) + "\u52A0\u8F7D\u5931\u8D25"
    };
}
function handleConsole(data) {
    if (globalVar.isLogAddBreadcrumb) {
        breadcrumb.push({
            type: BREADCRUMBTYPES.CONSOLE,
            category: breadcrumb.getCategory(BREADCRUMBTYPES.CONSOLE),
            data: data,
            level: Severity.fromString(data.level)
        });
    }
}

var Options = (function () {
    function Options() {
        this.traceIdFieldName = 'Trace-Id';
        this.enableTraceId = false;
    }
    Options.prototype.bindOptions = function (options) {
        if (options === void 0) { options = {}; }
        var beforeAppAjaxSend = options.beforeAppAjaxSend, enableTraceId = options.enableTraceId, filterXhrUrlRegExp = options.filterXhrUrlRegExp, traceIdFieldName = options.traceIdFieldName, includeHttpUrlTraceIdRegExp = options.includeHttpUrlTraceIdRegExp;
        validateOption(beforeAppAjaxSend, 'beforeAppAjaxSend', 'function') && (this.beforeAppAjaxSend = beforeAppAjaxSend);
        validateOption(enableTraceId, 'enableTraceId', 'boolean') && (this.enableTraceId = enableTraceId);
        validateOption(traceIdFieldName, 'traceIdFieldName', 'string') && (this.traceIdFieldName = traceIdFieldName);
        toStringValidateOption(filterXhrUrlRegExp, 'filterXhrUrlRegExp', '[object RegExp]') && (this.filterXhrUrlRegExp = filterXhrUrlRegExp);
        toStringValidateOption(includeHttpUrlTraceIdRegExp, 'includeHttpUrlTraceIdRegExp', '[object RegExp]') &&
            (this.includeHttpUrlTraceIdRegExp = includeHttpUrlTraceIdRegExp);
    };
    return Options;
}());
var options = _support.options || (_support.options = new Options());
function setTraceId(httpUrl, callback) {
    var includeHttpUrlTraceIdRegExp = options.includeHttpUrlTraceIdRegExp, enableTraceId = options.enableTraceId;
    if (enableTraceId && includeHttpUrlTraceIdRegExp && includeHttpUrlTraceIdRegExp.test(httpUrl)) {
        var traceId = generateUUID();
        callback(options.traceIdFieldName, traceId);
    }
}
function initOptions(paramOptions) {
    if (paramOptions === void 0) { paramOptions = {}; }
    setSilentFlag(paramOptions);
    breadcrumb.bindOptions(paramOptions);
    logger.bindOptions(paramOptions.debug);
    transportData.bindOptions(paramOptions);
    options.bindOptions(paramOptions);
}

var handlers = {};
function subscribeEvent(handler) {
    if (!handler || getFlag(handler.type))
        return false;
    setFlag(handler.type, true);
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    return true;
}
function triggerHandlers(type, data) {
    if (!type || !handlers[type])
        return;
    handlers[type].forEach(function (callback) {
        nativeTryCatch(function () {
            callback(data);
        }, function (e) {
            logger.error("\u91CD\u5199\u4E8B\u4EF6triggerHandlers\u7684\u56DE\u8C03\u51FD\u6570\u53D1\u751F\u9519\u8BEF\nType:" + type + "\nName: " + getFunctionName(callback) + "\nError: " + e);
        });
    });
}

exports.Breadcrumb = Breadcrumb;
exports.Options = Options;
exports.TransportData = TransportData;
exports.breadcrumb = breadcrumb;
exports.createErrorId = createErrorId;
exports.getFlutterRealOrigin = getFlutterRealOrigin;
exports.getFlutterRealPath = getFlutterRealPath;
exports.getRealPageOrigin = getRealPageOrigin;
exports.getRealPath = getRealPath;
exports.handleConsole = handleConsole;
exports.httpTransform = httpTransform;
exports.initOptions = initOptions;
exports.log = log;
exports.options = options;
exports.removeHashPath = removeHashPath;
exports.resourceTransform = resourceTransform;
exports.setTraceId = setTraceId;
exports.subscribeEvent = subscribeEvent;
exports.transportData = transportData;
exports.triggerHandlers = triggerHandlers;
//# sourceMappingURL=core.js.map
