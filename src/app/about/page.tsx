import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import Image from 'next/image';
import CallToActionSection from '@/components/CallToActionSection';

const AboutPage: React.FC = () => {
  return (
    <div className=" text-maintext ">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6"><Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} /></div>
          <h1 className="text-4xl font-bold text-center uppercase font-inter my-4 text-maintext"> About Us  </h1>
          <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

          <p className="max-w-3xl mx-auto text-lg mb-10">
            Using evidence-based, personalized treatment plans, we set clear, attainable goals to ensure optimal progress through intensive, tailored sessions. Our team of highly skilled therapists, supported by qualified assistants, provides cost-effective, high-quality care to help you reach your health goals efficiently.
          </p>
          <div className="max-w-4xl mx-auto p-6 border-primary border-2">
            <h2 className="text-xl font-semibold text-maintext mb-4 uppercase text-center">The Best Use of Our Service</h2>
            <p className="text-lg">
              To supplement your current physiotherapy routine with short-term, intensive, affordable, home-based therapy sessions, designed to consolidate the progress from your ongoing sessions or help you achieve new skills faster. Afterward, you can seamlessly return to your regular therapist with enhanced results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d4c0a9]">
        <div className='max-w-6xl mx-auto py-16 text-maintext '>
          <h2 className="text-5xl font-semibold mb-10 font-inter text-center">Best Results</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="flex justify-center">
                <img src="/images/about/Best results.webp" alt="Best Results" className="w-4/5 max-w-xs md:max-w-full rounded-3xl shadow-lg" />
              </div>
              
              <div className='items-start mr-4'>
                <p className="text-3xl font-bold text-maintext">Experience outstanding results with our tailored approach:</p>
                <ul className="space-y-4 mt-8 text-xl">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4" />
                    <span><strong>Intensive Sessions:</strong> Choose from 2-5 sessions per week for evaluation optimal progress.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4 text-xl" />
                    <span><strong>Evidence-Based Plans:</strong> Your treatment is guided by the latest research and proven methods.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4 text-xl" />
                    <span><strong>Goal-Oriented Method:</strong> Your treatment is guided by the latest research and proven methods.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </section>


      <section className="py-16 text-maintext max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold mb-10 font-inter text-center">Best Evidence</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className='items-start ml-4'>
              <p className="text-3xl font-bold text-maintext">Ensure exceptional results with our evidence-based approach:</p>
              <ul className="space-y-4 mt-8 text-xl">
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4 text-xl" />
                  <span><strong>Comprehensive Assessment:</strong> We conduct a thorough assessment tailored to your unique needs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4 text-xl" />
                  <span><strong>Custom Guidelines:</strong> Your personalized plan is custom-designed using the latest, high-quality evidence.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4 text-xl" />
                  <span><strong>Expert Care:</strong> All evidence search and practice guidelines are carried out by experienced and highly skilled therapists.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/about/Best evidence.webp" alt="Best Evidence" className="w-4/5 max-w-xs md:max-w-full rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#d4c0a9]">
        <div className='max-w-6xl mx-auto py-16 text-maintext '>
          <h2 className="text-5xl font-semibold mb-10 font-inter text-center">Best People</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="flex justify-center">
                <img src="/images/about/Best people.webp" alt="Best People" className="w-4/5 max-w-xs md:max-w-full rounded-3xl shadow-lg" />
              </div>
              <div className='items-start mr-4'>
                <p className="text-3xl font-bold text-maintext">Receive superior care with our expert team:</p>
                <ul className="space-y-4 mt-8 text-xl">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4" />
                    <span><strong>Therapists:</strong> Highly skilled practitioners in clinical practice, research, and teaching.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4" />
                    <span><strong>Assistants:</strong> Well-qualified with hands-on experience in renowned hospitals, ensuring top-notch support.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-maintext mr-4" />
                    <span><strong>Support Team:</strong> Specialists in digital healthcare, ensuring prompt and efficient communication.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-maintext max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold mb-10 font-inter text-center">Best Value</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className='items-start ml-4'>
              <p className="text-3xl font-bold text-maintext">Gain great value with our cost-effective approach:</p>
              <ul className="space-y-4 mt-8 text-xl">
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4" />
                  <span><strong>Therapist-Led Service:</strong> We assess, design, monitor, and adjust your treatment plan.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4" />
                  <span><strong>Assistant-Driven Intensity:</strong> Skilled assistants ensure precise execution of the plan according to expert recommendations.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FaCheckCircle className="text-maintext mr-4" />
                  <span><strong>High-Intensity, Affordable Pricing:</strong> We deliver high-intensity, assistance-led sessions at an affordable cost.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/about/Best value.webp" alt="Best Value" className="w-4/5 max-w-xs md:max-w-full rounded-3xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

        <CallToActionSection
            title="We'd love to treat you"
            link="/enquiry"
            buttonText="Make an Enquiry"
        />
    </div>
  );
};

export default AboutPage;
