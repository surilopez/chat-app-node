const generateMessage = (username, text) => {
    return {
        username,
        text,
        createAt: new Date().getTime()
    }

}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createLt: new Date().getTime()
    }

}

module.exports = {

    generateMessage,
    generateLocationMessage
}