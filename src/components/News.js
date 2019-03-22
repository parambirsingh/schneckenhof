import React from 'react'

class News extends React.Component {

    render() {
        if (this.props.news) {
            const news = this.props.news.data.allNews.edges.sort((a, b) => {
                if (new Date(a.node.startDate) < new Date(b.node.startDate))
                    return -1;
                if (new Date(a.node.startDate) > new Date(b.node.startDate))
                    return 1;
                return 0;
            })

            return (
                <div className="news-content">
                    {
                        news.map((newsdata, index) => {
                            return <div key={index} className='c-news'>
                                <div className='item'>
                                    {
                                        newsdata.node.startDate !== newsdata.node.endDate ? (
                                            <div className='date'>
                                                <span className='day'>
                                                    {new Date(newsdata.node.startDate).getUTCMonth() == new Date(newsdata.node.endDate).getUTCMonth()
                                                        ?
                                                        (
                                                            (new Date(newsdata.node.endDate).getUTCDate() - new Date(newsdata.node.startDate).getUTCDate()) == 1
                                                                ?
                                                                <span>
                                                                    {new Date(newsdata.node.startDate).getUTCDate()}
                                                                    <span className='separator'> + </span>
                                                                    {new Date(newsdata.node.endDate).getUTCDate()}
                                                                </span>

                                                                :
                                                                <span>
                                                                    {new Date(newsdata.node.startDate).getUTCDate()}
                                                                    <span className='separator'> - </span>
                                                                    {new Date(newsdata.node.endDate).getUTCDate()}
                                                                </span>
                                                        ) :
                                                        (
                                                            <span>
                                                                {new Date(newsdata.node.startDate).getUTCDate()}
                                                                <span className='month'>{new Date(newsdata.node.startDate).toLocaleString('de', { month: 'short' })}</span>
                                                                <span className='separator'>&nbsp; - &nbsp;</span>
                                                                {new Date(newsdata.node.endDate).getUTCDate()}

                                                            </span>
                                                        )
                                                    }
                                                    <br />
                                                    <span className='month'>{new Date(newsdata.node.endDate).toLocaleString('de', { month: 'short' })}</span>
                                                </span>
                                            </div>
                                        ) :
                                            <div className='date'>
                                                <span className='day'>
                                                    {new Date(newsdata.node.startDate).getUTCDate()}
                                                </span>
                                                <br />
                                                <span className='month'>{new Date(newsdata.node.startDate).toLocaleString('de', { month: 'short' })}</span>
                                            </div>
                                    }
                                    <div className='description'>
                                        <h4>{newsdata.node.title.toUpperCase()}</h4>
                                        <h6>{newsdata.node.shortDescription} </h6>
                                        <br />
                                        <br />
                                        <div dangerouslySetInnerHTML={{ __html: newsdata.node.description }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            );
        }
        else {
            return (<div className="news-content">
                <h5>Wir haben keine Nachrichten verfügbar.</h5>
            </div>)
        }
    }
}

export default News;
