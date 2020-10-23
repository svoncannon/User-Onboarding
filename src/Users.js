import React from 'react'
import User from './User'
import styled from 'styled-components'

const Header = styled.h2`
    color: #fff;
    text-align: center;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2% 5%;
`

function Users({ users }) {

    if (users.length === 0) {
        return <Header>No users have been added yet!</Header>
    }

    const userList = users.map(user => {
        return <User user={user} />
    })

    return (
        <Container>
            {userList}
        </Container>
    )
}

export default Users