import {  FREQUENCY_TYPES, IFrequencyType, IInterestType } from "@/config/constants";


interface InterestInput {
  amount: number;         // Principal amount
  rate: number;       
  transactionDate : string    // Interest rate (annual)
  durationType: IFrequencyType; // Type of duration
  interestType : IInterestType
}

const unitMap: Record<IFrequencyType, number> = {
  yearly: 1,
  monthly: 12,
  weekly: 52,
  daily: 365,
};

// Function to calculate time difference in years
const getTimeInYears = (duration: number, durationType: IFrequencyType): number => {
  return duration / unitMap[durationType];
};

// Function to calculate the difference between two dates
const calculateDateDifference = (transactionDate: Date, currentDate: Date, durationType: IFrequencyType): number => {
  const timeDifference = currentDate.getTime() - transactionDate.getTime();
  const timeInDays = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
  
  if (durationType === FREQUENCY_TYPES.DAILY) {
    return timeInDays / 365; // Convert days to years
  }
  if (durationType === FREQUENCY_TYPES.MONTHLY) {
    return timeInDays / 30; // Convert days to months (approximated)
  }
  if (durationType === FREQUENCY_TYPES.WEEKLY) {
    return timeInDays / 7; // Convert days to weeks
  }
  return timeInDays; // Default to days
};

export const calculateInterest = ({
  amount,
  rate,
  transactionDate,
  durationType,
  interestType,
}: InterestInput): number => {
  const currentDate = new Date();
  const duration = calculateDateDifference(new Date(transactionDate), currentDate, durationType); // Get duration based on transaction date
  const timeInYears = getTimeInYears(duration, durationType);
  
  const interest =
    interestType === 'percentage'
      ? (amount * rate * timeInYears) / 100
      : rate * duration; // Assuming simple interest calculation if not percentage

  return Number(interest.toFixed(2));
};
