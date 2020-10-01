import React from 'react';
import { MonetizationOnOutlined } from '@material-ui/icons';
import { getIn } from 'formik';
import { Container, FlexColumn } from '../../components/Flex';
import { Flex } from '../../components/Flex/Flex';
import DashboardCard from '../../components/DashboardCard';
import { useGlobalContext } from '../../hooks/useGlobalState';
import { toMoney } from '../../utils/string';
import QuotationChart from '../../components/QuotationChart';

const HomePage = () => {
  const {
    currentCompany, bovespaData, bovespaLoading, quotationPrice, quotationLoading,
  } = useGlobalContext();
  return (
    <Container>
      <h1 className="page-title p-page-title mt-2">{currentCompany.name}</h1>
      <Flex fullWidth justifyBetween>
        <FlexColumn sm="100%" all="50%">
          <DashboardCard
            color="blue"
            title="Pontos Bovespa"
            text={toMoney(getIn(bovespaData, 'bovespa.price'))}
            IconComponent={MonetizationOnOutlined}
            loading={bovespaLoading}
          />
        </FlexColumn>
        <FlexColumn sm="100%" all="50%">
          <DashboardCard
            color="green"
            title={`Pontos ${currentCompany.name}`}
            text={toMoney(quotationPrice)}
            IconComponent={MonetizationOnOutlined}
            loading={quotationLoading}
          />
        </FlexColumn>
      </Flex>
      <Flex fullWidth justifyCenter contentCenter alignCenter>
        <FlexColumn all="100%">
          <QuotationChart />
        </FlexColumn>
      </Flex>
    </Container>
  );
};

export default HomePage;
