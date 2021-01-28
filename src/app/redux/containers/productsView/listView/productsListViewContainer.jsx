import {connect} from 'react-redux';
import React from 'react'
import ProductsListViewComponent from '../../../../components/productsView/listView/productsListViewComponent';

const ProductListViewContainer = (props) => {
    return (
        <ProductsListViewComponent data={props} />
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

export default connect(mapStateToProps, mapDispatchToProps) (ProductListViewContainer) 