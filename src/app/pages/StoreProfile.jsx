import React from 'react'
import StoreProfileContainer from '../redux/containers/storeProfile/storeProfileContainer'

function StoreProfile(props) {
    return (
        <div>
            <StoreProfileContainer storeID={props.match.params.storeID} storename={props.match.params.storename} />
        </div>
    )
}

export default StoreProfile
