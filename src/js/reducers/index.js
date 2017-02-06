import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos
})

export default rootReducer

// .move {
//         display: none;
//         position: absolute;
//         top: 0;
//         right: 30px;
//         bottom: 0;
//         width: 20px;
//         height: 20px;
//         margin: auto 0;
//         font-size: 20px;
//         color: #cc9a9a;

//         &.down {
//             right: 20px;
//         }
//     }

//     &:hover .move {
//         display: block;
//     }