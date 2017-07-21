const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/routineproject");

const Routine =  require("../models/routine.js");


const exercise1 = {
  week: [1,2],
  day: ["First"],
  title: "Swim",
  duration: '45 minutes',
  intervals: "3x12'",
  description: "Swim 3 sets of 12 minutes (3 min rest between set) Freestyle: Start easy and build up. Final 3 sets with pull buoy, Strong and constant pace.",
  videoTips: "https://www.youtube.com/watch?v=lppZV1UIqwc"
};
const exercise2 = {
  week: [2,5],
  day: ["Second"],
  title: "Bike",
  duration: '1 hour',
  intervals: "4x30'",
  description: "Warm up 15 minutes: 4-5x30s 80% sprints. Ride remaining 45 minutes at competitive pace.",
  videoTips: " https://www.youtube.com/watch?v=ovuDW5ikr24&list=PLc2-VmwJXLKpSRXEny_ml1pRdK8sOcea0"
};
const exercise3 = {
  week: [1,4,5],
  day: ["Second"],
  title: "Run",
  duration: '30 minutes',
  intervals: "1",
  description: "Run at ironman pace. Cool down last 10 minutes.",
  videoTips: "https://www.youtube.com/watch?v=jmyLSQ0REmo"
};
const exercise4 = {
  week: [1,3],
  day: ["Fourth"],
  title: 'Swim',
  duration: "45 minutes",
  intervals: 0,
  description: 'Warm up: 300m freestyle. 15 mins: Swim at your best average speed.',
  videoTips: "https://www.youtube.com/watch?v=sPnvCUTYe1w"
};
const exercise5 = {
  week: [5],
  day: ["Fourth"],
  title: "Run",
  duration: '1 hour',
  intervals: 0,
  description: "Run hill, (treadmill).",
  videoTips: "https://www.youtube.com/watch?v=U3-gwQriHsk"
};
const exercise6 = {
  week: [1],
  day: ["Sixth"],
  title: "Bike",
  duration: '5 hours',
  intervals: "",
  description: "Long warm up. Change to higher intensity every 30 minutes.",
  videoTips: "https://www.youtube.com/watch?v=UMzt1tARwO0&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81&index=6"
};
// const exercise7 = {
//   week: [1],
//   day: ["Sixth"],
//   title: "Run",
//   duration: '45 minutes',
//   intervals: "",
//   description: "Run for 45 minutes ironman pace.",
//   videoTips: "https://www.youtube.com/watch?v=GyF1ZZaaaC4"
// };
const exercise8 = {
  week: [2],
  day: ["Fourth"],
  title: "Bike",
  duration: '1 hour, 15 minutes',
  intervals: "1",
  description: "Warm up 20 minutes: 6 sets of 30 second 80% sprints. Ride the remaining time at ironman pace.",
  videoTips: "https://www.youtube.com/watch?v=peT2gOHaX_g&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81&index=51"
};
const exercise9 = {
  week: [2],
  day: ["Sixth"],
  title: "Run",
  duration: '2 hours',
  intervals: "1",
  description: "Run at an ironman pace.",
  videoTips: "https://www.youtube.com/watch?v=JucHwHW3LQ8"
};
// const exercise10 = {
//   week: [2],
//   day: ["Sixth"],
//   title: "Bike",
//   duration: '3.5 hours',
//   intervals: "1",
//   description: "Run at an ironman pace.",
//   videoTips: "https://www.youtube.com/watch?v=UM4ry6kuoqs&list=PLc2-VmwJXLKpSRXEny_ml1pRdK8sOcea0&index=12"
// };
const exercise11 = {
  week: [3],
  day: ["First"],
  title: "Swim",
  duration: '45 minutes',
  intervals: "3x12'",
  description: "Swim 3 sets of 12 minutes (1.5 min rest between set) Freestyle: Start easy and build up. Final 5 sets with pull buoy, Strong and constant pace.",
  videoTips: "https://www.youtube.com/watch?v=GyF1ZZaaaC4"
};
const exercise12 = {
  week: [3],
  day: ["Second"],
  title: "Bike",
  duration: '1.5 hours',
  intervals: "1",
  description: "Recovery day, flat ground. Easy effort, 85-95 RPM.",
  videoTips: "https://www.youtube.com/watch?v=d5ITgpwaBl0&index=14&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81"
};
// const exercise13 = {
//   week: [3],
//   day: ["Fourth"],
//   title: "Run",
//   duration: '1 hour',
//   intervals: "1",
//   description: "Easy going run, increase intensity in the final 15 minutes.",
//   videoTips: ""
// };
// const exercise14 = {
//   week: [3],
//   day: ["Sixth"],
//   title: "Bike",
//   duration: '4.5 hours',
//   intervals: "1",
//   description: "4.5 hour ride, pace yourself.",
//   videoTips: "https://www.youtube.com/watch?v=AGjmYbcwZJQ"
// };
const exercise15 = {
  week: [3],
  day: ["Sixth"],
  title: "Run",
  duration: '1.5 hour',
  intervals: "1",
  description: "Run at ironman pace.",
  videoTips: ""
};
const exercise16 = {
  week: [4],
  day: ["First"],
  title: "Swim",
  duration: '45 minutes',
  intervals: "2x20'",
  description: "Swim 3 sets of 12 minutes (1.5 min rest between set) Freestyle: Start easy and build up. Final 2 sets with pull buoy, Strong and constant pace. Note covered distance between each interval.",
  videoTips: "https://www.youtube.com/watch?v=lppZV1UIqwc"
};
// const exercise17 = {
//   week: [4],
//   day: ["Second"],
//   title: "Bike",
//   duration: '1 hour',
//   intervals: "5x30'",
//   description: "Warm up 15 minutes: 4-5 sets of 30 second sprints. Ride remaining time at high intensity.",
//   videoTips: "https://www.youtube.com/watch?v=T5bbznhRNME"
// };
const exercise18 = {
  week: [4],
  day: ["Fourth"],
  title: "Swim",
  duration: '40 minutes',
  intervals: "1",
  description: "Warm up 15 minutes: 300m freestyle. Remaining 25 minutes, swim at your best constant speed.",
  videoTips: ""
};
// const exercise19 = {
//   week: [4],
//   day: ["Fourth"],
//   title: "Run",
//   duration: '50 minutes',
//   intervals: "1",
//   description: "Run uphill.",
//   videoTips: "https://www.youtube.com/watch?v=mYSEQ6wdQ_U&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81&index=12"
// };
const exercise20 = {
  week: [4],
  day: ["Sixth"],
  title: "Bike",
  duration: '6 hours',
  intervals: "1",
  description: "6 hour ride, with long warm up",
  videoTips: "https://www.youtube.com/watch?v=XmZc-RlCV5g&index=24&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81"
};
// const exercise21 = {
//   week: [4],
//   day: ["Sixth"],
//   title: "Run",
//   duration: '15 minutes',
//   intervals: "1",
//   description: "Run at ironman pace for 15 minutes.",
//   videoTips: ""
// };
const exercise22 = {
  week: [5],
  day: ["First"],
  title: "Swim",
  duration: '45 minutes',
  intervals: "1",
  description: "Swim first 5 minutes smooth and easy, then gradually build up to a your average pace. Finish the last 15 minutes at high intensity.",
  videoTips: ""
};
// const exercise23 = {
//   week: [5],
//   day: ["Sixth"],
//   title: "Run",
//   duration: '2.5 hour',
//   intervals: "",
//   description: "Run at ironman pace.",
//   videoTips: ""
// };
const exercise24 = {
  week: [5],
  day: ["Sixth"],
  title: "Bike",
  duration: '3 hours',
  intervals: "1",
  description: "6 hour ride, with long warm up",
  videoTips: "https://www.youtube.com/watch?v=GKoLdOTdtac&index=83&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81"
};
const exercise25 = {
  week: [6,7],
  day: ["First"],
  title: "Swim",
  duration: '45 minutes',
  intervals: "15x100m",
  description: "Recovery swim, 12-16 sets of 100m, comfortable pace.",
  videoTips: ""
};
const exercise26 = {
  week: [6],
  day: ["Second"],
  title: "Bike",
  duration: '1.5 hours',
  intervals: "1",
  description: "Recovery ride, comfortable pace",
  videoTips: "https://www.youtube.com/watch?v=qeBVnkQa2Qk&index=64&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81"
};
const exercise27 = {
  week: [6],
  day: ["Fourth"],
  title: "Bike",
  duration: '50 minutes',
  intervals: "1",
  description: "Bike hill",
  videoTips: ""
};
// const exercise28 = {
//   week: [6],
//   day: ["Fourth"],
//   title: "Run",
//   duration: '12 minutes',
//   intervals: "1",
//   description: "Run at ironman pace.",
//   videoTips: ""
// };
// const exercise29 = {
//   week: [6],
//   day: ["Sixth"],
//   title: "Bike",
//   duration: '2 hours',
//   intervals: "1",
//   description: "2 hour ride, final 30 minutes are at a high intensity.",
//   videoTips: "https://www.youtube.com/watch?v=42so_816HYk&index=62&list=PLUdAMlZtaV12NLjdgytGje6knASgF2N81"
// };
const exercise30 = {
  week: [6],
  day: ["Sixth"],
  title: "Run",
  duration: '40 minutes',
  intervals: "1",
  description: "40 minute run at an ironman pace.",
  videoTips: ""
};
const exercise31 = {
  week: [7],
  day: ["Second"],
  title: "Bike",
  duration: '45 minutes',
  intervals: "1",
  description: "45 minute recovery ride.",
  videoTips: ""
};
// const exercise32 = {
//   week: [7],
//   day: ["Fourth"],
//   title: "Bike",
//   duration: '45 hour',
//   intervals: "4x30'",
//   description: "Warm up 15 minutes: 4-5x30s 80% sprints. Ride remaining 30 minutes at competitive pace.",
//   videoTips: ""
// };
const exercise33 = {
  week: [7],
  day: ["Fourth"],
  title: "Run",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minute run with slow pace.",
  videoTips: ""
};
const exercise34 = {
  week: [7],
  day: ["Sixth"],
  title: "Swim",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
// const exercise35 = {
//   week: [7],
//   day: ["Sixth"],
//   title: "Bike",
//   duration: '20 minutes',
//   intervals: "1",
//   description: "20 minutes, with slow pace.",
//   videoTips: ""
// };
// const exercise36 = {
//   week: [7],
//   day: ["Sixth"],
//   title: "Run",
//   duration: '20 minutes',
//   intervals: "1",
//   description: "20 minutes, with slow pace.",
//   videoTips: ""
// };
const rest13 = {
  week: [1],
  day: ["Third"],
  title: "Rest Day",
};

const rest15 = {
  week: [1],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};

const rest17 = {
  week: [1],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};

const rest23 = {
  week: [2],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};

const rest25 = {
  week: [2],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};

const rest27 = {
  week: [2],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest33 = {
  week: [3],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest35 = {
  week: [3],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest37 = {
  week: [3],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest43 = {
  week: [4],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest45 = {
  week: [4],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest47 = {
  week: [4],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest53 = {
  week: [5],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest55 = {
  week: [5],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest57 = {
  week: [5],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest63 = {
  week: [6],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest65 = {
  week: [6],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest67 = {
  week: [6],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest73 = {
  week: [7],
  day: ["Third"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest75 = {
  week: [7],
  day: ["Fifth"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};
const rest77 = {
  week: [7],
  day: ["Last"],
  title: "Rest Day",
  duration: '20 minutes',
  intervals: "1",
  description: "20 minutes, with slow pace.",
  videoTips: ""
};




const routineDataWeek1 = [
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise8,
  exercise9,
  exercise11,
  exercise12,
  exercise15,
  exercise16,
  exercise18,
  exercise20,
  exercise22,
  exercise24,
  exercise25,
  exercise26,
  exercise27,
  exercise30,
  exercise31,
  exercise33,
  exercise34,
  rest13,
  rest15,
  rest17,
  rest23,
  rest25,
  rest27,
  rest33,
  rest35,
  rest37,
  rest43,
  rest45,
  rest47,
  rest53,
  rest55,
  rest57,
  rest63,
  rest65,
  rest67,
  rest73,
  rest75,
  rest77
];

Routine.create(routineDataWeek1, (err, routines) => {
  if (err) {
    throw err;
  }
  routines.forEach((routineDataWeek1) => {
    console.log(routineDataWeek1);
  });
  mongoose.connection.close();
});
