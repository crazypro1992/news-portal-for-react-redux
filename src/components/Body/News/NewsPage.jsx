import { connect } from "react-redux";
import NewsItem from "./NewsItem/NewsItem";

const NewsPage = props => {

    let news = props.totalNews && props.totalNews.filter((item, index)=> {
        return index < props.countOfNews 
    }).map((item, index) => {

        let day = new Date(item.publishedAt).getDate();
        let mounth = new Date(item.publishedAt).getMonth() + 1
        return (
            <NewsItem
                key={index}
                author={item.author}
                content={item.content}
                description={item.description}
                day={day}
                mounth={mounth}
                title={item.title}
                url={item.url}
                urlToImg={item.urlToImg}
                itemInfo={item}
            />
        )
        
    })
    return (
        <div className="news-content">
            <h2 className="news-content__title">
               {props.mainText}
            </h2>
            <div className="news-content__news">
                {news}
            </div>
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        totalNews: state.totalNews
    }
}

export default connect(mapStateToProps)(NewsPage);