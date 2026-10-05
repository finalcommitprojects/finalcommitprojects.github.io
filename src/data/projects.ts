export type AreaKey =
  | 'web'
  | 'mobile'
  | 'ml'
  | 'vision'
  | 'genai'
  | 'data'
  | 'security'
  | 'blockchain'
  | 'cloud';

export type Level = 'Mini' | 'Major';

export interface Project {
  id: number;
  slug: string;
  title: string;
  area: AreaKey;
  level: Level;
  stack: string[];
  summary: string;
  features: string[];
  suits: string[];
  featured?: boolean;
}

export const areas: { key: AreaKey; label: string; short: string }[] = [
  { key: 'web', label: 'Web apps', short: 'Web' },
  { key: 'mobile', label: 'Mobile apps', short: 'Mobile' },
  { key: 'ml', label: 'Machine learning', short: 'ML' },
  { key: 'vision', label: 'Deep learning & vision', short: 'Vision' },
  { key: 'genai', label: 'NLP & generative AI', short: 'GenAI' },
  { key: 'data', label: 'Data analytics', short: 'Data' },
  { key: 'security', label: 'Cybersecurity', short: 'Security' },
  { key: 'blockchain', label: 'Blockchain', short: 'Blockchain' },
  { key: 'cloud', label: 'Cloud & DevOps', short: 'Cloud' },
];

export const areaLabel = (key: AreaKey) => areas.find((a) => a.key === key)!.label;

// Who each project usually suits. Any of them can be scaled up or down.
const UG_PG = ['BE / B.Tech', 'MCA', 'BCA', 'B.Sc / M.Sc'];
const ENGG = ['BE / B.Tech', 'M.Tech', 'MCA'];
const MINI = ['BE / B.Tech (2nd/3rd yr)', 'BCA', 'B.Sc', 'Diploma'];

type Raw = Omit<Project, 'id' | 'slug'>;

const raw: Raw[] = [
  // Web apps
  {
    title: 'Hostel Management System',
    area: 'web',
    level: 'Major',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    summary:
      'One place for the warden, the office and the students. Room allotment, fees, complaints and the mess menu, with separate logins for each.',
    features: [
      'Room allotment with a live vacancy view by block and floor',
      'Fee records, due reminders and receipts as PDF',
      'Complaint tickets that the warden can assign and close',
      'Weekly mess menu and leave requests with parent approval',
      'Admin reports exported to Excel',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Blood Bank and Donor Finder',
    area: 'web',
    level: 'Mini',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    summary:
      'Donors register by blood group and city. Hospitals post urgent requests, and matching donors nearby get notified.',
    features: [
      'Donor registration with the 90-day donation gap checked automatically',
      'Search by blood group, city and availability',
      'Urgent request board for hospitals',
      'Stock tracking for each blood bank',
      'Donation history for every donor',
    ],
    suits: MINI,
  },
  {
    title: 'College Placement Portal',
    area: 'web',
    level: 'Major',
    stack: ['Django', 'PostgreSQL', 'Bootstrap'],
    summary:
      'Students keep one profile and resume. The placement officer posts drives, and only eligible students can apply.',
    features: [
      'Student profiles with resume upload',
      'Drive eligibility filters for CGPA, backlogs and branch',
      'One-click apply and status tracking',
      'Shortlists exported to Excel for companies',
      'Interview schedule notifications by email',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Smart Parking Slot Booking',
    area: 'web',
    level: 'Major',
    stack: ['React', 'Spring Boot', 'MySQL', 'Razorpay (test mode)'],
    summary:
      'See free slots in a parking lot, book by the hour, and enter with a QR pass. Owners get occupancy reports.',
    features: [
      'Live slot map for each parking lot',
      'Hourly booking with cancellation rules',
      'QR entry pass checked at the gate',
      'Online payment in Razorpay test mode',
      'Occupancy and revenue reports for the owner',
    ],
    suits: ENGG,
  },
  {
    title: 'Food Waste Donation Platform',
    area: 'web',
    level: 'Major',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Leaflet maps'],
    summary:
      'Restaurants, hostels and wedding halls post leftover food. NGOs nearby claim it and volunteers pick it up.',
    features: [
      'Food posts with quantity and a pickup window',
      'NGO claim and volunteer assignment',
      'Map view of open pickups',
      'Pickup status updates in real time',
      'Meals-saved counter for each donor',
    ],
    suits: UG_PG,
  },
  {
    title: 'Online Examination System',
    area: 'web',
    level: 'Mini',
    stack: ['Laravel', 'MySQL', 'JavaScript'],
    summary:
      'Faculty build a question bank and schedule timed tests. MCQs are marked automatically and results come out instantly.',
    features: [
      'Question bank by subject and difficulty',
      'Timed tests that auto-submit when time runs out',
      'Shuffled questions for each student',
      'Warning when a student switches tabs',
      'Result analysis for each test',
    ],
    suits: MINI,
  },
  {
    title: 'Doctor Appointment Booking',
    area: 'web',
    level: 'Major',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    summary:
      'Patients book a slot with a doctor, get reminders, and see their prescriptions later. Clinics manage schedules from one screen.',
    features: [
      'Doctor schedules with slot lengths and leave days',
      'Book, cancel and reschedule',
      'Email reminders before the appointment',
      'Prescriptions uploaded as PDF to the patient record',
      'Admin view of the day across doctors',
    ],
    suits: UG_PG,
  },
  {
    title: 'Campus Lost and Found',
    area: 'web',
    level: 'Mini',
    stack: ['Django', 'SQLite', 'HTMX'],
    summary:
      'Post what you lost or found with a photo. The owner proves it is theirs by answering a question only they would know.',
    features: [
      'Posts with photo, category and place found',
      'Filters by category, date and building',
      'Claim with a proof question',
      'Messages between finder and owner',
      'Admin moderation',
    ],
    suits: MINI,
  },
  {
    title: 'College Fest Event Management and Ticketing',
    area: 'web',
    level: 'Major',
    stack: ['Next.js', 'Firebase'],
    summary:
      'Registrations for every event at the fest, QR tickets scanned at the gate with a phone, and certificates generated at the end.',
    features: [
      'Solo and team registrations with limits',
      'QR tickets scanned with a phone camera',
      'Live count of check-ins per event',
      'Certificates generated as PDF for participants',
      'Coordinator dashboard for each event',
    ],
    suits: UG_PG,
  },

  // Mobile apps
  {
    title: 'Expense Splitter for Roommates',
    area: 'mobile',
    level: 'Mini',
    stack: ['Flutter', 'Firebase'],
    summary:
      'Add a bill, pick who shares it, and the app works out who owes whom. Settle up with a UPI link.',
    features: [
      'Groups for flats, trips and hostel rooms',
      'Split equally, by share or by exact amount',
      'Debts simplified to the fewest payments',
      'UPI deep link to settle',
      'Monthly spending chart',
    ],
    suits: MINI,
  },
  {
    title: 'Campus Bus Tracker',
    area: 'mobile',
    level: 'Major',
    stack: ['Kotlin', 'Google Maps SDK', 'Firebase Realtime Database'],
    summary:
      'The driver app shares the bus location. Students see the bus on a map with the time to their stop.',
    features: [
      'Driver app that shares GPS while on a trip',
      'Live bus position and ETA to each stop',
      'Delay alerts when a bus is running late',
      'Route and stop management for the transport office',
      'Trip history',
    ],
    suits: ENGG,
    featured: true,
  },
  {
    title: 'Women Safety SOS App',
    area: 'mobile',
    level: 'Major',
    stack: ['Kotlin', 'Firebase', 'Google Maps SDK'],
    summary:
      'One tap, or a hard shake, sends an SOS with live location to trusted contacts. It works even when the screen is locked.',
    features: [
      'SOS by button or shake gesture',
      'SMS with live location to trusted contacts',
      'Nearest police stations and hospitals on a map',
      'Fake incoming call to get out of a situation',
      'Audio recording starts with the SOS',
    ],
    suits: UG_PG,
  },
  {
    title: 'Medicine Reminder and Pill Tracker',
    area: 'mobile',
    level: 'Mini',
    stack: ['Flutter', 'SQLite'],
    summary:
      'Reminders for every dose, refill alerts, and a message to a family member if a dose is missed.',
    features: [
      'Dose schedules with snooze',
      'Refill alerts when stock runs low',
      'Caretaker notified on a missed dose',
      'Works offline',
      'Dose history to show the doctor',
    ],
    suits: MINI,
  },
  {
    title: 'QR and Geofence Attendance App',
    area: 'mobile',
    level: 'Major',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    summary:
      'Faculty show a QR code that changes every few seconds. Students can only mark attendance from inside the classroom.',
    features: [
      'Rotating QR code so it cannot be shared',
      'Geofence check on the classroom location',
      'Attendance percentage per subject',
      'Shortage alerts for students below 75%',
      'Export to Excel for the department',
    ],
    suits: ENGG,
  },
  {
    title: 'Mandi Price App for Farmers',
    area: 'mobile',
    level: 'Mini',
    stack: ['Flutter', 'data.gov.in API', 'Firebase'],
    summary:
      'Daily crop prices from government mandi data, by district, with trends and alerts. Works in Kannada and Hindi too.',
    features: [
      'Daily mandi prices pulled from the public API',
      'Search by crop and district',
      'Price trend charts',
      'Alerts when a price crosses a target',
      'English, Kannada and Hindi',
    ],
    suits: MINI,
  },
  {
    title: 'Second-hand Book Exchange',
    area: 'mobile',
    level: 'Mini',
    stack: ['Flutter', 'Firebase', 'Firestore'],
    summary:
      'Seniors sell last semester\'s books to juniors. Search by course and semester, then chat and meet on campus.',
    features: [
      'Listings with photos and condition',
      'Search by course, semester and subject',
      'Chat between buyer and seller',
      'Wishlist alerts when a book is listed',
      'Mark as sold',
    ],
    suits: MINI,
  },
  {
    title: 'Fitness and Diet Tracker',
    area: 'mobile',
    level: 'Mini',
    stack: ['Kotlin', 'Room', 'MPAndroidChart'],
    summary:
      'Steps from the phone sensor, a calorie log with Indian foods, and water reminders, with weekly progress charts.',
    features: [
      'Step counter using the phone sensor',
      'Calorie log with an Indian food list',
      'Water reminders',
      'BMI and goal tracking',
      'Weekly progress charts',
    ],
    suits: MINI,
  },

  // Machine learning
  {
    title: 'Credit Card Fraud Detection',
    area: 'ml',
    level: 'Mini',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit'],
    summary:
      'Fraud is rare, so the data is heavily imbalanced. The project handles that properly and judges models on recall, since accuracy alone is misleading here.',
    features: [
      'Imbalance handled with SMOTE and class weights',
      'Logistic Regression, Random Forest and XGBoost compared',
      'Precision, recall and ROC curves explained in the report',
      'Streamlit page to score a transaction',
    ],
    suits: UG_PG,
  },
  {
    title: 'Crop Recommendation System',
    area: 'ml',
    level: 'Mini',
    stack: ['Python', 'scikit-learn', 'Flask'],
    summary:
      'Enter soil nutrients, pH, rainfall and temperature, and get the crop most likely to do well, with a fertiliser suggestion.',
    features: [
      'Inputs for N, P, K, pH, rainfall and temperature',
      'Several classifiers compared',
      'Fertiliser suggestion for the chosen crop',
      'Simple web form for farmers',
    ],
    suits: MINI,
  },
  {
    title: 'House Price Prediction',
    area: 'ml',
    level: 'Mini',
    stack: ['Python', 'pandas', 'scikit-learn', 'Flask'],
    summary:
      'Price estimates for Bengaluru flats from location, area and BHK, after proper cleaning of a messy real dataset.',
    features: [
      'Cleaning and outlier removal on real listings',
      'Feature engineering for location and area',
      'Regression models compared',
      'Web page that returns an estimate',
    ],
    suits: MINI,
  },
  {
    title: 'Student Performance Early Warning',
    area: 'ml',
    level: 'Major',
    stack: ['Python', 'scikit-learn', 'SHAP', 'Streamlit'],
    summary:
      'Flags students at risk of failing from attendance, internals and assignments, and shows faculty why each one was flagged.',
    features: [
      'Risk prediction from attendance and internal marks',
      'SHAP explanation for every flagged student',
      'Faculty dashboard by class and subject',
      'Suggested actions for each risk level',
    ],
    suits: ENGG,
  },
  {
    title: 'Heart Disease Prediction',
    area: 'ml',
    level: 'Mini',
    stack: ['Python', 'scikit-learn', 'Flask'],
    summary:
      'Predicts heart disease risk from clinical values and produces a short report a doctor could read.',
    features: [
      'Classifiers compared on the UCI dataset',
      'Feature importance chart',
      'Risk report downloaded as PDF',
      'Web form for entering patient values',
    ],
    suits: MINI,
  },
  {
    title: 'Telecom Customer Churn Prediction',
    area: 'ml',
    level: 'Mini',
    stack: ['Python', 'XGBoost', 'Streamlit'],
    summary:
      'Predicts which customers are about to leave, groups them by reason, and suggests a retention offer for each group.',
    features: [
      'Churn model with tuned thresholds',
      'Customer segments by churn reason',
      'Retention suggestions per segment',
      'Dashboard with churn by plan and tenure',
    ],
    suits: UG_PG,
  },
  {
    title: 'Hybrid Movie Recommendation System',
    area: 'ml',
    level: 'Major',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'React'],
    summary:
      'Combines what similar users liked with what the movie is about, so new users still get good suggestions.',
    features: [
      'Collaborative filtering on ratings',
      'Content-based matching on genre, cast and plot',
      'Hybrid ranking with cold-start handling',
      'Web app with ratings and watchlist',
    ],
    suits: ENGG,
  },
  {
    title: 'Explainable Loan Approval Prediction',
    area: 'ml',
    level: 'Major',
    stack: ['Python', 'LightGBM', 'SHAP', 'Streamlit'],
    summary:
      'Predicts loan approval and explains every decision in plain words. Also checks whether the model treats groups fairly.',
    features: [
      'LightGBM model with tuned parameters',
      'Per-applicant explanation with SHAP',
      'Fairness check across gender and age groups',
      'Applicant and officer views',
    ],
    suits: ENGG,
  },
  {
    title: 'Air Quality (AQI) Forecasting',
    area: 'ml',
    level: 'Major',
    stack: ['Python', 'Prophet', 'TensorFlow', 'Streamlit'],
    summary:
      'Forecasts a city\'s AQI for the next few days from CPCB data and sends an alert before a bad-air day.',
    features: [
      'Cleaning of CPCB station data',
      'Prophet and LSTM forecasts compared',
      'Seven-day forecast chart',
      'Alerts above a chosen AQI level',
    ],
    suits: ENGG,
  },

  // Deep learning & vision
  {
    title: 'Crop Leaf Disease Detection',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'TensorFlow', 'Keras', 'Flask'],
    summary:
      'Take a photo of a leaf and get the disease name and a remedy. Uses transfer learning, so it trains on a normal laptop.',
    features: [
      'Transfer learning with MobileNetV2 or EfficientNet',
      'Trained on PlantVillage plus field photos',
      'Disease name, confidence and remedy',
      'Works from a phone browser',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Driver Drowsiness Detection',
    area: 'vision',
    level: 'Mini',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    summary:
      'Watches the driver through a webcam and sounds an alarm when the eyes stay closed too long or the driver keeps yawning.',
    features: [
      'Eye aspect ratio from face landmarks',
      'Yawn detection',
      'Alarm with adjustable sensitivity',
      'Runs in real time on a laptop webcam',
    ],
    suits: MINI,
  },
  {
    title: 'Face Recognition Attendance System',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'OpenCV', 'InsightFace', 'Flask', 'SQLite'],
    summary:
      'Recognises every student in a classroom photo or webcam feed and marks attendance. A blink check stops someone holding up a photo.',
    features: [
      'Face registration with a few photos per student',
      'Several faces recognised in one frame',
      'Blink check against photo spoofing',
      'Attendance export to Excel',
      'Admin panel for classes and subjects',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Sign Language to Text and Speech',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'MediaPipe', 'TensorFlow', 'pyttsx3'],
    summary:
      'Reads hand signs from a webcam, turns them into text, and speaks the sentence out loud.',
    features: [
      'Hand landmarks with MediaPipe',
      'Alphabets and common words in ISL or ASL',
      'Sentence building with word suggestions',
      'Text to speech output',
    ],
    suits: ENGG,
  },
  {
    title: 'Deepfake Image Detection',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'PyTorch', 'Grad-CAM', 'Gradio'],
    summary:
      'Tells real faces from AI-generated or swapped ones, and highlights the parts of the image that gave it away.',
    features: [
      'EfficientNet or Xception classifier',
      'Grad-CAM heatmaps that show why',
      'Tested on images from several generators',
      'Upload-and-check web demo',
    ],
    suits: ENGG,
  },
  {
    title: 'Helmet and Number Plate Detection',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'YOLO (Ultralytics)', 'EasyOCR', 'Flask'],
    summary:
      'Spots two-wheeler riders without a helmet in traffic video, reads the number plate, and logs the violation.',
    features: [
      'YOLO detection for riders and helmets',
      'Number plate reading with OCR',
      'Violation log with snapshot and time',
      'Works on recorded or live video',
    ],
    suits: ENGG,
  },
  {
    title: 'Brain Tumor Detection from MRI',
    area: 'vision',
    level: 'Major',
    stack: ['Python', 'TensorFlow', 'U-Net', 'Streamlit'],
    summary:
      'Classifies MRI scans into tumor types and marks the tumor region on the scan.',
    features: [
      'Classification into glioma, meningioma, pituitary or none',
      'Tumor region segmentation with U-Net',
      'Confusion matrix and per-class accuracy in the report',
      'Upload a scan and see the result',
    ],
    suits: ENGG,
  },
  {
    title: 'Handwritten Character Recognition',
    area: 'vision',
    level: 'Mini',
    stack: ['Python', 'Keras', 'HTML canvas'],
    summary:
      'Draw a digit or letter on screen and the model reads it. A good first deep learning project.',
    features: [
      'CNN trained on MNIST and EMNIST',
      'Drawing canvas in the browser',
      'Top three guesses with confidence',
      'Training curves explained in the report',
    ],
    suits: MINI,
  },
  {
    title: 'Smart Waste Classification',
    area: 'vision',
    level: 'Mini',
    stack: ['Python', 'PyTorch', 'MobileNet', 'Flask'],
    summary:
      'Point a camera at waste and it says plastic, paper, metal, glass or organic, and which bin it goes in.',
    features: [
      'Five waste classes',
      'Lightweight model that runs on a laptop',
      'Bin suggestion with a short reason',
      'Camera or upload input',
    ],
    suits: MINI,
  },

  // NLP & generative AI
  {
    title: 'RAG Chatbot for College Helpdesk',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gemini API or Ollama', 'Streamlit'],
    summary:
      'Answers students\' questions from the college\'s own PDFs (syllabus, rules, circulars) and shows which document each answer came from.',
    features: [
      'Admin uploads PDFs and they become searchable',
      'Answers with the source page cited',
      'Says "not in the documents" instead of guessing',
      'Free option with a local model through Ollama',
      'Chat history per student',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'AI Resume Screener and Ranker',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'spaCy', 'sentence-transformers', 'FastAPI', 'React'],
    summary:
      'Reads a pile of resumes, ranks them against a job description, and shows each candidate\'s missing skills.',
    features: [
      'PDF and DOCX resume parsing',
      'Semantic matching with embeddings',
      'Ranked list with a match score',
      'Missing-skill report per candidate',
    ],
    suits: ENGG,
  },
  {
    title: 'Medical Report Summariser',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'Tesseract OCR', 'Gemini API', 'Streamlit'],
    summary:
      'Upload a lab report and get the values pulled out, the abnormal ones flagged, and a plain-language summary in English, Hindi or Kannada.',
    features: [
      'OCR for scanned reports',
      'Values compared with normal ranges',
      'Plain-language summary in three languages',
      'Clear note that it does not replace a doctor',
    ],
    suits: ENGG,
  },
  {
    title: 'AI Mock Interviewer',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'Whisper', 'Gemini API', 'React'],
    summary:
      'Asks interview questions for a chosen role, listens to your spoken answers, and gives feedback on content and delivery.',
    features: [
      'Questions by role and difficulty',
      'Spoken answers transcribed with Whisper',
      'Feedback on content, filler words and pace',
      'Score report after each session',
    ],
    suits: UG_PG,
  },
  {
    title: 'Agentic AI Travel Planner',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'LangGraph', 'Gemini API', 'Next.js'],
    summary:
      'An AI agent that plans a trip step by step. It checks weather, distances and budget with real tools, and you can edit the plan.',
    features: [
      'Multi-step agent with tool calls',
      'Weather, maps and budget tools',
      'Day-by-day itinerary you can edit',
      'Export to PDF',
    ],
    suits: ENGG,
  },
  {
    title: 'Fake News Detection',
    area: 'genai',
    level: 'Mini',
    stack: ['Python', 'scikit-learn', 'Hugging Face Transformers', 'Flask'],
    summary:
      'Checks whether a headline or article looks fake. Classic models are compared against a fine-tuned BERT.',
    features: [
      'TF-IDF baseline models',
      'Fine-tuned BERT comparison',
      'Paste-a-headline web page',
      'Accuracy and error analysis in the report',
    ],
    suits: UG_PG,
  },
  {
    title: 'Aspect-based Review Sentiment Analysis',
    area: 'genai',
    level: 'Mini',
    stack: ['Python', 'Hugging Face', 'Streamlit'],
    summary:
      'Reads product reviews and scores each aspect separately: battery, camera, price, delivery.',
    features: [
      'Review collection and cleaning',
      'A sentiment score for each aspect of a review',
      'Dashboard comparing products',
      'Sample reviews behind every score',
    ],
    suits: MINI,
  },
  {
    title: 'Voice Assistant for Indian Languages',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'Whisper', 'IndicTrans2', 'gTTS'],
    summary:
      'A voice assistant that understands and replies in Hindi or Kannada, with weather, reminders and app shortcuts.',
    features: [
      'Speech recognition for Indian languages',
      'Intents for weather, reminders and opening apps',
      'Spoken replies in the same language',
      'Works on a laptop microphone',
    ],
    suits: ENGG,
  },
  {
    title: 'Text-to-SQL Assistant',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'Gemini API', 'SQLite', 'Streamlit'],
    summary:
      'Ask a question in English, get the SQL, the answer and a chart. Read-only, so it can never change the data.',
    features: [
      'Questions in plain English',
      'Generated SQL shown for checking',
      'Results as a table and a chart',
      'Read-only access to the database',
    ],
    suits: ENGG,
  },
  {
    title: 'Lecture Notes and Quiz Generator',
    area: 'genai',
    level: 'Major',
    stack: ['Python', 'Whisper', 'Gemini API', 'React'],
    summary:
      'Upload a lecture video or PDF and get clean notes plus an MCQ quiz with answers.',
    features: [
      'Video transcription with Whisper',
      'Notes with headings and key points',
      'MCQ quiz with an answer key',
      'Download as PDF',
    ],
    suits: UG_PG,
  },

  // Data analytics
  {
    title: 'Retail Sales Analytics Dashboard',
    area: 'data',
    level: 'Mini',
    stack: ['Power BI', 'SQL', 'Python'],
    summary:
      'Cleans a year of store sales and turns it into a dashboard with region and product drill-downs and a next-quarter forecast.',
    features: [
      'Data cleaning in Python and SQL',
      'KPI cards and drill-downs',
      'Region, category and month filters',
      'Simple forecast for next quarter',
    ],
    suits: MINI,
  },
  {
    title: 'IPL Analysis and Win Predictor',
    area: 'data',
    level: 'Mini',
    stack: ['Python', 'pandas', 'scikit-learn', 'Streamlit'],
    summary:
      'Ball-by-ball IPL analysis, player stats, and a live win probability during a chase.',
    features: [
      'Team and player stats across seasons',
      'Venue and toss analysis',
      'Win probability by over during a chase',
      'Interactive charts',
    ],
    suits: MINI,
  },
  {
    title: 'District-wise Crime Data Analysis',
    area: 'data',
    level: 'Mini',
    stack: ['Python', 'Plotly', 'GeoPandas'],
    summary:
      'Uses public NCRB data to show crime trends by state and district on a map.',
    features: [
      'Cleaning of NCRB tables',
      'Choropleth maps by state and district',
      'Trends by crime type and year',
      'Findings written up for the report',
    ],
    suits: MINI,
  },
  {
    title: 'HR Attrition Analytics',
    area: 'data',
    level: 'Mini',
    stack: ['Power BI', 'Python', 'scikit-learn'],
    summary:
      'Why employees leave: a Power BI dashboard on the causes, plus a model that predicts who is likely to leave next.',
    features: [
      'Attrition by department, salary band and tenure',
      'Prediction model with top drivers',
      'Power BI dashboard',
      'Recommendations section',
    ],
    suits: UG_PG,
  },
  {
    title: 'Stock Analysis and Price Forecasting',
    area: 'data',
    level: 'Major',
    stack: ['Python', 'yfinance', 'TensorFlow', 'Streamlit'],
    summary:
      'Technical indicators, an LSTM forecast and a simple portfolio tracker for NSE stocks. For learning, not trading advice.',
    features: [
      'Historical data for NSE stocks',
      'Moving averages, RSI and MACD',
      'LSTM forecast compared with a baseline',
      'Portfolio tracker',
    ],
    suits: ENGG,
  },
  {
    title: 'Restaurant Data Analysis',
    area: 'data',
    level: 'Mini',
    stack: ['Python', 'pandas', 'Tableau'],
    summary:
      'Patterns in ratings, cost and cuisine across cities, with a simple restaurant recommender at the end.',
    features: [
      'Cleaning of restaurant listings',
      'Rating and cost patterns by city',
      'Tableau dashboard',
      'Recommender by cuisine and budget',
    ],
    suits: MINI,
  },
  {
    title: 'Electricity Consumption Forecasting',
    area: 'data',
    level: 'Mini',
    stack: ['Python', 'Prophet', 'Streamlit'],
    summary:
      'Forecasts power use for a campus or a home, finds the peak hours, and suggests where to save.',
    features: [
      'Hourly and daily forecasts',
      'Peak-hour detection',
      'Bill estimate for the month',
      'Saving suggestions',
    ],
    suits: MINI,
  },
  {
    title: 'YouTube Channel Analytics',
    area: 'data',
    level: 'Mini',
    stack: ['Python', 'YouTube Data API', 'Streamlit'],
    summary:
      'Pulls a channel\'s video stats, shows what is working, and reads the mood of the comments.',
    features: [
      'Video stats from the YouTube Data API',
      'Views and engagement trends',
      'Comment sentiment',
      'Best upload day and time',
    ],
    suits: MINI,
  },

  // Cybersecurity
  {
    title: 'Phishing URL Detection with Browser Extension',
    area: 'security',
    level: 'Major',
    stack: ['Python', 'scikit-learn', 'Flask', 'Chrome extension'],
    summary:
      'A model that judges links from their structure and domain details, and a Chrome extension that warns before you open a bad one.',
    features: [
      'URL features such as length, symbols and domain age',
      'Classifier trained on public phishing lists',
      'Chrome extension with a warning page',
      'Report button for false alarms',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Encrypted Password Manager',
    area: 'security',
    level: 'Mini',
    stack: ['Python', 'PyQt', 'cryptography'],
    summary:
      'A desktop vault locked by one master password, with a password generator and a check against known data breaches.',
    features: [
      'AES-256 encrypted vault',
      'Master key derived with Argon2',
      'Password generator',
      'Breach check that never sends your password',
    ],
    suits: MINI,
  },
  {
    title: 'Network Intrusion Detection System',
    area: 'security',
    level: 'Major',
    stack: ['Python', 'Scapy', 'scikit-learn', 'Streamlit'],
    summary:
      'Detects attacks in network traffic with a model trained on a standard dataset, then runs on live packets.',
    features: [
      'Training on CIC-IDS or NSL-KDD',
      'Live packet capture with Scapy',
      'Attack type classification',
      'Alert dashboard',
    ],
    suits: ENGG,
  },
  {
    title: 'Image Steganography Tool',
    area: 'security',
    level: 'Mini',
    stack: ['Python', 'Pillow', 'cryptography', 'Tkinter'],
    summary:
      'Hides a message or a file inside an image, encrypted with a password, with no visible change to the picture.',
    features: [
      'LSB encoding for text and files',
      'Password-based encryption before hiding',
      'Capacity check per image',
      'Simple desktop interface',
    ],
    suits: MINI,
  },
  {
    title: 'Secure File Sharing with Expiring Links',
    area: 'security',
    level: 'Major',
    stack: ['Node.js', 'Web Crypto API', 'MongoDB', 'React'],
    summary:
      'Files are encrypted in the browser before upload. Links can expire after a time or after one download.',
    features: [
      'End-to-end encryption in the browser',
      'One-time and time-limited links',
      'Download audit log',
      'Optional password on each link',
    ],
    suits: ENGG,
  },
  {
    title: 'Two-Factor Authentication System',
    area: 'security',
    level: 'Mini',
    stack: ['Django', 'pyotp', 'PostgreSQL'],
    summary:
      'Login with an authenticator app code or email OTP, plus alerts when someone signs in from a new device.',
    features: [
      'TOTP codes that work with Google Authenticator',
      'Email OTP fallback',
      'New-device login alerts',
      'Backup codes',
    ],
    suits: MINI,
  },
  {
    title: 'Android App Permission Risk Analyser',
    area: 'security',
    level: 'Major',
    stack: ['Python', 'Androguard', 'scikit-learn'],
    summary:
      'Unpacks an APK, reads its permissions and API calls, and rates how risky the app is.',
    features: [
      'APK unpacking and permission extraction',
      'Risky API call detection',
      'ML risk rating',
      'Report per app',
    ],
    suits: ENGG,
  },
  {
    title: 'Honeypot with Attack Dashboard',
    area: 'security',
    level: 'Major',
    stack: ['Python', 'Cowrie', 'Docker', 'Grafana'],
    summary:
      'A decoy server that records attackers\' login attempts and commands, shown on a dashboard with a world map.',
    features: [
      'SSH honeypot in a Docker container',
      'Logs of attempts and commands',
      'Attack map and top passwords tried',
      'Daily summary',
    ],
    suits: ENGG,
  },

  // Blockchain
  {
    title: 'Blockchain E-Voting System',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'Hardhat', 'React', 'ethers.js', 'MetaMask'],
    summary:
      'One vote per verified voter, counted on a blockchain so nobody can change the tally, not even the admin.',
    features: [
      'Voter registration and verification',
      'One vote per wallet, enforced by the contract',
      'Live, public tally',
      'Runs on a free test network',
    ],
    suits: UG_PG,
    featured: true,
  },
  {
    title: 'Certificate Verification on Blockchain',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'IPFS', 'React'],
    summary:
      'The college issues certificates with a fingerprint stored on chain. Anyone can scan the QR and check it is genuine.',
    features: [
      'Certificate issue by the college',
      'Hash stored on chain, file on IPFS',
      'QR verification page',
      'Revocation for wrongly issued certificates',
    ],
    suits: ENGG,
  },
  {
    title: 'Land Records Registry',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'Hardhat', 'React'],
    summary:
      'Property ownership and transfers recorded on chain, with officer approval at each step and the full history visible.',
    features: [
      'Property registration',
      'Transfer requests with officer approval',
      'Ownership history',
      'Search by survey number',
    ],
    suits: ENGG,
  },
  {
    title: 'Farm-to-Fork Supply Chain Tracking',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'Node.js', 'React'],
    summary:
      'Tracks a batch of produce from the farmer to the shop. Customers scan a QR to see where it came from.',
    features: [
      'Batch creation by the farmer',
      'Hand-offs recorded by each party',
      'QR history page for customers',
      'Role-based access',
    ],
    suits: ENGG,
  },
  {
    title: 'Milestone-based Crowdfunding',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'Next.js', 'ethers.js'],
    summary:
      'Money is released to the project only when backers vote that a milestone is done.',
    features: [
      'Campaigns with milestones',
      'Contributions held by the contract',
      'Backer voting on each release',
      'Refunds if a campaign fails',
    ],
    suits: ENGG,
  },
  {
    title: 'Patient-controlled Medical Records',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity', 'IPFS', 'React'],
    summary:
      'Patients decide which doctor can see which record. Files are encrypted, and every access is logged on chain.',
    features: [
      'Encrypted records stored on IPFS',
      'Patient grants and revokes access',
      'Access log on chain',
      'Doctor and patient views',
    ],
    suits: ENGG,
  },
  {
    title: 'NFT Event Ticketing',
    area: 'blockchain',
    level: 'Major',
    stack: ['Solidity (ERC-721)', 'Hardhat', 'React'],
    summary:
      'Tickets as NFTs, so fakes and black-market resale are easy to stop. Checked in with a QR at the gate.',
    features: [
      'Ticket minting per event',
      'Resale price cap in the contract',
      'QR check-in',
      'Organiser dashboard',
    ],
    suits: ENGG,
  },
  {
    title: 'Blockchain from Scratch in Python',
    area: 'blockchain',
    level: 'Mini',
    stack: ['Python', 'Flask'],
    summary:
      'Build a small working blockchain yourself: blocks, proof of work, wallets and several nodes that agree on one chain.',
    features: [
      'Blocks, hashing and proof of work',
      'Signed transactions and wallets',
      'Several nodes with a consensus rule',
      'Web view of the chain',
    ],
    suits: MINI,
  },

  // Cloud & DevOps
  {
    title: 'CI/CD Pipeline for a Web App',
    area: 'cloud',
    level: 'Mini',
    stack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx'],
    summary:
      'Every push is tested, built into a Docker image and deployed automatically, with one-click rollback.',
    features: [
      'Automated tests on every push',
      'Docker image build and registry push',
      'Deploy to EC2 behind Nginx',
      'Rollback to the previous version',
    ],
    suits: MINI,
  },
  {
    title: 'Serverless File Sharing on AWS',
    area: 'cloud',
    level: 'Major',
    stack: ['AWS Lambda', 'S3', 'API Gateway', 'Cognito', 'React'],
    summary:
      'A file sharing app with no server to manage. Uploads go straight to S3, and links expire on their own.',
    features: [
      'Sign-up and login with Cognito',
      'Direct uploads with presigned URLs',
      'Expiring share links',
      'Runs inside the AWS free tier',
    ],
    suits: ENGG,
  },
  {
    title: 'Microservices E-commerce on Kubernetes',
    area: 'cloud',
    level: 'Major',
    stack: ['Docker', 'Kubernetes', 'Node.js', 'Prometheus', 'Grafana'],
    summary:
      'A shop split into user, product, order and payment services, deployed on Kubernetes with monitoring.',
    features: [
      'Four services, each in its own container',
      'API gateway in front',
      'Deployed on a local Kubernetes cluster',
      'Prometheus metrics and Grafana dashboards',
    ],
    suits: ENGG,
  },
  {
    title: 'Cloud Cost and Idle Resource Monitor',
    area: 'cloud',
    level: 'Major',
    stack: ['Python', 'boto3', 'Grafana'],
    summary:
      'Watches an AWS account\'s spending, alerts before a budget is crossed, and finds resources nobody is using.',
    features: [
      'Daily cost by service',
      'Budget alerts by email',
      'Idle and oversized resource finder',
      'Grafana dashboard',
    ],
    suits: ENGG,
  },
  {
    title: 'Infrastructure as Code with Terraform',
    area: 'cloud',
    level: 'Mini',
    stack: ['Terraform', 'AWS', 'GitHub Actions'],
    summary:
      'A full app environment on AWS (network, servers, database) created and destroyed with one command.',
    features: [
      'VPC, EC2 and RDS defined as code',
      'Separate dev and prod environments',
      'Plan and apply from GitHub Actions',
      'Architecture diagram in the report',
    ],
    suits: MINI,
  },
  {
    title: 'Scalable Real-time Chat App',
    area: 'cloud',
    level: 'Major',
    stack: ['Node.js', 'Socket.IO', 'Redis', 'Docker'],
    summary:
      'Group and one-to-one chat that keeps working when you run several server copies, with read receipts.',
    features: [
      'Rooms and direct messages',
      'Typing indicators and read receipts',
      'Redis adapter to run several servers',
      'Load test results in the report',
    ],
    suits: UG_PG,
  },
  {
    title: 'Log Monitoring and Alerting Stack',
    area: 'cloud',
    level: 'Major',
    stack: ['Elasticsearch', 'Fluent Bit', 'Kibana', 'Docker'],
    summary:
      'Collects logs from several apps into one place, makes them searchable, and alerts when errors spike.',
    features: [
      'Log shipping with Fluent Bit',
      'Search and dashboards in Kibana',
      'Error spike alerts',
      'Everything runs with Docker Compose',
    ],
    suits: ENGG,
  },
  {
    title: 'Self-hosted Personal Cloud Storage',
    area: 'cloud',
    level: 'Major',
    stack: ['Node.js', 'MinIO', 'React', 'Docker'],
    summary:
      'Your own Google Drive on a spare laptop or a small cloud server, with folders, sharing and storage limits.',
    features: [
      'Upload, folders and previews',
      'Share links with permissions',
      'Storage quota per user',
      'Runs on a Raspberry Pi or a VM',
    ],
    suits: ENGG,
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\(([^)]*)\)/g, '$1')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const projects: Project[] = raw.map((p, i) => ({ ...p, id: i + 1, slug: slugify(p.title) }));

export const no = (id: number) => String(id).padStart(3, '0');

export const areaCount = (key: AreaKey) => projects.filter((p) => p.area === key).length;
