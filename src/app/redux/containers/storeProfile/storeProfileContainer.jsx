import React from 'react'
import StoreProfileComponent from '../../../components/storeProfile/viewStore/storeprofile.component'
import {connect} from 'react-redux';

function StoreProfileContainer(props) {
    

    return (
        <>
            <StoreProfileComponent data={props} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreProfileContainer)