import React from 'react';
import ContactInfo from './lecture2-5-1';


export default class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0007'}
      ]
    }
  }
  render() {
    
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
      return(<ContactInfo contact={contact} key={i}/>)
      });
    };
    
    
    return(
      <div>
        <h1>Contacts</h1>
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
}
