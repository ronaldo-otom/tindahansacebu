import React from 'react'
import { connect } from 'react-redux'
import ViewProductComponent from '../../../components/viewProduct/viewProduct.component'

const ViewProductContainer = (props) => {
    return (<ViewProductComponent data={props} />)
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductContainer)