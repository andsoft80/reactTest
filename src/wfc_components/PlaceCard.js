import React from 'react';
import labels from '../locale'

class PlaceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "ru",  
      countries:[
          {"_id":"ru","name":"Россия"},
          {"_id":"us","name":"США"},
          {"_id":"fi","name":"Финляндия"},

      ],
      regions:[
        {"_id":"ru1","name":"Центральная Россия"},
        {"_id":"ru2","name":"Карелия"},
        {"_id":"ru3","name":"Байкал"},
        {"_id":"ru4","name":"Кольский полуостров"}
      ]
    };
    
  }

  lab = (label) =>{
      return labels[label][this.state.locale];
  }
  
  render() {
    return <p>{this.lab('name')}</p>;
  }

  componentDidMount() {
    //Запрос стран и регионов  
    this.setState({
      locale: this.props.locale
    });
  }
}

export default PlaceCard;
