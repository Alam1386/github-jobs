import React from "react";
import { Form, Button, Col } from "react-bootstrap";
export const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            placeholder="React, PHP, React Native etc..."
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            placeholder="Toronto, Vancouver etc..."
            type="text"
          />
        </Form.Group>
        <Form.Group xs="auto">
          <Form.Check
            onChange={onParamChange}
            Value={params.full_time}
            name="full_time"
            type="checkbox"
            label="Full Time"
            id="full-time"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};
