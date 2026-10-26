
export const modules = [
  { id: 1, title: "Computer Fundamentals", lessons: 8,
    description: "कंप्यूटर का परिचय, हार्डवेयर, सॉफ्टवेयर, मेमोरी और डिवाइस।" },
  { id: 2, title: "Windows & File Management", lessons: 8,
    description: "Windows, फाइल, फोल्डर और फाइल मैनेजमेंट।" },
  { id: 3, title: "MS Word Basics", lessons: 10,
    description: "टाइपिंग, टेक्स्ट फॉर्मेटिंग, पेज सेटअप और प्रिंट।" },
  { id: 4, title: "MS Word Advanced", lessons: 8,
    description: "टेबल, हेडर-फूटर, पेज नंबर और Mail Merge।" },
  { id: 5, title: "MS Excel Basics", lessons: 10,
    description: "वर्कबुक, सेल, फॉर्मूला और मार्कशीट।" },
  { id: 6, title: "MS Excel Advanced", lessons: 8,
    description: "IF, Sort, Filter, Conditional Formatting और Charts।" },
  { id: 7, title: "MS PowerPoint", lessons: 8,
    description: "स्लाइड, डिजाइन, ट्रांजिशन और प्रेजेंटेशन।" },
  { id: 8, title: "Internet & Email", lessons: 8,
    description: "ब्राउज़र, सर्च इंजन, ईमेल और अटैचमेंट।" },
  { id: 9, title: "Digital Literacy & Cyber Safety", lessons: 8,
    description: "पासवर्ड, OTP, फिशिंग और ऑनलाइन सुरक्षा।" },
  { id: 10, title: "Final Practical Project", lessons: 5,
    description: "सीखे हुए कौशल का संयुक्त प्रोजेक्ट।" }
];

const lessonNames = {
  1: [
    "कंप्यूटर का परिचय", "कंप्यूटर के उपयोग",
    "हार्डवेयर और सॉफ्टवेयर", "Input और Output Devices",
    "CPU के भाग", "मेमोरी के प्रकार",
    "Storage Devices", "मॉड्यूल रिवीजन"
  ],
  2: [
    "Windows का परिचय", "Desktop और Taskbar",
    "Start Menu", "फाइल और फोल्डर",
    "Copy, Cut और Paste", "Rename और Delete",
    "Recycle Bin", "File Management अभ्यास"
  ],
  3: [
    "MS Word का परिचय", "नया दस्तावेज़ बनाना",
    "टेक्स्ट टाइप करना", "Font Formatting",
    "Paragraph Formatting", "Bullets और Numbering",
    "Page Setup", "Save और Save As",
    "Print Preview", "मॉड्यूल अभ्यास"
  ],
  4: [
    "Tables बनाना", "Pictures जोड़ना",
    "Header और Footer", "Page Number",
    "Columns और Page Break", "Styles और Themes",
    "Mail Merge का परिचय", "Advanced Document Project"
  ],
  5: [
    "Excel का परिचय", "Workbook और Worksheet",
    "Rows, Columns और Cells", "डेटा दर्ज करना",
    "Cell Formatting", "SUM Formula",
    "AVERAGE Formula", "MIN और MAX",
    "Basic Marksheet", "मॉड्यूल अभ्यास"
  ],
  6: [
    "Formula और Function", "IF Function",
    "Sort", "Filter", "Conditional Formatting",
    "Charts", "Data Validation", "Advanced Marksheet Project"
  ],
  7: [
    "PowerPoint का परिचय", "नई Presentation",
    "Slide Layout", "Text और Design",
    "चित्र और Shapes", "Transitions",
    "Animations", "Presentation Project"
  ],
  8: [
    "Internet का परिचय", "Web Browser",
    "Search Engine", "वेबसाइट और URL",
    "Email Account", "Email लिखना",
    "Attachment भेजना", "Internet Safety"
  ],
  9: [
    "Digital Literacy", "Strong Password",
    "OTP Safety", "Phishing पहचानना",
    "Privacy Settings", "Safe Downloads",
    "Online Scams", "Cyber Safety Revision"
  ],
  10: [
    "Project Planning", "Word Document Project",
    "Excel Marksheet Project", "PowerPoint Project",
    "Final Project Review"
  ]
};

export function getLesson(moduleId, lessonNo) {
  const module = modules.find(m => m.id === Number(moduleId)) || modules[0];
  const number = Math.min(
    Math.max(Number(lessonNo) || 1, 1),
    module.lessons
  );

  return {
    module,
    number,
    total: module.lessons,
    title: lessonNames[module.id][number - 1]
  };
}
