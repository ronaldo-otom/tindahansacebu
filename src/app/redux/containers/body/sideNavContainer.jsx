import React from 'react'
import { connect } from 'react-redux'
import { SideNavDesign } from '../../../designs/body/sideNav.design'

const SidenavContainer = (props) => {
    return <SideNavDesign data={props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(SidenavContainer)