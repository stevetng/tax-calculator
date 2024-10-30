// src/components/CandidateComparison.tsx

import React from 'react';

interface UserInfo {
  income: number;
  dependents: number;
  students: number;
  filingStatus: "single" | "marriedFilingJointly";
  childrenAges: number[]; // Add this new field
}

interface PolicyImpact {
  taxImpact: number;
  childTaxCreditImpact: number;
}

interface Candidate {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  calculatePolicyImpact: (userInfo: UserInfo) => PolicyImpact;
}

interface ChildInfo {
  age: number;
  isNewborn: boolean;
}

// Add these constants at the top with other constants
const NEWBORN_CREDIT = 6000;
const UNDER_SIX_CREDIT = 3600;
const OVER_SIX_CREDIT = 3000;
const STANDARD_CREDIT = 2000; // Keep the existing credit for Trump's calculation

const taxBrackets = {
    single: [
      { upperBound: 11600, rate: 0.10 },
      { upperBound: 47150, rate: 0.12 },
      { upperBound: 100525, rate: 0.22 },
      { upperBound: 191950, rate: 0.24 },
      { upperBound: 243725, rate: 0.32 },
      { upperBound: 609350, rate: 0.35 },
      { upperBound: Infinity, rate: 0.37 },
    ],
    marriedFilingJointly: [
      { upperBound: 23200, rate: 0.10 },
      { upperBound: 94300, rate: 0.12 },
      { upperBound: 201050, rate: 0.22 },
      { upperBound: 383900, rate: 0.24 },
      { upperBound: 487450, rate: 0.32 },
      { upperBound: 731200, rate: 0.35 },
      { upperBound: Infinity, rate: 0.37 },
    ],
    // Add other filing statuses (head of household, etc.) as needed
  };

const childTaxCreditAmount = 2000;
const childTaxCreditPhaseoutStart = {
  single: 200000,
  marriedFilingJointly: 400000,
  // Include other filing statuses as necessary
};

// this is based off of the TCJA tax brackets 
function calculateStandardTax(income: number, filingStatus: keyof typeof taxBrackets): number {
    let tax = 0;
    let remainingIncome = income;
  
    // Process each tax bracket
    for (const bracket of taxBrackets[filingStatus]) {
      if (remainingIncome > bracket.upperBound) {
        tax += bracket.upperBound * bracket.rate;
      } else {
        tax += remainingIncome * bracket.rate;
        break;
      }
      remainingIncome -= bracket.upperBound;
    }
    return tax;
  }

const candidates: Candidate[] = [
  {
    id: 'biden',
    name: 'Kamala Harris',
    title: '46th Vice-President of the United States',
    imageUrl: 'harris_id.png',
    calculatePolicyImpact: (userInfo: UserInfo) => calculateTaxImpact(userInfo, 'biden'),
  },
  {
    id: 'trump',
    name: 'Donald Trump',
    title: '45th President of the United States',
    imageUrl: 'trump_id.png',
    calculatePolicyImpact: (userInfo: UserInfo) => calculateTaxImpact(userInfo, 'trump'),
  },
];

const CandidateComparison: React.FC<{ userInfo: UserInfo }> = ({ userInfo }) => {
  return (
    <>
      {candidates.map((candidate) => {
        const impacts = candidate.calculatePolicyImpact(userInfo);
        return (
          <div key={candidate.id} className="flex-1 md:flex md:flex-col bg-gray-100 text-black border rounded-r border-gray-400 sm:border-t-0 border-b-0 border-r-0 border-l-0 sm:border-l">
            <div className='flex items-center p-4'>
                <img src={candidate.imageUrl} alt={candidate.name} className="w-16 h-16 rounded-md" />
                <div className='flex flex-col p-2'>
                  <h1 className="text-lg font-semibold">{candidate.name}</h1>
                  <p className='text-gray-600'>{candidate.title}</p>
                </div>
              </div>
            
            <div className='flex flex-grow flex-shrink flex-col border-t border-gray-400 p-4'>
                <ul className='mt-2'>Federal Tax:</ul>
                <ul className='mt-2 text-5xl text-green-500'>${impacts.taxImpact.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</ul>
            </div>
            <div className='flex flex-grow flex-shrink flex-col border-t border-gray-400 p-4'>
                <ul className='mt-2'>Child Tax Credit: </ul>
                <ul className='mt-2 text-5xl text-green-500'>${impacts.childTaxCreditImpact.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</ul>
            </div>
          </div>
        );
      })}
    </>
  );
};


function calculateTaxImpact(userInfo: UserInfo, candidate: string): PolicyImpact {
  const { filingStatus, income, dependents, childrenAges } = userInfo;
  let taxImpact = 0;
  let childTaxCreditImpact = 0;

  if (candidate === 'biden' && ((filingStatus === 'single' && income > 400000) || (filingStatus === 'marriedFilingJointly' && income > 450000))) {
    taxImpact = calculateBidenHighIncomeTax(income, filingStatus);
  } else {
    taxImpact = calculateStandardTax(income, filingStatus);
  }

  // Calculate Child Tax Credit with the new parameters
  childTaxCreditImpact = calculateChildTaxCredit(income, dependents, filingStatus, candidate, childrenAges);

  return { taxImpact, childTaxCreditImpact };
}

// Example calculation functions (simplified)
function calculateBidenHighIncomeTax(income: number, filingStatus: "single" | "marriedFilingJointly"): number {
    let tax = 0;
  
    if (filingStatus === 'single' && income > 400000) {
        tax += calculateStandardTax(400000, 'single'); // Calculate tax up to $400,000 using standard tax brackets
        tax += (income - 400000) * 0.396; // Apply Biden's higher tax rate for income over $400,000
    } else if (filingStatus === 'marriedFilingJointly' && income > 450000) {
        tax += calculateStandardTax(450000, 'marriedFilingJointly'); // Calculate tax up to $450,000 using standard tax brackets
        tax += (income - 450000) * 0.396; // Apply Biden's higher tax rate for income over $450,000
    }
    
    return tax;
}

function calculateChildTaxCredit(
    income: number, 
    dependents: number, 
    filingStatus: keyof typeof childTaxCreditPhaseoutStart,
    candidate: string = 'trump',
    childrenAges: number[] = []
  ): number {
    let credit = 0;

    if (candidate === 'biden') {
      // Calculate Harris's proposed credits
      childrenAges.forEach(age => {
        if (age === 0) {
          // Newborn credit
          credit += NEWBORN_CREDIT;
        } else if (age < 6) {
          // Under 6 credit
          credit += UNDER_SIX_CREDIT;
        } else {
          // 6 and older credit
          credit += OVER_SIX_CREDIT;
        }
      });
    } else {
      // Trump/Standard calculation
      credit = dependents * STANDARD_CREDIT;
    }
    const phaseoutThreshold = childTaxCreditPhaseoutStart[filingStatus];
    if (income > phaseoutThreshold) {
      // Implement the phaseout calculation
      // This is a simplification; the actual phaseout rate should be used
      credit -= (income - phaseoutThreshold) * 0.05;
    }
    return Math.max(credit, 0);
  }

export default CandidateComparison;


// // Test the component with mock user data
// const mockUserInfo: UserInfo = {
//   income: 500000,
//   filingStatus: "single",
//   dependents: 2,
//   students: 1,
// };

// // Mock rendering function for testing purposes (typically you would use a testing library)
// function testCandidateComparison() {
//   const component = <CandidateComparison userInfo={mockUserInfo} />;
//   // Here you would typically use a library like Jest and React Testing Library to render the component
//   // and assert the expected outputs. This function is just for demonstration purposes.
//   console.log('Component for testing:', component);
// }

// // Run the test
// testCandidateComparison();
