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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var mobx_1 = require("mobx");
var none = (0, jsx_runtime_1.jsx)("small", __assign({ className: "text-muted" }, { children: "[\u65E0]" }), void 0);
var IdWidget = /** @class */ (function (_super) {
    __extends(IdWidget, _super);
    function IdWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var pickId, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pickId = this.ui && this.ui.pickId;
                        if (pickId === undefined) {
                            alert('no pickId defined!');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, pickId(this.context, this.name, this.value)];
                    case 1:
                        id = _a.sent();
                        (0, mobx_1.runInAction)(function () {
                            _this.setDataValue(id);
                            _this.clearError();
                            _this.clearContextError();
                            _this.checkRules();
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(IdWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    IdWidget.prototype.setReadOnly = function (value) { this.readOnly = value; };
    IdWidget.prototype.setDisabled = function (value) { this.disabled = value; };
    IdWidget.prototype.setValue = function (value) {
        _super.prototype.setValue.call(this, value);
    };
    IdWidget.prototype.render = function () {
        var placeholder, Templet;
        if (this.ui !== undefined) {
            placeholder = this.ui.placeholder;
            Templet = this.ui.Templet;
        }
        var cn = {
            'form-control': true,
            'required-item': this.itemSchema.required === true,
            'cursor-pointer': true,
            'is-invalid': this.hasError,
        };
        var content;
        if (this.value === undefined || this.value === null) {
            content = placeholder || none;
            cn['text-muted'] = true;
        }
        else if (Templet === undefined) {
            var c = void 0;
            if (this.value === null) {
                c = 'null';
            }
            else {
                switch (typeof this.value) {
                    case 'undefined':
                        c = none;
                        break;
                    case 'object':
                        c = this.value.id;
                        break;
                    default:
                        c = this.value;
                        break;
                }
            }
            content = (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: c }, void 0);
        }
        else if (typeof Templet === 'function') {
            content = Templet(this.value);
        }
        else {
            content = Templet;
        }
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(cn), onClick: this.onClick }, { children: content }), void 0), this.renderErrors()] }, void 0);
    };
    return IdWidget;
}(widget_1.Widget));
exports.IdWidget = IdWidget;
//# sourceMappingURL=idWidget.js.map