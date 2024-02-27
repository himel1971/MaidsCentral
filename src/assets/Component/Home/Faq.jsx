import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl text-[#065FB1] font-semibold sm:text-4xl">Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">Find answers to common queries in our FAQ section!</p>
                    <div className="space-y-2">
                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                What are the requirements for hiring a maid in Singapore?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <ul className="list-disc pl-4">
                                    <li>Employers must be at least 21 years old.</li>
                                    <li>Employers must ensure that the maid has a valid work permit.</li>
                                    <li>Employers must meet the minimum income requirement.</li>
                                    <li>Employers must provide suitable accommodation for the maid.</li>
                                </ul>
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                How do I apply to hire a maid in Singapore?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Employers can apply for a maid through a licensed employment agency in Singapore. Employers must submit an application to the Ministry of Manpower (MOM) for approval.
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                What are the costs associated with hiring a maid in Singapore?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Employers must pay for the maid's salary, food, accommodation, and medical expenses. Employers must also pay a monthly levy to the MOM.
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                What are the responsibilities of the employer when hiring a maid?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <ul className="list-disc pl-4">
                                    <li>Employers must provide the maid with suitable accommodation, food, and medical care.</li>
                                    <li>Employers must ensure that the maid is treated fairly and with respect.</li>
                                    <li>Employers must comply with all regulations regarding the employment of maids in Singapore.</li>
                                </ul>
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                What are the rights of the maid when working in Singapore?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <ul className="list-disc pl-4">
                                    <li>Maids have the right to a safe and healthy working environment.</li>
                                    <li>Maids have the right to be paid their agreed-upon salary on time.</li>
                                    <li>Maids have the right to medical care and rest days.</li>
                                </ul>
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                What should I do if I encounter issues with my maid?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Employers should try to resolve any issues with the maid through open and honest communication. If issues cannot be resolved, employers can seek assistance from the maid's employment agency or the MOM.
                            </p>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                                Can I hire a maid from a specific country?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Employers can specify their preference for a maid from a particular country, but the final decision is up to the employment agency and availability.
                            </p>
                        </details>
                    </div>

                    <h2 className="mt-12 text-2xl text-[#065FB1] font-semibold sm:text-4xl">Most Common Issues When Hiring a Maid in Singapore!!</h2>
                    <p className="mt-4 mb-8 text-lg text-black">Below are some of the most common issues employers may encounter when hiring a maid in Singapore:</p>

                    <ul className="ml-8 text-gray-600 list-disc space-y-2">
                        <li><b>Work Permit Issues:</b> Employers may face challenges related to obtaining or renewing a maid's work permit, including delays or rejections by the Ministry of Manpower (MOM).</li>
                        <li><b>Cultural Differences:</b> Cultural differences between employers and maids can lead to misunderstandings or conflicts, especially regarding work expectations, communication styles, and lifestyle habits.</li>
                        <li><b>Communication Barriers:</b> Language barriers can make it difficult for employers to communicate effectively with their maids, which can lead to misunderstandings or difficulties in conveying instructions.</li>
                        <li><b>Performance and Work Quality:</b> Employers may experience issues related to the maid's performance or work quality, such as incomplete tasks, poor cleaning standards, or lack of initiative.</li>
                        <li><b>Home Leave and Off Days:</b> Disputes may arise over the maid's entitlement to home leave and off days, as well as the frequency and duration of these breaks.</li>
                        <li><b>Medical and Health Concerns:</b> Employers may face challenges related to the maid's health, including managing medical expenses, ensuring access to healthcare, and handling medical emergencies.</li>
                        <li><b>Salary and Benefits:</b> Disputes over salary, benefits, and deductions can occur if there is a misunderstanding or disagreement regarding the terms of employment.</li>
                        <li><b>Misconduct or Breach of Contract:</b> Employers may encounter issues such as misconduct, breach of contract, or violation of employment terms by the maid, which may require disciplinary action or termination of employment.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Faq;
