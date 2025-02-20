const data = {
  "ADA Compliance": {
    Parking: [
      "Number of Spaces",
      "Signage",
      "Van-Accessible Space",
      "Accessible Route",
    ],
    Ramp: [
      "Wheelchair Ramp",
      "Ramp Slope",
      "Handrails and Handholds: Available",
      "Handrails and Handholds: Spacing",
    ],
    "Building Entrance Door": [
      "Building Door Width",
      "Building Threshold",
      "Building Doorknobs",
    ],
    Elevator: [
      "Floor Location of Suite",
      "Elevator Available",
      "Elevator Door Width",
      "Elevator Internal Turning Space",
    ],
    "Suite Entrance Door": [
      "Suite Door Width",
      "Suite Threshold",
      "Suite Doorknobs",
    ],
    "Waiting Room": [
      "T-Turn Clearance",
      "Reduced Height Check-In",
      "Suite Doorknobs",
    ],
    "Exam Rooms": [
      "Exam Room Door Width",
      "Exam Room Threshold",
      "Exam Room Doorknobs",
      "Exam Room T-Turn Clearance",
      "Accessible Exam Table",
      "Acessible Diagnostic Equipment",
      "Exam Room Privacy",
    ],
    Walkways: ["Protruding Objects"],
    Restroom: [
      "Signage",
      "Restroom Door Width",
      "Restroom Threshold",
      "Restroom Doorknobs",
      "Restroom T-Turn Clearance",
      "Stall: Rear Grab Bar",
      "Stall: Side Grab Bar",
      "Sink: Forward Approach",
      "Sink: Height",
    ],
  },
  "OSHA Compliance": {
    "Facility Upkeep": [
      "Overall Facility Upkeep",
      "Floors: Dry / Stain Free",
      "Floors: Safe / Tripping Hazards",
      "Ceiling Tiles",
      "Electrical Enclosures",
      "Pests",
      "Extermination Program",
    ],
    Exits: [
      "Stairways Clear and Unblocked",
      "Evacuation Map",
      "Clear Exit Routes",
      "Exit Door Signage",
      "Exit Door Illumination",
      "Non-Exit Doorway Markings",
      "Door Opening Mechanism",
      "Door Opening Mechanism",
    ],
    "Fire Extinguishers": [
      "Signage",
      "Mounting",
      "Annual Maintenance",
      "Monthly Visual Inspection",
    ],
    "First Aid and Safety": [
      "First Aid Kit",
      "Bloodborne Pathogen Spill Kit",
      "Biohazard Waste Disposal",
      "Sharps Container",
      "Needle Stick Log",
      "SDS Sheets",
      "Hand Sanitation Protocol",
    ],
  },
  "Veteran Experience Compliance": {
    "Clinic Signage": [],
    "Crisis Line": [],
    "Veteran Records Management": [],
    "Clinic Furniture": [],
  },
  "Equipment / Supplies Compliance": {
    "General Exams": [
      "Single Use PPE",
      "Exam Table Sanitation",
      "Exam Room Medical Supplies",
      "Medical Instrumentation",
    ],
    Audiology: [
      "Sound Booth",
      "Equipment Calibration",
      "Ear Curettes",
      "Other Audiology Supplies",
    ],
    Opto: ["Tonometer", "Visual Field Perimeters", "Slit Lamp"],
    Dental: ["Dentist Chair", "Dental Mirrors"],
    "X-Ray": [
      "Registration",
      "Inspection / EPE",
      "Calibration",
      "Inventory Management Tracking",
      "Lead Apron Testing",
      "Compliance Documents",
      "Quarterly Checklist Compliance",
      "Dosimeter Monitoring",
      "Technologist Licensure",
      "Personnel Competency Tracking",
      "Training",
    ],
  },
};

const check = /*html*/ `<td class="check">&#x2713;</td>`;
const cross = /*html*/ `<td class="cross">&#10008;</td>`;
const colors = { green: "🟢", yellow: "🟡", red: "🔴", blue: "🔵" };

function makeCategory(name, color = "green", date = "12/31/2025") {
  let c = color == "green" || "yellow";
  return /*html*/ `
    <tr class="category">
        <td>${name}</td>
        ${c ? check : cross}
        <td>${colors[color]}</td>
        <td>${date}</td>
    </tr>
    `;
}

function makeSection(
  name,
  checked = true,
  expandible = true,
  text = "12/31/2024",
  date = "3/31/2025"
) {
  return /*html*/ `
    <tr class="L2">
        <td>${expandible?'<img class="plus" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-fvv6HskDcRNXp2VqvJ-269emxIpDfwn4g&s" width=13>':''}${name}</td>
        ${checked ? check : cross}
        <td>${text}</td>
        <td>${date}</td>
    <td>
    `;
}

function makeSubection2(
  name,
  checked = true,
  text = "12/31/2024",
  date = "3/31/2025"
) {
  return /*html*/ `
    <tr class="L3">
        <td>${name}</td>
        ${checked ? check : cross}
        <td>${text}</td>
        <td>${date}</td>
    <td>
    `;
}

function randomGoodColor(){
    if(Math.random() < .9) return 'green';
    return 'yellow';
}

function randomBadColor(){
    if(Math.random() < .5) return 'blue';
    return 'red';
}

function makeTable() {
  let result = "";
  for (let category in data) {
    let color = randomGoodColor();
    let temp2 = "";
    for (let subcategory in data[category]) {
      let temp = "";
      let allgood = true;
      if (data[category][subcategory] instanceof Array) {
        for (let item of data[category][subcategory]) {
          let good = Math.random() > 0.05;
          allgood &= good;
          temp += makeSubection2(item, good);
        }
      }
      if(!allgood){
        color = randomBadColor();
      }
      if(!data[category][subcategory].length){
        temp2 += makeSection(subcategory, allgood, false);
      } else {
        temp2 += makeSection(subcategory,allgood,true,colors[allgood?randomGoodColor():color]);
      }
      temp2 += temp;
    }
    result += makeCategory(category,color);
    result += temp2;
  }
  document.querySelector("#main").innerHTML += result;
}

makeTable();
