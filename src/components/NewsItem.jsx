import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {


    let style = {"backgroundColor": "rgba(251, 251, 251, 0.15)"};
    let {title,description, author, publishedAt, urlToImage} = this.props;
    return (
        <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={urlToImage ? urlToImage : "https://via.placeholder.com/300"} className="w-full" alt={title} />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={style}></div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">{title}</h5>
            <p className="text-gray-500 mb-4">
              <small>Published <u>{publishedAt}</u> by
                <a href="" className="text-gray-900">{author}</a></small>
            </p>
            <p className="mb-4 pb-2">
             {description}
            </p>
            <a href={`/details/${title}`} data-mdb-ripple="true" data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
