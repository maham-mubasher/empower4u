import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; 

const ClientsWorkTogether: React.FC = () => {
  return (
    <div>
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-maintext font-inter text-center uppercase my-10">How we work together</h1>
                <div className="container mx-auto px-4 max-w-4xl border-2 border-primary p-8">
                    <p className="text-sm text-maintext  mb-8">
                    We believe in a collaborative approach to physiotherapy, ensuring that both clients and families are actively involved throughout the process. Our experienced team works closely with you to set realistic, achievable goals, offering guidance and support at every step.
                    </p>

                    <div className="flex justify-center mb-8">
                    <span className="text-primary text-xl mx-1">★</span>
                    <span className="text-primary text-xl mx-1">★</span>
                    <span className="text-primary text-xl mx-1">★</span>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                        <div className="flex flex-col items-start space-y-4">
                            <h3 className="text-lg font-bold text-maintext">Personalized Care Plans</h3>
                            <p className="text-sm text-maintext">
                            We design each client’s care plan not only based on our extensive experience but also by consulting the most up-to-date published evidence. This ensures that our therapy programs are backed by the latest research, guaranteeing you receive the best and most effective service possible.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Image
                            src="/images/for-clients-families/How we work together page- At-Home Convenience.jpg"
                            alt="Personalized Care"
                            width={200}
                            height={150}
                            className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  my-8">
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/images/for-clients-families/How we work together page- At-Home Convenience.jpg"
                                alt="At-Home Convenience"
                                width={200}
                                height={150}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <h3 className="text-lg font-bold text-maintext">At-Home Convenience</h3>
                            <p className="text-sm text-maintext">
                            All treatments are delivered in the comfort of your home, making it easier for clients to stay engaged and for families to participate in care.
                            </p>
                        </div>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  my-8">
                        <div className="flex flex-col items-start space-y-4">
                            <h3 className="text-lg font-bold text-maintext">Ongoing Communication</h3>
                            <p className="text-sm text-maintext">
                            During the treatment period, we set up a WhatsApp group that includes the physiotherapist, assistant, client, and family members (if appropriate). This ensures timely communication, encourages regular updates, and promotes active engagement in self-directed exercises between sessions.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Image
                                src="/images/for-clients-families/How we work page- ongoing communication.jpg"
                                alt="Ongoing Communication"
                                width={200}
                                height={150}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    

                    <div className="flex justify-center mt-8">
                    <span className="text-[#b2947b] text-xl mx-1">★</span>
                    <span className="text-[#b2947b] text-xl mx-1">★</span>
                    <span className="text-[#b2947b] text-xl mx-1">★</span>
                    </div>
                </div>
        </div>
      </section>


        <section className="py-16 bg-[#d4c0a9] text-maintext">
        <div className='container mx-auto px-4 max-w-5xl'>
            <h2 className="text-4xl font-semibold mb-8 font-inter text-center">Our Unique Approach</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="flex flex-col items-start space-y-4">
                        <p className="text-lg text-maintext">
                            Our intensive therapy model ensures that clients receive the support they need to achieve faster and more sustainable results:
                        </p>
                        <ul className="space-y-4 mt-4 text-lg">
                            <li className="flex items-start space-x-2">
                                <FaCheckCircle className="text-maintext mr-4" />
                                <span><strong>Intensive Therapy Sessions:</strong> Choose from 2-5 sessions per week, tailored to optimize progress and address your specific health goals.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <FaCheckCircle className="text-maintext mr-4" />
                                <span><strong>Expert Care:</strong> Our team consists of highly skilled physiotherapists and trained assistants committed to delivering the best possible outcomes.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <FaCheckCircle className="text-maintext mr-4" />
                                <span><strong>Cost-Effective Solutions:</strong> We deliver high-intensity, evidence-based therapy at affordable prices, ensuring that quality care is accessible to all.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <Image 
                            src="/images/for-clients-families/Our unique approach page.jpg" 
                            alt="Our Unique Approach" 
                            width={400} 
                            height={500} 
                            className="w-4/5 max-w-xs md:max-w-full rounded-3xl shadow-lg" 
                        />
                    </div>
                </div>
            </div>
        </div>
            
        </section>
        <section className="py-16 bg-[#f0ebe5] text-maintext">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-8 font-inter">What Sets Us Apart</h2>
                
                <p className="text-lg mb-8">
                We don’t just focus on the physical aspect of recovery; we take a holistic approach, addressing mental well-being, confidence, and quality of life. Our goal is to empower clients to regain control of their health and independence, with the support of their families.
                </p>
                
                <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                    <FaCheckCircle className="text-maintext mr-4 mt-1" />
                    <span>
                    <strong>An Emphasis on Collaboration:</strong> We involve family members in the treatment process when appropriate, ensuring they understand their role in supporting the client's recovery. We provide clear, easy-to-understand explanations about the reasons behind each selected treatment and the principles guiding our approach. By offering this information in plain language, we empower clients and their families, helping them feel more motivated and in control of the rehabilitation process.
                    </span>
                </li>
                <li className="flex items-start">
                    <FaCheckCircle className="text-maintext mr-4 mt-1" />
                    <span>
                    <strong>Comprehensive Assessments:</strong> Each client undergoes a detailed evaluation to identify their needs, which may include strength training, mobility exercises, cognitive rehabilitation or environmental factors.
                    </span>
                </li>
                <li className="flex items-start">
                    <FaCheckCircle className="text-maintext mr-4 mt-1" />
                    <span>
                    <strong>Post-Therapy Guidance:</strong> Once the therapy goals have been achieved, we offer guidance on maintaining progress and preventing complications in the future, especially advice on exercise habits.
                    </span>
                </li>
                <li className="flex items-start">
                    <FaCheckCircle className="text-maintext mr-4 mt-1" />
                    <span>
                    <strong>Intensity Matters:</strong> Research consistently shows that high-frequency physiotherapy sessions lead to faster and more significant improvements in strength, mobility, and function. Studies on stroke rehabilitation and neurological conditions, for example, demonstrate that patients receiving intensive therapy (2-5 sessions per week) recover more rapidly and achieve greater independence compared to those receiving standard care. For example:
                    <ul className="list-disc list-inside mt-2 ml-8 text-base">
                        <li><strong>Stroke Rehabilitation:</strong> A systematic review by Langhorne et al. (2011) found that stroke patients receiving intensive, high-frequency physiotherapy showed faster recovery in motor function and daily living activities compared to those on lower-intensity programs (The Lancet).</li>
                        <li><strong>Neurological Conditions:</strong> Evidence from a study by Kwakkel et al. (2004) revealed that higher intensity, task-specific training improved recovery rates for individuals with neurological impairments, such as multiple sclerosis or Parkinson’s disease (Neurorehabilitation and Neural Repair).</li>
                        <li><strong>Post-Surgery Recovery:</strong> Research by Liu et al. (2017) on post-surgical rehabilitation indicates that patients who received more frequent physiotherapy sessions post-knee replacement surgery achieved functional independence 30% faster than those with less intensive care (Journal of Orthopaedic Surgery).</li>
                    </ul>
                    </span>
                </li>
                </ul>

                <p className="text-lg mt-8">
                By delivering 2-5 intensive sessions per week, tailored to the client's needs and condition, we maximize recovery potential, helping clients achieve their rehabilitation goals faster and more efficiently. This evidence-backed approach ensures that our clients receive the best possible care for optimal outcomes.
                </p>
            </div>
        </section>

            <section className="py-16 bg-[#d4c0a9] text-maintext">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-4xl font-bold text-center mb-8 font-inter">Our Services Cover a Wide Range of Conditions</h2>
                    
                    <p className="text-lg mb-8">
                    Our physiotherapy services are highly specialized to cater to a wide range of conditions:
                    </p>
                    
                    <ul className="space-y-6 text-lg">
                    <li className="flex items-start">
                        <FaCheckCircle className="text-maintext mr-4 mt-1" />
                        <span>
                        <strong>Neurological Conditions:</strong> We provide expert rehabilitation for stroke, Parkinson's disease, multiple sclerosis, and other neurological disorders.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FaCheckCircle className="text-maintext mr-4 mt-1" />
                        <span>
                        <strong>Post-Surgery Recovery:</strong> Our intensive sessions accelerate recovery after surgeries such as joint replacements and spinal surgeries, helping clients regain mobility faster.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FaCheckCircle className="text-maintext mr-4 mt-1" />
                        <span>
                        <strong>Balance and Falls Prevention:</strong> We conduct thorough balance assessments and offer tailored programs to reduce the risk of falls and improve confidence in daily movements.
                        </span>
                    </li>
                    </ul>
                </div>
            </section>
    </div>
  );
};

export default ClientsWorkTogether;
