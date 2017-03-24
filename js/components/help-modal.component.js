import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    zIndex: 2,
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                     : '1px solid #009ab2',
    background                 : '#000',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
  }
};


class HelpModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: true
        }



  this.openModal = () => {
    this.setState({modalIsOpen: true});
  }

  this.afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#009ab2';
    this.refs.subtitle.style.textAlign = 'center';
    this.refs.content.style.color = '#009ab2';
  }

  this.closeModal = () => {
    this.setState({modalIsOpen: false});
  }
}

  render() {
    return (
      <div>
        {/*<button onClick={this.openModal}>Open Modal</button>*/}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Welcome To DJ-React!"
        >

          <h2 ref="subtitle">Welcome To DJ-React!</h2>
          <p ref="content" >DJ React let's you search for songs on YouTube and mix from one song to another. To get started...</p>
          <button onClick={this.closeModal} style={{float: 'right'}} >close</button>
        </Modal>
      </div>
    );
  }
}

export default HelpModal;
