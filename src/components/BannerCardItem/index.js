import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div className="cards-container">
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="buttons">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
