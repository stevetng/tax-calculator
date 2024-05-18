// src/components/CalculationDetails.tsx
import React from 'react';

const CalculationDetails: React.FC = () => {
    return (
          <div id="CalculationDetails" className="container text-black mx-auto py-6 md:py-12 px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How The Tax Impact Was Calculated</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  To analyze the 2024 presidential tax plans impact, I mainly focused on the federal tax rate and child tax credit differences between the two candidates for simplicity. If there's further interest, I'd be willing to implement more taxes like capital gains and deductions but I wanted to publish this site and get feedback before I start implementing more.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Income Tax Rates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I examined the proposed changes to individual income tax rates for each candidate, including any
                      adjustments to tax brackets and marginal rates.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Deductions and Credits</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      My analysis took into account the candidates' proposals for modifying or introducing new tax child tax credits. Deductions I'd be interested in adding as a next feature.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Data Sources and Assumptions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        The data used in my analysis and included in the basic tax policies section was mainly sourced from the <a className="text-blue-500 hover:text-blue-600" href="https://taxfoundation.org/research/federal-tax/2024-tax-plans/" target="_blank" rel="noopener noreferrer">Tax Foundation's 2024 Presidential Tax Plan Breakdown</a>. I made reasonable assumptions where specific details were not provided.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">How Your Data is Handled</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      None of your personal data is being collected. This site is hosted on Vercel and all calculations are done without being stored on a database. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      );
};

export default CalculationDetails;
