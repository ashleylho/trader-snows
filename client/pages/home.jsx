import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {
  render() {
    return (
      <div className="px-0 m-0 home-div position-relative">
        <div className="rounded py-4 px-5 shadow position-absolute splash">
          <h4 className="fs-3 py-2 mb-3 text-center text-uppercase">the mountains are calling</h4>
          <Button as="a" href="#products" variant="Secondary" className="fs-4 d-block mx-auto py-2 px-4 text-center text-white bg-dark text-uppercase">shop the collection</Button>
        </div>
      </div>
    );
  }
}
