import React from 'react'
import { connect } from 'react-redux'

import { v4 } from 'uuid'

import './Colors.css';




function Colors({data}) {
    const colorElems = data.map(color => <li key={v4()} className='colors-item'  style={{backgroundColor: `${color}`}}></li>)
return (
    <div>
        <h2>
        Colors: 
        </h2> 
        <ul className='colors-list'>
            {colorElems}
        </ul>
    </div>
)
}

const mapStateToProps = (state) => ({
    data: state.colors
})


export default connect(mapStateToProps )(Colors)