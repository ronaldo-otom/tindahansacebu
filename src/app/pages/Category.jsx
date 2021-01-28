import React from 'react'
import CategoryContainer from '../redux/containers/category/categoryContainer'

const Category = (props) => {
    console.log(props)
    return (
        <div>
            <CategoryContainer props={props} />
        </div>
    )
}

export default Category
