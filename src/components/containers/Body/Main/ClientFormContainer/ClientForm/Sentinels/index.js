import React from "react";
import Sentinel from "./Sentinel";
import getFormDataItemSelector from "../../../../../../../state/selectors/getFormDataItemSelector";
import { useSelector } from "react-redux";

const Sentinels = () => {
    const sentinels = useSelector(state => getFormDataItemSelector(state, "sentinels"));
    return sentinels.map((sentinel, i) => <Sentinel key={i} index={i} />);
};

export default Sentinels;
