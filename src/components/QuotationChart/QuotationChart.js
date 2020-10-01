import React from 'react';
import { Line } from 'react-chartjs-2';
import { ptBR } from 'date-fns/locale';
import { Flex } from '../Flex/Flex';
import 'chartjs-adapter-date-fns';
import { useChartResponsiveUtils } from '../../hooks';
import Loading from '../Loading';
import { toMoney } from '../../utils/string';
import { useGlobalContext } from '../../hooks/useGlobalState';

const QuotationChart = () => {
  const { quotationData, quotationLoading } = useGlobalContext();
  const { render, isMobile } = useChartResponsiveUtils();

  const genDataset = (feature) => {
    if (!quotationData) return [];
    return Object.entries(quotationData).map(([k, v]) => {
      return ({ x: new Date(k), y: parseFloat(v[feature]) });
    });
  };

  const getDataset = () => [
    {
      fill: '+2',
      backgroundColor: 'rgb(37,46,91, 0.4)',
      borderColor: 'rgb(37,46,91)',
      borderWidth: 2,
      borderDash: [3],
      label: 'Alta',
      data: genDataset('high'),
    },
    {
      fill: false,
      backgroundColor: 'rgb(53,177,0)',
      borderColor: 'rgb(81,202,0)',
      borderWidth: 2,
      label: 'Pontos',
      data: genDataset('adjusted'),
    },
    {
      fill: false,
      backgroundColor: 'rgb(37,46,91, 0.4)',
      borderColor: 'rgb(37,46,91)',
      borderWidth: 2,
      borderDash: [3],
      label: 'Baixa',
      data: genDataset('low'),
    },
  ];

  if (!render || quotationLoading || !quotationData) {
    return <Loading />;
  }

  return (
    <Flex fullWidth>
      <Line
        redraw
        height={isMobile ? 300 : 100}
        data={{ datasets: getDataset() }}
        options={{
          plugins: {
            filler: {
              propagate: true,
            },
          },
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += toMoney(tooltipItem.yLabel);
                return label;
              },
            },
          },
          scales: {
            xAxes: [{
              type: 'time',
              adapters: {
                date: {
                  locale: ptBR,
                },
              },
              time: {
                round: true,
                unit: 'month',
                tooltipFormat: 'dd/MM/yyyy',
                displayFormats: {
                  // hour: 'hhA',
                },
                bounds: 'auto',
                minUnit: 'day',
              },
            }],
            yAxes: [{
              ticks: {
                stepSize: 500,
              },
            }],
          },
        }}
      />
    </Flex>
  );
};

export default QuotationChart;
