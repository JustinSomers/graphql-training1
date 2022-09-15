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
// import ImgurApi from '../dataSources/imgurApi/client';
// import { AccountBase } from '../dataSources/imgurApi/types';
const dataSources_1 = require("../dataSources/");
const SESSION_IDENTITY_HEADER_NAME = "x-session-identity";
const getSession = (context) => __awaiter(void 0, void 0, void 0, function* () {
    let username = context.req.header("x-username") || '';
    let clientId = context.req.header("x-client-id") || '';
    console.log("clientId in session: " + clientId);
    const imgurApi = new dataSources_1.ImgurApi();
    const imgurApiSession = yield imgurApi.getSession(username, clientId);
    return {
        id: imgurApiSession.data.id,
    };
});
exports.default = getSession;
