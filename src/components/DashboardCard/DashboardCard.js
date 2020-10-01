import React from 'react';
import Flex from 'components/Flex';
import Card from 'components/Card';

import { Info, InfoTitle } from './styles';
import Loading from '../Loading';
import {toMoney} from "../../utils/string";

const DashboardCard = ({
  title, text, color, IconComponent, loading,
}) => (
  <Card sidebar sidebarColor={color} padding="15px 25px" height="100px">
    <Flex fullWidth justifyBetween alignCenter>
      <Flex column className="mx-3">
        {loading ? (<Loading />) : (
          <>
            <InfoTitle color={color}>{title}</InfoTitle>
            <Info>{text}</Info>
          </>
        )}
      </Flex>
      {IconComponent && <IconComponent fontSize="large" />}
    </Flex>
  </Card>
);

DashboardCard.defaultProps = {
  IconComponent: null,
};

export default DashboardCard;
