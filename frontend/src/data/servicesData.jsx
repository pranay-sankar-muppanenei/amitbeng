// src/data/servicesData.js
export const servicesData = [
  {
    id: 1,
    category: "gallbladder-surgeries",
    name: "Gallbladder Surgeries",
    description: "Minimally invasive and open procedures to treat gallbladder diseases.",
    subSurgeries: [
      {
        slug: "laparoscopic-cholecystectomy",
        name: "Laparoscopic Cholecystectomy (Gallbladder removal)",
        description: "Minimally invasive surgery to remove the gallbladder.",
        details: {
          whenNeeded: "Performed when gallstones or gallbladder infections cause pain or complications.",
          preparation: "Ultrasound/CT scan, fasting 6-8 hours before surgery.",
          rehabilitation: "Usually discharged in 1 day, full recovery within 1-2 weeks."
        }
      },
      {
        slug: "gallstone-surgery",
        name: "Gallstone Surgery",
        description: "Surgical removal of gallstones causing obstruction or pain.",
        details: {
          whenNeeded: "When gallstones block bile ducts or cause severe abdominal pain.",
          preparation: "Liver function tests, imaging studies, fasting.",
          rehabilitation: "Return to work in 1-2 weeks; diet modification may be advised."
        }
      },
      {
        slug: "choledocholithotomy",
        name: "Choledocholithotomy (CBD stone removal)",
        description: "Surgery to remove stones from the common bile duct.",
        details: {
          whenNeeded: "When gallstones migrate to the common bile duct causing jaundice or infection.",
          preparation: "ERCP or MRCP to confirm stone, blood tests.",
          rehabilitation: "Hospital stay 2–3 days, recovery in 2–3 weeks."
        }
      }
    ]
  },
  {
    id: 2,
    category: "appendix-surgeries",
    name: "Appendix Surgeries",
    description: "Procedures to remove the appendix in emergency or elective cases.",
    subSurgeries: [
      {
        slug: "laparoscopic-appendectomy",
        name: "Laparoscopic Appendectomy",
        description: "Keyhole surgery to remove the inflamed appendix.",
        details: {
          whenNeeded: "Acute appendicitis or suspected appendix rupture.",
          preparation: "Ultrasound/CT scan, antibiotics before surgery.",
          rehabilitation: "1–2 days hospital stay, normal activity in a week."
        }
      },
      {
        slug: "open-appendectomy",
        name: "Open Appendectomy",
        description: "Traditional surgery with a larger incision to remove appendix.",
        details: {
          whenNeeded: "When appendix ruptures or laparoscopic not possible.",
          preparation: "Blood tests, IV fluids, antibiotics.",
          rehabilitation: "2–3 weeks recovery, longer hospital stay than laparoscopic."
        }
      }
    ]
  },
  {
    id: 3,
    category: "hernia-surgeries",
    name: "Hernia Surgeries",
    description: "Surgical repair of different types of hernias with open or laparoscopic techniques.",
    subSurgeries: [
      {
        slug: "laparoscopic-inguinal-hernia-repair",
        name: "Laparoscopic Inguinal Hernia Repair",
        description: "Minimally invasive repair of inguinal hernia using mesh.",
        details: {
          whenNeeded: "Bulge or pain in groin area due to hernia.",
          preparation: "Ultrasound/CT if required, fasting.",
          rehabilitation: "Return to work in 1–2 weeks; avoid heavy lifting for 6 weeks."
        }
      },
      {
        slug: "laparoscopic-umbilical-hernia-repair",
        name: "Laparoscopic Umbilical Hernia Repair",
        description: "Surgical repair of hernia near the belly button.",
        details: {
          whenNeeded: "Umbilical bulge, pain, or bowel obstruction.",
          preparation: "Blood work, fasting 6 hours before surgery.",
          rehabilitation: "Daycare surgery; recovery in 1 week."
        }
      },
      {
        slug: "laparoscopic-ventral-hernia-repair",
        name: "Laparoscopic Ventral/Incisional Hernia Repair",
        description: "Fixes hernias at previous incision sites or abdominal wall defects.",
        details: {
          whenNeeded: "Bulge at old surgical scar or abdominal wall weakness.",
          preparation: "CT scan if large hernia suspected.",
          rehabilitation: "Hospital stay 1–2 days, return to work 2–3 weeks."
        }
      },
      {
        slug: "open-hernia-surgery",
        name: "Open Hernia Surgery",
        description: "Traditional open approach to repair hernia with sutures/mesh.",
        details: {
          whenNeeded: "When laparoscopic not feasible or recurrent hernia.",
          preparation: "Pre-op imaging and blood tests.",
          rehabilitation: "2–3 weeks recovery; avoid strain for 6 weeks."
        }
      },
      {
        slug: "hiatus-hernia-surgery",
        name: "Laparoscopic Hiatus Hernia Surgery",
        description: "Minimally invasive surgery for hiatus hernia causing reflux.",
        details: {
          whenNeeded: "Persistent GERD, large hiatus hernia.",
          preparation: "Endoscopy, barium swallow test.",
          rehabilitation: "Hospital stay 1–2 days; diet modifications for 1 month."
        }
      }
    ]
  },
  {
  id: 4,
  category: "piles-fissure-fistula-treatments",
  name: "Piles, Fissure & Fistula Treatments",
  description: "Advanced surgical and laser treatments for anorectal diseases.",
  subSurgeries: [
    {
      slug: "laser-piles-surgery",
      name: "Laser Piles Surgery",
      description: "Minimally invasive laser procedure for piles/hemorrhoids.",
      details: {
        whenNeeded: "For bleeding, painful, or prolapsing hemorrhoids not responding to medicines.",
        preparation: "Proctoscopy/colonoscopy may be done; enema before surgery.",
        rehabilitation: "Day-care procedure; recovery in 3–5 days."
      }
    },
    {
      slug: "stapler-hemorrhoidectomy",
      name: "Stapler Hemorrhoidectomy",
      description: "Stapler-assisted removal of advanced piles.",
      details: {
        whenNeeded: "For grade 3–4 hemorrhoids with severe symptoms.",
        preparation: "Routine blood tests, anesthesia clearance.",
        rehabilitation: "Hospital stay 1 day; recovery in 1–2 weeks."
      }
    },
    {
      slug: "fissure-surgery",
      name: "Fissure Surgery (Laser / Open)",
      description: "Surgery for chronic anal fissures causing pain and bleeding.",
      details: {
        whenNeeded: "When medical treatment fails for chronic fissures.",
        preparation: "Anoscopy, fasting 6 hours before surgery.",
        rehabilitation: "Return to work in 1 week; sitz baths recommended."
      }
    },
    {
      slug: "fistula-surgery",
      name: "Fistula Surgery (Laser / Fistulectomy / Fistulotomy)",
      description: "Treatment of abnormal anal tracts using laser or open surgery.",
      details: {
        whenNeeded: "For persistent anal discharge or recurrent abscesses.",
        preparation: "MRI fistulogram, basic labs.",
        rehabilitation: "Varies 2–4 weeks depending on fistula complexity."
      }
    },
    {
      slug: "pilonidal-sinus-surgery",
      name: "Pilonidal Sinus Surgery",
      description: "Removal of sinus tract near the tailbone.",
      details: {
        whenNeeded: "For recurrent pus discharge or infection in natal cleft.",
        preparation: "Shaving of hair, fasting 6 hours.",
        rehabilitation: "Recovery in 2–3 weeks with wound care."
      }
    },
    {
      slug: "drainage-perianal-abscess",
      name: "Drainage of Perianal & Perineal Abscess",
      description: "Incision and drainage of pus collection in anorectal region.",
      details: {
        whenNeeded: "When painful swelling with fever is present.",
        preparation: "Ultrasound pelvis if needed; fasting 4–6 hours.",
        rehabilitation: "Discharged same day; daily dressing for 1–2 weeks."
      }
    }
  ]
},
{
  id: 5,
  category: "abdominal-surgeries",
  name: "Abdominal Surgeries",
  description: "Surgical procedures for diagnostic and emergency abdominal conditions.",
  subSurgeries: [
    {
      slug: "exploratory-laparotomy",
      name: "Exploratory Laparotomy",
      description: "Open abdominal surgery to diagnose and treat intra-abdominal issues.",
      details: {
        whenNeeded: "For trauma, perforation, tumors, or unexplained abdominal pain.",
        preparation: "CT scan, labs, fasting.",
        rehabilitation: "Hospital stay 5–7 days, recovery in 3–4 weeks."
      }
    },
    {
      slug: "diagnostic-laparoscopy",
      name: "Diagnostic Laparoscopy",
      description: "Minimally invasive inspection of abdominal organs.",
      details: {
        whenNeeded: "For unexplained pain, infertility, or staging cancers.",
        preparation: "Fasting 6 hours; imaging before procedure.",
        rehabilitation: "Day-care procedure, recovery in 2–3 days."
      }
    },
    {
      slug: "intestinal-obstruction-surgery",
      name: "Intestinal Obstruction Surgery",
      description: "Surgery to relieve intestinal blockage.",
      details: {
        whenNeeded: "When bowel obstruction does not resolve with conservative treatment.",
        preparation: "X-ray/CT scan, IV fluids, NG tube.",
        rehabilitation: "Hospital stay 5–7 days; recovery 3–4 weeks."
      }
    },
    {
      slug: "bowel-resection-anastomosis",
      name: "Bowel Resection & Anastomosis",
      description: "Removal of diseased bowel segment with reconnection.",
      details: {
        whenNeeded: "For tumors, ischemia, perforation, or Crohn’s disease.",
        preparation: "Colonoscopy/CT, bowel preparation.",
        rehabilitation: "Hospital stay 7–10 days, recovery in 4–6 weeks."
      }
    },
    {
      slug: "perforation-peritonitis-surgery",
      name: "Perforation Peritonitis Surgery",
      description: "Emergency surgery for intestinal perforation causing peritonitis.",
      details: {
        whenNeeded: "When patient has severe abdominal pain, fever, septic shock.",
        preparation: "CT abdomen, urgent stabilization.",
        rehabilitation: "ICU care often needed; recovery 4–6 weeks."
      }
    },
    {
      slug: "adhesiolysis",
      name: "Adhesiolysis (release of abdominal adhesions)",
      description: "Laparoscopic/open release of intestinal adhesions.",
      details: {
        whenNeeded: "When adhesions cause obstruction or chronic pain.",
        preparation: "Imaging, blood work.",
        rehabilitation: "Hospital stay 3–5 days; recovery 2–3 weeks."
      }
    }
  ]
},
{
  id: 6,
  category: "bariatric-obesity-surgeries",
  name: "Bariatric & Obesity Surgeries",
  description: "Weight-loss surgeries for morbid obesity and related conditions.",
  subSurgeries: [
    {
      slug: "laparoscopic-sleeve-gastrectomy",
      name: "Laparoscopic Sleeve Gastrectomy",
      description: "Removal of part of stomach to reduce food intake.",
      details: {
        whenNeeded: "For BMI > 35 with comorbidities or > 40 without.",
        preparation: "Nutritional evaluation, blood tests, fasting.",
        rehabilitation: "Hospital stay 3–4 days; weight loss in months."
      }
    },
    {
      slug: "laparoscopic-gastric-bypass",
      name: "Laparoscopic Gastric Bypass (Roux-en-Y)",
      description: "Bypasses stomach & part of intestine to reduce absorption.",
      details: {
        whenNeeded: "For severe obesity with diabetes/GERD.",
        preparation: "Endoscopy, labs, anesthesia clearance.",
        rehabilitation: "Hospital stay 4–5 days, recovery in 3–4 weeks."
      }
    },
    {
      slug: "mini-gastric-bypass",
      name: "Mini Gastric Bypass",
      description: "Simpler bypass procedure for weight loss.",
      details: {
        whenNeeded: "For patients with high BMI and metabolic issues.",
        preparation: "Blood work, dietician counseling.",
        rehabilitation: "Hospital stay 3–4 days; long-term follow-up needed."
      }
    },
    {
      slug: "revision-bariatric-surgeries",
      name: "Revision Bariatric Surgeries",
      description: "Corrective surgeries after failed or complicated bariatric procedures.",
      details: {
        whenNeeded: "When previous weight loss surgery fails or complications arise.",
        preparation: "Endoscopy, nutritional evaluation.",
        rehabilitation: "Varies depending on complexity."
      }
    }
  ]
},
{
  id: 7,
  category: "breast-surgeries",
  name: "Breast Surgeries",
  description: "Surgical treatments for benign and malignant breast conditions.",
  subSurgeries: [
    {
      slug: "breast-lump-removal",
      name: "Breast Lump Removal (Lumpectomy)",
      description: "Removal of benign/malignant breast lump.",
      details: {
        whenNeeded: "When a lump is suspicious or painful.",
        preparation: "Ultrasound/mammogram, FNAC/biopsy.",
        rehabilitation: "Day-care/overnight stay; recovery 1 week."
      }
    },
    {
      slug: "modified-radical-mastectomy",
      name: "Modified Radical Mastectomy (Breast Cancer Surgery)",
      description: "Removal of entire breast and lymph nodes.",
      details: {
        whenNeeded: "For confirmed breast cancer.",
        preparation: "MRI/mammogram, oncologist evaluation.",
        rehabilitation: "Hospital stay 5–7 days; recovery 4–6 weeks."
      }
    },
    {
      slug: "gynecomastia-surgery",
      name: "Gynecomastia Surgery (Male Breast Reduction)",
      description: "Removal of excess male breast tissue.",
      details: {
        whenNeeded: "When gynecomastia causes discomfort or self-consciousness.",
        preparation: "Hormonal evaluation, chest USG.",
        rehabilitation: "Recovery in 1–2 weeks."
      }
    },
    {
      slug: "accessory-breast-surgery",
      name: "Accessory Breast & Axilla Surgery",
      description: "Removal of accessory breast tissue or lumps in armpit.",
      details: {
        whenNeeded: "When accessory tissue causes discomfort or cosmetic concern.",
        preparation: "Ultrasound/biopsy if needed.",
        rehabilitation: "Recovery in 1–2 weeks."
      }
    }
  ]
},
{
  id: 8,
  category: "thyroid-neck-surgeries",
  name: "Thyroid & Neck Surgeries",
  description: "Surgeries for thyroid, parathyroid, and neck masses.",
  subSurgeries: [
    {
      slug: "hemithyroidectomy",
      name: "Hemithyroidectomy",
      description: "Removal of one lobe of thyroid gland.",
      details: {
        whenNeeded: "For solitary thyroid nodules.",
        preparation: "Thyroid function tests, ultrasound, FNAC.",
        rehabilitation: "Hospital stay 2–3 days, recovery 2 weeks."
      }
    },
    {
      slug: "total-thyroidectomy",
      name: "Total Thyroidectomy",
      description: "Complete removal of thyroid gland.",
      details: {
        whenNeeded: "For thyroid cancer, multinodular goiter.",
        preparation: "Laryngoscopy, thyroid scan, labs.",
        rehabilitation: "Hospital stay 3–4 days; lifelong medication needed."
      }
    },
    {
      slug: "parathyroid-surgery",
      name: "Parathyroid Surgery",
      description: "Removal of overactive parathyroid gland(s).",
      details: {
        whenNeeded: "For hyperparathyroidism with high calcium.",
        preparation: "Sestamibi scan, calcium tests.",
        rehabilitation: "Hospital stay 2–3 days; recovery 2 weeks."
      }
    },
    {
      slug: "excision-neck-lumps",
      name: "Excision of Neck Lumps",
      description: "Surgical removal of benign or suspicious neck masses.",
      details: {
        whenNeeded: "When neck lumps are enlarging or suspicious.",
        preparation: "Ultrasound/biopsy.",
        rehabilitation: "Day-care surgery; recovery 1 week."
      }
    }
  ]
},
{
  id: 9,
  category: "liver-spleen-pancreas-surgeries",
  name: "Liver, Spleen & Pancreas Surgeries",
  description: "Surgeries for hepatobiliary, splenic, and pancreatic conditions.",
  subSurgeries: [
    {
      slug: "laparoscopic-splenectomy",
      name: "Laparoscopic Splenectomy",
      description: "Minimally invasive spleen removal.",
      details: {
        whenNeeded: "For splenic rupture, ITP, or large spleen.",
        preparation: "CT scan, vaccination before surgery.",
        rehabilitation: "Hospital stay 4–5 days; recovery 3–4 weeks."
      }
    },
    {
      slug: "liver-abscess-drainage",
      name: "Liver Abscess Drainage",
      description: "Drainage of pus collection in liver.",
      details: {
        whenNeeded: "For pyogenic or amoebic liver abscess not responding to medicine.",
        preparation: "Ultrasound/CT-guided aspiration first.",
        rehabilitation: "Hospital stay 2–3 days; antibiotics needed."
      }
    },
    {
      slug: "liver-resection",
      name: "Liver Resection (selected centers)",
      description: "Surgical removal of part of the liver.",
      details: {
        whenNeeded: "For liver tumors or metastasis.",
        preparation: "CT/MRI, liver function tests.",
        rehabilitation: "Hospital stay 7–10 days; recovery 6–8 weeks."
      }
    },
    {
      slug: "pancreatic-surgery",
      name: "Pancreatic Surgery",
      description: "Surgery for cysts, pseudocyst drainage, or tumors.",
      details: {
        whenNeeded: "When pancreatic disease causes obstruction or infection.",
        preparation: "CT/MRI, endoscopic evaluation.",
        rehabilitation: "Hospital stay 7–10 days, recovery 4–6 weeks."
      }
    }
  ]
},
{
  id: 10,
  category: "other-surgeries",
  name: "Other Surgeries",
  description: "Minor but essential surgeries for abscesses and cysts.",
  subSurgeries: [
    {
      slug: "abscess-drainage",
      name: "Abscess Drainage",
      description: "Surgical drainage of pus collection.",
      details: {
        whenNeeded: "For any localized abscess not resolving with antibiotics.",
        preparation: "Ultrasound if deep; fasting 4–6 hrs.",
        rehabilitation: "Day-care procedure, recovery in few days."
      }
    },
    {
      slug: "cyst-excision",
      name: "Cyst Excision",
      description: "Removal of sebaceous or dermoid cysts.",
      details: {
        whenNeeded: "For painful, infected, or enlarging cysts.",
        preparation: "Local anesthesia evaluation.",
        rehabilitation: "Day-care surgery, recovery 1 week."
      }
    }
  ]
}

  // ⚡ You can continue similarly for Piles, Abdominal, Bariatric, Breast, Thyroid, etc.
];
