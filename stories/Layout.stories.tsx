import React from 'react'

import { Container, Row, Col } from '../src'
import { ColWidth } from '../src/Col'

export default { title: 'Layout' }

export const withFlexColumn = () => {
  return (
    <Container className="text-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <Row key={i}>
          {Array.from({ length: i }).map(() => (
            <Col className="mb-1">
              <div className="bg-secondary ">col</div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}

export const withWeightedColumn = () => {
  return (
    <Container className="text-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <Row key={i}>
          <Col width={i as ColWidth} className="mb-1">
            <div className="bg-secondary">col-{i}</div>
          </Col>
          <Col width={(12 - i) as ColWidth} className="mb-1">
            <div className="bg-secondary">col-{i}</div>
          </Col>
        </Row>
      ))}{' '}
      <Row>
        <Col width={12} className="mb-1">
          <div className="bg-secondary">col-12</div>
        </Col>
      </Row>
    </Container>
  )
}
