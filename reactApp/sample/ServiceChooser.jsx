import React from 'react';

class ServiceChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 100};
    this.addTotal = this.addTotal.bind(this);
    this.detail = null;
  }

  addTotal(price, name) {
      this.setState({
        total: this.state.total + price
      });
      this.detail = {'name':name, 'price':price}
  }

  render() {
    var services = this.props.items.map((s,key) => {
      return <Items price={s.price} name={s.name} addTotal={this.addTotal} />;
    });

    var detail = this.detail ? <Details price={this.detail.price} name={this.detail.name} /> : '';

    return <div>
            {detail}
              <h1>Our services</h1>
                    <div id="services">
                        {services}
                    <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
              </div>
           </div>;
  }
}

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    var active = !this.state.active;
    this.setState({
      active: active
    });

    this.props.addTotal( active ? this.props.price : -this.props.price, this.props.name );
  }

  render() {
    return <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler} >{this.props.name} <span>${this.props.price}</span></p>
  }
}

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return <div>
              {this.props.name} -
              {this.props.price}
           </div>;
  }
}

export default ServiceChooser;