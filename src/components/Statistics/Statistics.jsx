import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { StatItem, StatType, StatNumber } from './Statistics.styled';

const Statistics = ({ statistic = { good: 0, neutral: 0, bad: 0 } }) => {

  const statArr = Object.entries(statistic);
  const statValues = Object.values(statistic);

  const total = statValues.reduce((prevValue, item) => {
    return (prevValue += item);
  }, 0);

  const positiveRatio = Math.round((statistic.good / total) * 100);

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
        {statArr.map(statType => {
          return (
            <StatItem key={statType[0]} value={statType[0]}>
              <StatType>{statType[0]}: </StatType>
              <StatNumber>{statType[1]}</StatNumber>
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
          <StatNumber>{total}</StatNumber>
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
          <StatNumber>{positiveRatio}%</StatNumber>
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.object.isRequired,
};

export default Statistics;
