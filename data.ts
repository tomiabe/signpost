import { Category, Guide } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'civil',
    name: 'Civil & Legal',
    description: 'Marriage, birth certificates, changing names, and legal documentation.',
    iconName: 'Scale',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'travel',
    name: 'Travel & Immigration',
    description: 'Passports, visas, Yellow Fever cards, and airport procedures.',
    iconName: 'Plane',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'transport',
    name: 'Transportation',
    description: 'Driver\'s licenses, vehicle registration, LASTMA rules, and public transit.',
    iconName: 'Car',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    id: 'health',
    name: 'Healthcare',
    description: 'Vaccinations, public hospitals, NHIS, and emergency services.',
    iconName: 'Heart',
    color: 'bg-red-100 text-red-700',
  },
  {
    id: 'business',
    name: 'Business & Tax',
    description: 'CAC registration, LIRS taxes, permits, and starting a business.',
    iconName: 'Briefcase',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'WAEC, JAMB, NYSC, and university admissions.',
    iconName: 'GraduationCap',
    color: 'bg-purple-100 text-purple-700',
  },
];

export const GUIDES: Guide[] = [
  {
    id: '1',
    categoryId: 'civil',
    title: 'How to Get Married at the Ikoyi Registry',
    slug: 'marriage-registry-ikoyi-lagos',
    summary: 'A complete step-by-step guide to statutory marriage registration in Lagos, specifically for the Federal Marriage Registry in Ikoyi.',
    lastUpdated: 'October 15, 2023',
    estimatedCost: '₦25,000 - ₦35,000 (Official fees)',
    estimatedTime: '2 - 4 Weeks',
    requirements: [
      'Two (2) colored passport photographs for both parties',
      'Birth certificates or Declaration of Age',
      'Sworn Affidavit of Bachelorhood/Spinsterhood from a Law Court',
      'Valid Identification (NIN, Int\'l Passport, or Driver\'s License)',
      'Witnesses (at least one for each party on the wedding day)'
    ],
    steps: [
      {
        title: 'Create an Account on the Interior Ministry Portal',
        description: 'Visit the official Ministry of Interior e-citation portal (ecitibiz.interior.gov.ng). Do not go to the registry physically for this step to avoid touts. Create an account using your email.',
        tips: ['Use a valid email address you can access easily.', 'The website can be slow during peak hours.']
      },
      {
        title: 'Fill the Marriage Application Form',
        description: 'Select "Marriage" service. Choose "Ordinary Marriage" if both parties are Nigerians residing in Nigeria. Fill in the details of the Bride and Groom accurately as they appear on your ID documents.',
      },
      {
        title: 'Upload Documents & Pay Fees',
        description: 'Upload scanned copies of the required documents. Proceed to pay the statutory fee via Remita. Print your payment receipt and the acknowledgment slip.',
      },
      {
        title: 'Visit the Registry for Oath Taking',
        description: 'You will be assigned a date for the Oath Taking interview. Both parties must be present. Go with the printed forms and original documents.',
        tips: ['Dress formally (business attire).', 'Arrive by 8:00 AM to beat the queue.']
      },
      {
        title: 'The Wedding Day',
        description: 'On your selected date, return for the final signing. Bring your witnesses. The Registrar will conduct a short ceremony, and you will sign the marriage certificate.',
      }
    ],
    officialLink: 'https://ecitibiz.interior.gov.ng/',
    locationName: 'Federal Marriage Registry, Ikoyi',
    author: 'Signpost Editorial Team',
    verified: true,
  },
  {
    id: '2',
    categoryId: 'travel',
    title: 'Obtaining a Yellow Fever Card (Yellow Card)',
    slug: 'yellow-fever-card-nigeria',
    summary: 'Required for travel to Ghana, South Africa, and many other countries. Here is how to get the new digital E-Yellow Card.',
    lastUpdated: 'January 10, 2024',
    estimatedCost: '₦2,000 (Payment) + Vaccination Fee (varies)',
    estimatedTime: '1 Day',
    requirements: [
      'Valid International Passport',
      'Remita Payment Receipt',
      'Proof of vaccination (if previously vaccinated) or receive the shot there'
    ],
    steps: [
      {
        title: 'Pay Online via Remita',
        description: 'Visit yellowcardnigeria.com. Click on "Register". Fill in your personal details and passport number. Proceed to pay the N2,000 fee via Remita.',
      },
      {
        title: 'Visit a Port Health Services Office',
        description: 'Take your payment receipt and passport to a Port Health Services office. In Lagos, the most popular one is at the International Airport (MMIA) or the creating office in Ikeja GRA.',
        tips: ['The Airport office operates 24/7 but is busier.', 'The Ikeja GRA office is usually faster on weekdays.']
      },
      {
        title: 'Get Vaccinated (If needed)',
        description: 'If you haven\'t taken the shot before, they will administer it. It protects you for life. If you have an old card, show it to avoid a retake (though policies vary).',
      },
      {
        title: 'Receive the E-Card',
        description: 'They will print the card for you instantly. Ensure they scan the QR code to verify it is active before you leave.',
      }
    ],
    officialLink: 'https://yellowcardnigeria.com',
    locationName: 'Port Health Services, MMIA Ikeja',
    author: 'Travel with Tosin',
    verified: true,
  },
  {
    id: '3',
    categoryId: 'transport',
    title: 'Renewing Your Driver\'s License in Lagos',
    slug: 'drivers-license-renewal-lagos',
    summary: 'Don\'t let your license expire. Follow this guide to renew it without paying agents exorbitant fees.',
    lastUpdated: 'February 2, 2024',
    estimatedCost: '₦10,450 (3 years) or ₦15,450 (5 years)',
    estimatedTime: '2 - 3 Weeks (for permanent card)',
    requirements: [
      'Expired Driver\'s License',
      'Driving School Certificate (sometimes waived for renewal)',
      'Eye Test Report',
      'NIN'
    ],
    steps: [
      {
        title: 'Start Application Online',
        description: 'Visit the FRSC website (nigeriadriverslicense.org). Click on "Renewal". Enter your license number and date of birth.',
      },
      {
        title: 'Capture Biometrics (If required)',
        description: 'If your details need updating, you may need to recapture. Otherwise, select the "Capture Bypass" option if available to save time.',
      },
      {
        title: 'Payment',
        description: 'Pay the license fee online using a debit card or bank transfer via the portal. Print the payment acknowledgement slip.',
      },
      {
        title: 'Visit the VIO/FRSC Office',
        description: 'Go to your selected processing center (e.g., Ojodu Berger, Eti-Osa). You will do a quick eye test (or bring a report) and get your biometric data verified.',
      },
      {
        title: 'Collect Temporary & Permanent License',
        description: 'You will be issued a temporary paper license immediately. The permanent plastic ID usually takes a few weeks to be ready for collection.',
      }
    ],
    officialLink: 'https://www.nigeriadriverslicense.org/',
    locationName: 'FRSC Office, Ojodu Berger',
    author: 'Signpost Editorial Team',
    verified: true,
  },
  {
    id: '4',
    categoryId: 'travel',
    title: 'Applying for a Nigerian International Passport',
    slug: 'nigerian-passport-application',
    summary: 'The comprehensive guide to applying for a fresh standard passport or renewal.',
    lastUpdated: 'March 1, 2024',
    estimatedCost: '₦35,000 (32 Pages) / ₦70,000 (64 Pages) - Official Rates',
    estimatedTime: '6 - 12 Weeks',
    requirements: [
      'NIN (Must match passport details exactly)',
      'Birth Certificate',
      'Local Government Certificate of Indigeneship',
      'Two passport photographs',
      'Guarantor\'s form (Commissioner of Oaths/Senior Civil Servant)'
    ],
    steps: [
      {
        title: 'Apply via Immigration Portal',
        description: 'Go to passport.immigration.gov.ng. Fill the application form. Select your processing center carefully (Ikoyi and Alausa are high traffic).',
      },
      {
        title: 'Make Payment',
        description: 'Pay online. Do not pay cash to officers. Print your Application Summary, Payment Receipt, and Guarantor\'s forms.',
      },
      {
        title: 'Schedule Capture Appointment',
        description: 'After payment, you must schedule a date for biometric capture on the portal. Print the appointment slip.',
      },
      {
        title: 'Biometric Capture',
        description: 'Go to the immigration office on your date. Bring your file with all original documents. You will be photographed and fingerprinted.',
        tips: ['Go with a white shirt (often required).', 'Expect to spend several hours there.']
      },
      {
        title: 'Collection',
        description: 'You will be notified via SMS when the passport is ready. Depending on the booklet availability, this can take time.',
      }
    ],
    author: 'Signpost Editorial Team',
    verified: true,
  }
];