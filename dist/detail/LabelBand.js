"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelBand = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var coms_1 = require("../coms");
function LabelBand(_a) {
    var label = _a.label, children = _a.children, rightIcon = _a.rightIcon, onEdit = _a.onEdit;
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "row bg-white mx-0" }, { children: [label ?
                (0, jsx_runtime_1.jsx)("label", __assign({ className: "col-sm-2 col-form-label text-sm-end tonwa-bg-gray-1 border-end align-self-center py-3" }, { children: (0, jsx_runtime_1.jsx)("b", { children: label }, void 0) }), void 0)
                :
                    (0, jsx_runtime_1.jsx)("label", { className: "col-sm-2 py-3" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-10 d-flex pe-0 align-items-center" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1" }, { children: (0, jsx_runtime_1.jsx)("div", { children: children }, void 0) }), void 0), (onEdit || rightIcon) &&
                        (0, jsx_runtime_1.jsx)("div", __assign({ onClick: onEdit, className: "px-3 align-self-stretch d-flex align-items-center cursor-pointer" }, { children: rightIcon !== null && rightIcon !== void 0 ? rightIcon : (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "pencil", className: "text-info" }, void 0) }), void 0)] }), void 0)] }), void 0);
}
exports.LabelBand = LabelBand;
//# sourceMappingURL=LabelBand.js.map