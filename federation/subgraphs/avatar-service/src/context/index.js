"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const util_1 = require("../util");
const context = (expressContext) => __awaiter(void 0, void 0, void 0, function* () {
    const { req } = expressContext;
    const accessToken = req.header("Authorization");
    const username = req.header("x-username");
    const clientId = req.header('x-client-id');
    console.log(req.headers);
    let context = {
        accessToken,
        session: yield (0, util_1.getSession)(expressContext),
        username: username,
        clientId
    };
    console.log(context);
    return context;
});
exports.context = context;
