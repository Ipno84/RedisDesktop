import { CONNECT_REDIS_CLIENT, SET_ACTIVE_CONNECTED_CLIENT_INDEX, SET_FORM_DATA_ERROR } from "../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import Redis from "ioredis";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getConnectedClientIndexSelector from "../../../selectors/getConnectedClientIndexSelector";
import getErrorsCount from "../../../../helpers/getErrorsCount";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import getSelectedRedisClientDataSelector from "./../../../selectors/getSelectedRedisClientDataSelector";
// import { remote } from "electron";
// import { store } from "../../../store";
import validateFormData from "../../../../helpers/validateFormData";

// const redisCliPath = remote.getGlobal("redisCliPath");

export default function* connectRedisSaga({ isForm }) {
    try {
        let data, formKeyErrors;
        if (isForm) {
            data = yield select(getFormDataSelector);
            formKeyErrors = validateFormData(data);
            if (Object.keys(formKeyErrors).length) {
                yield put({ type: SET_FORM_DATA_ERROR, formKeyErrors });
            }
        } else {
            data = yield select(getSelectedRedisClientDataSelector);
            formKeyErrors = validateFormData(data);
        }
        const errorsNumber = getErrorsCount(formKeyErrors);
        if (errorsNumber === 0) {
            const connectedClientIndex = yield select(getConnectedClientIndexSelector, data);
            if (connectedClientIndex > -1) {
                yield put({ type: SET_ACTIVE_CONNECTED_CLIENT_INDEX, index: connectedClientIndex });
            } else {
                let connectionData = {};
                if (data.password) connectionData.password = data.password;
                const isSentinel = data.sentinels.length > 1 || Boolean(data.master);
                if (isSentinel) {
                    if (data.master) connectionData.name = data.master;
                    let sentinels = [];
                    data.sentinels.forEach(sentinel => {
                        let { host, port } = sentinel;
                        const connectionSentinel = { host };
                        if (port) connectionSentinel.port = port;
                        sentinels.push(connectionSentinel);
                    });
                    connectionData.sentinels = sentinels;
                } else {
                    if (data.sentinels && data.sentinels.length && data.sentinels[0].port) connectionData.port = data.port;
                    if (data.sentinels && data.sentinels.length && data.sentinels[0].host) connectionData.host = data.host;
                }
                const connectedClient = new Redis(connectionData);
                yield put({
                    type: CONNECT_REDIS_CLIENT + SUCCESS,
                    connectedClient: { ...data, client: connectedClient, shellConnectionPrefix: "" }
                });

                // var stream = connectedClient.scanStream({ count: 999999999 });
                // stream.on("data", function() {
                //     let commands = ["node", redisCliPath];
                //     const host = connectedClient.stream.remoteAddress;
                //     const port = connectedClient.stream.remotePort;
                //     const password = data.password;
                //     if (host) commands.push(`-h ${host}`);
                //     if (port) commands.push(`-p ${port}`);
                //     if (password) commands.push(`-a ${password}`);

                //     store.dispatch({
                //         type: CONNECT_REDIS_CLIENT + SUCCESS,
                //         connectedClient: { ...data, client: connectedClient, shellConnectionPrefix: commands.join(" ") }
                //     });
                // });
            }
        }
    } catch (error) {}
}
