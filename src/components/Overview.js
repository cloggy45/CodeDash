import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import styleConstants from "../misc/style_constants.js";

const Overview = props => {
  const {
    active_currencies,
    active_markets,
    total_market_cap_usd,
    total_24h_volume_usd
  } = props;

  console.log(active_currencies);

  const Wrapper = styled.section`
    color: ${styleConstants.get("Light")};
    margin: 20px 0;
  `;

  const Table = styled.table`
    width: 100%;
  `;

  const TableData = styled.td`
    &:nth-child(even) {
      text-align: right;
    }
    padding: 5px;
    border-bottom: #234558 solid 0.1px;
  `;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return (
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <TableData>Total Market Cap</TableData>
            <TableData>{formatter.format(total_market_cap_usd)}</TableData>
          </tr>
          <tr>
            <TableData>Total 24 Volume</TableData>
            <TableData>{formatter.format(total_24h_volume_usd)}</TableData>
          </tr>
          <tr>
            <TableData>Active Markets</TableData>
            <TableData>{active_markets}</TableData>
          </tr>
          <tr>
            <TableData>Active Currencies</TableData>
            <TableData>{active_currencies}</TableData>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

Overview.propTypes = {
  active_currencies: PropTypes.number,
  active_markets: PropTypes.number,
  total_market_cap_usd: PropTypes.number,
  total_24h_volume_usd: PropTypes.number
};

Overview.defaultProps = {
  active_currencies: 0,
  active_markets: 0,
  total_market_cap_usd: 0,
  total_24h_volume_usd: 0
};

export default Overview;
