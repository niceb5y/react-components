import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Container, Row, Col } from '../src'
import { ColWidth } from '../src/Col'

export default { title: 'Layout', decorators: [withKnobs] }

export const withFlexColumn = () => {
  const fluidContainer = boolean('fluid', false, 'Container')
  const containerNoGutters = boolean('noGutters', false, 'Container')
  const rowNoGutters = boolean('noGutters', false, 'Row')
  return (
    <Container
      className="text-center"
      fluid={fluidContainer}
      noGutters={containerNoGutters}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <Row key={i} noGutters={rowNoGutters}>
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
  const fluidContainer = boolean('fluid', false, 'Container')
  const containerNoGutters = boolean('noGutters', false, 'Container')
  const rowNoGutters = boolean('noGutters', false, 'Row')
  return (
    <Container
      className="text-center"
      fluid={fluidContainer}
      noGutters={containerNoGutters}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <Row key={i} noGutters={rowNoGutters}>
          <Col width={i as ColWidth} className="mb-1">
            <div className="bg-secondary">col-{i}</div>
          </Col>
          <Col width={(12 - i) as ColWidth} className="mb-1">
            <div className="bg-secondary">col-{i}</div>
          </Col>
        </Row>
      ))}{' '}
      <Row noGutters={rowNoGutters}>
        <Col width={12} className="mb-1">
          <div className="bg-secondary">col-12</div>
        </Col>
      </Row>
    </Container>
  )
}
