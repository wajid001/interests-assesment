import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InterestBox from './InterestBox';
import { interests } from '../constans/interests';
import './style.css';
const AllFields = () => {
  const [fields, setFields] = useState(interests.slice(0, 8));
  const [showAll, setShowAll] = useState(false);
  const handleClick = (id, selected) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, selected: !selected } : field
      )
    );
    setFields((prev) =>
      prev.sort(function (x, y) {
        return Number(y.selected) - Number(x.selected);
      })
    );
  };

  const handleShow = () => {
    setShowAll(!showAll);
    setFields(interests);
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h3 className='mt-5'>Why are you interested in ?</h3>
        </Col>
        <Col md={{ span: 2, offset: 5 }}>
          {' '}
          <p>Choose three or more.</p>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={{ span: 6, offset: 3 }}>
          <div className='skill-container'>
            {fields?.map((field, idx) => (
              <InterestBox
                onClick={() => handleClick(field.id, field.selected)}
                key={idx}
                selected={field.selected}
                name={field.name}
              />
            ))}
            {!showAll && '...'}
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={{ span: 2, offset: 5 }}>
          <div className='btn-group'>
            {!showAll && (
              <Button
                variant='none'
                className=''
                onClick={handleShow}
              >
                Show more
              </Button>
            )}
            <Button
              variant='none'
              className='next-btn'
              disabled={
                fields.filter((field) => field.selected === true).length < 3
              }
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AllFields;
