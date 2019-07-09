import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  &:hover strong {
    opacity: 0.7;
  }

  &:hover div:last-child {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  strong {
    display: block;
    color: #130042;
    text-transform: uppercase;
    margin-right: 5px;
    transition: opacity 0.2s;
  }
  div {
    position: relative;

    > span {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background: #7159c1;
      right: -4px;
      top: -8px;
      font-size: 12px;
      line-height: 21px;
      overflow: hidden;
      color: #fff;
      font-weight: bold;
      border-radius: 100%;
      text-align: center;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute !important;
  top: 100%;
  right: 0;
  background: #7159c1;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 5;
  width: 220px;
  border-radius: 4px;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  transform: translateY(10px);

  > div {
    display: flex;

    + div {
      margin-top: 15px;
    }

    img {
      border-radius: 3px;
      width: 50px;
      padding: 5px;
      align-self: flex-start;
      background: #fff;
    }

    div {
      color: #fff;
      font-size: 14px;
      margin-left: 10px;

      p {
        font-size: 11px;
        margin-top: 3px;

        span {
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }

  .more {
    width: 100%;
    margin: 5px 0;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 3px;
    font-size: 15px;
  }

  h2 {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
    }
    span:last-child {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;
