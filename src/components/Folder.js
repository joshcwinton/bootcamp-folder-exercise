import React, {
  Component
} from 'react';
import './Folder.css'

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }

    this.changeVisibility = this.changeVisibility.bind(this);
  }

  changeVisibility() {
    this.setState((state, props) => {
      return {
        visible: !this.state.visible
      }
    })
  }

  render() {
      if (this.state.visible === true) {
        return ( < div id = "folder" >
          <
          h2 > Home < /h2> <
          button onClick = {
            this.changeVisibility
          } > Toggle < /button> <
          div id = "mylist" >
          <
          ul >
          <
          li > File 1 < /li> <
          li > File 2 < /li> <
          li > File 3 < /li> <
          /ul> <
          /div> <
          /div>)
        }
        else {
          return ( < div id = "folder" >
            <
            h2 > Home < /h2> <
            button onClick = {
              this.changeVisibility
            } > Toggle < /button> <
            /div>)
          }
        }
      }

      export default Folder
