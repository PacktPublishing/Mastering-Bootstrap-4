var carouselImages = [
  {
    src: "images/brazil.png",
    caption: "Lake in Brazil"
  },
  {
    src: "images/datsun.png",
    caption: "Datsun Fairlady Z"
  },
  {
    src: "images/skydive.png",
    caption: "Team Skydive"
  }
]

var Carousel = React.createClass({
  render: function () {
    var props = this.props
    return (
      <div id={props.id} className="carousel slide" data-ride="carousel" data-interval={props.interval}>
        <div className="carousel-inner" role="listbox">
          
          { props.images.map(function(item, index) {
              var itemClass;
              if (index === 0) {
                  itemClass = "active"
              } else {
                  itemClass = ""
              }

              return (
              <div className={ 'carousel-item ' + itemClass }>
                <img data-modal-picture={'#' + props.carouselModalPicture} src={item.src} />
                <div className="carousel-caption">
                  {item.caption}
                </div>
              </div>
              )
            })}
        </div>
        <a className="left carousel-control" href={'#' +  props.id } role="button" data-slide="prev">
          <span className="icon-prev" aria-hidden="true"></span>
        </a>
        <a className="right carousel-control" href={'#' +  props.id } role="button" data-slide="next">
          <span className="icon-next" aria-hidden="true"></span>
        </a>
        <ol className="carousel-indicators">
          { props.images.map(function(item, index) {
              var liClass;
              if (index === 0) {
                  liClass = "active"
              } else {
                  liClass = ""
              }
              return (
                <li data-target={'#' +  props.id } data-slide-to={index} className={ liClass }></li>
              )
            })
          }
        </ol>
      </div>
    )
   }
 })

ReactDOM.render(
  <Carousel id="gallery-carousel" interval="3000" carouselModalPicture="carousel-modal" images={carouselImages}></Carousel>,
  document.getElementById('react-gallery')
  )

