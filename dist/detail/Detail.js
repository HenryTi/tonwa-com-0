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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail = exports.useDetail = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var coms_1 = require("../coms");
var form_1 = require("../form");
var page_1 = require("../page");
var band_1 = require("../band");
var DetailContext = /** @class */ (function (_super) {
    __extends(DetailContext, _super);
    function DetailContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailContext.prototype, "isDetail", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return DetailContext;
}(band_1.BandContainerContext));
var DetailContextContainer = react_1.default.createContext(undefined);
function useDetail() {
    return (0, react_1.useContext)(DetailContextContainer);
}
exports.useDetail = useDetail;
function Detail(props) {
    var className = props.className, children = props.children, BandTemplate = props.BandTemplate;
    BandTemplate = BandTemplate !== null && BandTemplate !== void 0 ? BandTemplate : DefaultBandTemplate;
    var detailContext = (0, react_1.useRef)(new DetailContext(__assign(__assign({}, props), { BandTemplate: BandTemplate }))).current;
    return (0, jsx_runtime_1.jsx)(DetailContextContainer.Provider, __assign({ value: detailContext }, { children: (0, jsx_runtime_1.jsx)(band_1.VBandContainerContext.Provider, __assign({ value: detailContext }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: className }, { children: children }), void 0) }), void 0) }), void 0);
}
exports.Detail = Detail;
function DefaultBandTemplate(props) {
    var nav = (0, page_1.useNav)();
    var bandContainer = (0, band_1.useBandContainer)();
    var band = (0, band_1.useBand)();
    var label = props.label, children = props.children, errors = props.errors, memos = props.memos, onEdit = props.onEdit, content = props.content, sep = props.sep, contentType = props.contentType, rightIcon = props.rightIcon;
    var labelContent = contentType === band_1.BandContentType.check ? null : (0, jsx_runtime_1.jsx)("b", { children: label }, void 0);
    var vLabel = (0, jsx_runtime_1.jsx)("label", __assign({ className: "col-sm-2 col-form-label text-sm-end tonwa-bg-gray-1 border-end align-self-center py-3" }, { children: labelContent }), void 0);
    var cnContent = 'col-sm-10 d-flex pe-0 align-items-center';
    function RightIcon(_a) {
        var icon = _a.icon, onEdit = _a.onEdit;
        return (0, jsx_runtime_1.jsx)("div", __assign({ onClick: onEdit, className: "px-3 align-self-stretch d-flex align-items-center cursor-pointer" }, { children: icon !== null && icon !== void 0 ? icon : (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "pencil", className: "text-info" }, void 0) }), void 0);
    }
    if (band.readOnly === true) {
        rightIcon = null;
    }
    else if (contentType === band_1.BandContentType.com) {
        if (onEdit) {
            rightIcon = (0, jsx_runtime_1.jsx)(RightIcon, { onEdit: onEdit, icon: rightIcon }, void 0);
        }
    }
    else {
        onEdit = onEdit !== null && onEdit !== void 0 ? onEdit : function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    nav.open((0, jsx_runtime_1.jsx)(ValueEditPage, { label: label, content: content, values: __assign({}, bandContainer.valueResponse.values), onValuesChanged: bandContainer.onValuesChanged }, void 0));
                    return [2 /*return*/];
                });
            });
        };
        rightIcon = (0, jsx_runtime_1.jsx)(RightIcon, { onEdit: onEdit, icon: rightIcon }, void 0);
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(coms_1.Sep, { sep: sep }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "row bg-white mx-0" }, { children: [vLabel, (0, jsx_runtime_1.jsxs)("div", __assign({ className: cnContent }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex-grow-1" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: children }, void 0), (0, jsx_runtime_1.jsx)(band_1.BandFieldErrors, { errors: errors }, void 0), (0, jsx_runtime_1.jsx)(band_1.BandMemos, { memos: memos }, void 0)] }), void 0), rightIcon] }), void 0)] }), void 0)] }, void 0);
}
function ValueEditPage(_a) {
    var content = _a.content, label = _a.label, values = _a.values, onValuesChanged = _a.onValuesChanged;
    var nav = (0, page_1.useNav)();
    function onSubmit(data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, onValuesChanged(data)];
                    case 1:
                        _a.sent();
                        nav.close();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (0, jsx_runtime_1.jsx)(page_1.Page, __assign({ header: label, back: "close" }, { children: (0, jsx_runtime_1.jsxs)(form_1.Form, __assign({ className: "container px-3 py-3", values: values, BandTemplate: ValueEditBandTemplate }, { children: [(0, jsx_runtime_1.jsx)(band_1.Band, { children: content }, void 0), (0, jsx_runtime_1.jsx)(form_1.Submit, { onSubmit: onSubmit }, void 0)] }), void 0) }), void 0);
}
function ValueEditBandTemplate(props) {
    var children = props.children, errors = props.errors, memos = props.memos;
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "bg-white mb-3" }, { children: [children, (0, jsx_runtime_1.jsx)(band_1.BandFieldErrors, { errors: errors }, void 0), (0, jsx_runtime_1.jsx)(band_1.BandMemos, { memos: memos }, void 0)] }), void 0);
}
//# sourceMappingURL=Detail.js.map