import eeLogo from "../assets/images/project_logos/extraaedge.png"
import idealLogo from "../assets/images/project_logos/ideal10.png"
import qbasic from "../assets/images/qbasic.png"
import ntu from "../assets/images/ntu.png"
import sdl from "../assets/images/sdl.png"
import cpp from "../assets/images/cpp.png"
import htmlcss from "../assets/images/htmlcss.png"
import boloGlobalLogo from "../assets/images/bolo_global_logo.png"
import otScreen1 from "../assets/images/otScreens/sc1.png"
import otScreen2 from "../assets/images/otScreens/sc2.png"
import otScreen3 from "../assets/images/otScreens/sc3.png"
import otScreen4 from "../assets/images/otScreens/video call.png"
import eeScreen1 from "../assets/images/eeScreens/sc1.png"
import eeScreen2 from "../assets/images/eeScreens/sc2.png"
import eeScreen3 from "../assets/images/eeScreens/sc3.png"
import eeScreen4 from "../assets/images/eeScreens/sc4.png"
import idealScreen1 from "../assets/images/idealScreens/1.png"
import idealScreen2 from "../assets/images/idealScreens/2.png"
import idealScreen3 from "../assets/images/idealScreens/3.png"
import eeCover from "../assets/images/eecover.png"
import idealCover from "../assets/images/idealCover.png"
import otCover from "../assets/images/otCover.png"
import javaLogo from "../assets/images/javaLogo.png"
import qtLogo from "../assets/images/qtLogo.png"
import androidLogo from "../assets/images/androidLogo.png"
import virAr from "../assets/images/vir_ar.gif"
import arCover from "../assets/images/arcore_arkit.jpeg"
import arLogo from "../assets/images/arLogo.png"

const eeShortDescription = "ExtraaEdge is a leads management software which helps academic institutions boost their admissions. I had contributions towards their android app and built a lot of major feature sets like analytics, locations, adding of leads, lead info, etc.";
// eslint-disable-next-line
const btSerialShortDescription = "This was a very abstract project by one of our clients who mostly didn’t share the use cases and business logic with us. All in all, it was an app that was used for serial port communication via bluetooth. All the commands and low level hardware based functionality was masked by a user friendly GUI.";

const boloGlobalShortDescription = "Bolo.Global is a video calling platform for a very specific goal. Conducting interviews. Group video calling is the core functionality of this app and other features included text based chat and call recordings.";

const boloGlobalFullDescription = "bolo.global is webRTC based video calling app made for conducting video interviews. I was working closely with Office Troops, the company behind the OfficeTroops recruitment analytics platform.\n" +
    "Their use case was very unique as they wanted group video calling along with video recordings. We achieved this using a webRTC plugin along with some clever backend and UX magic.\n" +
    "I worked on the app’s UX design and implementation.\n" +
    "The app is set to be launched in India, Singapore, South America and the US.\n";
// eslint-disable-next-line
const haritpathMobileShortDescription = "Haritpath is a firm which handles the maintenance and survey of all the trees planted around highways. The haritpath mobile app lets their surveyors create a digital tree log along with location and photographic data and lets them upload it all to a dedicated server. ";
// eslint-disable-next-line
const haritpathWebShortDescription = "Same as above but the web counterpart of the platform which is used to review and document the data uploaded by the surveyors.";

const idealShortDescription = "Ideal 10 is the study companion app published by ideal publications for their 10th standard students. This app makes their entire syllabus available to the mobile platform. Data is always updated as it fetched constantly from the web. Supports offline functionality as well.";

const arShortDescription = "Just some personal experiments with AR. Because AR has a lot potential for applications. Do check out."

const arFullDescription = "I’ve always been pretty interested in trying things out with AR. So here are some experiments. They’re all completely cross platform (iOS and Android). Pretty satisfying stuff."

export const myWorkSubtitle = "Working at a service based company allowed me to work on numerous projects. I’m not going to list all of them here, but I’ll list a few interesting/challenging ones. All of these are enterprise apps so they aren’t available to the general public and even if they are, the credentials to use them won’t be. But hey, if you can pull some strings with the right companies and have some time then feel free to run them on your own device.\n\n" +
    "There’s one more project that you can look at apart from the ones listed below. That is the website that you’re currently browsing. It’s built with react and is fully responsive.\n\n" +
    "Disclaimer: I developed these projects while working for a company, so I am in no way trying to say that I have full ownership (legally and ethically, I can’t say that) of the said projects. I am merely stating the fact that I have made contributions to these projects. Which is a fair point.\n" +
    "Most of the projects listed here are enterprise (some require a fee to get access to) apps and websites. If you want to gain access to or see a demo of the apps, you need to contact either me or one of these service providers.";

const eeFullDescription = "There used to be a time when ExtraaEdge used to be available on the playstore but it has since been taken down as the owning company couldn’t successfully convince the playstore moderators as to why the app needed access to a user’s call logs and sms inbox. Which were unfortunately one of the app’s core features. The app is now being distributed via a custom website as a direct APK download.\n" +
    "ExtraaEdge is a lead management platform for very well known Institutions in India like IIT, Sinhgad, K11 and many more. Their platform is used by these institutions to maximise the transition of cold lead to hot leads and thus improving admission stats. The features provided by the platform are:\n" +
    "- Lead specific notes and remarks.\n" +
    "- Counselor location tracking and analytics.\n" +
    "- Call recording for registered leads.\n" +
    "- Automated lead communication.\n" +
    "- Smart caller IDs.\n" +
    "- Weekly, monthly, yearly stats.\n" +
    "- Geofencing.\n" +
    "- Maps integration.\n" +
    "\n" +
    "Their full solution included a web app and Android and iOS apps. Where I was the incharge of developing and maintaining the Android and iOS apps. The project was very challenging as the app was heavily customisable and dynamic for specific counselors or institutions. A lot of dynamic layouts were employed for the specific client use cases. The most challenging part however was maintaining and extending the thousands of lines of legacy code behind the application.\n";

// eslint-disable-next-line
const btSerialFullDescription = "Internally called Central Control Unit (CCU) is borderline IoT based project where a mobile device or a tablet is used to send and receive serial commands via Bluetooth and control a group of machines. The app is a strict enterprise app and access is granted only to the clients of the owning authorities.\n" +
    "This app is designed for factory settings where it can be used to control a group of industrial printers with all sorts of commands ranging from daily operations to self testing. The app masks all the hardware level commands with a modern GUI where the user doesn’t have to worry about entering the right and often tedious serial port commands. It is also to be noted that the app was made to be modular from the very get go. As the app’s functionality was also later modified to be able to work with a school PA system with bluetooth speakers.\n" +
    "The most tedious part of development in this project was the actual bluetooth interface and how to gracefully handle exceptions. Another area where keen observations were required was being able to handle the analog bluetooth devices that would be paired with the phone. They tend to throw a lot of exceptions when the app is trying to establish communications with them.\n";

const idealFullDescription = "Ideal10 is a study companion app that allows grade 10 students in India to keep a copy of their syllabi in their smartphones. It is a fairly simple app with login and content delivery functionalities. The app is developed in association with Ideal Publications Inc. \n" +
    "The project does include pretty eye catchy and animations and being a content delivery system, strong emphasis was put on the UX part of the app.\n" +
    "The app also included a pretty interesting take on offline data persistence using Room and RxJava.";
// eslint-disable-next-line
const haritpathMobileFullDescription = "Haritpath was one of my first Android projects at a service based companies. I had used Realm database along with RxJava to implement this solution (Along with the usual array of dependencies like Retrofit and others). The app was a survey helper for a company working with the National Highways Authority of India The app was used by the the clients employees to keep a track of tree plantations on Indian Highways. Before the development of Haritpath mobile, the surveyors used to keep a track of tree information on a physical register, maintaining which was getting cumbersome for them. Thus the app helped the surveyors further extend their note keeping by providing functionalities like Tree live photo upload and survey data upload location tracking.\n" +
    "Live location tracking was probably the most important feature of the application as a survey data with a live location ensured data authenticity. The app is currently being used in production by Haritpath Pvt. Ltd. on the highways of Maharashtra with over 50,000 trees being tracked in a span of 6 months on an average.";
// eslint-disable-next-line
const haritpathWebFullDescription = "Harithpath web is the web counterpart of the Harithpath mobile application. (The name gives it all away)\n" +
    "This project was built entirely in Angular 6 and is used to monitor the data uploaded from the mobile app. The website can only be accessed by the admins and managers at Haritpath (The client). \n" +
    "The features included in this website are:\n" +
    "- Basic login functionalities.\n" +
    "- Granting surveyor access.\n" +
    "- Monitoring individual surveyor data.\n" +
    "- Maps integration to track their surveyors and trees.\n" +
    "- Google cloud storage\n" +
    "- Complete highway wise statistics with graphical representations of data (Charting). \n" +
    "A very challenging aspect of this project was the actual data analysis and subsequent representation of the data on a graph.";

export const myWorkArray = [
    {
        projectName: "AR experiments",
        image: arLogo,
        shortDescription: arShortDescription,
        fullDescription: arFullDescription,
        siteLink: '/',
        images: [virAr,],
        cover: arCover
    },
    {
        projectName: "ExtraaEdge",
        image: eeLogo,
        shortDescription: eeShortDescription,
        fullDescription: eeFullDescription,
        siteLink: 'https://www.extraaedge.com/product/',
        appLink: 'https://install.appcenter.ms/users/extraaedgebizspark/apps/extraaedge-sales-marketing-client-live/distribution_groups/external%20tester',
        images: [eeScreen1, eeScreen2, eeScreen3, eeScreen4],
        cover: eeCover
    },
    {
        projectName: "bolo.global",
        image: boloGlobalLogo,
        shortDescription: boloGlobalShortDescription,
        fullDescription: boloGlobalFullDescription,
        siteLink: 'https://www.officetroops.com/',
        appLink: 'https://play.google.com/store/apps/details?id=com.officetroops.bologlobal',
        images: [otScreen4, otScreen3, otScreen1, otScreen2],
        cover: otCover
    },
    {
        projectName: "Ideal10",
        image: idealLogo,
        shortDescription: idealShortDescription,
        fullDescription: idealFullDescription,
        siteLink: null,
        appLink: 'https://play.google.com/store/apps/details?id=in.ideal10.android',
        images: [idealScreen1, idealScreen2, idealScreen3],
        cover: idealCover
    },
];

export const aboutMeArray = [
    {
        year: "2008",
        text: "Wrote my first ever program in QBASIC. I was 13.",
        image: qbasic,
        shouldRotate: true,
    },
    {
        year: "2009",
        text: "Got into ethical hacking just for the fun of hacking my friend's email and social media accounts. No harm was caused, so they didn’t mind.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2010",
        text: "3 year long hiatus from programming begins.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2013",
        text: "Got back into programming. Started with C and fell in love with the power of C++",
        image: cpp,
        shouldRotate: true,
    },
    {
        year: "2014",
        text: "Started my software engineering bachelors from the Nottingham Trent University, UK.",
        image: ntu,
        shouldRotate: false,
    },
    {
        year: "2015",
        text: "Created a physics engine for simulating oscillations in C++ using the SDL library for graphics.",
        image: sdl,
        shouldRotate: true,
    },
    {
        year: "2016",
        text: "Made my first ever production ready website in plain HTML/CSS.",
        image: htmlcss,
        shouldRotate: false,
    },
    {
        year: "2016",
        text: "Became an unofficial java teaching assistant in my class.",
        image: javaLogo,
        shouldRotate: false,
    },
    {
        year: "2016",
        text: "Created my first ever QT project.",
        image: qtLogo,
        shouldRotate: false,
    },
    {
        year: "2017",
        text: "Wrote my first ever android app.",
        image: androidLogo,
        shouldRotate: false,
    },
    {
        year: "2017",
        text: "Created a mathematical symbolic computational engine in java.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2017",
        text: "GRADUATED!",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2017",
        text: "Started working for a product based startup, Telyport in Bengaluru.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2017",
        text: "Switched to a service based company where I worked on literally numerous projects. I really can’t recall the exact number of projects that I had worked on. Let’s assume that ‘a lot’ is a number.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2018",
        text: "Got promoted. Became the head of development. Lead the development of iOS, Android, Frontend and Backend projects.",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2019",
        text: "Left my job to start freelancing. #Excitement",
        image: null,
        shouldRotate: false,
    },
    {
        year: "2019",
        text: "Got the opportunity to work with clients from Norway, India, US. Best time of my life.",
        image: null,
        shouldRotate: false,
    },
];

export const aboutMe = "2008 - Wrote my first ever program in QBASIC. I was 13.\n" +
    "2009 - Got into ethical hacking just for the fun of hacking my friend's email and social media accounts. No harm was caused, so they didn’t mind.\n" +
    "2010 - 3 year long hiatus from programming begins." +
    "2013 - Got back into programming. Started with C and fell in love with the power of C++.\n" +
    "2014 - Started my software engineering bachelors from the Nottingham Trent University, UK.\n" +
    "2015 - Created a physics engine for simulating oscillations in C++ using the SDL library for graphics.\n" +
    "2016 - Made my first ever production ready website in plain HTML/CSS.\n" +
    "2016 - Became an unofficial java teaching assistant in my class.\n" +
    "2016 - Created my first ever QT project. (I know, people don’t use it much. But I think that it’s under-appreciated)\n" +
    "2017 - Wrote my first ever android app.\n" +
    "2017 - Created a mathematical symbolic computational engine in java.\n" +
    "2017 - Graduated!\n" +
    "2017 - Started working for a product based startup, Telyport in Bengaluru.\n" +
    "2018 - Switched to a service based company where I worked on literally numerous projects. I really can’t recall the exact number of projects that I had worked on. Let’s assume that ‘a lot’ is a number.\n" +
    "2018 - Got promoted. Became the head of development. Lead the development of iOS, Android, Frontend and Backend projects.\n" +
    "2019 - Left my job to start freelancing. #Excitement\n" +
    "2019 - Got the opportunity to work with clients from Norway, India and the US. Best time of my life.";
