import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.red};

  width: 7.75rem;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: ${({ theme }) => theme.colors.white};
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }
`
