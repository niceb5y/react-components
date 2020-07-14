import React, { useState, useLayoutEffect, ReactElement, useRef } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

export type ImageGridItemProps = React.PropsWithChildren<{
  width: number
  height: number
}>

export interface ImageGridProps {
  children:
    | ReactElement<ImageGridItemProps>
    | Array<ReactElement<ImageGridItemProps>>
  className?: string
  rowHeight?: number
  padding?: number
}

interface ImageGridElements {
  elem: ReactElement<ImageGridItemProps>
  ratio: number
}

interface ImageGridRow {
  ratio: number
  elements: Array<ImageGridElements>
}

const ImageGrid = ({
  children,
  className,
  rowHeight = 200,
  padding = 10,
}: ImageGridProps) => {
  const container = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (null !== container.current) {
        setWidth(container.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const rows: Array<ImageGridRow> = []
  let row: ImageGridRow = { elements: [], ratio: 0 }
  React.Children.forEach(children, (elem) => {
    if (row.elements.length === 0) {
      row.elements.push({
        elem: elem,
        ratio: elem.props.width / elem.props.height,
      })
      row.ratio = elem.props.width / elem.props.height
      return
    }

    const height =
      (width - row.elements.length * padding) /
      (elem.props.width / elem.props.height + row.ratio)
    if (height < rowHeight) {
      rows.push(row)
      row = { elements: [], ratio: 0 }
    }
    row.elements.push({ elem, ratio: elem.props.width / elem.props.height })
    row.ratio += elem.props.width / elem.props.height
  })
  rows.push(row)

  const ImageGridRow = styled.div`
    margin-bottom: ${padding}px;
    overflow-x: hidden;
    & > img {
      margin-right: ${padding}px;
    }
    & > img:last-child {
      margin-right: 0;
    }
  `

  return (
    <div className={classnames('w-100', className)} ref={container}>
      {rows.map((row, index) => {
        const height = (width - (row.elements.length - 1) * padding) / row.ratio

        return (
          <ImageGridRow key={`row-${index}`}>
            {row.elements.map((elem, index) => {
              return React.cloneElement(elem.elem, {
                ...elem.elem.props,
                width: Math.floor(height * elem.ratio),
                height: Math.floor(height),
                key: index,
              })
            })}
          </ImageGridRow>
        )
      })}
    </div>
  )
}

export default ImageGrid
