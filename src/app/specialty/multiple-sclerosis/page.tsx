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
  introText: "Here are some common MS-related challenges we address:",
  items: [
    {
      title: "Muscle weakness",
      description: "MS can cause weakness in different muscle groups, affecting mobility, balance, and daily activities.",
    },
    {
      title: "Spasticity",
      description: "Muscle stiffness and spasms are common in MS, limiting movement and range of motion.",
    },
    {
      title: "Respiratory issues",
      description: "Breathing difficulties caused by weakened respiratory muscles, often seen with higher-level injuries.",
    },
    {
      title: "Balance and coordination issues",
      description: "MS affects coordination, making it difficult to walk or perform tasks that require stability.",
    },
    {
      title: "Fatigue",
      description: "Persistent tiredness is a major symptom of MS, often hindering physical activity and daily routines.",
    },
    {
      title: "Cognitive impairments",
      description: "Memory, attention, and problem-solving abilities can be affected, impacting daily functioning.",
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
      description: "Exercises designed to increase muscle power and endurance, helping regain strength in weakened areas.",
    },
    {
      title: "Balance and coordination exercises",
      description: "Activities aimed at improving stability and reducing the risk of falls.",
    },
    {
      title: "Walking training",
      description: "Gait exercises to help with movement and mobility, making walking safer and more efficient.",
    },
    {
      title: "Fatigue management",
      description: "Techniques and strategies to manage energy levels and improve stamina throughout the day.",
    },
    {
      title: "Cognitive rehabilitation",
      description: "Exercises to improve memory, attention, and other cognitive skills affected by MS.",
    },
    {
      title: "Wheelchair assessment and recommendations",
      description: "Ensuring the correct wheelchair setup to maximize comfort, mobility, and independence, tailored to the patient’s individual needs.",
    },
    {
      title: "Functional training",
      description: "Task-specific exercises to help patients regain independence in daily activities such as dressing, eating, and transferring between positions.",
    },
    {
      title: "24-hour posture management",
      description: "Strategies to maintain proper posture and comfort throughout the day, preventing complications from poor alignment.",
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
        <h1 className="text-4xl font-bold text-center uppercase font-inter my-4"> Multiple Sclerosis Rehabilitation  </h1>
        <div className="flex justify-center mb-12"><Image src="/icons/bottom_border.svg" alt="Bottom Border" width={600} height={400} /></div>

        <p className="text-lg border-2 border-primary p-4 mb-8">
          Multiple sclerosis (MS) is a chronic condition that affects the central nervous system, disrupting communication between the brain and the rest of the body. It can lead to a wide range of symptoms, such as muscle weakness, coordination problems, fatigue, and cognitive difficulties. These symptoms can vary in severity and progression, often impacting a person’s ability to carry out daily tasks independently. For those living with MS, this can lead to a significant loss of mobility and independence, creating a challenging emotional and physical burden on both patients and caregivers.
        </p>
        
        <div className="flex justify-center mb-12">
          <Image
            src="/images/specialty/multiple-sclerosis.jpg"
            alt="multiple-sclerosis"
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
