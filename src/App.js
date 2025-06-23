import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickQuote from './components/QuickQuote';
import TourPackages from './components/TourPackages';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import BlogTips from './components/BlogTips';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AnimatedCounters from './components/AnimatedCounters';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ChatBotWindow, ChatBotButton } from './components/ChatBot';
import TaxiCards from './components/TaxiCards';
import TaxiBookingPage from './components/TaxiBookingPage';
import MapSection from './components/Map';
import InquiryForm from './components/InquiryForm';


// Sample real Rajasthan data
const destinations = [
  {
    name: 'Jaipur',
    image: './amber-fort-jaipur-rajasthan-tri-iter-day1.jpg',
    description: 'The Pink City, famous for Amber Fort, City Palace, Hawa Mahal, and vibrant bazaars.'
  },
  {
    name: 'Jodhpur',
    image: './1603371052_mehrangarh_fort_1.avif',
    description: 'The Blue City, home to Mehrangarh Fort and blue-painted houses.'
  },
  {
    name: 'Udaipur',
    image: 'https://images.pexels.com/photos/31173940/pexels-photo-31173940.jpeg',
    description: 'The City of Lakes, known for Lake Pichola and City Palace.'
  },
  {
    name: 'Jaisalmer',
    image: './Jaisalmer-Travel-Guide-2.jpg',
    description: 'The Golden City, famous for its fort and desert safaris.'
  },
  {
    name: 'Pushkar',
    image: 'https://images.pexels.com/photos/16738847/pexels-photo-16738847.jpeg',
    description: 'Holy city with the famous Brahma Temple and Pushkar Lake.'
  },
  {
    name: 'Mount Abu',
    image: './Nakki Lake.jpg',
    description: 'The only hill station in Rajasthan, famous for Dilwara Temples and Nakki Lake.'
  },
  {
    name: 'Ranthambore',
    image: './Ranthambore_Fort_result-1657267672693.webp',
    description: 'Famous tiger reserve and wildlife sanctuary with historic Ranthambore Fort.'
  },
  {
    name: 'Bikaner',
    image: 'https://images.pexels.com/photos/15828318/pexels-photo-15828318.jpeg',
    description: 'The Desert City, known for Junagarh Fort and camel breeding farm.'
  },
  {
    name: 'Chittorgarh',
    image: './1471703149_chittorgarh.jpg',
    description: 'Historic city with the largest fort in India and tales of Rajput valor.'
  },
 
  {
    name: 'Ajmer',
    image: './Places-to-visit-in-Ajmer-Cover-Photo-840x425.jpg',
    description: 'Sacred city with the famous Dargah Sharif and Ana Sagar Lake.'
  },
  
  {
    name: 'Alwar',
    image: './301.jpg',
    description: 'Gateway to Rajasthan, famous for Bala Quila Fort and Sariska Tiger Reserve.'
  },
 
  {
    name: 'Sikar',
    image: './WhatsApp Image 2025-06-21 at 13.03.38_6883d163.jpg',
    description: 'Temple of a Khatu Shyam Ji,Khatu Shyam Ji is a renowned pilgrimage site in Rajasthan, famous for the Khatu Shyam Temple dedicated to Lord Krishna manifestation as Shyam Baba.'
  },
  
];

const packages = [
  {
    name: 'Royal Rajasthan 10-Day Tour',
    price: '₹29,999',
    highlights: [
      'Jaipur, Jodhpur, Udaipur, Jaisalmer, Pushkar',
      'Luxury hotels & heritage stays',
      'Desert safari & camel ride',
      'Cultural shows & folk music',
      'All transfers & sightseeing'
    ],
    itinerary: [
      'Day 1: Arrival in Jaipur, City Palace & Hawa Mahal',
      'Day 2: Amber Fort, local markets',
      'Day 3: Jaipur to Jodhpur, Mehrangarh Fort',
      'Day 4: Jaswant Thada, blue city walk',
      'Day 5: Jodhpur to Udaipur, Lake Pichola',
      'Day 6: City Palace, Jag Mandir',
      'Day 7: Udaipur to Jaisalmer, Sam Sand Dunes',
      'Day 8: Jaisalmer Fort, desert safari',
      'Day 9: Jaisalmer to Pushkar, Brahma Temple',
      'Day 10: Pushkar Lake, departure'
    ],
    image: 'https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg',
  },
  {
    name: 'Desert Adventure 5-Day',
    price: '₹15,999',
    highlights: [
      'Jodhpur, Jaisalmer',
      'Desert camping',
      'Camel & Jeep safari',
      'Folk dance night',
      'All meals included'
    ],
    itinerary: [
      'Day 1: Jodhpur arrival, Mehrangarh Fort',
      'Day 2: Jodhpur to Jaisalmer, Sam Dunes',
      'Day 3: Desert safari, camping',
      'Day 4: Jaisalmer Fort, local markets',
      'Day 5: Departure'
    ],
    image: 'https://images.pexels.com/photos/6473834/pexels-photo-6473834.jpeg',
  },
  {
    name: 'Jaipur & Pushkar Weekend Getaway',
    price: '₹9,999',
    highlights: [
      'Jaipur sightseeing',
      'Pushkar Lake & Brahma Temple',
      'Camel ride',
      'Local markets',
      'All transfers included'
    ],
    itinerary: [
      'Day 1: Arrival in Jaipur, City Palace, Hawa Mahal',
      'Day 2: Jaipur to Pushkar, Brahma Temple, Pushkar Lake',
      'Day 3: Return to Jaipur, shopping, departure'
    ],
    image: 'https://images.pexels.com/photos/16738847/pexels-photo-16738847.jpeg',
  },
  {
    name: 'Udaipur & Mount Abu Retreat',
    price: '₹14,499',
    highlights: [
      'Udaipur lakes & palaces',
      'Mount Abu hill station',
      'Dilwara Temples',
      'Boating & sunset points',
      'All meals included'
    ],
    itinerary: [
      'Day 1: Arrival in Udaipur, Lake Pichola, City Palace',
      'Day 2: Udaipur to Mount Abu, Nakki Lake, sunset point',
      'Day 3: Dilwara Temples, return to Udaipur, departure'
    ],
    image: 'https://images.pexels.com/photos/31173940/pexels-photo-31173940.jpeg',
  },
  {
    name: 'Wildlife & Heritage 7-Day Special',
    price: '₹22,999',
    highlights: [
      'Ranthambore Tiger Safari',
      'Jaipur Heritage Tour',
      'Bharatpur Bird Sanctuary',
      'Luxury jungle resort',
      'Expert wildlife guides'
    ],
    itinerary: [
      'Day 1: Arrival in Jaipur, City Palace & Hawa Mahal',
      'Day 2: Jaipur to Ranthambore, Evening Safari',
      'Day 3: Morning & Evening Safari in Ranthambore',
      'Day 4: Ranthambore to Bharatpur, Bird Watching',
      'Day 5: Bharatpur to Jaipur, Amber Fort',
      'Day 6: Jaipur local markets & shopping',
      'Day 7: Departure from Jaipur'
    ],
    image: 'https://images.pexels.com/photos/11430351/pexels-photo-11430351.jpeg',
  },
  {
    name: 'Khatu Shyam Ji and Salasar Dham',
    price: '₹18,999',
    highlights: [
      'Khatu Shyam Ji Temple Darshan',
      'Salasar Balaji Temple Visit',
      'Religious Heritage Tour',
      'Traditional Rajasthani Bhog',
      'Spiritual Guide Service'
    ],
    itinerary: [
      'Day 1: Arrival in Jaipur, Transfer to Khatu Shyam Ji',
      'Day 2: Morning Darshan at Khatu Shyam Ji Temple',
      'Day 3: Travel to Salasar Balaji, Evening Aarti',
      'Day 4: Morning Darshan at Salasar Balaji Temple',
      'Day 5: Return to Jaipur, Departure'
    ],
    image: './salasar-balaji-temple.jpg',
  },
];

// Blog tips data (copied from BlogTips.js)
const blogTips = [
  {
    title: "Best Time to Visit Rajasthan",
    image: "https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg",
    desc: "Discover the ideal months for exploring Rajasthan's forts, palaces, and deserts."
  },
  {
    title: "Packing Tips for Desert Safari",
    image: "https://images.pexels.com/photos/9491251/pexels-photo-9491251.jpeg",
    desc: "What to pack for a comfortable and safe desert adventure in Rajasthan."
  },
  {
    title: "Top Foods to Try in Rajasthan",
    image: "https://kannanskitchen.com/wp-content/uploads/2021/07/DSC_8173-5.jpg",
    desc: "Don't miss these delicious Rajasthani dishes on your next trip!"
  },
];

const testimonials = [
  {
    name: 'Amit Jain',
    text: 'Our Rajasthan trip was magical! The guides were knowledgeable and the itinerary was perfect. Highly recommended!',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    city: 'Delhi'
  },
  {
    name: 'Sonal Mehta',
    text: 'Loved the desert safari and the cultural shows. The team made our family feel special throughout.',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    city: 'Mumbai'
  },
  {
    name: 'Rahul Verma',
    text: 'Best travel experience ever! The vehicles were comfortable and the hotels were top-notch.',
    photo: 'https://randomuser.me/api/portraits/men/23.jpg',
    city: 'Bangalore'
  },
  {
    name: 'Priya Sharma',
    text: 'The custom itinerary was perfect for our family. We enjoyed every moment in Rajasthan!',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    city: 'Chandigarh'
  },
  {
    name: 'Vikram Singh',
    text: 'Excellent service and very professional staff. Will book again for sure!',
    photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    city: 'Jaipur'
  },
  {
    name: 'Meena Gupta',
    text: 'The desert camp was a unique experience. Thank you for making our trip memorable!',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    city: 'Ahmedabad'
  },
  {
    name: 'Rohit Saini',
    text: 'Prompt responses and great value for money. Highly recommended for Rajasthan tours.',
    photo: 'https://randomuser.me/api/portraits/men/56.jpg',
    city: 'Gurgaon'
  },
  {
    name: 'Anjali Desai',
    text: 'We loved the folk music night and the local food. The team took care of every detail.',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    city: 'Pune'
  },
];

// Dummy review data for packages
const packageReviews = {
  'Royal Rajasthan 10-Day Tour': [
    { name: 'Amit Jain', rating: 5, text: 'Amazing experience! Highly recommended.' },
    { name: 'Sonal Mehta', rating: 4, text: 'Great itinerary and service.' },
  ],
  'Desert Adventure 5-Day': [
    { name: 'Rahul Verma', rating: 5, text: 'Loved the desert safari!' },
  ],
};

// Add more taxi/cab entries for greater quantity
const taxis = [
  {
    name: 'Sedan Cab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzstP3IydhbkFYugLhJYzhtpfdt1jDNsvkBg&s',
    seats: 4,
    charges: '₹12/km',
    summary: 'Comfortable sedan cabs for city tours, airport transfers, and intercity travel. Ideal for small families or business trips.'
  },
  {
    name: 'SUV Cab',
    image: 'https://5.imimg.com/data5/QO/CY/CB/SELLER-80729603/suv-cab.png',
    seats: 6,
    charges: '₹16/km',
    summary: 'Spacious SUVs for family trips and group travel across Rajasthan. Perfect for rough terrains and long journeys.'
  },
 
  {
    name: 'Mini Bus',
    image: 'https://www.jcrcab.com/wp-content/uploads/2020/07/Mini_bus.png',
    seats: 20,
    charges: '₹30/km',
    summary: 'Mini buses for large groups, events, and tours.'
  },
  {
    name: 'Swift',
    image: 'https://5.imimg.com/data5/WJ/XR/TX/SELLER-52357268/cab-hatchback-service.png',
    seats: 4,
    charges: '₹10/km',
    summary: 'Economical hatchbacks for city rides and short trips.'
  },
  {
    name: 'Innova Crysta',
    image: 'https://www.vrundacab.in/uploads/1722660347_fd7add9c0d06e172cf6a.png',
    seats: 7,
    charges: '₹20/km',
    summary: 'Spacious and comfortable Innova Crysta for family and group travel.'
  },
  {
    name: 'Traveller 17 Seater',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/302167383/HB/WA/QD/187965283/17-seater-tempo-traveller-rental-500x500.png',
    seats: 17,
    charges: '₹28/km',
    summary: 'Large tempo traveller for big groups and tours.'
  },
];

// Add extra info for destinations
const destinationDetails = {
  Jaipur: {
    history: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is known as the Pink City and is famous for its palaces, forts, and vibrant bazaars.',
    famous: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal',
    tourists: 'Over 2 million tourists visit annually',
    timing: 'Best time: October to March',
    distance: 'Jaipur is 259 km from Delhi, 232 km from Agra',
    highlights: 'Shopping for jewelry, blue pottery, camel rides, Rajasthani cuisine',
  },
  Jodhpur: {
    history: 'Founded in 1459 by Rao Jodha, Jodhpur is called the Blue City and is famous for its blue-painted houses and Mehrangarh Fort.',
    famous: 'Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace',
    tourists: 'Over 1.2 million tourists visit annually',
    timing: 'Best time: October to March',
    distance: 'Jodhpur is 340 km from Jaipur',
    highlights: 'Marwar Festival, shopping for handicrafts, local sweets',
  },
  Udaipur: {
    history: 'Founded in 1559 by Maharana Udai Singh II, Udaipur is known as the City of Lakes and is famous for its palaces and lakes.',
    famous: 'City Palace, Lake Pichola, Jag Mandir, Fateh Sagar Lake',
    tourists: 'Over 1.5 million tourists visit annually',
    timing: 'Best time: September to March',
    distance: 'Udaipur is 405 km from Jaipur',
    highlights: 'Boat rides, shopping for miniature paintings, Mewar Festival',
  },
  Jaisalmer: {
    history: 'Founded in 1156 by Rawal Jaisal, Jaisalmer is called the Golden City and is famous for its yellow sandstone architecture and desert safaris.',
    famous: 'Jaisalmer Fort, Sam Sand Dunes, Patwon Ki Haveli',
    tourists: 'Over 800,000 tourists visit annually',
    timing: 'Best time: November to March',
    distance: 'Jaisalmer is 645 km from Jaipur',
    highlights: 'Desert Festival, camel safaris, folk music and dance',
  },
  Pushkar: {
    history: 'Pushkar is one of the oldest cities in India, famous for its Brahma Temple and annual Camel Fair.',
    famous: 'Brahma Temple, Pushkar Lake, Camel Fair',
    tourists: 'Over 400,000 tourists visit annually',
    timing: 'Best time: October to March',
    distance: 'Pushkar is 145 km from Jaipur',
    highlights: 'Camel Fair, hot air balloon rides, local markets',
  },
  'Sariska Reserve Park': {
    history: 'Sariska is a renowned tiger reserve and wildlife sanctuary in the Aravalli hills.',
    famous: 'Tiger Reserve, Sariska Palace, Pandupol Temple',
    tourists: 'Over 200,000 tourists visit annually',
    timing: 'Best time: October to June',
    distance: 'Sariska is 133 km from Jaipur',
    highlights: 'Jeep safaris, wildlife spotting, bird watching',
  },
  'Hawa Mahal': {
    history: 'Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is an iconic palace in Jaipur.',
    famous: 'Hawa Mahal',
    tourists: 'Over 500,000 tourists visit annually',
    timing: 'Best time: October to March',
    distance: 'Located in Jaipur city center',
    highlights: 'Photography, architecture, local street food',
  },
  'Jal Mahal': {
    history: 'Jal Mahal is a beautiful palace located in the middle of the Man Sagar Lake in Jaipur.',
    famous: 'Jal Mahal',
    tourists: 'Over 300,000 tourists visit annually',
    timing: 'Best time: October to March',
    distance: 'Located in Jaipur',
    highlights: 'Photography, boat rides, bird watching',
  },
  Bhangarh: {
    history: 'Bhangarh Fort is famous for its historic ruins and legends, considered one of the most haunted places in India.',
    famous: 'Bhangarh Fort',
    tourists: 'Over 100,000 tourists visit annually',
    timing: 'Best time: October to February',
    distance: 'Bhangarh is 83 km from Jaipur',
    highlights: 'Haunted fort tours, photography, local legends',
  },
};

// Example data for duration, budget, and luxury packages
const durationPackages = [
  { title: '02 - 05 Days Rajasthan Tours', image: 'https://www.rajasthantourdriver.com/wp-content/uploads/2020/03/23d-jodhpur.jpg', duration: '02 - 05 Days' },
  { title: '06 - 10 Days Rajasthan Tours', image: 'https://trippyholidays.com/wp-content/uploads/2018/01/road-trips-in-Rajasthan-1280x720-1.jpg', duration: '06 - 10 Days' },
  { title: '11 - 15 Days Rajasthan Tours', image: 'https://www.holidify.com/images/cmsuploads/compressed/attr_2303_20190521190916.jpg', duration: '11 - 15 Days' },
  { title: '16 - 25 Days Rajasthan Tours', image: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/09/Dinner-on-the-Dunes-in-Jaisalmer-Rajasthan.jpg?fit=1024%2C683&ssl=1', duration: '16 - 25 Days' },
];
const budgetPackages = [
  { title: 'Jaipur-Ajmer-Pushkar-Jodhpur Tour', image: 'https://shiningstarholidays.com/storage/2022/09/25/ajmer-pushkar-1664111718.jpg', duration: '03 Night / 04 Days' },
  { title: 'Desert Tour Jaisalmer (Jaisalmer City Tours)', image: 'https://rajputanacabs.b-cdn.net/wp-content/uploads/2023/06/winds-desert-camp-jaisalmer-rj.webp', duration: '02 Night / 03 Days' },
  { title: 'Pink City Tour (Jaipur City Tours)', image: 'https://cdn1.tripoto.com/media/filter/tst/img/2121120/Image/1662358281_tripoto_amer_night.jpg', duration: '02 Night / 03 Days' },
];
const luxuryPackages = [
  { title: 'Jaisalmer Udaipur Luxury Tours', image: 'https://media1.thrillophilia.com/filestore/b5zergeju3uc8nwoj21yta0t4jos_1464248728_Oberoi_Udaivilas1-1.jpg?w=400&dpr=2', duration: '08 Night / 09 Days', price: '₹ On Request', covered: 'Jaisalmer-Jodhpur-Mount Abu-Udaipur-Jaipur' },
  { title: 'Royal Luxury Rajasthan Tour', image: 'https://www.amigoindiatours.com/TourPackage/royal-rajasthan-tour.jpg', duration: '10 Night / 11 Days', price: '₹ On Request', covered: 'Mount Abu-Udaipur-Jodhpur-Jaisalmer-Bikaner-Mandawa-Jaipur' },
  { title: 'Jaipur Ranthambhore Luxury Tours', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyfCYwgGc7ruAwbPSa7t3ILM7MRfMR6rHDw&s', duration: '11 Night / 12 Days', price: '₹ On Request', covered: 'Jaipur-Ranthambhore-Bundi-Chittorgarh-Udaipur-Mount Abu' },
];

// Static Rajasthan city distances (in km)
const cityDistances = {
  Jaipur: { 
    Jodhpur: 340, Udaipur: 405, Jaisalmer: 645, Pushkar: 145, Ajmer: 135, 
    'Mount Abu': 480, Ranthambore: 180, Bikaner: 330, Chittorgarh: 310, 
    Alwar: 150, Sikar: 115, 'Sri Ganganagar': 420, Banswara: 520, 
    Rajsamand: 380, Bhilwara: 250, Tonk: 95, Dausa: 55, Karauli: 180, 
    Dholpur: 250, Baran: 320, 'Khatu Shyam Ji': 80 
  },
  Jodhpur: { 
    Jaipur: 340, Udaipur: 260, Jaisalmer: 285, Pushkar: 211, Ajmer: 200,
    'Mount Abu': 320, Ranthambore: 520, Bikaner: 240, Chittorgarh: 400,
    Alwar: 490, Sikar: 225, 'Sri Ganganagar': 280, Banswara: 420,
    Rajsamand: 320, Bhilwara: 200, Tonk: 435, Dausa: 395, Karauli: 520,
    Dholpur: 590, Baran: 620, 'Khatu Shyam Ji': 420
  },
  Udaipur: { 
    Jaipur: 405, Jodhpur: 260, Jaisalmer: 495, Pushkar: 277, Ajmer: 265,
    'Mount Abu': 160, Ranthambore: 400, Bikaner: 500, Chittorgarh: 110,
    Alwar: 565, Sikar: 485, 'Sri Ganganagar': 580, Banswara: 160,
    Rajsamand: 60, Bhilwara: 160, Tonk: 310, Dausa: 350, Karauli: 290,
    Dholpur: 360, Baran: 280, 'Khatu Shyam Ji': 485
  },
  Jaisalmer: { 
    Jaipur: 645, Jodhpur: 285, Udaipur: 495, Pushkar: 500, Ajmer: 510,
    'Mount Abu': 655, Ranthambore: 765, Bikaner: 330, Chittorgarh: 605,
    Alwar: 795, Sikar: 570, 'Sri Ganganagar': 315, Banswara: 655,
    Rajsamand: 555, Bhilwara: 435, Tonk: 750, Dausa: 700, Karauli: 825,
    Dholpur: 895, Baran: 925, 'Khatu Shyam Ji': 725
  },
  Pushkar: { 
    Jaipur: 145, Jodhpur: 211, Udaipur: 277, Jaisalmer: 500, Ajmer: 15,
    'Mount Abu': 295, Ranthambore: 325, Bikaner: 475, Chittorgarh: 387,
    Alwar: 280, Sikar: 260, 'Sri Ganganagar': 435, Banswara: 437,
    Rajsamand: 317, Bhilwara: 235, Tonk: 250, Dausa: 200, Karauli: 325,
    Dholpur: 395, Baran: 465, 'Khatu Shyam Ji': 225
  },
  Ajmer: { 
    Jaipur: 135, Jodhpur: 200, Udaipur: 265, Jaisalmer: 510, Pushkar: 15,
    'Mount Abu': 280, Ranthambore: 310, Bikaner: 460, Chittorgarh: 375,
    Alwar: 265, Sikar: 245, 'Sri Ganganagar': 420, Banswara: 425,
    Rajsamand: 305, Bhilwara: 220, Tonk: 235, Dausa: 185, Karauli: 310,
    Dholpur: 380, Baran: 450, 'Khatu Shyam Ji': 215
  },
  'Mount Abu': {
    Jaipur: 480, Jodhpur: 320, Udaipur: 160, Jaisalmer: 655, Pushkar: 295, Ajmer: 280,
    Ranthambore: 560, Bikaner: 660, Chittorgarh: 270, Alwar: 630, Sikar: 565,
    'Sri Ganganagar': 740, Banswara: 320, Rajsamand: 220, Bhilwara: 320,
    Tonk: 470, Dausa: 425, Karauli: 450, Dholpur: 520, Baran: 440, 'Khatu Shyam Ji': 560
  },
  Ranthambore: {
    Jaipur: 180, Jodhpur: 520, Udaipur: 400, Jaisalmer: 765, Pushkar: 325, Ajmer: 310,
    'Mount Abu': 560, Bikaner: 510, Chittorgarh: 290, Alwar: 330, Sikar: 295,
    'Sri Ganganagar': 600, Banswara: 560, Rajsamand: 460, Bhilwara: 430,
    Tonk: 85, Dausa: 125, Karauli: 100, Dholpur: 70, Baran: 140, 'Khatu Shyam Ji': 260
  },
  Bikaner: {
    Jaipur: 330, Jodhpur: 240, Udaipur: 500, Jaisalmer: 330, Pushkar: 475, Ajmer: 460,
    'Mount Abu': 660, Ranthambore: 510, Chittorgarh: 610, Alwar: 480, Sikar: 215,
    'Sri Ganganagar': 90, Banswara: 660, Rajsamand: 560, Bhilwara: 440,
    Tonk: 425, Dausa: 385, Karauli: 510, Dholpur: 580, Baran: 610, 'Khatu Shyam Ji': 410
  },
  Chittorgarh: {
    Jaipur: 310, Jodhpur: 400, Udaipur: 110, Jaisalmer: 605, Pushkar: 387, Ajmer: 375,
    'Mount Abu': 270, Ranthambore: 290, Bikaner: 610, Alwar: 460, Sikar: 380,
    'Sri Ganganagar': 690, Banswara: 270, Rajsamand: 170, Bhilwara: 50,
    Tonk: 200, Dausa: 240, Karauli: 180, Dholpur: 250, Baran: 170, 'Khatu Shyam Ji': 390
  },
  Alwar: {
    Jaipur: 150, Jodhpur: 490, Udaipur: 565, Jaisalmer: 795, Pushkar: 280, Ajmer: 265,
    'Mount Abu': 630, Ranthambore: 330, Bikaner: 480, Chittorgarh: 460, Sikar: 265,
    'Sri Ganganagar': 570, Banswara: 725, Rajsamand: 515, Bhilwara: 400,
    Tonk: 55, Dausa: 95, Karauli: 30, Dholpur: 100, Baran: 170, 'Khatu Shyam Ji': 230
  },
  Sikar: {
    Jaipur: 115, Jodhpur: 225, Udaipur: 485, Jaisalmer: 570, Pushkar: 260, Ajmer: 245,
    'Mount Abu': 565, Ranthambore: 295, Bikaner: 215, Chittorgarh: 380, Alwar: 265,
    'Sri Ganganagar': 305, Banswara: 645, Rajsamand: 545, Bhilwara: 425,
    Tonk: 210, Dausa: 170, Karauli: 295, Dholpur: 365, Baran: 435, 'Khatu Shyam Ji': 195
  },
  'Sri Ganganagar': {
    Jaipur: 420, Jodhpur: 280, Udaipur: 580, Jaisalmer: 315, Pushkar: 435, Ajmer: 420,
    'Mount Abu': 740, Ranthambore: 600, Bikaner: 90, Chittorgarh: 690, Alwar: 570,
    Sikar: 305, Banswara: 740, Rajsamand: 640, Bhilwara: 520, Tonk: 515,
    Dausa: 475, Karauli: 600, Dholpur: 670, Baran: 700, 'Khatu Shyam Ji': 500
  },
  Banswara: {
    Jaipur: 520, Jodhpur: 420, Udaipur: 160, Jaisalmer: 655, Pushkar: 437, Ajmer: 425,
    'Mount Abu': 320, Ranthambore: 560, Bikaner: 660, Chittorgarh: 270, Alwar: 725,
    Sikar: 645, 'Sri Ganganagar': 740, Rajsamand: 220, Bhilwara: 320,
    Tonk: 470, Dausa: 465, Karauli: 450, Dholpur: 520, Baran: 440, 'Khatu Shyam Ji': 600
  },
  Rajsamand: {
    Jaipur: 380, Jodhpur: 320, Udaipur: 60, Jaisalmer: 555, Pushkar: 317, Ajmer: 305,
    'Mount Abu': 220, Ranthambore: 460, Bikaner: 560, Chittorgarh: 170, Alwar: 515,
    Sikar: 545, 'Sri Ganganagar': 640, Banswara: 220, Bhilwara: 100,
    Tonk: 250, Dausa: 290, Karauli: 230, Dholpur: 300, Baran: 220, 'Khatu Shyam Ji': 460
  },
  Bhilwara: {
    Jaipur: 250, Jodhpur: 200, Udaipur: 160, Jaisalmer: 435, Pushkar: 235, Ajmer: 220,
    'Mount Abu': 320, Ranthambore: 430, Bikaner: 440, Chittorgarh: 50, Alwar: 400,
    Sikar: 425, 'Sri Ganganagar': 520, Banswara: 320, Rajsamand: 100,
    Tonk: 150, Dausa: 190, Karauli: 130, Dholpur: 200, Baran: 120, 'Khatu Shyam Ji': 330
  },
  Tonk: {
    Jaipur: 95, Jodhpur: 435, Udaipur: 310, Jaisalmer: 750, Pushkar: 250, Ajmer: 235,
    'Mount Abu': 470, Ranthambore: 85, Bikaner: 425, Chittorgarh: 200, Alwar: 55,
    Sikar: 210, 'Sri Ganganagar': 515, Banswara: 470, Rajsamand: 250, Bhilwara: 150,
    Dausa: 40, Karauli: 85, Dholpur: 155, Baran: 225, 'Khatu Shyam Ji': 175
  },
  Dausa: {
    Jaipur: 55, Jodhpur: 395, Udaipur: 350, Jaisalmer: 700, Pushkar: 200, Ajmer: 185,
    'Mount Abu': 425, Ranthambore: 125, Bikaner: 385, Chittorgarh: 240, Alwar: 95,
    Sikar: 170, 'Sri Ganganagar': 475, Banswara: 465, Rajsamand: 290, Bhilwara: 190,
    Tonk: 40, Karauli: 125, Dholpur: 195, Baran: 265, 'Khatu Shyam Ji': 135
  },
  Karauli: {
    Jaipur: 180, Jodhpur: 520, Udaipur: 290, Jaisalmer: 825, Pushkar: 325, Ajmer: 310,
    'Mount Abu': 450, Ranthambore: 100, Bikaner: 510, Chittorgarh: 180, Alwar: 30,
    Sikar: 295, 'Sri Ganganagar': 600, Banswara: 450, Rajsamand: 230, Bhilwara: 130,
    Tonk: 85, Dausa: 125, Dholpur: 70, Baran: 140, 'Khatu Shyam Ji': 260
  },
  Dholpur: {
    Jaipur: 250, Jodhpur: 590, Udaipur: 360, Jaisalmer: 895, Pushkar: 395, Ajmer: 380,
    'Mount Abu': 520, Ranthambore: 70, Bikaner: 580, Chittorgarh: 250, Alwar: 100,
    Sikar: 365, 'Sri Ganganagar': 670, Banswara: 520, Rajsamand: 300, Bhilwara: 200,
    Tonk: 155, Dausa: 195, Karauli: 70, Baran: 70, 'Khatu Shyam Ji': 330
  },
  Baran: {
    Jaipur: 320, Jodhpur: 620, Udaipur: 280, Jaisalmer: 925, Pushkar: 465, Ajmer: 450,
    'Mount Abu': 440, Ranthambore: 140, Bikaner: 610, Chittorgarh: 170, Alwar: 170,
    Sikar: 435, 'Sri Ganganagar': 700, Banswara: 440, Rajsamand: 220, Bhilwara: 120,
    Tonk: 225, Dausa: 265, Karauli: 140, Dholpur: 70, 'Khatu Shyam Ji': 400
  },
  'Khatu Shyam Ji': {
    Jaipur: 80, Jodhpur: 420, Udaipur: 485, Jaisalmer: 725, Pushkar: 225, Ajmer: 215,
    'Mount Abu': 560, Ranthambore: 260, Bikaner: 410, Chittorgarh: 390, Alwar: 230,
    Sikar: 195, 'Sri Ganganagar': 500, Banswara: 600, Rajsamand: 460, Bhilwara: 330,
    Tonk: 175, Dausa: 135, Karauli: 260, Dholpur: 330, Baran: 400
  }
};
const allCities = Object.keys(cityDistances);

function PackageDetail({ id }) {
  let pkg = packages.find(p => p.name.replace(/\s+/g, '-').toLowerCase() === id);
  let type = 'package';
  if (!pkg) {
    pkg = durationPackages.find(p => p.title.replace(/\s+/g, '-').toLowerCase() === id);
    if (pkg) type = 'duration';
  }
  if (!pkg) {
    pkg = budgetPackages.find(p => p.title.replace(/\s+/g, '-').toLowerCase() === id);
    if (pkg) type = 'budget';
  }
  if (!pkg) {
    pkg = luxuryPackages.find(p => p.title.replace(/\s+/g, '-').toLowerCase() === id);
    if (pkg) type = 'luxury';
  }

  // If still not found, show not found
  if (!pkg) return <div className="container my-5"><h2>Package Not Found</h2></div>;

  // For duration, budget, luxury, show a details page (no hooks, no reviews)
  if (type !== 'package') {
    let details = (type === 'duration' ? tourDetailsTable[pkg.title] : type === 'budget' ? budgetDetailsTable[pkg.title] : luxuryDetailsTable[pkg.title]) || [];
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src={pkg.image} alt={pkg.title} className="img-fluid rounded shadow mb-3" style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
          </div>
          <div className="col-md-6">
            <h2>{pkg.title}</h2>
            {pkg.duration && <span className="badge bg-primary mb-2">{pkg.duration}</span>}
            {pkg.price && <span className="badge bg-success mb-2 ms-2">{pkg.price}</span>}
            {pkg.covered && <div className="mb-2"><strong>Destinations Covered:</strong> {pkg.covered}</div>}
            <div className="mb-3">
              <strong>About this package:</strong>
              <p className="small">Explore Rajasthan with our special package. Enjoy sightseeing, cultural experiences, and comfortable stays. Contact us for a custom itinerary!</p>
            </div>
          </div>
        </div>
        {details.length > 0 && (
          <>
            <hr />
            <h4>Sample Itinerary</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Tour Package / Code</th>
                    <th>Tour Itinerary</th>
                    <th>Tour Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.name} / {row.code}</td>
                      <td>{row.itinerary}</td>
                      <td>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    );
  }

  // For normal packages, use a separate component to use hooks
  return <NormalPackageDetail pkg={pkg} />;
}

function NormalPackageDetail({ pkg }) {
  const [reviews, setReviews] = useState(packageReviews[pkg?.name] || []);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleReviewChange = e => setNewReview({ ...newReview, [e.target.name]: e.target.value });
  const handleReviewSubmit = e => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 5, text: '' });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pkg.image} alt={pkg.name} className="img-fluid rounded shadow mb-3" style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
        </div>
        <div className="col-md-6">
          <h2>{pkg.name}</h2>
          <span className="badge bg-success mb-2">{pkg.price}</span>
          <ul className="list-unstyled mb-2">
            {pkg.highlights.map((h, i) => <li key={i}><i className="bi bi-check-circle-fill text-success me-2"></i>{h}</li>)}
          </ul>
          <div className="mb-2">
            <strong>Itinerary:</strong>
            <ol className="small mb-0">
              {pkg.itinerary.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </div>
          <div className="mb-3">
            <strong>History:</strong>
            <p className="small">This tour covers the most historic and culturally rich cities of Rajasthan, including Jaipur, Jodhpur, Udaipur, and Jaisalmer. Experience the royal palaces, ancient forts, and vibrant traditions that make Rajasthan unique.</p>
          </div>
        </div>
      </div>
      <hr />
      <h4>Ratings & Reviews</h4>
      <div className="mb-3">
        {reviews.length === 0 && <div className="text-muted">No reviews yet.</div>}
        {reviews.map((r, i) => (
          <div key={i} className="mb-2 p-2 border rounded bg-light">
            <strong>{r.name}</strong> {' '}
            {[...Array(Number(r.rating))].map((_, idx) => <i key={idx} className="bi bi-star-fill text-warning"></i>)}
            <div>{r.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleReviewSubmit} className="mb-4">
        <div className="row g-2 align-items-center">
          <div className="col-md-3">
            <input type="text" name="name" className="form-control" placeholder="Your Name" value={newReview.name} onChange={handleReviewChange} required />
          </div>
          <div className="col-md-2">
            <select name="rating" className="form-select" value={newReview.rating} onChange={handleReviewChange} required>
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
            </select>
          </div>
          <div className="col-md-5">
            <input type="text" name="text" className="form-control" placeholder="Your Review" value={newReview.text} onChange={handleReviewChange} required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">Add Review</button>
          </div>
        </div>
      </form>
    </div>
  );
}

// Add social media floating icons
function SocialMediaFloating() {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    function checkVisibility() {
      // Show floating icons only on the home page, and hide them when the hero section's slides are visible,
      // But DO NOT hide them when the footer is visible (aane do footer pe bhi)
      const hero = document.getElementById('hero-section');
      const icons = document.getElementById('social-media-floating');
      if (!icons) return;
      // Check if we are on the home page ("/")
      const isHome = window.location.pathname === '/';
      if (!isHome) {
        setShow(false);
        return;
      }
      // Hide if hero is visible in viewport (top < window.innerHeight && bottom > 0)
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const heroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
        if (heroVisible) {
          setShow(false);
          return;
        }
      }
      // Do NOT hide if footer is visible; allow icons to show over the footer
      setShow(true);
    }
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    setTimeout(checkVisibility, 100);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);
  return (
    <div id="social-media-floating" style={{ position: 'fixed', top: '40%', left: 10, zIndex: 3000, display: show ? 'flex' : 'none', flexDirection: 'column', gap: 10 }}>
      {show && (
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="btn btn-light shadow rounded-circle p-2 mb-1 d-flex align-items-center justify-content-center" style={{ color: '#4267B2', fontSize: 22, width: 44, height: 44 }}>
          <img src="./facebook-social-media-icon-3d_466778-4384.avif" alt="Facebook" style={{ borderRadius: 50, width: 60, height: 50, backgroundColor: 'white' }} />
        </a>
      )}
      <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="btn btn-light shadow rounded-circle p-2 mb-1 d-flex align-items-center justify-content-center" style={{ color: '#C13584', fontSize: 22, width: 44, height: 44 }}>
        <i className="bi bi-instagram" style={{ fontSize: 24 }}></i>
     <img src="./images.jpeg" alt="Instagram" style={{ borderRadius: 50, width: 46, height: 40, backgroundColor: 'white' }} /> </a>
      <a href="https://wa.me/8209427429" target="_blank" rel="noopener noreferrer" className="btn btn-light shadow rounded-circle p-2 mb-1 d-flex align-items-center justify-content-center" style={{ color: '#25D366', fontSize: 22, width: 44, height: 44 }}>
        <i className="bi bi-whatsapp" style={{ fontSize: 24 }}></i>
        <img src="./2496112.png" alt="WhatsApp" style={{ borderRadius: 50, width: 64, height: 42 , backgroundColor: 'white' }} />
      </a>
    </div>
  );
}

// About section content from screenshot
function AboutPage() {
  return (
    <section className="container my-5" id="about">
      <h2 className="mb-4 text-center">ABOUT <span style={{ color: '#ff6600', fontWeight: 'bold' }}>SHREE KARNI</span> TOURISM</h2>
      <div className="row align-items-center">
        <div className="col-md-7">
          <p><span style={{ color: '#ff6600', fontWeight: 'bold' }}>Shree Karni</span> Tourism is a land of scenic beauty and the home of mesmerizing architecture. Only a few lucky individuals get to have a glance at the beauty of this state, and <span style={{ color: '#ff6600', fontWeight: 'bold' }}>Shree Karni</span> Tourism is the best way to quench your wander thirst. Book an exciting Rajasthan tour package from Jaipur with the best Jaipur sightseeing experiences. Enjoy the best Jaipur sightseeing and explore the city's rich heritage!</p>
          <p><span style={{ color: '#ff6600', fontWeight: 'bold' }}>Shree Karni</span> Tourism is a well-known name in the tourist sector. We provide a variety of luxury and non-luxury tour packages at cheap and competitive prices, including our exclusive Jaipur Sightseeing Package. Below we list some of our best Rajasthan travel plans. These tour plans allow you to explore the state of Rajasthan with the best services possible. <span style={{ color: '#ff6600', fontWeight: 'bold' }}>Shree Karni</span> Tourism tour packages are in no way rigid. All the packages are quite flexible and can be customized on your command, as you want.</p>
          
          {/* About Me Vision Paragraph */}
          <div className="mt-4 p-3 bg-light rounded border-start border-4 border-warning">
            <h5 className="text-primary mb-3"><i className="bi bi-lightbulb-fill me-2"></i>Our Vision & Mission</h5>
            <p className="mb-2"><strong>About Me:</strong> As the founder of <span style={{ color: '#ff6600', fontWeight: 'bold' }}>Shree Karni</span> Tourism, my vision is to make Rajasthan's royal heritage accessible to every traveler while preserving its authentic culture and traditions. With over a decade of experience in the tourism industry, I believe that every journey should be more than just sightseeing – it should be a transformative experience that connects you with the soul of Rajasthan.</p>
            <p className="mb-0"><strong>Our Vision:</strong> To become the most trusted and preferred travel partner for exploring Rajasthan, offering personalized experiences that blend luxury, adventure, and cultural immersion. We strive to showcase the real essence of Rajasthan – from the majestic forts and palaces to the warm hospitality of its people, ensuring every traveler takes home memories that last a lifetime.</p>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img src={require('./components/19JUNERAJASTHANVIST232.jpg')} alt="About Rajasthan" className="img-fluid rounded" style={{ border: '3px solid #ff6600', maxHeight: 320 }} />
        </div>
      </div>
    </section>
  );
}

// Example tour details data for the table
const tourDetailsTable = {
  '02 - 05 Days Rajasthan Tours': [
    { code: '1115RVT1', name: '3 Nights 4 Days Top tourist destinations in Rajasthan', itinerary: 'Jaipur-Ajmer-Pushkar-Jodhpur', cost: 'On Request' },
    { code: '1115RVT2', name: '4 Nights 5 Days Rajasthan Travel Places', itinerary: 'Jaipur-Jodhpur-Udaipur', cost: 'On Request' },
  ],
  '06 - 10 Days Rajasthan Tours': [
    { code: '1115RVT3', name: '6 Nights 7 Days Rajasthan Holiday', itinerary: 'Jaipur-Jodhpur-Udaipur-Jaisalmer', cost: 'On Request' },
    { code: '1115RVT4', name: '8 Nights 9 Days Rajasthan Tour', itinerary: 'Jaipur-Bikaner-Jaisalmer-Jodhpur', cost: 'On Request' },
  ],
  '11 - 15 Days Rajasthan Tours': [
    { code: '1115RVT5', name: '13 Nights 14 Days Top tourist destinations in Rajasthan', itinerary: 'Ahmedabad-Mount Abu-Udaipur-Jodhpur-Jaisalmer-Bikaner-Pushkar-Jaipur-Ranthambore-Agra-Delhi', cost: 'On Request' },
    { code: '1115RVT6', name: '11 Nights 12 Days Rajasthan Tour', itinerary: 'Jaipur-Ranthambhore-Bundi-Chittorgarh-Udaipur-Mount Abu-Jodhpur-Jaisalmer', cost: 'On Request' },
  ],
  '16 - 25 Days Rajasthan Tours': [
    { code: '1115RVT7', name: '16 Nights 17 Days Rajasthan Grand Tour', itinerary: 'Delhi-Agra-Jaipur-Jodhpur-Udaipur-Jaisalmer-Bikaner-Mount Abu', cost: 'On Request' },
  ],
};

// Add table data for budget and luxury packages
const budgetDetailsTable = {
  'Jaipur-Ajmer-Pushkar-Jodhpur Tour': [
    { code: 'BUD1', name: 'Jaipur-Ajmer-Pushkar-Jodhpur Tour', itinerary: 'Jaipur-Ajmer-Pushkar-Jodhpur', cost: 'On Request' },
  ],
  'Desert Tour Jaisalmer (Jaisalmer City Tours)': [
    { code: 'BUD2', name: 'Desert Tour Jaisalmer', itinerary: 'Jaisalmer City Tour', cost: 'On Request' },
  ],
  'Pink City Tour (Jaipur City Tours)': [
    { code: 'BUD3', name: 'Pink City Tour', itinerary: 'Jaipur City Tour', cost: 'On Request' },
  ],
};
const luxuryDetailsTable = {
  'Jaisalmer Udaipur Luxury Tours': [
    { code: 'LUX1', name: 'Jaisalmer Udaipur Luxury Tours', itinerary: 'Jaisalmer-Jodhpur-Mount Abu-Udaipur-Jaipur', cost: 'On Request' },
  ],
  'Royal Luxury Rajasthan Tour': [
    { code: 'LUX2', name: 'Royal Luxury Rajasthan Tour', itinerary: 'Mount Abu-Udaipur-Jodhpur-Jaisalmer-Bikaner-Mandawa-Jaipur', cost: 'On Request' },
  ],
  'Jaipur Ranthambhore Luxury Tours': [
    { code: 'LUX3', name: 'Jaipur Ranthambhore Luxury Tours', itinerary: 'Jaipur-Ranthambhore-Bundi-Chittorgarh-Udaipur-Mount Abu', cost: 'On Request' },
  ],
};

function TourDetailsPage({ pkg }) {
  let details = tourDetailsTable[pkg.title] || budgetDetailsTable[pkg.title] || luxuryDetailsTable[pkg.title] || [];
  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center">{pkg.title}</h2>
      <p className="text-center">Rajasthan has a plethora of tourism attractions. Because of the enormous distances connecting tourist attractions in Rajasthan, a vacation here demands careful preparation. Here are the best Rajasthan tour packages for this duration.</p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Tour Package / Code</th>
              <th>Tour Itinerary</th>
              <th>Tour Cost</th>
            </tr>
          </thead>
          <tbody>
            {details.map((row, idx) => (
              <tr key={idx}>
                <td>{row.name} / {row.code}</td>
                <td>{row.itinerary}</td>
                <td>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Add a Get in Touch special feature section below Taxi & Cab Services
function GetInTouch() {
  return (
    <section className="container my-5 p-4 bg-light rounded shadow text-center">
      <h2 className="mb-3">Get in Touch</h2>
      <p className="mb-4">Have questions or need a custom tour? Our team is here to help you plan the perfect Rajasthan experience. Reach out to us for personalized assistance!</p>
      <a href="https://wa.me/8209427429" target="_blank" rel="noopener noreferrer" className="btn btn-success fw-bold me-2"><i className="bi bi-whatsapp"></i> Chat on WhatsApp</a>
      <a href="mailto:info@shreekarnitourism.com" className="btn btn-primary fw-bold"><i className="bi bi-envelope"></i> Email Us</a>
    </section>
  );
}



function App() {
  // Example filter state for packages
  const [filter, setFilter] = useState('');
  const [bookingModal, setBookingModal] = useState({ open: false, pkg: null });
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', mobile: '', people: '', requests: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [taxiModal, setTaxiModal] = useState({ open: false, taxi: null });
  const filteredPackages = filter
    ? packages.filter(pkg => pkg.name.toLowerCase().includes(filter.toLowerCase()))
    : packages;

  // Booking modal handler
  const handleBookNow = (pkg) => setBookingModal({ open: true, pkg });
  const handleCloseBooking = () => setBookingModal({ open: false, pkg: null });

  const [search, setSearch] = useState('');
  const [searchModal, setSearchModal] = useState({ open: false, item: null });
  const [destinationModal, setDestinationModal] = useState({ open: false, dest: null });
  const [distanceFrom, setDistanceFrom] = useState('Jaipur');
  const [detailsPage, setDetailsPage] = useState(null);

  const navigate = useNavigate();

  // Combine all packages into one list and normalize their structure
  const allPackages = [
    // Normal packages
    ...packages,
    // Duration packages
    ...durationPackages.map(p => ({
      name: p.title,
      image: p.image,
      price: 'On Request', // Default price
      highlights: [p.duration],
      itinerary: [], // No itinerary for these
    })),
    // Budget packages
    ...budgetPackages.map(p => ({
      name: p.title,
      image: p.image,
      price: 'On Request',
      highlights: [p.duration],
      itinerary: [],
    })),
    // Luxury packages
    ...luxuryPackages.map(p => ({
      name: p.title,
      image: p.image,
      price: p.price || 'On Request',
      highlights: [p.duration, p.covered].filter(Boolean), // Filter out undefined values
      itinerary: [],
    })),
  ];

  const filteredSearch = search
    ? allPackages.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  // Helper to open destination modal from search
  const handleSearchClick = (item) => {
    if (!item) return;
    if (item.type === 'destination') {
      setDestinationModal({ open: true, dest: item.full });
      setSearch('');
    } else if (item.type === 'package') {
      // Navigate to package details route
      navigate(`/packages/${item.name.replace(/\s+/g, '-').toLowerCase()}`);
      setSearch('');
    } else if (item.type === 'duration' || item.type === 'budget' || item.type === 'luxury') {
      // Navigate to details route using the title
      navigate(`/packages/${item.name.replace(/\s+/g, '-').toLowerCase()}`);
      setSearch('');
    }
  };

  // ChatBot open/close state
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#f8f5f0', position: 'relative' }}>
      <Navbar onChatClick={() => setChatOpen(true)} />
      <SocialMediaFloating />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero-section">
              <Hero />
            </section>
            <SocialMediaFloating />
            {/* History of Rajasthan Section */}
            <section className="container my-5" id="history">
              <h2 className="mb-4 text-center">History of Rajasthan</h2>
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <p>Rajasthan, the Land of Kings, is a vibrant state in northwestern India known for its rich history, majestic forts, palaces, and colorful culture. The region was once home to the Rajput warrior clans, whose legacy lives on in the grand architecture and traditions. From the Pink City of Jaipur to the golden sands of Jaisalmer, Rajasthan offers a journey through time, romance, and heroism. Explore bustling bazaars, folk music, and the royal lifestyle that makes Rajasthan a must-visit destination.</p>
                </div>
              </div>
            </section>
            {/* About Section (only once, after History) */}
            <AboutPage />
            {/* Rajasthan Tour By Duration Section */}
            <section className="container my-5">
              <h2 className="mb-4 text-center">Rajasthan Tour By Duration Tour Package</h2>
              <div className="row g-4 justify-content-center">
                {durationPackages.map((pkg, idx) => (
                  <div className="col-md-3" key={pkg.title}>
                    <div className="card h-100 shadow-sm text-center">
                      <img src={pkg.image} className="card-img-top" alt={pkg.title} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                      <div className="card-body">
                        <h5 className="card-title">{pkg.title}</h5>
                        <p className="mb-2">Durations: {pkg.duration}</p>
                        <button className="btn btn-warning me-2 fw-bold" onClick={() => setBookingModal({ open: true, pkg })}>Book Now</button>
                        <button className="btn btn-primary fw-bold" onClick={() => setDetailsPage(pkg)}>Get Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Rajasthan Budget Tour Packages Section */}
            <section className="container my-5">
              <h2 className="mb-4 text-center">Rajasthan Budget Tour Packages</h2>
              <div className="row g-4 justify-content-center">
                {budgetPackages.map((pkg, idx) => (
                  <div className="col-md-4" key={pkg.title}>
                    <div className="card h-100 shadow-sm text-center">
                      <img src={pkg.image} className="card-img-top" alt={pkg.title} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                      <div className="card-body">
                        <h5 className="card-title">{pkg.title}</h5>
                        <p className="mb-2">Durations: {pkg.duration}</p>
                        <button className="btn btn-warning me-2 fw-bold" onClick={() => setBookingModal({ open: true, pkg })}>Book Now</button>
                        <button className="btn btn-primary fw-bold" onClick={() => setDetailsPage(pkg)}>Get Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Rajasthan Luxury Tour Packages Section */}
            <section className="container my-5">
              <h2 className="mb-4 text-center">Rajasthan Luxury Tour Packages</h2>
              <p className="text-center">One of the most loved travel packages to explore Rajasthan is the luxury tour package. This Rajasthan travel plan is one of the best ways to get an ever-lasting experience. India has been a part of the major travel plans of visitors from every country of the world. The unity in diversity of the country is what makes it special and better than others.<br/>The Rajasthan luxury tour plans are the top sought plans worldwide. With these packages, you get to explore the beautiful state with luxury resorts and hotels, luxury trains, and much more with the best quality and services. Below we list our best packages for you. Get yours now!</p>
              <div className="row g-4 justify-content-center">
                {luxuryPackages.map((pkg, idx) => (
                  <div className="col-md-4" key={pkg.title}>
                    <div className="card h-100 shadow-sm text-center">
                      <img src={pkg.image} className="card-img-top" alt={pkg.title} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                      <div className="card-body">
                        <h5 className="card-title">{pkg.title}</h5>
                        <p className="mb-2">Durations: {pkg.duration}</p>
                        <p className="mb-2">{pkg.covered && <span>Destination Covered: {pkg.covered}</span>}</p>
                        <p className="mb-2 text-danger fw-bold">{pkg.price}</p>
                        <button className="btn btn-warning me-2 fw-bold" onClick={() => setBookingModal({ open: true, pkg })}>Book Now</button>
                        <button className="btn btn-primary fw-bold" onClick={() => setDetailsPage(pkg)}>Get Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Taxi & Cab Services Cards (after luxury) */}
            <TaxiCards taxis={taxis} />
            <GetInTouch />
            {/* Destinations Section with updated View More */}
            <section className="container my-5" id="destinations">
              <h2 className="mb-4 text-center">Popular Destinations</h2>
              <div className="row g-4">
                {destinations.map((dest, idx) => (
                  <div className="col-md-4 col-lg-3" key={dest.name}>
                    <div className="card h-100 shadow-sm">
                      <img src={dest.image} className="card-img-top" alt={dest.name} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{dest.name}</h5>
                        <p className="card-text small flex-grow-1">{dest.description}</p>
                        <button className="btn btn-outline-primary mt-2 fw-bold" onClick={() => setDestinationModal({ open: true, dest })}>
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Destination Modal with distance calculator and Book Now */}
            {destinationModal.open && (
              <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document" style={{ maxWidth: '800px' }}>
                  <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                      <h5 className="modal-title fw-bold">{destinationModal.dest.name}</h5>
                      <button type="button" className="btn-close" onClick={() => setDestinationModal({ open: false, dest: null })}></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <img src={destinationModal.dest.image} alt={destinationModal.dest.name} className="img-fluid rounded shadow mb-3" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                          <div className="badge bg-info fs-6 mb-2">
                            <i className="bi bi-geo-alt me-1"></i>Rajasthan
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="mb-4">
                            <h6 className="text-primary fw-bold mb-2">
                              <i className="bi bi-info-circle me-2"></i>About {destinationModal.dest.name}
                            </h6>
                            <p className="text-muted">{destinationModal.dest.description}</p>
                          </div>

                          {destinationDetails[destinationModal.dest.name] && (
                            <div className="mb-4">
                              <h6 className="text-primary fw-bold mb-3">
                                <i className="bi bi-book me-2"></i>Detailed Information
                              </h6>
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div className="card h-100">
                                    <div className="card-body">
                                      <h6 className="card-title text-success fw-bold">
                                        <i className="bi bi-clock-history me-2"></i>History
                                      </h6>
                                      <p className="card-text small">{destinationDetails[destinationModal.dest.name].history}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div className="card h-100">
                                    <div className="card-body">
                                      <h6 className="card-title text-info fw-bold">
                                        <i className="bi bi-star me-2"></i>Famous For
                                      </h6>
                                      <p className="card-text small">{destinationDetails[destinationModal.dest.name].famous}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <div className="card h-100">
                                    <div className="card-body">
                                      <h6 className="card-title text-warning fw-bold">
                                        <i className="bi bi-people me-2"></i>Tourist Info
                                      </h6>
                                      <p className="card-text small mb-1"><strong>Annual Tourists:</strong> {destinationDetails[destinationModal.dest.name].tourists}</p>
                                      <p className="card-text small mb-1"><strong>Best Time:</strong> {destinationDetails[destinationModal.dest.name].timing}</p>
                                      <p className="card-text small"><strong>Highlights:</strong> {destinationDetails[destinationModal.dest.name].highlights}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <div className="card h-100">
                                    <div className="card-body">
                                      <h6 className="card-title text-danger fw-bold">
                                        <i className="bi bi-geo-alt me-2"></i>Distance Info
                                      </h6>
                                      <p className="card-text small">{destinationDetails[destinationModal.dest.name].distance}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Distance Calculator for this destination */}
                          <div className="mb-4">
                            <h6 className="text-primary fw-bold mb-3">
                              <i className="bi bi-calculator me-2"></i>Distance Calculator
                            </h6>
                            <div className="row">
                              <div className="col-md-6">
                                <label className="fw-bold mb-2">From City</label>
                                <select className="form-select mb-3" value={distanceFrom} onChange={e => setDistanceFrom(e.target.value)}>
                                  {allCities.map(city => <option key={city}>{city}</option>)}
                                </select>
                              </div>
                              <div className="col-md-6">
                                <label className="fw-bold mb-2">To {destinationModal.dest.name}</label>
                                <div className="alert alert-info fw-bold mb-0">
                                  <i className="bi bi-arrow-right me-2"></i>
                                  {(() => {
                                    const distance = cityDistances[distanceFrom]?.[destinationModal.dest.name] || 
                                                   cityDistances[destinationModal.dest.name]?.[distanceFrom];
                                    return distance ? `${distance} km` : 'Distance not available';
                                  })()}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="alert alert-success">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-lightbulb-fill me-2"></i>
                              <div>
                                <strong>Travel Tips:</strong>
                                <ul className="mb-0 mt-1 small">
                                  <li>Best visited during {destinationDetails[destinationModal.dest.name]?.timing || 'October to March'}</li>
                                  <li>Plan your visit during early morning or evening for better experience</li>
                                  <li>Don't forget to carry water and comfortable walking shoes</li>
                                  <li>Local guides are available for detailed information</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setDestinationModal({ open: false, dest: null })}>
                        <i className="bi bi-x-circle me-1"></i>Close
                      </button>
                      <button type="button" className="btn btn-warning fw-bold">
                        <i className="bi bi-calendar-check me-1"></i>Book Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Tour Packages Section with modal on click */}
            <div className="container my-5" id="packages">
              <h2 className="mb-4 text-center">Special Packages</h2>
              <input
                className="form-control mb-3"
                placeholder="Filter by package name..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <div className="row g-4">
                {filteredPackages.map((pkg, idx) => (
                  <div className="col-md-6 col-lg-4" key={pkg.name}>
                    <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }} onClick={() => setSearchModal({ open: true, item: { ...pkg, type: 'package', name: pkg.name, summary: pkg.highlights ? pkg.highlights.join(', ') : '', image: pkg.image, price: pkg.price, days: pkg.itinerary ? pkg.itinerary.length : undefined, full: pkg } })}>
                      <img src={pkg.image} className="card-img-top" alt={pkg.name} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{pkg.name}</h5>
                        <h6 className="text-success mb-2">{pkg.price}</h6>
                        <ul className="list-unstyled small mb-3">
                          {pkg.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                        </ul>
                        <button className="btn btn-outline-primary mt-auto mb-2 fw-bold" onClick={e => { e.stopPropagation(); setSearchModal({ open: true, item: { ...pkg, type: 'package', name: pkg.name, summary: pkg.highlights ? pkg.highlights.join(', ') : '', image: pkg.image, price: pkg.price, days: pkg.itinerary ? pkg.itinerary.length : undefined, full: pkg } }); }}>View Summary</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonials, Blog, FAQ, Contact (all on home) */}
            <Testimonials testimonials={testimonials} packages={packages} blogTips={blogTips} />
            <BlogTips />
            <MapSection />
            <Footer />
          </>
        } />
        <Route path="/about" element={<><AboutPage /><Footer /></>} />
        <Route path="/taxi-services" element={<><TaxiCards taxis={taxis} /><GetInTouch /><Footer /></>} />
        <Route path="/destinations" element={<><Destinations destinations={destinations} /><Footer /></>} />
        <Route path="/packages" element={<><TourPackages packages={allPackages} onBookNow={handleBookNow} showDetailsLink={true} /><Footer /></>} />
        <Route path="/packages/:id" element={<><PackageDetailWrapper /><Footer /></>} />
        <Route path="/testimonials" element={<><Testimonials testimonials={testimonials} packages={packages} blogTips={blogTips} /><Footer /></>} />
        <Route path="/contact" element={<><InquiryForm /><Footer /></>} />
        <Route path="/taxi-book/:taxiName" element={<TaxiBookingPage taxis={taxis} />} />
      </Routes>
      <BackToTop />
      <div id="footer-section" style={{ height: 0 }}></div>
      <ChatBotWindow open={chatOpen} onClose={() => setChatOpen(false)} />
      {/* Booking Modal */}
      {bookingModal.open && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Book Now: {bookingModal.pkg.title || bookingModal.pkg.name}</h5>
                <button type="button" className="btn-close" onClick={() => { setBookingModal({ open: false, pkg: null }); setBookingForm({ name: '', email: '', mobile: '', people: '', requests: '' }); setBookingSuccess(false); }}></button>
              </div>
              <div className="modal-body">
                {/* Show charges if available */}
                {bookingModal.pkg.price && (
                  <div className="alert alert-info fw-bold">Charges: {bookingModal.pkg.price}</div>
                )}
                {bookingModal.pkg.charges && (
                  <div className="alert alert-info fw-bold">Charges: {bookingModal.pkg.charges}</div>
                )}
                {bookingModal.pkg.cost && (
                  <div className="alert alert-info fw-bold">Charges: {bookingModal.pkg.cost}</div>
                )}
                {bookingSuccess ? (
                  <div className="alert alert-success text-center">Thank you for your booking! We will contact you soon.</div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setBookingSuccess(true); }}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Name</label>
                      <input type="text" className="form-control" value={bookingForm.name} onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <input type="email" className="form-control" value={bookingForm.email} onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Mobile No</label>
                      <input type="tel" className="form-control" value={bookingForm.mobile} onChange={e => setBookingForm({ ...bookingForm, mobile: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Number of People</label>
                      <input type="number" className="form-control" value={bookingForm.people} onChange={e => setBookingForm({ ...bookingForm, people: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Special Requests</label>
                      <textarea className="form-control" value={bookingForm.requests} onChange={e => setBookingForm({ ...bookingForm, requests: e.target.value })} rows={2} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 fw-bold">Submit Booking</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Tour Details Page (like screenshot 2) */}
      {detailsPage && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{detailsPage.title}</h5>
                <button type="button" className="btn-close" onClick={() => setDetailsPage(null)}></button>
              </div>
              <div className="modal-body">
                <TourDetailsPage pkg={detailsPage} />
              </div>
            </div>
          </div>
        </div>
      )}
      {searchModal && searchModal.open && searchModal.item && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document" style={{ maxWidth: '800px' }}>
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title fw-bold">{searchModal.item.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSearchModal({ open: false, item: null })}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img src={searchModal.item.image} alt={searchModal.item.name} className="img-fluid rounded shadow mb-3" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    {searchModal.item.price && (
                      <div className="alert alert-success fw-bold mb-3">
                        <i className="bi bi-currency-rupee me-1"></i>{searchModal.item.price}
                      </div>
                    )}
                    {searchModal.item.days && (
                      <div className="badge bg-info fs-6 mb-2">
                        <i className="bi bi-calendar-range me-1"></i>{searchModal.item.days} Days
                      </div>
                    )}
                  </div>
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h6 className="text-primary fw-bold mb-2">
                        <i className="bi bi-star-fill me-2"></i>Package Highlights
                      </h6>
                      <div className="row">
                        {searchModal.item.full && searchModal.item.full.highlights ? (
                          searchModal.item.full.highlights.map((highlight, idx) => (
                            <div className="col-md-6 mb-2" key={idx}>
                              <div className="d-flex align-items-center">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                <span className="small">{highlight}</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-12">
                            <p className="text-muted">{searchModal.item.summary}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {searchModal.item.full && searchModal.item.full.itinerary && (
                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-3">
                          <i className="bi bi-map me-2"></i>Detailed Itinerary
                        </h6>
                        <div className="border rounded p-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                          {searchModal.item.full.itinerary.map((day, idx) => (
                            <div key={idx} className="mb-2 pb-2 border-bottom">
                              <div className="d-flex">
                                <span className="badge bg-warning text-dark me-2" style={{ minWidth: '60px' }}>
                                  Day {idx + 1}
                                </span>
                                <span className="small">{day}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {searchModal.item.covered && (
                      <div className="mb-3">
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="bi bi-geo-alt me-2"></i>Destinations Covered
                        </h6>
                        <p className="text-muted">{searchModal.item.covered}</p>
                      </div>
                    )}

                    <div className="alert alert-info">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-info-circle-fill me-2"></i>
                        <div>
                          <strong>Package Includes:</strong>
                          <ul className="mb-0 mt-1 small">
                            <li>Accommodation in quality hotels</li>
                            <li>Daily breakfast and dinner</li>
                            <li>All transfers and sightseeing</li>
                            <li>Professional tour guide</li>
                            <li>24/7 customer support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSearchModal({ open: false, item: null })}>
                  <i className="bi bi-x-circle me-1"></i>Close
                </button>
                <button type="button" className="btn btn-success fw-bold" onClick={() => { setSearchModal({ open: false, item: null }); handleBookNow(searchModal.item); }}>
                  <i className="bi bi-calendar-check me-1"></i>Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrapper for useParams
function PackageDetailWrapper() {
  const { id } = useParams();
  return <PackageDetail id={id} />;
}

export default App;
