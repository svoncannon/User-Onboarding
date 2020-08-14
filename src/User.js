import React from 'react'
import styled from 'styled-components'
import emojis from './emojiMaker'

const UserContainer = styled.div`
    border: 1px solid transparent;
    border-radius: 9px;
    color: #fff;
    text-align: center;
    padding: 2% 3%;
    margin: 1%;
    background: #1b1b1b;
`

const Emoji = styled.p`
    font-size: 1.5rem;
    margin: 1% auto;
`

function User({ user }) {
    return (
        <UserContainer>
            <Emoji>{emojis(user.emoji)}</Emoji>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </UserContainer>
    )
}

export default User