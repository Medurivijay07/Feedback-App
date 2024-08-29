// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'

class Feedback extends Component {
  state = {isClicked: false}

  emojiclicking = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="main-container">
        <div className="emojis-card">
          {isClicked ? (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1>Thank You</h1>
            </div>
          ) : (
            <h1>How satisfied are you with our customer support performance</h1>
          )}
          {isClicked ? (
            <p>We will use your feedback to improve our customer support</p>
          ) : (
            <ul className="emoji-container">
              {emojis.map(eachItem => (
                <Emoji
                  emoji={eachItem}
                  key={eachItem.id}
                  emojiclicking={this.emojiclicking}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
