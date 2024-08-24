import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import React, { memo } from 'react'
import { Callout } from './callout'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Callout,
}

interface MdxProps {
  code: string
}

export const MDXContent = memo(({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  Component.displayName = 'MyComponent'
  return <Component components={components} />
})
