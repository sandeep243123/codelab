import React from 'react'
import Code from './Code'
import Header from './Header'
import Result from './Result'
import { styled, Box } from '@mui/material'

const Container = styled(Box)`

`
function Home() {
    return (
        <Container>
            <Header></Header>
            <Code></Code>
            <Result></Result>
        </Container>
    )
}

export default Home
