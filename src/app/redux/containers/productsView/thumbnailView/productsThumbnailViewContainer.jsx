import {connect} from 'react-redux';
import React from 'react'
import ProductsThumbnailViewComponent from '../../../../components/productsView/thumbnail/productsThumbnailViewComponent';

const ProductsThumbnailViewContainer = (props) => {
    return (
        <ProductsThumbnailViewComponent data={props} />
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsThumbnailViewContainer) 