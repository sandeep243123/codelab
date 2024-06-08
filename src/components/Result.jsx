import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
height:50vh;
`
function Result() {
    const { html, css, javascript } = useContext(DataContext);
    const [src, setSrc] = useState('');


    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
        </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 800)
        return () => clearTimeout(timeout)
    }, [html, css, javascript])


    return (
        <Container >
            <iframe
                srcDoc={src}
                title='Output'
                sandbox='allow-scripts'
                frameBorder={0}
                height="100%"
                width="100%"
            ></iframe>
        </Container>
    )
}

export default Result
