import React, {Component} from 'react';
let backdropIMG;
let numeral = require('numeral');

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster,
        noData = '-';

    let productionList, genresList, productionCountriesList, totalRevenue;

    productionList = data.production ? nestedDataToString (data.production) : '';
    productionCountriesList = data.production_countries ? nestedDataToString (data.production_countries) : '';
    genresList = data.genre ? nestedDataToString (data.genre) : '';

    backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop;

    // conditional statements for no data
     if (data.vote === 'undefined' || data.vote === 0) {
        data.vote = noData
      } else {
        data.vote = data.vote + ' / 10'
      };

      if (totalRevenue === 'undefined' || totalRevenue === 0) {
          totalRevenue = noData
      } else {
          totalRevenue = numeral(data.revenue).format('($0,0)');
      }


    return (
        <div className="col-xs-12 cardcont nopadding">

          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h1>{data.original_title}</h1>
            <span className="tagline">{data.tagline}</span>
            <p>{data.overview}</p>
            <div className="additional-details">
              <span className="genre-list">{genresList}</span>
              <span className="production-list">Production: {productionList}</span>
              <span className="production-list">Country: {productionCountriesList}</span>
              <div className="row nopadding release-details">
                <div className="col-xs-6"> Original Release: <span className="meta-data">{data.release}</span></div>
                <div className="col-xs-6"> Running Time: <span className="meta-data">{data.runtime} mins</span> </div>
                <div className="col-xs-6"> Box Office: <span className="meta-data">{totalRevenue}</span></div>
                <div className="col-xs-6"> Vote Average: <span className="meta-data">{data.vote} </span></div>
              </div>
            </div>
          </div>
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                  <img id="postertest" className='poster' src={posterIMG}/>
          </div>
        </div>
      )
  }
  componentDidUpdate(prevProps, prevState) {
    document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
  }
}

function nestedDataToString (nestedData) {
  let result = nestedData.map(function(val,key){
    return val.name;
  });
  return result.toString();
}

export default Movie;