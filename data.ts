import { Category, Guide } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'family',
    name: 'Family & Civil Matters',
    description: 'Marriage, birth certificates, change of name, and registry bookings.',
    iconName: 'Users',
    tasks: ['Marriage', 'Birth Certificate', 'Name Change']
  },
  {
    id: 'travel',
    name: 'Travel & Passports',
    description: 'Passports, Yellow Fever cards, and visa procedures.',
    iconName: 'Plane',
    tasks: ['Passport', 'Yellow Fever', 'Visa']
  },
  {
    id: 'driving',
    name: 'Driving & Transport',
    description: 'Driver\'s licenses, vehicle papers, and Lagos transit rules.',
    iconName: 'Car',
    tasks: ['License', 'Registration', 'BRT']
  },
  {
    id: 'business',
    name: 'Business & Work',
    description: 'CAC registration, taxes, permits, and professional documentation.',
    iconName: 'Briefcase',
    tasks: ['CAC', 'Tax', 'Permits']
  },
  {
    id: 'ids',
    name: 'IDs & Registration',
    description: 'NIN, Voter registration, and biometric identification.',
    iconName: 'Fingerprint',
    tasks: ['NIN', 'PVC', 'Biometrics']
  },
  {
    id: 'education',
    name: 'Education & Youth',
    description: 'NYSC, national exams, and scholarship processes.',
    iconName: 'GraduationCap',
    tasks: ['NYSC', 'Exams', 'Admissions']
  }
];

export const GUIDES: Guide[] = [
  {
    id: '1',
    categoryId: 'family',
    title: 'Marriage registration in Lagos',
    slug: 'marriage-registration-lagos',
    summary: 'A complete step-by-step guide to statutory marriage registration at Ikoyi Federal Registry and Local Government registries.',
    lastUpdated: 'May 12, 2024',
    estimatedCost: '₦27,000 - ₦35,000',
    estimatedTime: '3 - 6 Weeks',
    scope: 'Lagos',
    verified: true,
    requirements: [
      'NIN of both parties',
      'Two (2) colored passport photographs',
      'Birth certificates or Declaration of Age',
      'Sworn Affidavit of Bachelorhood/Spinsterhood',
      'Remita payment receipt'
    ],
    steps: [
      {
        title: 'Create Account on Ministry Portal',
        description: 'Visit ecitibiz.interior.gov.ng and create a citizen profile.',
      },
      {
        title: 'Select Marriage Type',
        description: 'Choose "Statutory Marriage" and select the registry (Ikoyi is common for federal validity).',
      },
      {
        title: 'Oath Taking',
        description: 'You will be given a date for interview and oath. Both parties must attend physically.',
      }
    ],
    signpostInsights: [
      'Dress formally for the oath interview (business casual/traditional).',
      'Ikoyi Registry is extremely busy; arrive by 7:30 AM regardless of your "scheduled" time.',
      'Touts outside the gate will offer to "speed things up." Ignore them; the portal works.'
    ],
    faqs: [
      { question: 'Can I do this entirely online?', answer: 'No. You must visit the registry at least twice: for oath-taking and for the ceremony.' }
    ],
    officialLink: 'https://ecitibiz.interior.gov.ng/'
  },
  {
    id: '2',
    categoryId: 'travel',
    title: 'Yellow Fever card in Lagos',
    slug: 'yellow-fever-card-lagos',
    summary: 'How to obtain the mandatory digital E-Yellow Card required for international travel.',
    lastUpdated: 'May 15, 2024',
    estimatedCost: '₦2,000',
    estimatedTime: '1 - 2 Days',
    scope: 'Lagos',
    verified: true,
    requirements: [
      'Valid International Passport',
      'Remita receipt for ₦2,000',
      'Previous vaccination proof (optional)'
    ],
    steps: [
      {
        title: 'Online Payment',
        description: 'Go to yellowcardnigeria.com and register. Pay via Remita.',
      },
      {
        title: 'Visit Port Health Office',
        description: 'Take your passport and receipt to the Port Health office at the International Airport or Ikeja GRA.',
      }
    ],
    signpostInsights: [
      'The vaccination takes 10 days to become "valid" for travel, so don\'t wait until your flight day.',
      'The QR code on the card is what airlines scan. Ensure your QR code is legible before leaving the office.'
    ],
    officialLink: 'https://yellowcardnigeria.com'
  },
  {
    id: '3',
    categoryId: 'travel',
    title: 'Nigerian passport renewal (Lagos)',
    slug: 'passport-renewal-nigeria-lagos',
    summary: 'Guidelines for renewing an expired or expiring standard passport at Ikoyi, Alausa, or Festac offices.',
    lastUpdated: 'June 01, 2024',
    estimatedCost: '₦35,000 (32pg) / ₦70,000 (64pg)',
    estimatedTime: '3 - 8 Weeks',
    scope: 'Nigeria',
    verified: true,
    requirements: [
      'NIN (Must match passport details exactly)',
      'Old Passport booklet',
      'Payment Summary and Receipt',
      'Passport photographs'
    ],
    steps: [
      {
        title: 'Online Application',
        description: 'Visit passport.immigration.gov.ng to fill the form and pay.',
      },
      {
        title: 'Biometric Capture',
        description: 'Book an appointment and visit the chosen passport office for fingerprints and photos.',
      }
    ],
    signpostInsights: [
      'Do not pay any officer cash. All valid payments are online.',
      'Wear a white shirt for your capture; most offices require this for their background setup.'
    ],
    officialLink: 'https://passport.immigration.gov.ng'
  },
  {
    id: '4',
    categoryId: 'driving',
    title: 'Driver’s license application',
    slug: 'drivers-license-application-lagos',
    summary: 'The legal way to get your first license or renew an old one through the FRSC.',
    lastUpdated: 'May 20, 2024',
    estimatedCost: '₦10,350 - ₦15,000',
    estimatedTime: '2 Weeks (Temp) / 3 Months (Perm)',
    scope: 'Lagos',
    verified: true,
    requirements: ['NIN', 'Learner\'s Permit (Fresh)', 'Eye Test Report', 'Certificate from Driving School'],
    steps: [
      { title: 'Driving School', description: 'Complete training at an accredited school.' },
      { title: 'FRSC Portal', description: 'Apply online at nigeriadriverslicense.org.' }
    ],
    signpostInsights: [
      'You will be issued a temporary license (A4 paper) valid for 60 days.',
      'Expect the permanent plastic card to take much longer than stated.'
    ],
    officialLink: 'https://www.nigeriadriverslicense.org/'
  },
  {
    id: '5',
    categoryId: 'business',
    title: 'Register a business (CAC)',
    slug: 'cac-business-registration',
    summary: 'A guide to registering a Business Name or Company with the Corporate Affairs Commission.',
    lastUpdated: 'May 22, 2024',
    estimatedCost: '₦10,000 - ₦25,000',
    estimatedTime: '1 - 2 Weeks',
    scope: 'Nigeria',
    verified: true,
    requirements: ['NIN', 'Proposed Business Names (2)', 'Valid ID of Directors'],
    steps: [
      { title: 'Name Reservation', description: 'Submit your preferred name on the CRP portal.' },
      { title: 'Registration', description: 'Upload documents and pay filing fees.' }
    ],
    signpostInsights: [
      'Reservation is valid for only 60 days. If you don\'t complete registration, the name becomes public again.',
      'Check the CAC website for forbidden words (e.g. Federal, Group) before submitting.'
    ],
    officialLink: 'https://pre.cac.gov.ng/'
  },
  {
    id: '6',
    categoryId: 'family',
    title: 'Birth certificate in Lagos',
    slug: 'birth-certificate-registration',
    summary: 'How to register a birth and get the official NPC certificate.',
    lastUpdated: 'April 10, 2024',
    estimatedCost: 'Free (under 18) / ₦2,000 (Late)',
    estimatedTime: '1 Day',
    scope: 'Nigeria',
    verified: true,
    requirements: ['Hospital discharge summary', 'Immunization card', 'Parent IDs'],
    steps: [
      { title: 'Visit NPC Office', description: 'Go to the National Population Commission office at your LG.' }
    ],
    signpostInsights: ['Ensure the spelling of the names is exactly as you want it on future documents like passports.']
  },
  {
    id: '7',
    categoryId: 'education',
    title: 'NYSC registration',
    slug: 'nysc-registration-guide',
    summary: 'Preparing for mobilization, camp, and the service year.',
    lastUpdated: 'May 05, 2024',
    estimatedCost: '₦3,000 (Registration)',
    estimatedTime: '1 Month',
    scope: 'Nigeria',
    verified: true,
    requirements: ['Statement of Result', 'NIN', 'Medical Fitness Certificate'],
    steps: [
      { title: 'Online Registration', description: 'Register on the NYSC portal during your batch window.' }
    ],
    signpostInsights: ['The medical certificate must be from a government or military hospital to be accepted at camp.']
  },
  {
    id: '8',
    categoryId: 'ids',
    title: 'Voter registration (PVC)',
    slug: 'voter-registration-nigeria',
    summary: 'Registering to vote or transferring your location to Lagos.',
    lastUpdated: 'May 01, 2024',
    estimatedCost: 'Free',
    estimatedTime: 'Variable',
    scope: 'Nigeria',
    verified: true,
    requirements: ['NIN', 'Proof of residence'],
    steps: [
      { title: 'INEC Portal', description: 'Check portal status; registration often happens in waves.' }
    ],
    signpostInsights: ['Always check your registration status on the INEC website before assuming you are on the roll.']
  }
];
