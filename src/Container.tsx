import React, { ReactNode } from 'react'
import classnames from 'classnames'

export interface ContainerProps {
  children: ReactNode
  className?: string
  fluid?: boolean
  noGutters?: boolean
}

const Container = ({
  children,
  className,
  fluid = false,
  noGutters = false,
}: ContainerProps) => (
  <div
    className={classnames(
      { container: !fluid, 'container-fluid': fluid, 'no-gutters': noGutters },
      className
    )}
  >
    {children}
  </div>
)

export default Container
