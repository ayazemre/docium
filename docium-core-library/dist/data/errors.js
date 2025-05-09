"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DociumOperationError = exports.DociumModelError = void 0;
var DociumModelError;
(function (DociumModelError) {
    DociumModelError[DociumModelError["INVALID_ID"] = 0] = "INVALID_ID";
    DociumModelError[DociumModelError["INVALID_DOCUMENT"] = 1] = "INVALID_DOCUMENT";
})(DociumModelError || (exports.DociumModelError = DociumModelError = {}));
var DociumOperationError;
(function (DociumOperationError) {
    DociumOperationError[DociumOperationError["INVALID_ID"] = 0] = "INVALID_ID";
    DociumOperationError[DociumOperationError["INVALID_DOCUMENT"] = 1] = "INVALID_DOCUMENT";
})(DociumOperationError || (exports.DociumOperationError = DociumOperationError = {}));
