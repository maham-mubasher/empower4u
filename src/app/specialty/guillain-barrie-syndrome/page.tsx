"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RehabSection from '@/components/RehabSection';

const uniqueApproachData = {
  title: "Our unique approach",
  introText: "If these resonate with you, our services are the perfect fit!",
  items: [
    {
      title: "Accelerate Your Progress",
      description: "Consolidate your weekly therapy sessions and achieve faster results with our intensive approach.",
    },
    {
      title: "Expert Care at Home",
      description: "Receive treatment from highly skilled clinicians in the comfort of your own home.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Get the best outcomes while keeping your costs down.",
    },
    {
      title: "Personalized Rehabilitation",
      description: "Benefit from a tailored rehab program designed using the latest evidence-based practices",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};

const whatWeCanHelpData = {
  title: "What we can help",
  introText: "Here are some common GBS-related challenges we address:",
  items: [
    {
      title: "Muscle weakness",
      description: "Reduced strength throughout the body, which may impact the ability to walk, stand, or use the arms.",
    },
    {
      title: "Fatigue",
      description: "Persistent tiredness and exhaustion that can interfere with daily activities and rehabilitation progress.",
    },
    {
      title: "Respiratory weakness",
      description: "Difficulty breathing due to weakened muscles, which may require respiratory therapy.",
    },
    {
      title: "Balance issues",
      description: "Problems with coordination and stability, making walking and standing difficult.",
    },
    {
      title: "Nerve pain",
      description: "Discomfort or pain caused by nerve inflammation, which can interfere with movement and sleep.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};

const treatmentMayIncludeData = {
  title: "Treatment may include",
  introText: "",
  items: [
    {
      title: "Strength training",
      description: "Exercises to rebuild muscle strength and improve overall physical conditioning.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities to restore stability and improve walking ability.",
    },
    {
      title: "Walking training",
      description: "Gait training to help patients regain the ability to walk independently and safely.",
    },
    {
      title: "Respiratory exercises",
      description: "Breathing exercises to strengthen the lungs and respiratory muscles.",
    },
    {
      title: "Functional training",
      description: "Task-specific activities to improve the ability to perform daily tasks such as dressing, eating, and transferring.",
    },
    {
      title: "Posture and seating management",
      description: "Strategies to improve posture, optimize comfort, and reduce the risk of pressure sores.",
    },
  ],
  backgroundColor: "bg-[#d4c0a9]",
};


const benefitsOfPhysiotherapyData = {
  title: "Benefits of physiotherapy for MS include",
  introText: "",
  items: [
    {
      title: "Improved walking and mobility",
      description: "Gait and strength training can help patients walk more safely and confidently.",
    },
    {
      title: "Reduced muscle stiffness (spasticity)",
      description: "Stretching, strengthening exercises, and other techniques help reduce stiffness and improve range of motion.",
    },
    {
      title: "Better balance and fall prevention",
      description: "Balance exercises help improve stability and reduce the risk of falls.",
    },
    {
      title: "Increased strength and endurance",
      description: "Regular strength training can help improve overall body strength and endurance.",
    },
    {
      title: "Enhanced independence",
      description: "Physiotherapy focuses on helping patients perform daily activities with less assistance.",
    },
    {
      title: "Prevention of complications",
      description: "Early intervention helps prevent issues like deconditioning, joint stiffness, and muscle wasting.",
    },
    {
      title: "Boosts mental well-being",
      description: "Setting goals and tracking progress fosters motivation and supports mental health throughout recovery.",
    },
  ],
  backgroundColor: "bg-[#f9f5f1]",
};





const StrokeRehabilitationPage: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-4 text-maintext">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center mb-6"><Image src="/icons/top_border.svg" alt="Top Border" width={600} height={400} /></div>
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Guillain-Barré Syndrome  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>


        <p className="text-lg border-2 border-primary p-4 mb-8">
          Guillain-Barré Syndrome (GBS) is a rare neurological disorder where the body's immune system mistakenly attacks the peripheral nerves, leading to muscle weakness and, in severe cases, paralysis. GBS can progress rapidly, affecting mobility, respiratory function, and overall independence. Although many individuals recover fully, the rehabilitation process can be long and challenging, requiring a specialized approach to regain strength, coordination, and functional independence. The impact of GBS extends beyond the patient, often placing emotional and physical demands on caregivers as they provide necessary support throughout recovery.
        
        
        </p>
        
        <div className="flex justify-center mb-12">
          <Image
            src="/images/specialty/guillain.jpg"
            alt="guillain"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Initial Sections */}
        <RehabSection
          title={uniqueApproachData.title}
          introText={uniqueApproachData.introText}
          items={uniqueApproachData.items}
          backgroundColor={uniqueApproachData.backgroundColor}
        />
        
        <RehabSection
          title={whatWeCanHelpData.title}
          introText={whatWeCanHelpData.introText}
          items={whatWeCanHelpData.items}
          backgroundColor={whatWeCanHelpData.backgroundColor}
        />

        {/* View More Button */}
        {!showMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-maintext text-white rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              View More
            </button>
          </div>
        )}

        {/* Additional Sections (Hidden until "View More" is clicked) */}
        {showMore && (
          <>
            <RehabSection
              title={treatmentMayIncludeData.title}
              introText={treatmentMayIncludeData.introText}
              items={treatmentMayIncludeData.items}
              backgroundColor={treatmentMayIncludeData.backgroundColor}
            />

            <RehabSection
              title={benefitsOfPhysiotherapyData.title}
              introText={benefitsOfPhysiotherapyData.introText}
              items={benefitsOfPhysiotherapyData.items}
              backgroundColor={benefitsOfPhysiotherapyData.backgroundColor}
            />
          </>
        )}

        {/* Enquiry Section */}
        <section className="py-10 text-maintext text-center">
          <div className="container mx-auto px-4">
            <div className="p-8 border-t-4 border-primary bg-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4 font-inter">We'd love to treat you</h2>
              <Link href="/enquiry" passHref>
                <button className="px-6 py-3 text-lg font-semibold text-white bg-maintext rounded-full hover:bg-primary">
                  Make an Enquiry
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};


export default StrokeRehabilitationPage;
