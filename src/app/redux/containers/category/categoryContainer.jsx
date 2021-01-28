import {connect} from 'react-redux';
import React from 'react'
import CategoryComponent from '../../../components/category/categoryComponent';

const CategoryContainer = (props) => {
    console.log(props.data)
    return (
        <CategoryComponent data={props} />
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

export default connect(mapStateToProps, mapDispatchToProps) (CategoryContainer) 