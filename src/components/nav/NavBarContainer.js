import { connect } from 'react-redux'
import NavBar from './NavBar'
import {updateSearch} from './actions'

const mapStateToProps = (state) => {
    const {search} = state
    return {
        search
    }
}

export default connect(mapStateToProps,{
    updateSearch
})(NavBar)