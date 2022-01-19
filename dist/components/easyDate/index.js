"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VDate = exports.EasyTime = exports.EasyDate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var tonwa_core_1 = require("tonwa-core");
//type YMD = (year:number, month:number, date:number) => string;
//type MD = (month:number, date:number) => string;
var timeRes = {
    md: function (month, date) { return "".concat(month, "-").concat(date); },
    ymd: function (year, month, date) { return "".concat(year, "-").concat(month, "-").concat(date); },
    yesterday: 'Yday',
    today: 'Today',
    tomorrow: 'Tmw',
    $zh: {
        md: function (month, date) { return "".concat(month, "\u6708").concat(date, "\u65E5"); },
        ymd: function (year, month, date) { return "".concat(year, "\u5E74").concat(month, "\u6708").concat(date, "\u65E5"); },
        yesterday: '昨天',
        today: '今天',
        tomorrow: '明天',
    },
    $en: {
        md: function (month, date) { return "".concat(month, "-").concat(date); },
        ymd: function (year, month, date) { return "".concat(year, "-").concat(month, "-").concat(date); },
        yesterday: 'Yday',
        today: 'Today',
        tomorrow: 'Tmw',
    }
};
(0, tonwa_core_1.setRes)(timeRes, timeRes);
function tt(str) {
    return timeRes[str];
}
function renderDate(vDate, withTime, always) {
    if (always === void 0) { always = false; }
    if (!vDate)
        return null;
    var date;
    switch (typeof vDate) {
        default:
            date = vDate;
            break;
        case 'string':
            date = new Date(vDate);
            break;
        case 'number':
            date = new Date(vDate * 1000);
            break;
    }
    var now = new Date();
    var tick, nDate, _date, month, year, nowYear;
    var d = date;
    tick = now.getTime() - d.getTime();
    var hour = d.getHours(), minute = d.getMinutes();
    nDate = now.getDate();
    _date = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear();
    nowYear = now.getFullYear();
    var appendTime = false;
    var dPart = (function () {
        if (tick < -24 * 3600 * 1000) {
            if (year === nowYear) {
                appendTime = true;
                return tt('md')(month, _date);
            }
            else {
                appendTime = true;
                return tt('ymd')(year, month, _date);
            }
        }
        if (tick < 24 * 3600 * 1000) {
            if (_date !== nDate) {
                appendTime = true;
                return tt(tick < 0 ? 'tomorrow' : 'yesterday');
            }
            if (withTime === true) {
                appendTime = true;
                return '';
            }
            return tt('today');
        }
        if (year === nowYear) {
            return tt('md')(month, _date);
        }
        return tt('ymd')(year, month, _date);
    })();
    var hm = hour + ((minute < 10 ? ':0' : ':') + minute);
    /*
    if (tick < -24*3600*1000) {
        if (year === nowYear)
            return tt('md')(month, _date) + ' ' + hm;
        else
            return tt('ymd')(year, month, _date) + ' ' + hm;
    }
    if (always === true || tick < 24*3600*1000) {
        return _date!==nDate?
            tt(tick < 0? 'tomorrow' : 'yesterday') + ' ' + hm
            : withTime===true? hm : tt('today');
    }
    if (year === nowYear) {
        return tt('md')(month, _date);
    }
    return tt('ymd')(year, month, _date);
    */
    if (appendTime === true || always === true) {
        return dPart + ' ' + hm;
    }
    return dPart;
}
var EasyDate = /** @class */ (function (_super) {
    __extends(EasyDate, _super);
    function EasyDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasyDate.prototype.render = function () {
        return renderDate(this.props.date, false);
    };
    return EasyDate;
}(React.Component));
exports.EasyDate = EasyDate;
var EasyTime = /** @class */ (function (_super) {
    __extends(EasyTime, _super);
    function EasyTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasyTime.prototype.render = function () {
        var _a = this.props, date = _a.date, always = _a.always;
        return renderDate(date, true, always);
    };
    return EasyTime;
}(React.Component));
exports.EasyTime = EasyTime;
var VDate = function (props) {
    var date = props.date, hideTime = props.hideTime, hideSameYear = props.hideSameYear;
    var year = date.getFullYear();
    var vTime;
    if (hideTime !== true) {
        vTime = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [date.getHours(), ":", String(100 + date.getMinutes()).substr(1, 2)] }, void 0);
    }
    var vDate = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [date.getMonth() + 1, "-", date.getDate()] }, void 0);
    if (hideSameYear === true && year === new Date().getFullYear()) {
    }
    else {
        vDate = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [year, "-", vDate] }, void 0);
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [vDate, " ", vTime] }, void 0);
};
exports.VDate = VDate;
//# sourceMappingURL=index.js.map