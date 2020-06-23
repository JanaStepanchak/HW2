import React from 'react'

const Message = ({ element }) => {
    return(
        <div className={ element.error ? "error" : "fine"}>
            <h2>Hello, { element.type } </h2>
            <p>
                { element.message }
            </p>
        </div>
    );
}

Message.defaultProps = {
    element: {
        error: false,
        type: "Test",
        message: "Test"
    }
}

export default Message;