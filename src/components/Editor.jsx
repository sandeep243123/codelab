import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import '../App.css'

const Heading = styled(Box)`
background:#1d1e22;
display:flex;
color:white;
padding:9px 12px; 
`;

const Header = styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700
`;

const Container = styled(Box)`
flex-grow:1;
flex-basis:0;
display:flex;
flex-direction:column;
padding:0 8px;  
transition:0.4s;
border-radius:0.5rem
`


function Editor({ value, icon, color, heading, onChange }) {
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    const [open, setOpen] = useState(true);
    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box
                        component='span'
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: 'black'
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    onClick={() => setOpen(prevState => !prevState)}
                    fontSize='small'
                    style={{ alignSelf: 'center', cursor: 'pointer' }}
                ></CloseFullscreenIcon>
            </Header>
            <ControlledEditor
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true
                }}
            />
        </Container>
    )
}
export default Editor