import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:py-14">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
          <p className="text-gray-600 dark:text-gray-400">
                This website is a personal project that began after I filed my taxes. I was curious about how each candidate's tax plans will affect them in the future and figured that if I was curious about their tax plans, then other people probably would be and would want to know more. This isn't an endorsement of either candidate, but I would love to hear feedback on what would be cool to add to this website! 
              </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <div className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                stevetn123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MailIcon(props:  React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

export default ContactMe;

