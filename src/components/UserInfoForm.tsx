// src/components/UserInfoForm.tsx
import { useState, FormEvent } from 'react';

interface UserInfo {
    filingStatus: "single" | "marriedFilingJointly";
    income: number;
    age: number;
    dependents: number;
    students: number;
    zipCode: string;
  }

interface UserInfoFormProps {
    onSubmit: (formValues: UserInfo) => void;
  }

  const filingStatusOptions = [
    { id: 'single', value: 'single', label: 'Single' },
    { id: 'married', value: 'marriedFilingJointly', label: 'Married' },
    // Add more statuses as required
  ];

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
    const [filingStatus, setFilingStatus] = useState<"single" | "marriedFilingJointly">('single');
    const [income, setIncome] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [dependents, setDependents] = useState<string>('');
    const [students, setStudents] = useState<string>('');
    const [zipCode, setZipCode] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({
        filingStatus: filingStatus,
        income: Number(income),
        age: Number(age),
        dependents: Number(dependents),
        students: Number(students),
        zipCode: zipCode,
        });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 flex-1 md:flex md:flex-col text-black rounded rounded-r-none sm:flex-row sm:max-w-full sm:w-full">
        <h2 className="text-lg font-semibold text-black">Enter Your Information</h2>
        <p className="text-sm text-black">See the impacts of each candidate's policies on your household.</p>
        <hr className="solid"></hr>
        <fieldset>
            <legend className="text-base font-medium text-gray-900">Filing Status</legend>
            <div className="mt-4 space-y-4">
            {filingStatusOptions.map((option) => (
                <div key={option.id} className="flex items-center">
                <input
                    id={option.id}
                    name="filingStatus"
                    type="radio"
                    value={option.value}
                    checked={filingStatus === option.value}
                    onChange={(e) => setFilingStatus(e.target.value as "single" | "marriedFilingJointly")}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
                    {option.label}
                </label>
                </div>
            ))}
            </div>
        </fieldset>
      
        {/* Income Input */}
        <div className='mb-4'>
            <label htmlFor="income" className='block text-gray-700 text-sm font-semibold mb-2'>Income: </label>
            <input
            type="text" // Change type to text to handle formatted numbers
            id="income"
            name="income"
            value={Number(income).toLocaleString('en-US')}
            onChange={(e) => setIncome(e.target.value.replace(/,/g, ''))} // Remove commas on input for storing numeric value
            required
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        
        {/* Age Input */}
            <div>
                <label htmlFor="age" className='block text-gray-700 text-sm font-semibold mb-2'>Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={Number(age).toLocaleString('en-US')}
                    onChange={(e) => setAge(e.target.value)}
                    min="18" // Set minimum age requirement for example
                    required // Makes the field mandatory
                    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div> 
        
        {/* Number of Dependents */}
        <div>
            <label htmlFor="dependents" className='block text-gray-700 text-sm font-semibold mb-2'>Number of Dependents:</label>
            <input
            type="number"
            id="dependents"
            name="dependents"
            value={Number(dependents).toLocaleString('en-US')}
            min={0}
            onChange={(e) => setDependents(e.target.value)}
            required
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        
        {/* Number of Students */}
        <div>
            <label htmlFor="students" className='block text-gray-700 text-sm font-semibold mb-2'>Students in College:</label>
            <input
            type="number"
            id="students"
            name="students"
            value={Number(students).toLocaleString('en-US')}
            min={0}
            onChange={(e) => setStudents(e.target.value)}
            required
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        
        {/* Zip Code */}
        <div>
            <label htmlFor="zipCode" className='block text-gray-700 text-sm font-semibold mb-2'>Zip Code:</label>
            <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            pattern="\d{5}" // Simple validation for US zip codes
            title="Five digit zip code"
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        
        {/* Submit Button */}
        <div>
            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Calculate Impact
            </button>
        </div>
    </form>
  );
};

export default UserInfoForm;
