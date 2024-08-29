import './index.css'

const Emoji = props => {
  const {emoji, emojiclicking} = props
  const {name, imageUrl} = emoji

  const onClickingEmoji = () => {
    emojiclicking()
  }

  return (
    <li className="each-item">
      <img
        src={imageUrl}
        alt={name}
        className="emoji"
        onClick={onClickingEmoji}
      />
      <p>{name}</p>
    </li>
  )
}

export default Emoji
