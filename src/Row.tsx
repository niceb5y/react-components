import React, { ReactNode } from 'react'
import classnames from 'classnames'

export interface RowProps {
  children: ReactNode
  className?: string
  noGutters?: boolean
}

const Row = ({ children, className, noGutters = false }: RowProps) => (
  <div className={classnames('row', { 'no-gutters': noGutters }, className)}>
    {children}
  </div>
)

export default Row
