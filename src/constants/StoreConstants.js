import storage from "redux-persist/lib/storage";

export const REDIS_CLIENTS_REDUCER_NAME = "redis";

export const Config = {
    version: 0,
    key: "redis-desktop-manager",
    storage,
    debug: process.env.NODE_ENV === "development",
    whietelist: [],
    blacklist: []
};
