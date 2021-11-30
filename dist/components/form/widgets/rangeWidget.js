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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var RangeWidget = /** @class */ (function (_super) {
    __extends(RangeWidget, _super);
    function RangeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'range';
        return _this;
    }
    Object.defineProperty(RangeWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    RangeWidget.prototype.setReadOnly = function (value) { this.input.readOnly = this.readOnly = value; };
    RangeWidget.prototype.setDisabled = function (value) { this.input.disabled = this.disabled = value; };
    RangeWidget.prototype.render = function () {
        var _this = this;
        var _a = this.ui, min = _a.min, max = _a.max, step = _a.step;
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("input", { ref: function (input) { return _this.input = input; }, className: (0, classnames_1.default)(this.className, 'form-control', 'w-min-6c'), type: this.inputType, defaultValue: this.defaultValue, onChange: this.onInputChange, max: max, min: min, step: step }, void 0) }, void 0);
    };
    return RangeWidget;
}(widget_1.Widget));
exports.RangeWidget = RangeWidget;
//# sourceMappingURL=rangeWidget.js.map