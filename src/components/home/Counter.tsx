import React, { useEffect, useState } from 'react';

interface Target {
  id: string;
  count: number;
  suffix: string;
}

const stats = [
  { id: 'projects', count: 860, suffix: '+' },
  { id: 'clients', count: 400, suffix: '+' },
  { id: 'yearofexperience', count: 15, suffix: '+' },
];

const Counter: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    clients: 0,
    yearofexperience: 0,
  });

  const animateCountUp = (target: Target, duration: number) => {
    let currentCount = 0;
    const increment = Math.ceil(target.count / (duration / 10));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target.count) {
        clearInterval(interval);
        currentCount = target.count;
      }
      setCounts(prev => ({
        ...prev,
        [target.id]: currentCount,
      }));
    }, 10);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            // Start counting animation when section becomes visible
            stats.forEach(stat => {
              animateCountUp(stat, 2000); // Duration is set to 2 seconds (2000ms)
            });

            // Stop observing once the animation has started
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="">
      <div className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
              Trusted by Customers
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This package powers many production applications on many different hosting platforms.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16 fade-in-section">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                   Our Projects
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    >
                      {counts.projects}
                      {counts.projects === stats[0].count && stats[0].suffix}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Our Clients
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    >
                      {counts.clients}
                      {counts.clients === stats[1].count && stats[1].suffix}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Year of Experience
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    >
                      {counts.yearofexperience}
                      {counts.yearofexperience === stats[2].count && stats[2].suffix}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
