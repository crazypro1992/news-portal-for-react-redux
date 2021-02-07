import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const NewsItem = props => {

    let urlOneNews = props.title.replace(/ /g, '-')
   
    return (
        <div className="news__element">
            <div className="news__element-title-content">
                <div className="news__element-title" onClick={()=> {
                    props.addOneNews(props.itemInfo)
                    props.history.push('/news/'+ urlOneNews)
                }}>
                    {props.title}
                </div>
            </div>
            
            <div className="news__element-content">
                <a href={props.url} className="news__element-content-link">
                    {props.author}
                </a>
                <div className="news__element-content-date">
                    <div className="news__element-content-day">{props.day}</div>
                    <div className="news__element-content-month"> / {props.mounth}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        addOneNews: oneNews => dispatch({
            type: 'ADD_ONE_NEWS',
            oneNews: oneNews
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsItem));