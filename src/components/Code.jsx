import React from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'

import { DataContext } from '../context/DataProvider'


const Container = styled(Box)`
    display:flex;
    background-color:#060606; 
`

function Code() {
    const { html, setHtml, css, setCss, javascript, setJavascript } = useContext(DataContext)
    return (
        <Container>
            <Editor heading='HTML' icon='/' color='#FF3C41' value={html} onChange={setHtml}></Editor>
            <Editor heading='CSS' icon='*' color='#0EBEFF' value={css} onChange={setCss}></Editor>
            <Editor heading='JS' icon='{}' color='#FCD000' value={javascript} onChange={setJavascript}></Editor>
        </Container >
    )
}

export default Code
