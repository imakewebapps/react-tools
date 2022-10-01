import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 15,
      loading: true
    };
  }
  async componentDidMount() {
    this.getArticles(this.state.page, this.state.pageSize);
  }
  async getArticles(page, pageSize) {
    let data = await fetch(`http://localhost:3001/news?_page=${page}&_limit=${pageSize}`);

    // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=cfe1199c07ab49a580a4b5c98e338a13&pageSize=${pageSize}&page=${page}`);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData,
      page: page,
      pageSize: pageSize,
      loading: false,
      totalArticles: data.headers.get('X-Total-Count')
    });

  }
  onNext = () => {
    this.getArticles(this.state.page + 1, this.state.pageSize);
  }
  onPrev = () => {
    this.getArticles(this.state.page - 1, this.state.pageSize);
  }
  setPageSize(e) {
    this.getArticles(this.state.page, e.target.value);
  }
  render() {

    return (
      <div className="container my-10 px-6 mx-auto">

        <div className="mb-32 text-gray-800 text-right">
          <select onChange={(e) => this.setPageSize(e)} className="px-4 py-3 my-5 rounded-full">
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            {this.state.loading ? (
              <Spinner />
             ) :
              (
                this.state.articles.map((news, index) => {
                  return (<NewsItem key={index} title={news.title} description={news.description} urlToImage={news.urlToImage} publishedAt={news.publishedAt} author={news.author} newsId={index} />)
                })
              )
            }
          </div>
          <div className="inline-flex">
            {
              this.state.page > 1 && (
                <button onClick={this.onPrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mr-1">
                  Prev
                </button>)
            }
            {
              (this.state.page * this.state.pageSize) < this.state.totalArticles && (<button onClick={this.onNext} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
              </button>)
            }
          </div>
        </div>
      </div>
    )
  }
}
export default News
