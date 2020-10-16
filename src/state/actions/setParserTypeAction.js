import { SET_PARSER_TYPE } from "./../../constants/RedisClientsConstants";

export default function setParserTypeAction(parser) {
    return {
        type: SET_PARSER_TYPE,
        parser
    };
}
