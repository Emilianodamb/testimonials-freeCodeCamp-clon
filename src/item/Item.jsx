

const Item = ({objeto}) => {
  return (
    <div className="testimonial-card">
      <img src={objeto.imgUrl} alt={objeto.imgAlt} className="testimonial-img"/>
      <div className="testimonials-footer">
        <div className="testimonial-meta">
          <h3 className="testimonial-item-title">{objeto.nombre} en {objeto.pais}</h3>
          <p className="testimonial-item-subtitle">{objeto.puesto} en {objeto.empresa}</p>
        </div>
        <p className="testimony">
          "{objeto.testimonio}"
        </p>
      </div>
    </div>
  )
}

export default Item
