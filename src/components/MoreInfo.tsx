// src/components/MoreInfo.tsx
import React from 'react';

const MoreInfo: React.FC = () => {
  return (
    <main id="MoreInfo" className="w-full max-w-6xl mx-auto py-4 md:px-6 text-black">
      <h1 className="text-3xl font-bold mb-12 text-center md:text-4xl">Basic Tax Policies by Candidate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 border  border-gray-200 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="h-16 w-16 flex items-center justify-center mr-3">
              <img src="harris_id.png" className="" alt="" />
            </div>
            <h2 className="text-xl font-bold">Kamala Harris</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Party Affiliation: Democratic</p>
          <div className="space-y-4">
          <div>
              <h3 className="font-semibold">Income Tax</h3>
              <ul className="list-disc pl-5">
                <li>
                  Increase top individual income tax rate to 39.6 percent on income above $400,000 for single filers and $450,000 for joint filers.
                </li>
                <li>
                Extend the expiring individual income tax changes from the 2017 Tax Cuts and Jobs Act (TCJA) for taxpayers making under $400,000.
                </li>
                <li>
                $6,000 Tax Credit for Newborns: Harris proposes a $6,000 tax credit for parents of newborns, which would be available in the child's first year.
                </li>
                <li>Restoration of the Expanded Child Tax Credit (CTC): Harris also aims to restore the pandemic-era expanded Child Tax Credit, which increased the benefit to $3,600 per child under six and $3,000 for children older than six. </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Corporate Tax</h3>
              <ul className="list-disc pl-5">
                <li>Increase the corporate income tax rate from 21 percent to 28 percent.</li>
                <li>Increase the global intangible low-taxed income (GILTI) tax rate from 10.5 percent to 21 percent and repeal the reduced tax rate on foreign-derived intangible income (FDII).</li>
                <li>Quadruple the stock buyback tax implemented in the Inflation Reduction Act from 1 percent to 4 percent.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Capital Gains Tax</h3>
              <ul className="list-disc pl-5">
                <li>
                  Tax long-term capital gains and qualified dividends at 28 percent (as opposed to 39.6 percent as in the Biden budget) for taxable income above $1 million and tax unrealized capital gains at death above a $5 million exemption ($10 million for joint filers).
                </li>
                <li>
                  Increase the net investment income tax (NIIT) to reach 5 percent on income above $400,000.
                </li>
              </ul>
            <br />
            <a className="text-blue-500 hover:text-blue-600" href="https://taxfoundation.org/research/all/federal/kamala-harris-tax-plan-2024/">Read More on Harris's tax policies here.</a>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
          <div className="h-16 w-16 flex items-center justify-center mr-3">
              <img src="trump_id.png" className="" alt="" />
            </div>
            <h2 className="text-xl font-bold">Donald Trump</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Party Affiliation: Republican</p>
          <div className="space-y-4">
          <div>
              <h3 className="font-semibold">Income Tax</h3>
              <ul className="list-disc pl-5">
                <li>
                Proposes to maintain the current top marginal tax rate of 37% for individuals earning over $500,000 per
                year. 
                </li>
                <li>
                Make the expiring individual income tax cuts from the 2017 Tax Cuts and Jobs Act permanent. (Keep tax brackets the same.)
                </li>
                <li>
                Potential $5,000 Child Tax Credit: Trump's running mate, Ohio Sen. J.D. Vance, has suggested increasing the credit to $5,000 per child. This proposal is being considered by the Trump campaign, though it's not yet official policy so I've not included it in the calculation.
                </li>
                <li>
                No Income Threshold: Vance has indicated a preference for expanding the Child Tax Credit (CTC) to all families, regardless of income - same as before so not included in calculation.
                </li>
                <li>Exempt Social Security benefits, tip income, and overtime pay from taxation.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Corporate Tax</h3>
              <ul className="list-disc pl-5">
                <li>Lower the corporate income tax rate from 21 percent to 20 percent.</li>
                <li>Lower the corporate income tax rate to 15 percent for companies that make their products in the US.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Capital Gains Tax</h3>
              <ul className="list-disc pl-5">
                <li>Seeks to maintain the current preferential tax rate on capital gains and dividends.</li>
              </ul>
            </div>
            <h3></h3>
                <p>On a personal income level, Trump has verbally committed to mainly continue the tax cuts he implemented in 2017 with the TCJA Act. <a className="text-blue-500 hover:text-blue-600" href="https://www.irs.gov/newsroom/tax-cuts-and-jobs-act-a-comparison-for-businesses#:~:text=The%20Tax%20Cuts%20and%20Jobs,the%20changes%20and%20plan%20accordingly.">Read More on the TCJA here.</a></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoreInfo;
