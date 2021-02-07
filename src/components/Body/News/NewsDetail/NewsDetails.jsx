import { connect } from "react-redux";


const NewsDetail = props => {
    let day = new Date(props.oneNews.publishedAt).getDate();
    let mounth = new Date(props.oneNews.publishedAt).getMonth() + 1

    return (
        <div className="single-content">
            <div className="single-content-info">
                <div className="single-content-info-title">
                    {props.oneNews.title}
                </div>
                
                <div className="single-content-info-content">
                    <a href={props.oneNews.url} className="single-content-info-content-link">
                        {props.oneNews.source.name}
                    </a>
                    <div className="single-content-info-content-date">
                        <div className="single-content-info-content-day">{day}</div>
                        <div className="single-content-info-content-month"> / {mounth}</div>
                    </div>
                </div>
            </div>

            <div className="single-content-content">
                <img src={props.oneNews.urlToImage} alt="photo" className="single-content-content-img"/>
                <p className="single-content-content-text">
                    {props.oneNews.content}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        oneNews: state.oneNews
    }
}

export default connect(mapStateToProps)(NewsDetail);