import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  transition: opacity 0.3s ease-in;
  opacity: ${props => (props.didMount ? '1' : '0')};

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    img {
      align-self: center;
      max-width: 250px;
      transition: all 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      &:disabled {
        cursor: wait;
      }

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      > div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        position: relative;

        svg {
          margin-right: 5px;
        }

        .loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${darken(0.2, '#7159c1')};

          > div {
            width: 18px;
            height: 18px;
          }

          svg {
            margin: 0;
          }
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;

  svg {
    height: 150px;
    width: 100px;
    fill: #fff;
  }
`;
