class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello, Friends! Its a basic react component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);