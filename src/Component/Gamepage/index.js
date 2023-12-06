import './index.css'

const Gamepage = props => {
  const {thumbnailUrl, onClickImage} = props
  const imgBtnClick = () => {
    onClickImage(thumbnailUrl)
  }
  return (
    <li>
      <button type="button" className="image-button" onClick={imgBtnClick}>
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}
export default Gamepage
