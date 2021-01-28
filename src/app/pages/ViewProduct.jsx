import React, { PureComponent } from 'react'
import ViewProductContainer from '../redux/containers/viewProduct/viewProductContainer'

const ViewProduct = (props) => {
    return (
        <div>
            <ViewProductContainer params={props} />
        </div>
    )
}

export default ViewProduct
