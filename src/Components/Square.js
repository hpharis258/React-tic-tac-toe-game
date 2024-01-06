import React from "react";

function Square(props)
{
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// class Square extends React.Component {
//     // Constructor to initialize the state.
//     // constructor(props)
//     // {
//     //     // Super needs to be called when defining a constructor for a sub class. This is a sub class of React Component
//     //     super(props);
//     //     this.state = {
//     //         value: null
//     //     };
//     // }
//     render() {
//       return (
//         <button className="square" onClick={() => this.props.onClick()}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

export default Square;