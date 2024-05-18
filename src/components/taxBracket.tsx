import React from 'react';

const TaxBracket: React.FC = () => {
    return (
        <section id="TaxBracket" className="bg-white pt-12 pb-4 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
                Federal Tax Bracket Changes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                If you're wondering why the your taxes for both candidates seems similar, it's because the tax bracket rates up to the $400,000(single) and $450,000(married) are the same for both presidents. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
              Biden's main change to the income tax policy is to change the top tax bracket rate to 39.6% for additional income over $400,000(single) and $450,000(married) as shown below.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-left">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800">
                      <th className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Upper Bound (Single)</th>
                      <th className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Tax Rate (Single)</th>
                      <th className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                        Upper Bound (Married, Filing Jointly)
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                        Tax Rate (Married, Filing Jointly)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$11,600</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">10%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$23,200</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">10%</td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$47,150</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">12%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$94,300</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">12%</td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$100,525</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">22%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$201,050</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">22%</td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$191,950</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">24%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$383,900</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">24%</td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$243,725</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">32%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$450,000</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">32%</td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">$400,000</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">35%</td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700"><span className="font-medium text-red-500">$450,000+</span></td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700"><span className="font-medium text-red-500">39.6%</span></td>
                    </tr>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                        <span className="font-medium text-red-500">$400,000+</span>
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                        <span className="font-medium text-red-500">39.6%</span>
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                        <span className="font-medium text-red-500"></span>
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                        <span className="font-medium text-red-500"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )
};

export default TaxBracket;

