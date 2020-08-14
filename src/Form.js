import React from 'react'
import styled from 'styled-components'
 

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`

const FormBox = styled.form`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`
const ErrorBox = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Label = styled.label`
    color: yellow;
    text-align: center;
    margin-top: 1%;
`

const Input = styled.input`
    background: transparent;
    border: 2px solid white;
    border-radius: 4px;
    color: purple;
    padding: 2% 4%;
    width: 50%;
    margin: 1% auto;
    font-size: 1rem;
    `

const Button = styled.button`
    width: 30%;
    margin: 1% auto;
    padding: 1%;
`

const Paragraph = styled.p`
    color: #ff5959;
    margin: 0.5%;
    `
    
function Form({ submit, change, check, disabled, data, errors }) {
    return (
        <FormContainer>
            <FormBox onSubmit={submit} autoComplete="off">
                <Input onChange={change} value={data.name} type="text" id="name" name="name" placeholder="first name" />
                <Input onChange={change} value={data.email} type="email" id="email" name="email" placeholder="email" />
                <Input onChange={change} value={data.password} type="password" id="password" name="password" placeholder="password" />

                <ErrorBox>
                    {errors.name.length > 0 && <Paragraph>{errors.name}</Paragraph>}
                    {errors.email.length > 0 && <Paragraph>{errors.email}</Paragraph>}
                    {errors.password.length > 0 && <Paragraph>{errors.password}</Paragraph>}
                    {errors.hasAcceptedTOS.length > 0 && <Paragraph>{errors.hasAcceptedTOS}</Paragraph>}
                </ErrorBox>

                <Label htmlFor="tos">Terms of Service</Label>
                <Input onChange={check} type="radio" checked={data.hasAcceptedTOS} id="tos" name="hasAcceptedTOS" value={!data.hasAcceptedTOS} />
                <Button disabled={disabled}>Submit</Button>
            </FormBox>
        </FormContainer>
    )
}

export default Form