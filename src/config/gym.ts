import type { GymConfig } from '../types/gym';
import zumbaImg from '../assets/program-zumba.jpg';
import yogaImg from '../assets/program-yoga.jpg';
import strengthImg from '../assets/program-strength.jpg';

/**
 * Central Configuration for HerFit Studio (or any customized gym client).
 * To rebrand or customize for a new client:
 * 1. Update identity, contact, hours, hero, trustPoints, benefits, programs,
 *    schedule, timings, bmi, pricing, trainers, reviews, faq, and booking below.
 * 2. Replace photo assets in src/assets/.
 */
export const gymConfig: GymConfig = {
  identity: {
    name: 'HerFit Studio',
    tagline: 'Ladies Gym · Quetta',
    city: 'Quetta',
    address: 'Near Main Boulevard, Jinnah Town, Quetta, Balochistan',
    addressShort: 'Jinnah Town, Quetta',
    mapUrl: 'https://maps.google.com/?q=Jinnah+Town+Quetta',
    womenOnlySummary: '100% Women-Only Space · Quetta',
  },

  contact: {
    phoneDisplay: '0311 2777061',
    phoneRaw: '+923112777061',
    whatsappNumber: '923112777061',
    whatsappDefaultTrialMessage:
      'Assalam-o-Alaikum! Mujhe HerFit Studio ki free trial class book karni hai.',
    whatsappInquiryMessage:
      'Assalam-o-Alaikum! Mujhe fees aur timings ki maloomat chahiye.',
    email: 'info@herfitstudio.com',
    social: {
      instagram: 'https://instagram.com/herfitstudio',
      facebook: 'https://facebook.com/herfitstudio',
    },
  },

  hours: {
    weekdays: 'Monday – Friday: 7:00 AM – 9:00 PM',
    saturday: 'Saturday: 8:00 AM – 8:00 PM',
    sunday: 'Sunday: Closed (Family Day)',
    summary: 'Subah 7 se raat 9',
    ladiesOnlyPolicy:
      '100% ladies-only facility with all-female staff, coaches, and private entrance.',
  },

  navigation: [
    { id: 'why', label: 'Why HerFit', href: '#why' },
    { id: 'programs', label: 'Programs', href: '#programs' },
    { id: 'schedule', label: 'Classes', href: '#schedule' },
    { id: 'timings', label: 'Timings', href: '#timings' },
    { id: 'fees', label: 'Fees', href: '#fees' },
    { id: 'reviews', label: 'Reviews', href: '#reviews' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ],

  hero: {
    kicker: '100% Women-Only Gym · Quetta',
    titlePrefix: 'A gym where she can ',
    titleEmphasis: 'train freely,',
    titleSuffix: ' without hesitation.',
    lead: 'HerFit Studio is a ladies-only fitness space in Quetta — female trainers, complete privacy, and timings made around her day. Weight loss, yoga, Zumba or strength — pehli class bilkul free hai.',
    primaryCtaText: 'Book My Free Trial',
    primaryCtaHref: '#book',
    secondaryCtaText: 'Chat on WhatsApp',
    stats: [
      {
        value: '100%',
        label: 'Women-only space, no male staff in ladies hours',
      },
      {
        value: '6+',
        label: 'Programs — yoga, Zumba, cardio, strength & more',
      },
      {
        value: '3',
        label: 'Certified female trainers on floor',
      },
      {
        value: '1 Day',
        label: 'Free trial class — koi fee, koi pressure nahi',
      },
    ],
    badge: {
      title: '✨ Pehli class FREE',
      subtitle: 'Baghair fee ke aa kar try karein',
    },
    imageAlt: 'HerFit Studio private, modern fitness area designed specifically for women',
  },

  trustPoints: [
    {
      id: 'privacy',
      icon: 'privacy',
      title: 'Complete Privacy',
      description: 'Frosted exterior glass, private discrete entrance, and zero male access inside.',
    },
    {
      id: 'trainers',
      icon: 'trainers',
      title: 'Female Trainers Only',
      description: 'Certified female fitness coaches guiding every group class and floor workout.',
    },
    {
      id: 'hours',
      icon: 'hours',
      title: 'Dedicated Ladies Slots',
      description: 'Morning, afternoon, and evening timings for homemakers, students & working women.',
    },
    {
      id: 'whatsapp',
      icon: 'whatsapp',
      title: 'Direct WhatsApp Support',
      description: 'Timings, fee details, and trial booking answered promptly without sales pressure.',
    },
  ],

  benefits: {
    kicker: 'Why HerFit Studio',
    title: 'Bani hi khawateen ke liye hai',
    description:
      'Quetta ki aksar khawateen gym is liye nahi jati ke wahan sahulat nahi — balke is liye ke wahan sukoon aur privacy nahi milti. HerFit mein har sahulat isi ek baat ke gird bani hai.',
    items: [
      {
        id: 'privacy-first',
        icon: 'shield',
        featured: true,
        tag: 'Highest Standard',
        title: 'Parday Ka Mukammal Ehtimam',
        description:
          'Workout floor par 100% sirf khawateen. Koi male staff, koi male visitor ladies hours mein andar nahi aata. Chahe aap abaya/hijab mein aana pasand karein ya comfortable workout gear mein — yahan aap mukammal azadi aur sukoon ke sath train karti hain.',
        highlights: [
          'Frosted privacy glass and dedicated discrete entrance',
          'Only certified female coaches and female floor attendants',
          'Strict privacy policy: cameras restricted to exterior perimeter only',
        ],
      },
      {
        id: 'personalized-plan',
        icon: 'target',
        title: 'Personal Plan, Sirf Aap Ke Liye',
        description:
          'Join karne par complimentary body composition aur goal assessment. Hamari female trainers aap ke routine aur Pakistani gharelu khorak ke mutabiq custom workout aur diet guidance banati hain.',
        highlights: ['Monthly progress check-in', 'Desi-friendly sustainable diet tips'],
      },
      {
        id: 'beginner-friendly',
        icon: 'heart',
        title: 'Beginners Ke Liye Asan Shuruaat',
        description:
          'Pehli martaba gym shuru karte waqt hichkichahat hoti hai. Pehle 2 haftay hamari coach har machine, movement aur posture hath pakar kar sikhati hain — zero embarrassment, sirf support.',
        highlights: ['Paced form corrections', 'Encouraging, non-judgmental community'],
      },
      {
        id: 'transparent-fees',
        icon: 'wallet',
        title: 'Saaf Fees & Freezing Option',
        description:
          'Jo fees website par hai, wahi final hai. Koi hidden registration charge nahi. Safar, imtehanat ya gharelu majboori ki soorat mein membership freeze karwayein taake aap ki fees zaya na ho.',
        highlights: ['Clear monthly & quarterly plans', 'Hassle-free membership freeze policy'],
      },
    ],
  },

  programs: {
    kicker: 'Fitness Programs',
    title: 'Har goal ke liye ek program',
    description:
      'Sab programs dedicated ladies timings mein chalte hain aur har class mein qualified female instructor ki rehnumai shamil hai.',
    trialCtaText: 'Unsure which class fits your lifestyle?',
    trialCtaSubtext: 'Book a free 1-day pass on WhatsApp to explore our classes firsthand.',
    items: [
      {
        id: 'zumba',
        title: 'Zumba & Aerobics',
        category: 'Fat Burn & Cardio',
        scheduleBadge: 'Mon · Wed · Fri',
        description:
          'High-energy music aur rhythmic choreography ke sath full-body calorie burn. Fun aur welcoming mahol mein weight loss karne ka sab se dilchasp tareeqa.',
        imagePath: zumbaImg,
        imageAlt: 'Ladies Zumba group fitness class with energetic dance aerobics',
        intensity: 'High Energy',
      },
      {
        id: 'yoga',
        title: 'Yoga & Flexibility',
        category: 'Mind & Mobility',
        scheduleBadge: 'Tue · Thu · Sat',
        description:
          'Back stiffness, stress, body posture aur neend ke masail ke liye naram aur pur-sukoon class. Har umer ki khawateen ke liye munasib aur faydemand.',
        imagePath: yogaImg,
        imageAlt: 'Gentle women yoga and flexibility stretch session',
        intensity: 'Gentle',
      },
      {
        id: 'strength',
        title: 'Strength & Body Toning',
        category: 'Tone & Muscle Health',
        scheduleBadge: 'Rozana Floor Slots',
        description:
          'Dumbbells, resistance bands aur machines ke sath functional strength aur posture improvement. Osteoporosis prevention aur body shaping ke liye zaroori.',
        imagePath: strengthImg,
        imageAlt: 'Women strength training and resistance machine workout area',
        intensity: 'Moderate',
      },
      {
        id: 'weight-loss',
        title: '12-Week Transformation',
        category: 'Signature Program',
        scheduleBadge: '12 Weeks Structured',
        featured: true,
        description:
          'Cardio + muscle conditioning + Pakistani khano ke mutabiq meal planning + weekly progress check. Sub se zyada pasand kiya jane wala structured result program.',
        intensity: 'High Energy',
        highlights: [
          'Weekly body measurement track',
          'Sustainable home diet coaching',
          'Dedicated coach accountability',
        ],
      },
      {
        id: 'personal-training',
        title: '1-on-1 Personal Training',
        category: 'Private Coaching',
        scheduleBadge: 'Flexible Appointment',
        description:
          'Dedicated female personal trainer sirf aap ke sath. Shadi se pehle fitness preparation, post-pregnancy recovery ya targetted health goals ke mutabiq personalized session.',
        intensity: 'Moderate',
        highlights: ['Individualized focus', 'Time slot customized around your routine'],
      },
      {
        id: 'hiit-core',
        title: 'HIIT & Core Conditioning',
        category: 'Express Fitness',
        scheduleBadge: '35-Min High Impact',
        description:
          'Short, powerful cardio intervals aur abdominal core strengthening. Kam waqt mein maximum stamina aur body conditioning hasil karne ke liye ideal.',
        intensity: 'High Energy',
        highlights: ['Quick 35-min format', 'Core, glutes and metabolic conditioning'],
      },
    ],
  },

  schedule: {
    kicker: 'Weekly Class Schedule',
    title: 'Is hafte ki classes',
    description:
      'Din select karein — us din ki tamam classes aur timings nazar a jayein ge. Class attend karne ya book karne ke liye WhatsApp par sirf class ka naam bhejein.',
    days: {
      Monday: [
        { time: '8:00 AM', title: 'Zumba & Aerobics', instructor: 'Coach Sana', level: 'All levels', tagColor: 'rose' },
        { time: '10:00 AM', title: 'Gym Floor + Strength', instructor: 'Coach Hira', level: 'Beginner / Inter', tagColor: 'teal' },
        { time: '12:30 PM', title: 'Fat Burn Express', instructor: 'Coach Sana', level: 'High Energy', tagColor: 'rose' },
        { time: '5:30 PM', title: 'Cardio Blast', instructor: 'Coach Sana', level: 'Intermediate', tagColor: 'rose' },
        { time: '7:00 PM', title: 'Evening Yoga & Stretch', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
      ],
      Tuesday: [
        { time: '8:00 AM', title: 'Yoga & Flexibility', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
        { time: '10:00 AM', title: 'Gym Floor + Strength', instructor: 'Coach Hira', level: 'All levels', tagColor: 'teal' },
        { time: '12:30 PM', title: 'Post-Pregnancy Core & Pelvic', instructor: 'Coach Hira', level: 'Specialist Slot', tagColor: 'teal' },
        { time: '5:30 PM', title: 'Lower Body & Glutes Toning', instructor: 'Coach Hira', level: 'Intermediate', tagColor: 'teal' },
        { time: '7:00 PM', title: 'Gentle Yoga & Breathing', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
      ],
      Wednesday: [
        { time: '8:00 AM', title: 'Zumba & Aerobics', instructor: 'Coach Sana', level: 'All levels', tagColor: 'rose' },
        { time: '10:00 AM', title: 'Gym Floor + Strength', instructor: 'Coach Hira', level: 'All levels', tagColor: 'teal' },
        { time: '12:30 PM', title: 'HIIT & Fat Burn', instructor: 'Coach Sana', level: 'High Energy', tagColor: 'rose' },
        { time: '5:30 PM', title: 'Zumba Evening Session', instructor: 'Coach Sana', level: 'All levels', tagColor: 'rose' },
        { time: '7:00 PM', title: 'Full Body Mobility & Core', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
      ],
      Thursday: [
        { time: '8:00 AM', title: 'Yoga & Flexibility', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
        { time: '10:00 AM', title: 'Gym Floor + Strength', instructor: 'Coach Hira', level: 'All levels', tagColor: 'teal' },
        { time: '12:30 PM', title: 'Dumbbell Toning & Posture', instructor: 'Coach Hira', level: 'Beginner friendly', tagColor: 'teal' },
        { time: '5:30 PM', title: 'Upper Body & Arms Sculpt', instructor: 'Coach Hira', level: 'Intermediate', tagColor: 'teal' },
        { time: '7:00 PM', title: 'Restorative Stretch & Relaxation', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
      ],
      Friday: [
        { time: '8:00 AM', title: 'Zumba (Subah Session)', instructor: 'Coach Sana', level: 'All levels', tagColor: 'rose' },
        { time: '10:00 AM', title: 'Yoga & Deep Stretch', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
        { time: '11:15 AM', title: 'Open Gym Floor (Until 12:00 PM)', instructor: 'Duty Coach', level: 'Self-paced', tagColor: 'teal' },
      ],
      Saturday: [
        { time: '9:00 AM', title: 'Mothers & Daughters Weekend Fit', instructor: 'Coach Mahnoor', level: 'All ages', tagColor: 'rose' },
        { time: '11:00 AM', title: 'Gym Floor & Free Weights', instructor: 'Coach Hira', level: 'All levels', tagColor: 'teal' },
        { time: '4:30 PM', title: 'Weekend Zumba Party', instructor: 'Coach Sana', level: 'Fun & Energy', tagColor: 'rose' },
        { time: '6:30 PM', title: 'Sunset Meditation & Yoga', instructor: 'Coach Mahnoor', level: 'All levels', tagColor: 'sage' },
      ],
    },
    note: 'Note: Friday ko juma timings ke pesh-e-nazar sirf subah 7:00 AM se 12:00 PM tak floor khula hota hai. Schedule mein koi bhi emergency tabdeeli WhatsApp channel par pehle bata di jati hai.',
  },

  timings: {
    kicker: 'Operating Hours & Studio Location',
    title: 'Ladies timings — aur aap ka BMI',
    slots: [
      { label: 'Subah Session (Ladies Only)', time: '7:00 AM – 11:00 AM', tag: 'Morning Energy' },
      { label: 'Dopeher Session (Homemakers & Students)', time: '12:00 PM – 3:00 PM', tag: 'Quiet Hours' },
      { label: 'Shaam Session (Working Women & Evening)', time: '4:00 PM – 9:00 PM', tag: 'Prime Fitness' },
      { label: 'Friday Special Hours', time: '7:00 AM – 12:00 PM', tag: 'Half Day' },
      { label: 'Sunday', time: 'Band (Family & Rest Day)', tag: 'Closed' },
    ],
    policyNote:
      'Floor par har session ke doran sirf aur sirf certified female trainer duty par mojood hoti hain. Complete screen privacy aur separate entrance har waqt active rehti hai.',
    locationTitle: 'Studio Location in Quetta',
    locationDescription:
      'Near Main Boulevard, Jinnah Town, Quetta. Pur-sukoon aur mehfooz ilaqa jahan car parking aur separate entrance ki aasan sahulat mojood hai.',
    mapUrl: 'https://maps.google.com/?q=Jinnah+Town+Quetta',
    mapButtonText: 'Open in Google Maps',
  },

  bmi: {
    title: 'Free Client-Side BMI Calculator',
    description:
      'Apna wazan aur height darj karein — foran pata chal jayega aap kis body range mein hain aur HerFit ka konsa program aap ke liye sab se behtreen sabit hoga.',
    disclaimer:
      'Medical Disclaimer: BMI calculator sirf aam screening aur maloomat ke liye hai; ye kisi medical bimari ki diagnosis ya ilaj nahi hai. Koi bhi data server par save ya transmit nahi hota.',
  },

  pricing: {
    kicker: 'Membership Packages',
    title: 'Saaf aur simple fees',
    admissionFeeNotice:
      'Ek dafa admission fee Rs 1,000 (har plan ke sath). Pehli trial class 100% free hai — pehle aa kar dekhein, phir itminan se faisla karein.',
    discountNote:
      'Student Discount: Valid student ID card dikhane par 10% discount · Buddy Offer: Agar do dost ya behnein ek sath admission lein to dono ki admission fee waive kar di jati hai.',
    plans: [
      {
        id: 'basic',
        name: 'Basic Floor',
        tagline: 'Sirf gym floor — apne pace aur waqt par',
        monthlyPrice: 3000,
        quarterlyPrice: 7200,
        features: [
          { text: 'Gym floor access + tamam machines', included: true },
          { text: 'Subah ya shaam — 1 session rozana', included: true },
          { text: 'Locker & changing room facility', included: true },
          { text: 'Initial machine orientation guidance', included: true },
          { text: 'Group classes (Yoga / Zumba)', included: false },
          { text: 'Personal diet & nutrition plan', included: false },
        ],
      },
      {
        id: 'all-classes',
        name: 'All Classes',
        tagline: 'Gym floor + tamam group fitness classes',
        monthlyPrice: 4500,
        quarterlyPrice: 10800,
        popular: true,
        popularBadge: 'SAB SE ZYADA JOIN',
        features: [
          { text: 'Gym floor access + tamam machines', included: true },
          { text: 'Unlimited Zumba & Aerobics classes', included: true },
          { text: 'Unlimited Yoga & Flexibility classes', included: true },
          { text: 'HIIT & Core conditioning slots', included: true },
          { text: 'Locker & shower facility', included: true },
          { text: 'Monthly body measurement check', included: true },
          { text: 'Pakistani lifestyle diet guidance', included: true },
        ],
      },
      {
        id: 'weight-loss-vip',
        name: 'Transformation VIP',
        tagline: '12-Hafte ka focused weight loss program',
        monthlyPrice: 7500,
        quarterlyPrice: 18000,
        features: [
          { text: 'All Classes plan ki tamam sahuliyat', included: true },
          { text: '12-Hafte ka dedicated transformation protocol', included: true },
          { text: 'Customized ghar ke khano ka weekly diet plan', included: true },
          { text: 'Hafta-war weight aur inch-loss tracking', included: true },
          { text: 'WhatsApp par trainer ki daily accountability', included: true },
          { text: 'Priority personal coaching slots', included: true },
        ],
      },
    ],
  },

  trainers: {
    kicker: 'Female Coaching Team',
    title: 'Certified aur experienced trainers',
    description:
      'Hamari coaching team har member ko unke fitness level ke hisaab se support karti hai. No harsh pressure — sirf sahi guidance aur positive motivation.',
    trainers: [
      {
        id: 'sana',
        name: 'Coach Sana',
        role: 'Head Aerobics & Zumba Coach',
        specialization: 'Fat Burn, Zumba, Cardio Conditioning',
        experience: '6+ saal ka fitness coaching tajurba',
        avatarLetter: 'S',
        avatarBg: '#bc4756',
      },
      {
        id: 'mahnoor',
        name: 'Coach Mahnoor',
        role: 'Yoga & Mobility Instructor',
        specialization: 'Postural Health, Stress Relief, Flexibility',
        experience: '5+ saal ka certified yoga practice tajurba',
        avatarLetter: 'M',
        avatarBg: '#14544e',
      },
      {
        id: 'hira',
        name: 'Coach Hira',
        role: 'Strength & Conditioning Specialist',
        specialization: 'Body Toning, Weight Training, Post-Rehab',
        experience: '4+ saal ka resistance training tajurba',
        avatarLetter: 'H',
        avatarBg: '#b98a2e',
      },
    ],
  },

  reviews: {
    kicker: 'Member Experiences',
    title: 'Jo khawateen aati hain, unka itminan',
    googleRating: '4.9',
    reviewsCount: '80+ verified Google reviews',
    reviews: [
      {
        id: 'fatima',
        name: 'Fatima S.',
        roleTag: 'Regular Member · Jinnah Town',
        avatarLetter: 'F',
        avatarColor: '#bc4756',
        rating: 5,
        comment:
          'Pehli dafa Quetta ke kisi gym mein itna sukoon aur privacy dekhi hai. Floor par sirf khawateen hoti hain, trainers bohat respectful aur cooperative hain. Diet guidance bhi Pakistani khano ke mutabiq thi jis se weight maintain karna asan raha.',
      },
      {
        id: 'ayesha',
        name: 'Ayesha K.',
        roleTag: 'Working Professional · Cantt',
        avatarLetter: 'A',
        avatarColor: '#14544e',
        rating: 5,
        comment:
          'Main bank mein job karti hoon, mere liye shaam 6:00 baje wala slot perfect hai. WhatsApp par inquiry karne ke 5 minute baad reply mila tha. Sab se achi baat ye hai ke koi hidden charges nahi hain aur mahol bohat dignified hai.',
      },
      {
        id: 'maryam',
        name: 'Maryam R.',
        roleTag: 'Student & Mother · Quetta',
        avatarLetter: 'M',
        avatarColor: '#b98a2e',
        rating: 5,
        comment:
          'Yoga aur stretching class se meri kamar ke dard mein wazeh farq para hai. Mahol itna safe aur khushgawar hai ke ab meri ammi bhi mere sath aati hain. Beginners ke liye is se behtreen gym Quetta mein nahi.',
      },
    ],
  },

  faq: {
    kicker: 'Questions & Answers',
    title: 'Aksar pooche jane wale sawalat',
    faqs: [
      {
        id: 'faq-1',
        question: 'Kya gym waqai 100% ladies only hai?',
        answer:
          'Ji bilkul 100%. Ladies operational hours mein workout floor par sirf khawateen members aur certified female trainers mojood hoti hain. Kisi male staff ya male visitor ka ladies floor par aana sakhti se mamnoo hai.',
      },
      {
        id: 'faq-2',
        question: 'Free trial class mein kya shamil hota hai?',
        answer:
          'Aap ko ek mukammal group class (Zumba ya Yoga) ya gym floor session bilkul free diya jata hai. Hamari coach aap ko machines ka istemal sikhayegi, aap ke goals sunegi aur mashwara degi. Pasand aaye to admission lein — koi commitment ya zabardasti nahi.',
      },
      {
        id: 'faq-3',
        question: 'Main pehli dafa gym ja rahi hoon — kya main adjust kar paungi?',
        answer:
          'Fikr bilkul na karein. Hamari 70% se zyada members pehli dafa hi gym join karti hain. Pehle 2 haftay trainer har exercise, movement aur posture hath pakar kar sikhati hain. Mahol intihai encouraging aur welcoming hai.',
      },
      {
        id: 'faq-4',
        question: 'Kya main hijab ya modest clothing mein workout kar sakti hoon?',
        answer:
          'Ji yaqeenan. Bohat si members sports hijab ya loose athletic wear mein workout karti hain. Floor mukammal private hai, is liye aap jese libas mein comfortable aur pur-sukoon mehsoos karein, wese a sakti hain.',
      },
      {
        id: 'faq-5',
        question: 'Safar ya bemari par membership freeze ho sakti hai?',
        answer:
          'Ji han. Imtehanat, family travel ya tabiyat kharab hone ki soorat mein aap apni membership bina kisi charge ke freeze karwa sakti hain taake aap ki ada shuda fees aur din zaya na hon. Sirf WhatsApp par pehle itla dein.',
      },
      {
        id: 'faq-6',
        question: 'Booking aur admission ka asan tareeqa kya hai?',
        answer:
          'Neeche diye gaye form ko bharein ya direct WhatsApp par message karein. Hamari team aap ko foran class timings aur free trial slot allot karegi. Call karne ki bhi zaroorat nahi.',
      },
    ],
  },

  booking: {
    title: 'Apni free trial class book karein',
    description:
      'Form bharein — aap ki request direct hamare WhatsApp par a jayegi aur hamari team aap ka trial session confirm karegi. Koi advance payment nahi, koi commitment nahi.',
    whatsappNotice:
      'Form submit karne par WhatsApp khulega jahan Send dabane se request confirm hoti hai. Registration live verification ke baad active hoti hai.',
    responseTimeNotice: '📞 WhatsApp / Call: 0311 2777061 · Response Time: Subah 9:00 AM – Raat 9:00 PM',
    goals: [
      'Weight Loss & Fat Burn',
      'Body Toning & Strength',
      'Yoga & Flexibility',
      '12-Week Transformation Program',
      '1-on-1 Personal Training',
      'Pehle sirf visit kar ke dekhna hai',
    ],
    timeSlots: [
      'Subah Session (7:00 AM – 11:00 AM)',
      'Dopeher Slot (12:00 PM – 3:00 PM)',
      'Shaam Session (4:00 PM – 9:00 PM)',
      'Friday Subah (7:00 AM – 12:00 PM)',
      'Saturday Weekend Slot',
    ],
  },
};

/**
 * Builds a direct, safely URL-encoded WhatsApp link for CTAs.
 */
export function buildWhatsAppLink(
  number: string = gymConfig.contact.whatsappNumber,
  message: string = gymConfig.contact.whatsappInquiryMessage
): string {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
