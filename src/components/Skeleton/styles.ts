import styled, { css, keyframes } from 'styled-components'

import { SkeletonProps } from '.'

const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -200%;
  }
`

export const SkeletonElement = styled.div<SkeletonProps>`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
  background-size: 200%;
  border-radius: 4px;

  animation: ${shimmerEffect} 1s linear infinite;

  ${({ type }) =>
    type === 'title' &&
    css`
      width: 75%;
      height: 32px;
      margin: 0.5rem 0;
    `}

  ${({ type }) =>
    type === 'text' &&
    css`
      width: 100%;
      height: 18px;
      margin: 0.25rem 0;
    `}

  ${({ type }) =>
    type === 'image' &&
    css`
      width: 200px;
      height: 200px;
      margin: 0.25rem 0;
      border-radius: 50%;
    `}

  ${({ type }) =>
    type === 'thumbnail' &&
    css`
      width: 100%;
      height: 200px;
      margin: 0.5rem 0;
      border-radius: 10px;
    `}
`
