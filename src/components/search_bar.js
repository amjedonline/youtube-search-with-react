import React, {Component} from 'react';


// Class component of SearchBar
class SearchBar extends Component {
  
  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
        <div className="search-bar">
          <input
            vaue={this.state.term}
            onChange={event=>this.onInputChange(event.target.value)} />
        </div>
      );
  }
  
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
// the default thing that gets exported ?


