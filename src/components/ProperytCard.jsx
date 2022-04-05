import './propertyCard.css'

function ProperytCard({detail}) {
  console.log("detail===>>>",detail)
  return (
    <div className="propertyComp">
              <img className="propertyImg" src={detail?.photos[0]} alt="" />
            <div className="propertyText">
            <h5>{detail?.property?.bedrooms} BR | {detail?.property?.bathsFull}{detail?.property?.bathsHalf} Bath | {detail?.property?.area} Sq Ft</h5>
            <h3>${detail?.listPrice}</h3>
            <h6>{detail?.address?.streetNumber} {detail?.address?.streetName}, {detail?.address?.city}</h6>
            <span className="listed">
              Listed: {detail?.listDate?.split("T")[0].split("-")[2] }/{detail?.listDate?.split("T")[0].split("-")[1] }/{detail?.listDate?.split("T")[0].split("-")[0] }
            </span>
            </div>
          </div>
  )
}

export default ProperytCard;