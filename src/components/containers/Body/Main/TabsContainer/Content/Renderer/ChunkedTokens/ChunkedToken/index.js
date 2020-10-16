import React from "react";

const ChunkedToken = ({ token }) => {
    if (token.constructor === String) return token;
    let className = "token";
    if (token.type) {
        className = `${className} ${token.type}`;
    }
    return <span className={className}>{token.content}</span>;
};

export default ChunkedToken;
