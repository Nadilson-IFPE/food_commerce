import { SkeletonElement } from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SkeletonProps) {
  return <SkeletonElement type={type} />
}
