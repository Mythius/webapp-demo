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

const table_values = `ADA Compliance,þ,green,12/31/2025
Parking,þ,green,12/31/2025
Number of Spaces,þ,12/15/2024,12/31/2025
Signage,þ,12/15/2024,12/31/2025
Van-Accessible Space,þ,12/15/2024,12/31/2025
Accessible Route,þ,12/15/2024,12/31/2025
Ramp,þ,green,12/31/2025
Wheelchair Ramp,þ,12/15/2024,12/31/2025
Ramp Slope,þ,12/15/2024,12/31/2025
Handrails and Handholds: Available,þ,12/15/2024,12/31/2025
Handrails and Handholds: Spacing,þ,12/15/2024,12/31/2025
Building Entrance Door,þ,green,12/31/2025
Building Door Width,þ,12/15/2024,12/31/2025
Building Threshold,þ,12/15/2024,12/31/2025
Building Doorknobs,þ,12/15/2024,12/31/2025
Elevator,þ,green,12/31/2025
Floor Location of Suite,Ground Floor,12/15/2024,12/31/2025
Elevator Available,N/A,12/31/2025
Elevator Door Width,N/A,12/31/2025
Elevator Internal Turning Space,N/A,12/31/2025
Suite Entrance Door,þ,green,12/31/2025
Suite Door Width,þ,12/15/2024,12/31/2025
Suite Threshold,þ,12/15/2024,12/31/2025
Suite Doorknobs,þ,12/15/2024,12/31/2025
Waiting Room,þ,green,12/31/2025
T-Turn Clearance,þ,12/15/2024,12/31/2025
Reduced Height Check-In,þ,12/15/2024,12/31/2025
Suite Doorknobs,þ,12/15/2024,12/31/2025
Exam Rooms,þ,green,12/31/2025
Exam Room Door Width,þ,12/15/2024,12/31/2025
Exam Room Threshold,þ,12/15/2024,12/31/2025
Exam Room Doorknobs,þ,12/15/2024,12/31/2025
Exam Room T-Turn Clearance,þ,12/15/2024,12/31/2025
Accessible Exam Table,þ,12/15/2024,12/31/2025
Acessible Diagnostic Equipment,N/A,,12/31/2025
Exam Room Privacy,þ,12/15/2024,12/31/2025
Walkways,þ,green,12/31/2025
Protruding Objects,þ,12/15/2024,12/31/2025
Restroom,þ,green,12/31/2025
Signage,þ,12/15/2024,12/31/2025
Restroom Door Width,þ,12/15/2024,12/31/2025
Restroom Threshold,þ,12/15/2024,12/31/2025
Restroom Doorknobs,þ,12/15/2024,12/31/2025
Restroom T-Turn Clearance,þ,12/15/2024,12/31/2025
Stall: Rear Grab Bar,þ,12/15/2024,12/31/2025
Stall: Side Grab Bar,þ,12/15/2024,12/31/2025
Sink: Forward Approach,þ,12/15/2024,12/31/2025
Sink: Height,þ,12/15/2024,12/31/2025
OSHA Compliance,þ,yellow,2/28/2025
Facility Upkeep,þ,yellow,2/28/2025
Overall Facility Upkeep,þ,1/31/2025,2/28/2025
Floors: Dry / Stain Free,þ,1/31/2025,2/28/2025
Floors: Safe / Tripping Hazards,þ,1/31/2025,2/28/2025
Ceiling Tiles,þ,12/31/2024,3/31/2025
Electrical Enclosures,þ,12/31/2024,3/31/2025
Pests,þ,1/31/2025,2/28/2025
Extermination Program,þ,1/31/2025,2/28/2025
Exits,þ,green,3/31/2025
Stairways Clear and Unblocked,þ,12/31/2024,3/31/2025
Evacuation Map,þ,12/31/2024,3/31/2025
Clear Exit Routes,þ,12/31/2024,3/31/2025
Exit Door Signage,þ,12/31/2024,3/31/2025
Exit Door Illumination,þ,12/31/2024,3/31/2025
Non-Exit Doorway Markings,þ,12/31/2024,3/31/2025
Door Opening Mechanism,þ,12/31/2024,3/31/2025
Door Opening Mechanism,þ,12/31/2024,3/31/2025
Fire Extinguishers,þ,yellow,2/28/2025
Signage,þ,12/31/2024,12/31/2025
Mounting,þ,12/31/2024,12/31/2025
Annual Maintenance,þ,12/31/2024,12/31/2025
Monthly Visual Inspection,þ,1/31/2025,2/28/2025
First Aid and Safety,þ,green,3/31/2025
First Aid Kit,þ,12/31/2024,3/31/2025
Bloodborne Pathogen Spill Kit,þ,12/31/2024,3/31/2025
Biohazard Waste Disposal,þ,12/31/2024,3/31/2025
Sharps Container,þ,12/31/2024,3/31/2025
Needle Stick Log,þ,12/31/2024,3/31/2025
SDS Sheets,þ,12/31/2024,3/31/2025
Hand Sanitation Protocol,þ,12/31/2024,3/31/2025
Veteran Experience Compliance,ý,red,1/31/2025
Clinic Signage,þ,12/31/2024,3/31/2025
Crisis Line,þ,12/31/2024,3/31/2025
Veteran Records Management,ý,12/31/2024,1/31/2025
Clinic Furniture,þ,12/31/2024,3/31/2025
Equipment / Supplies Compliance,ý,blue,2/28/2025
General Exams,ý,blue
Single Use PPE,þ,1/31/2025,2/28/2025
Exam Table Sanitation,ý,1/31/2025,2/28/2025
Exam Room Medical Supplies,þ,1/31/2025,2/28/2025
Medical Instrumentation,þ,1/31/2025,2/28/2025
Audiology,N/A,N/A,N/A
Sound Booth,,,
Equipment Calibration,,,
Ear Curettes,,,
Other Audiology Supplies,,,
Opto,N/A,N/A,N/A
Tonometer,,,
Visual Field Perimeters,,,
Slit Lamp,,,
Dental,N/A,N/A,N/A
Dentist Chair,,,
Dental Mirrors,,,
X-Ray,þ,green,3/31/2025
Registration,þ,12/31/2024,3/31/2025
Inspection / EPE,þ,12/31/2024,3/31/2025
Calibration,þ,12/31/2024,12/31/2025
Inventory Management Tracking,þ,12/31/2024,3/31/2025
Lead Apron Testing,þ,12/31/2024,12/31/2025
Compliance Documents,þ,12/31/2024,12/31/2025
Quarterly Checklist Compliance,þ,12/31/2024,3/31/2025
Dosimeter Monitoring,þ,12/31/2024,3/31/2025
Technologist Licensure,þ,12/31/2024,3/31/2025
Personnel Competency Tracking,þ,12/31/2024,3/31/2025
Training,þ,12/31/2024,3/31/2025
`;

const colors = { green: "🟢", yellow: "🟡", red: "🔴", blue: "🔵" };

function getStatus(value) {
  const check = /*html*/ `<td class="check">&#x2713;</td>`;
  const cross = /*html*/ `<td class="cross">&#10008;</td>`;
  const other = /*html*/ `<td class="other">${value}</td>`;
  if(value == 'þ') return check;
  if(value == 'ý') return cross;
  return other;
}

function switchIfColor(c){
  if(c in colors) return colors[c];
  return c;
}

function makeCategory(name, checked, color, date='') {
  let c = color == "green" || "yellow";
  return /*html*/ `
    <tr class="category">
        <td>${name}</td>
        ${getStatus(checked)}
        <td class="${checked=='ý'?'hred':''}">${switchIfColor(color)}</td>
        <td class="${date.includes('28')||checked=='ý'?'hred':''}">${date}</td>
    </tr>
    `;
}

function makeSection(
  name,
  checked,
  expandible,
  text,
  date=''
) {
  return /*html*/ `
    <tr class="L2">
        <td>${
          expandible
            ? '<img class="plus" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-fvv6HskDcRNXp2VqvJ-269emxIpDfwn4g&s" width=13>'
            : ""
        }${name}</td>
        ${getStatus(checked)}
        <td class="${checked=='ý'?'hred':''}">${switchIfColor(text)}</td>
        <td class="${date.includes('28')||checked=='ý'?'hred':''}">${date}</td>
    </tr>
    `;
}

function makeSubection2(
  name,
  checked,
  text,
  date=''
) {
  return /*html*/ `
    <tr class="L3">
        <td>${name}</td>
        ${getStatus(checked)}
        <td class="${checked=='ý'?'hred':''}">${text}</td>
        <td class="${date.includes('28')||checked=='ý'?'hred':''}">${date}</td>
    </tr>
    `;
}

function randomGoodColor() {
  if (Math.random() < 0.9) return "green";
  return "yellow";
}

function randomBadColor() {
  if (Math.random() < 0.5) return "blue";
  return "red";
}

let lookup_table = table_values.split('\n').map(e=>e.split(','));
function lookup(name){
  return lookup_table.filter(e=>e[0]==name)[0];
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
          let d = lookup(item);
          temp += makeSubection2(...d);
        }
      }
      if (!allgood) {
        color = randomBadColor();
      }
      let d = lookup(subcategory);
      if (!data[category][subcategory].length) {
        temp2 += makeSection(d[0],d[1],false,d[2],d[3]);
      } else {
        temp2 += makeSection(d[0],d[1],true,d[2],d[3]);
      }
      temp2 += temp;
    }
    let d = lookup(category);
    result += makeCategory(...d);
    result += temp2;
  }
  document.querySelector("#main").innerHTML += result;
}

makeTable();
