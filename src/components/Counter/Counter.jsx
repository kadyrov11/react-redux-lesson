import React from 'react';
import {connect} from 'react-redux'

import Controls from './Controls';
import Value from './Value';

import {onIncrement, onDecrement} from '../../redux/counter/counter-actions'

import './Counter.css';


function Counter({ value, handleIncrement, handleDecrement }) {
  return (
    <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
}

const mapStateToProps = (state) => ({
    value: state.counterValue
})

const mapDispatchToProps = dispatch => ({
    handleIncrement: () => dispatch(onIncrement()),
    handleDecrement: () => dispatch(onDecrement())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };


//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;