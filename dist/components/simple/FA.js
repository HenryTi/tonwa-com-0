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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackedFA = exports.FA = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var FA = /** @class */ (function (_super) {
    __extends(FA, _super);
    function FA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FA.prototype.render = function () {
        var _a = this.props, name = _a.name, className = _a.className, size = _a.size, spin = _a.spin, fixWidth = _a.fixWidth, border = _a.border, pull = _a.pull, pulse = _a.pulse, rotate = _a.rotate, flip = _a.flip, inverse = _a.inverse;
        var cn = (0, classnames_1.default)(className, 'fa', name && ('fa-' + name), size && 'fa-' + size, fixWidth && 'fa-fw', border && 'fa-border', pull && 'fa-pull-' + pull, spin && 'fa-spin', pulse && 'fa-pulse', rotate && 'fa-rotate-' + rotate, flip && 'fa-flip-' + flip, inverse && 'fa-inverse');
        return (0, jsx_runtime_1.jsx)("i", { className: cn }, void 0);
    };
    return FA;
}(React.Component));
exports.FA = FA;
var StackedFA = /** @class */ (function (_super) {
    __extends(StackedFA, _super);
    function StackedFA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedFA.prototype.render = function () {
        var _a = this.props, className = _a.className, size = _a.size, children = _a.children;
        var cn = (0, classnames_1.default)('fa-stack', className, size && 'fa-' + size);
        return (0, jsx_runtime_1.jsx)("span", __assign({ className: cn }, { children: children }), void 0);
    };
    return StackedFA;
}(React.Component));
exports.StackedFA = StackedFA;
//# sourceMappingURL=FA.js.map