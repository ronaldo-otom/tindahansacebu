import {InputGroup, FormControl, Button} from 'react-bootstrap'
import React from 'react'

export const InputBtnRight = (props) => {
    return (
        <div>
            <InputGroup className="mb-3">
            <FormControl
            placeholder={props.placeholder}               
            />
            <InputGroup.Append>
            <Button variant="dark">Search</Button>
            </InputGroup.Append>
            </InputGroup>
        </div>
        )
}



