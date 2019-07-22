const users = []

//addUser

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()

    room = room.trim().toLowerCase()

    //Validate Data

    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    //Check for existing user

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username

    })

    //Validate username
    if (existingUser) {
        return {
            error: 'Username is in use'
        }

    }

    //Store user

    const user = { id, username, room }
    users.push(user)
    return { user }
}

//removeUser

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]

    }

}


//getUser

const getUser = (id) => {
    return user = users.find((user) => user.id === id)
}

//getUsersInRoom

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return userInRoom = users.filter((user) => user.room === room)

}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}









