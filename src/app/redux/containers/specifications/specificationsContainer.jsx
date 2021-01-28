import React from 'react'
import { connect } from 'react-redux'

export const SpecificationsContainer = (props) => {
    console.log(props)
    return (
        <>
            
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecificationsContainer)