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


class IntroModal extends React.Component {
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
          <p ref="content" >DJ React is a vitrual DJ setup. You can import songs from your device or search Youtube. (Note: When playing songs from Youtube, only play/pause, playback speed, and the crossfader will work. This is a limitation of Youtube's player and will be fixed when I switch to SoundCloud's API) To get started, either drag and drop songs or videos from your device onto the turntables, or use the search bar to find songs on Youtube. Happy DJing!</p>
          <button onClick={this.closeModal} style={{float: 'right'}} >close</button>
        </Modal>
      </div>
    );
  }
}

export default IntroModal;
