import { put, select } from "redux-saga/effects";

import { DISCONNECT_REDIS_CLIENT } from "../../../../constants/RedisClientsConstants";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getConnectedRedisClientsSelector from "./../../../selectors/getConnectedRedisClientsSelector";

export default function* connectRedisSaga({ index }) {
    try {
        const redisClients = yield select(getConnectedRedisClientsSelector);
        if (redisClients && redisClients[index]) {
            const redisClient = redisClients[index].client;
            redisClient.quit();
            yield put({ type: DISCONNECT_REDIS_CLIENT + SUCCESS, index });
        }
    } catch (error) {}
}
