export interface ProductSpec {
  label: string
  value: string
}

export interface ProductFaq {
  q: string
  a: string
}

export interface ProductDetail {
  slug: string
  name: string
  tagline: string
  image: string
  category: string
  description: string
  highlights: string[]
  specs: ProductSpec[]
  applications: string[]
  faqs: ProductFaq[]
  whatsappText: string
}

export const productDetails: ProductDetail[] = [
  {
    slug: 'strapping-rolls',
    name: 'Strapping Rolls',
    tagline: 'Polypropylene strapping for bundling cartons, boxes, and pallets reliably.',
    image: '/images/PET-Strapping-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'PP strapping for securing heavy loads and pallets in transit.',
    highlights: [
      'Widths: 9mm – 19mm',
      'Manual & machine-grade available',
      'Multiple colours on request',
      'Mumbai-based, fast dispatch',
    ],
    specs: [
      { label: 'Material', value: 'Polypropylene (PP)' },
      { label: 'Width', value: '9mm, 12mm, 15mm, 19mm' },
      { label: 'Thickness', value: '0.50mm – 1.05mm' },
      { label: 'Tensile Strength', value: '90kg – 350kg' },
      { label: 'Roll Weight', value: '3kg – 25kg' },
      { label: 'Core Internal Diameter', value: '76mm / 200mm' },
      { label: 'Colour', value: 'Natural, Black, Multicolour (on request)' },
      { label: 'Grade', value: 'Manual grade, Semi-auto grade, Machine grade' },
    ],
    applications: [
      'Bundling corrugated cartons and export boxes',
      'Newspaper stacking and magazine bundling',
      'Retail goods palletizing before dispatch',
      'Light to medium industrial load securing',
      'E-commerce fulfilment centre carton bundling',
      'FMCG product unitizing for warehouse storage',
    ],
    faqs: [
      {
        q: 'What is the difference between PP and PET strapping?',
        a: 'PP (polypropylene) strapping is lighter and more economical — ideal for cartons, boxes, and lighter loads. PET (polyester) strapping is stiffer, retains tension better, and is suited for heavy industrial applications like steel coils or granite. For most general carton and pallet bundling, PP strapping is the right choice.',
      },
      {
        q: 'Which width of strapping should I use?',
        a: '9mm and 12mm widths work well for light cartons and small bundles. 15mm is the most common for standard carton palletizing. 19mm is used for heavier or larger pallet loads. If unsure, share your load weight and carton dimensions and we\'ll recommend the right width.',
      },
      {
        q: 'Do you supply machine-grade strapping?',
        a: 'Yes. We supply strapping in manual grade, semi-automatic grade, and fully machine-compatible grade. Please specify your strapping machine model or brand when enquiring so we can match the right roll width, core size, and roll weight.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: 'MOQ depends on width and grade. For standard 12mm and 15mm rolls, MOQ is typically 1 carton (5–10 rolls). Bulk orders with full-pallet quantities receive better pricing. Contact us for a quote based on your monthly requirement.',
      },
      {
        q: 'Do you supply PP strapping in colours other than natural?',
        a: 'Yes. Natural (white/cream) is standard stock. Black is available as well. Other colours can be arranged depending on quantity requirements. Printed or branded strapping is not available — for branding, consider printed BOPP tape instead.',
      },
      {
        q: 'What is the shelf life of PP strapping?',
        a: 'PP strapping should be stored in a cool, dry place away from direct sunlight. Under proper storage conditions, shelf life is typically 2 years. Avoid prolonged exposure to UV or heat, which can degrade the polymer and reduce tensile strength.',
      },
      {
        q: 'Is delivery available outside Mumbai?',
        a: 'Yes. We supply to customers across India. For bulk orders, we coordinate with reliable logistics partners. Delivery timelines vary by location — contact us with your pincode for an accurate estimate.',
      },
      {
        q: 'Can you match the specifications of our existing strapping supplier?',
        a: 'In most cases, yes. Share the width, thickness, roll weight, core ID, and any grade or machine specifications from your current supplier. We will match or suggest a compatible alternative.',
      },
    ],
    whatsappText:
      'Hi, I need a quote for PP Strapping Rolls. Width: [width]. Grade: [manual/machine]. Monthly quantity: [qty]. Delivery location: [city].',
  },
  {
    slug: 'bopp-tapes',
    name: 'BOPP Tape Rolls',
    tagline: 'High-adhesion biaxially oriented polypropylene tape for reliable carton sealing.',
    image: '/images/Bopp-Tape-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'High-adhesion transparent tape for box sealing and carton closure.',
    highlights: [
      'Widths: 48mm & 72mm',
      'Acrylic & hot-melt adhesive options',
      'Lengths up to 100m per roll',
      'Consistent adhesion across batches',
    ],
    specs: [
      { label: 'Material', value: 'Biaxially Oriented Polypropylene (BOPP)' },
      { label: 'Width', value: '48mm, 72mm' },
      { label: 'Length', value: '50m, 65m, 100m per roll' },
      { label: 'Thickness', value: '40 micron – 65 micron' },
      { label: 'Adhesive Type', value: 'Acrylic, Hot-melt' },
      { label: 'Core Internal Diameter', value: '25mm / 76mm' },
      { label: 'Colour', value: 'Clear / Transparent (Brown on request)' },
      { label: 'Surface', value: 'Gloss / Matt (on request)' },
    ],
    applications: [
      'Sealing corrugated cartons for dispatch',
      'Box closure in warehousing and distribution',
      'E-commerce fulfilment parcel sealing',
      'Cold storage and freezer-compatible sealing (acrylic grade)',
      'Light bundling of documents or flat products',
      'Retail point-of-sale packaging and gift wrapping',
    ],
    faqs: [
      {
        q: 'What is the difference between acrylic and hot-melt BOPP tape?',
        a: 'Acrylic adhesive tape is water-based, performs well in a wide temperature range (including cold storage), and is more resistant to ageing. Hot-melt adhesive provides stronger initial tack and is better for rough or recycled-content surfaces. For most standard carton sealing, acrylic grade is recommended.',
      },
      {
        q: 'Which width is standard for carton sealing?',
        a: '48mm is the most common width for standard carton sizes used in FMCG and e-commerce. 72mm provides wider coverage and is used for heavier cartons or applications where stronger sealing is required. We recommend 48mm for most dispatch operations.',
      },
      {
        q: 'Do you supply printed BOPP tape with our company name or logo?',
        a: 'Printed BOPP tape with branding is available for sufficiently large orders (typically 1,000+ rolls). Please share your artwork and required text when enquiring. Printed tape typically has a longer lead time than standard stock. Contact us for pricing.',
      },
      {
        q: 'Which tape grade works for cold storage or freezer applications?',
        a: 'Acrylic-adhesive BOPP tape performs reliably in cold storage environments down to approximately 0°C. For deep-freeze conditions, a low-temperature hot-melt adhesive tape may be required. Please mention your storage temperature when enquiring.',
      },
      {
        q: 'What is low-noise BOPP tape?',
        a: 'Standard BOPP tape makes an unwinding noise due to the adhesive-surface separation. Low-noise (or silent) BOPP tape uses a quieter release coating — useful in quiet dispatch environments or where noise levels matter. We can supply low-noise grades on request.',
      },
      {
        q: 'Are 100-metre rolls available for high-volume dispatch?',
        a: 'Yes. We stock 65m and 100m roll lengths in addition to the standard 50m. Longer rolls reduce roll changes on taping machines and lower cost per metre for high-volume operations.',
      },
      {
        q: 'What is the minimum order quantity for BOPP tape?',
        a: 'Standard MOQ is 1 carton (typically 72 rolls of 48mm × 65m). For non-standard sizes or printed tape, higher MOQs apply. Contact us with your monthly consumption to discuss volume pricing.',
      },
      {
        q: 'How do you ensure adhesion consistency across tape batches?',
        a: 'We source BOPP tape from consistent, established manufacturers. Each incoming batch is checked for adhesion, thickness, and unwind properties before being stocked. Consistent quality across repeat orders is something we actively maintain.',
      },
    ],
    whatsappText:
      'Hi, I need a quote for BOPP Tape Rolls. Width: [48mm/72mm]. Length: [50m/65m/100m]. Adhesive: [acrylic/hot-melt]. Monthly quantity: [qty]. Delivery: [city].',
  },
  {
    slug: 'pet-straps',
    name: 'PET Straps',
    tagline: 'Heavy-duty polyester strapping for demanding industrial packaging loads.',
    image: '/images/PET-Strapping-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'Heavy-duty polyester straps for demanding industrial packaging.',
    highlights: [
      'Tensile strength up to 1500kg',
      'Widths from 9mm to 32mm',
      'Excellent tension retention',
      'Manual & pneumatic tool compatible',
    ],
    specs: [
      { label: 'Material', value: 'Polyester (PET)' },
      { label: 'Width', value: '9mm, 12mm, 15mm, 19mm, 25mm, 32mm' },
      { label: 'Thickness', value: '0.6mm – 1.2mm' },
      { label: 'Tensile Strength', value: '200kg – 1500kg' },
      { label: 'Elongation', value: 'Low elongation — excellent tension retention' },
      { label: 'Surface', value: 'Smooth / Embossed' },
      { label: 'Colour', value: 'Black, Green' },
      { label: 'Grade', value: 'Manual grade, Pneumatic tool grade' },
    ],
    applications: [
      'Steel coil securing for transport',
      'Granite and stone slab unitizing for export',
      'Heavy construction materials and timber bundling',
      'Heavy machinery and equipment crating',
      'Export container load securing',
      'Ceramic tile palletizing and heavy industrial pallet loads',
    ],
    faqs: [
      {
        q: 'When should I use PET straps instead of PP strapping?',
        a: 'PET strapping is the right choice when load weights exceed what PP can reliably handle, typically above 200–300kg per strap. PET retains tension far better than PP under vibration, heat, or load settling — which makes it essential for steel, stone, or heavy industrial loads in transit.',
      },
      {
        q: 'How do I determine the right tensile strength for my application?',
        a: 'As a general guide, the total strap tensile capacity should be at least 1.5–2× the load weight to allow for dynamic forces in transit. For example, a 1,000kg pallet ideally needs straps rated at 1,500kg+ in total. Share your load weight and strap count and we can recommend the right specification.',
      },
      {
        q: 'Are PET straps reusable?',
        a: 'PET straps are generally single-use once tensioned and cut. They should not be re-tensioned after removal as the buckle crimp point becomes a weak spot. However, short recovered pieces can be repurposed for lighter bundling if they are undamaged.',
      },
      {
        q: 'Are your PET straps compatible with pneumatic strapping tools?',
        a: 'Yes. We supply PET straps in widths and grades compatible with standard pneumatic tensioning and sealing tools. Please share your tool brand and model when ordering to ensure we supply the correct width and thickness.',
      },
      {
        q: 'What widths do you recommend for granite or stone loads?',
        a: 'For granite slabs and heavy stone exports, 25mm or 32mm wide PET strapping with high tensile grades (800kg–1500kg) is recommended. The wider strap distributes load better and reduces the risk of cutting into stone edges. Corner protectors are also advised.',
      },
      {
        q: 'Do you supply a high-tensile grade suitable for container export loads?',
        a: 'Yes. We stock high-tensile PET strapping rated for export-grade container loads. These grades have tighter thickness tolerances and consistent elongation specs. Contact us with your container load details for a recommendation.',
      },
      {
        q: 'What are the temperature limitations of PET strapping?',
        a: 'PET strapping performs well between -20°C and +80°C. For high-temperature environments above 80°C (e.g., steelworks, foundry outputs), PET may soften — consult us for alternative options. For normal transport and storage conditions, PET is highly reliable.',
      },
      {
        q: 'What is the minimum order quantity for bulk PET strap orders?',
        a: 'MOQ for PET strapping varies by width and grade. Standard widths (15mm, 19mm) are available in 1-coil quantities for trial orders. Bulk pricing applies from 10 coils upwards. Contact us with your monthly volume for pricing.',
      },
    ],
    whatsappText:
      'Hi, I need a quote for PET Straps. Width: [width]. Tensile strength: [kg]. Tool type: [manual/pneumatic]. Monthly quantity: [qty]. Delivery: [city].',
  },
  {
    slug: 'stretch-films',
    name: 'Stretch Films',
    tagline: 'LLDPE pallet wrapping film for load stabilization, dust, and moisture protection.',
    image: '/images/about.jpg',
    category: 'Packaging Material',
    description: 'Pallet wrapping film for load stabilization and protection.',
    highlights: [
      'Thickness: 17–23 micron',
      'Hand & machine grade available',
      'Elongation up to 250%',
      'Dust and moisture protection',
    ],
    specs: [
      { label: 'Material', value: 'Linear Low Density Polyethylene (LLDPE)' },
      { label: 'Width', value: '400mm, 500mm' },
      { label: 'Thickness', value: '17 micron – 23 micron' },
      { label: 'Elongation at Break', value: 'Up to 250%' },
      { label: 'Grade', value: 'Hand grade, Machine grade' },
      { label: 'Core', value: '50mm internal diameter' },
      { label: 'Colour', value: 'Clear / Transparent' },
      { label: 'Cling', value: 'One-sided cling (standard)' },
    ],
    applications: [
      'Pallet wrapping for warehouse storage and transit',
      'Load stabilization on mixed SKU pallets',
      'Dust and moisture protection during storage',
      'Cold chain logistics load wrapping',
      'Outdoor storage protection',
      'Bundling irregularly shaped items for dispatch',
    ],
    faqs: [
      {
        q: 'How do I choose the right micron thickness for my loads?',
        a: 'For light to medium pallets (under 500kg), 17–18 micron film is generally sufficient. For heavier or more demanding loads (500kg–1,000kg+), 20–23 micron provides better puncture resistance and holding force. In practice, many warehouses use 20 micron as a reliable all-round choice.',
      },
      {
        q: 'What is the difference between hand grade and machine grade stretch film?',
        a: 'Hand grade film is designed for manual application using a handheld dispenser. Machine grade film is pre-stretched by the wrapping machine during application, offering better film economy and faster wrapping speeds. Machine grade is not suitable for manual use as it is much harder to stretch by hand.',
      },
      {
        q: 'Can stretch film replace strapping for pallet loads?',
        a: 'Stretch film provides load stability and protection from dust, moisture, and pilferage — but it does not provide the vertical compressive force that strapping does. For stable, uniform pallet loads in controlled conditions, film alone may suffice. For heavy, mixed, or long-haul loads, combining strapping and stretch film offers maximum security.',
      },
      {
        q: 'What pallet weight can stretch film reliably secure?',
        a: 'A properly wrapped pallet with multiple film layers can handle loads up to approximately 1,000–1,200kg in standard transit conditions. The key factors are number of wraps, overlap percentage, and film thickness. For very heavy loads, supplementing with PET strapping is recommended.',
      },
      {
        q: 'Do you supply UV-resistant stretch film for outdoor storage?',
        a: 'Standard clear stretch film offers limited UV protection. For outdoor storage over extended periods, UV-stabilized stretch film is available — please specify this when enquiring. Adding opaque or coloured stretch film also helps reduce UV exposure while providing security through opacity.',
      },
      {
        q: 'What core size is the film supplied on — is it compatible with my dispenser?',
        a: 'Our stretch film is supplied on a 50mm (2-inch) internal diameter core — the standard size compatible with most handheld dispensers and pallet wrapping machines. If your equipment requires a different core size, please inform us at the time of order.',
      },
      {
        q: 'Approximately how much film is needed to wrap one standard pallet?',
        a: 'A standard 1,200mm × 1,000mm × 1,200mm pallet typically uses 100–150 metres of stretch film at 20–23 micron, applied with 50% overlap. A single 400mm × 300m roll covers approximately 2 pallets. Usage varies based on load shape, wrapping technique, and number of layers.',
      },
      {
        q: 'What is the MOQ for stretch film orders?',
        a: 'MOQ is typically 1 carton (6–10 rolls depending on roll length). Bulk orders receive better per-roll pricing. Contact us with your monthly pallet volume and we will provide a competitive quote.',
      },
    ],
    whatsappText:
      'Hi, I need a quote for Stretch Films. Thickness: [micron]. Grade: [hand/machine]. Width: [400mm/500mm]. Monthly quantity: [rolls]. Delivery: [city].',
  },
  {
    slug: 'taping-machine',
    name: 'Taping Machine',
    tagline: 'Manual and semi-automatic carton sealing machines for efficient dispatch operations.',
    image: '/images/machine.png',
    category: 'Packaging Equipment',
    description: 'Manual and semi-automatic machines for consistent tape application.',
    highlights: [
      'Manual & semi-auto models',
      'Carton width: 100–500mm',
      'Compatible with 48mm & 72mm tape',
      'Simple setup, low maintenance',
    ],
    specs: [
      { label: 'Type', value: 'Manual, Semi-automatic' },
      { label: 'Carton Width Range', value: '100mm – 500mm' },
      { label: 'Carton Height Range', value: '100mm – 400mm' },
      { label: 'Carton Length Range', value: 'Adjustable (unlimited)' },
      { label: 'Tape Width Compatibility', value: '48mm, 72mm' },
      { label: 'Tape Core Diameter', value: '76mm' },
      { label: 'Sealing Mode', value: 'Top-only, Top and Bottom' },
      { label: 'Machine Weight', value: '5kg – 12kg depending on model' },
    ],
    applications: [
      'Carton sealing at dispatch and fulfilment centres',
      'E-commerce packaging operations',
      'FMCG product carton line sealing',
      'Manufacturing plant secondary packaging',
      'Retail distribution carton closure',
      'Pharma and consumer goods packaging lines',
    ],
    faqs: [
      {
        q: 'What is the difference between a manual and semi-automatic taping machine?',
        a: 'A manual taping machine is pushed by the operator along the carton — the operator provides the motion. A semi-automatic machine has a motorized conveyor that pulls the carton through automatically once the operator places it on the machine. Semi-auto is faster and more consistent for high-volume operations.',
      },
      {
        q: 'Can the machine handle different carton sizes without adjustment?',
        a: 'The machines are adjustable for carton width and height within the specified range (100–500mm wide, 100–400mm high). Changeover between sizes typically takes 30–60 seconds with a simple knob adjustment. No tools are required for size changes on most models.',
      },
      {
        q: 'Does the machine work with standard BOPP tape rolls?',
        a: 'Yes. Our taping machines are designed to work with standard 48mm or 72mm wide BOPP tape rolls on a 76mm core — the same specification as the tape rolls we supply. This ensures consistent compatibility between your machine and tape.',
      },
      {
        q: 'What maintenance does a taping machine require?',
        a: 'Taping machines are low-maintenance. Regular maintenance includes cleaning the tape path and roller to remove adhesive build-up, checking blade sharpness (the tape cutting blade), and lubricating moving parts as per the manufacturer guide. Most machines require a basic clean every 1–2 weeks depending on usage volume.',
      },
      {
        q: 'Do you provide after-sales support for the machines?',
        a: 'We assist with initial setup guidance and can advise on common operational issues. For major repairs, we can connect you with service technicians. Replacement parts (blades, rollers, springs) are available and can be sourced through us.',
      },
      {
        q: 'Can a taping machine be integrated into an existing assembly or packing line?',
        a: 'Semi-automatic taping machines can be placed inline in a packing conveyor setup. They require a flat, stable surface and a power connection (for motorized models). For full inline integration with conveyor systems, please contact us to discuss your line layout and requirements.',
      },
      {
        q: 'How many tape rolls does the machine hold at a time?',
        a: 'Most models have a single tape roll holder — one roll feeds the top sealer and one the bottom sealer on dual-sealing models. Some machines can hold a spare roll for quick changeover. Standard roll lengths of 65m or 100m are recommended to minimize roll changes in high-volume operations.',
      },
      {
        q: 'Do you supply machines that seal both the top and bottom of a carton in one pass?',
        a: 'Yes. We supply top-sealing-only models (for pre-closed bottom cartons) and top-and-bottom sealing models that close both ends simultaneously in a single pass. The top-and-bottom model is more efficient for high-volume dispatch operations.',
      },
    ],
    whatsappText:
      'Hi, I am interested in a Taping Machine. Type: [manual/semi-auto]. Carton size range: [width × height]. Tape width: [48mm/72mm]. Sealing: [top only/top and bottom]. Please share details.',
  },
]

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return productDetails.find((p) => p.slug === slug)
}

export function getOtherProducts(slug: string): ProductDetail[] {
  return productDetails.filter((p) => p.slug !== slug)
}
