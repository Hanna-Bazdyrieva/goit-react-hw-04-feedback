import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { StatItem, StatType, StatNumber } from './Statistics.styled';

class Statistics extends Component {
  static dafaultProps = {
    stat: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    total: 0,
    positiveRatio: 0,
  };

  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positiveRatio: PropTypes.number.isRequired,
  };

  render() {
    const stats = Object.entries(this.props.stat);

    return (
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          mx="auto"
          my="0"
          p={4}
          width={2}
        >
          {stats.map(item => {
            return (
              <StatItem key={item[0]} value={item[0]}>
                <StatType>{item[0]}: </StatType>
                <StatNumber>{item[1]}</StatNumber>
              </StatItem>
            );
          })}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          mx="auto"
          my="0"
          p={4}
          width={2}
        >
          <Box
            width={1}
            bg="analitics"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={4}
            py={3}
            borderRadius="normal"
            border="normal"
            boxShadow="normal"
          >
            <StatType>Total Feedback:</StatType>
            <StatNumber>{this.props.total}</StatNumber>
          </Box>
          <Box
            Box
            width={1}
            bg="analitics"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={4}
            py={3}
            borderRadius="normal"
            border="normal"
            boxShadow="normal"
          >
            <StatType>Positive Ratio :</StatType>
            <StatNumber>{this.props.positiveRatio}%</StatNumber>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Statistics;
