import React, { ReactNode } from 'react'
import classnames from 'classnames'

export type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ColProps {
  children: ReactNode
  className?: string
  width?: ColWidth
  smWidth?: ColWidth
  mdWidth?: ColWidth
  lgWidth?: ColWidth
  xlWidth?: ColWidth
}

const Col = ({
  children,
  className,
  width,
  smWidth,
  mdWidth,
  lgWidth,
  xlWidth,
}: ColProps) => (
  <div
    className={classnames(
      {
        col: !width,
        [`col-${width}`]: width,
        [`col-sm-${smWidth}`]: smWidth,
        [`col-md-${mdWidth}`]: mdWidth,
        [`col-lg-${lgWidth}`]: lgWidth,
        [`col-xl-${xlWidth}`]: xlWidth,
      },
      className
    )}
  >
    {children}
  </div>
)

export default Col
