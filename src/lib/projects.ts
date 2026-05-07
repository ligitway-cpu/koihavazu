import epique from "@/assets/hero-epique.jpg";
import galataport from "@/assets/hero-galataport.jpg";
import jw from "@/assets/hero-jwmarriott.jpg";
import soho from "@/assets/proj-soho.jpg";
import nusret from "@/assets/proj-nusret.jpg";
import met from "@/assets/proj-met.jpg";
import mesa from "@/assets/proj-mesa.jpg";
import acibadem from "@/assets/proj-acibadem.jpg";
import ulus from "@/assets/proj-ulus.jpg";
import seapearl from "@/assets/proj-seapearl.jpg";
import nevbahar from "@/assets/proj-nevbahar.jpg";
import reges from "@/assets/proj-reges.jpg";

export type Category = "Residential" | "Hospitality" | "Commercial" | "Public / Mixed-Use";

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: Category;
  image: string;
  alt: string;
  implementations: string[];
  description: string;
}

export const PROJECTS: Project[] = [
  { slug: "epique-island", title: "Epique Island", location: "Bodrum, Muğla", year: "2020", category: "Residential", image: epique, alt: "Epique Island luxury villa landscape", implementations: ["Hardscape pavements","Irrigation systems","Imported & local plant supply","Roll lawn","Wood and metal works","Green roof installations"], description: "An ultra-luxury villa community along the Aegean coastline — sculpted olive groves, infinity pools, and monolithic stone pavements that frame the sea." },
  { slug: "galataport", title: "Galataport Istanbul", location: "Beyoğlu, Istanbul", year: "2020", category: "Public / Mixed-Use", image: galataport, alt: "Galataport waterfront landscape", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Interior plantings","Green roof","Urban furniture"], description: "Istanbul's iconic waterfront transformation — a 1.2km cruise terminal and public promenade unifying heritage, hospitality, and Bosphorus access." },
  { slug: "jw-marriott-bosphorus", title: "JW Marriott İstanbul Bosphorus", location: "Bakırköy, Istanbul", year: "2022", category: "Hospitality", image: jw, alt: "JW Marriott rooftop garden", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Interior plantings","Custom pots","Urban furniture","Vertical gardens","EPDM playground surfacing"], description: "A signature five-star landscape — terraced gardens, copper water features and rooftop greenery overlooking the Bosphorus." },
  { slug: "soho-house", title: "Soho House Istanbul", location: "Beyoğlu, Istanbul", year: "2014", category: "Hospitality", image: soho, alt: "Soho House terrace garden", implementations: ["Hardscape","Drainage","Irrigation","Plant supply","Metal works","Green roof"], description: "A historic Beyoğlu palazzo brought back to life with an editorial rooftop garden — dense planting, vintage finishes, and city-wide views." },
  { slug: "nusret-steak-house", title: "Nusret Steak House Maçka", location: "Şişli, Istanbul", year: "2021", category: "Commercial", image: nusret, alt: "Nusret interior plantscape", implementations: ["Custom planter fabrication","Interior plantings"], description: "Bespoke interior plantscape and custom planter design for the Maçka flagship — bringing organic warmth into the dining environment." },
  { slug: "met-kagit-fabrikasi", title: "Met Kağıt Fabrikası", location: "Esenyurt, Istanbul", year: "2020", category: "Commercial", image: met, alt: "Met Kağıt landscaped grounds", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Interior green spaces","Custom pots","Urban furniture","Vertical garden","Green wall"], description: "An industrial campus reimagined with extensive green roof, vertical gardens, and curated employee outdoor spaces." },
  { slug: "mesa-bodrum", title: "Mesa Bodrum", location: "Bodrum, Muğla", year: "2022", category: "Residential", image: mesa, alt: "Mesa Bodrum residences", implementations: ["Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Metal works"], description: "Coastal residential development with Mediterranean planting palette, framing the rolling Bodrum terrain." },
  { slug: "acibadem-hastaneleri", title: "Acıbadem Hastaneleri", location: "Altunizade · Maslak · Ataşehir", year: "2017–2022", category: "Commercial", image: acibadem, alt: "Acıbadem Hospital healing garden", implementations: ["Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Green roof","Interior plantings","Urban furniture","EPDM playground","Vertical gardens"], description: "A multi-phase healing landscape program across three Acıbadem hospital campuses — restorative gardens that elevate patient and staff wellbeing." },
  { slug: "ulus-savoy", title: "Ulus Savoy", location: "Beşiktaş, Istanbul", year: "2012", category: "Residential", image: ulus, alt: "Ulus Savoy residential gardens", implementations: ["Drainage","Irrigation","Plant supply & installation","Roll lawn"], description: "Refined residential grounds with mature canopy trees, soft lawns, and a sense of permanence rare in modern developments." },
  { slug: "sea-pearl-atakoy", title: "Sea Pearl Ataköy", location: "Bakırköy, Istanbul", year: "2020", category: "Residential", image: seapearl, alt: "Sea Pearl Ataköy plaza", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Interior plantings","Urban furniture","Vertical garden","EPDM playground"], description: "A waterfront landmark featuring a grand fountain plaza, palm-lined promenades and resident gardens." },
  { slug: "nevbahar-uskudar", title: "Nevbahar Üsküdar", location: "Üsküdar, Istanbul", year: "2021", category: "Residential", image: nevbahar, alt: "Nevbahar terraces over Bosphorus", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works","Interior plantings","Urban furniture","Vertical garden"], description: "Terraced private gardens and pergolas overlooking the Bosphorus — vertical greenery and architectural calm." },
  { slug: "reges-otel", title: "Reges Hotel Çeşme", location: "Çeşme, İzmir", year: "2019", category: "Hospitality", image: reges, alt: "Reges Hotel pool terrace", implementations: ["Concrete works","Hardscape","Drainage","Irrigation","Plant supply & installation","Roll lawn","Wood works","Metal works"], description: "Coastal resort landscaping — infinity pools that meet the Aegean horizon, native planting, and palm-shaded terraces." },
];

export const STATS = [
  { value: 26, suffix: "", label: "Years" },
  { value: 12, suffix: "+", label: "Landmark Projects" },
  { value: 5, suffix: "", label: "Integrated Divisions" },
  { value: 500, suffix: "+", label: "Plant Species" },
  { value: 3, suffix: "", label: "Nursery Locations" },
  { value: 25, suffix: "", label: "Awards" },
];

export const DIVISIONS = [
  { key: "contracting", title: "Contracting", body: "Earthworks, hardscape, drainage, irrigation, planting and site furnishing.", url: "https://isikpeyzaj.com" },
  { key: "design", title: "Design", body: "Hardscape & softscape design, lighting plans, technical specifications and BOQ.", url: "https://isiktasarim.com" },
  { key: "maintenance", title: "Maintenance", body: "Expert periodic upkeep — pruning, fertilizing, pest control, lawn care.", url: "https://isikbahce.com" },
  { key: "production", title: "Production", body: "500+ species across three nurseries in Riva, Yalova, and Bodrum.", url: "https://isikbitkiuretim.com" },
  { key: "greenmall", title: "GreenMall", body: "Online and retail garden centre — plants, soils, pots, furniture, and BBQs.", url: "https://greenmall.com.tr" },
];

export const TIMELINE = [
  { year: "1998", event: "Founded in Kavacık, Istanbul" },
  { year: "2012", event: "Ulus Savoy, Beşiktaş" },
  { year: "2014", event: "Soho House Istanbul" },
  { year: "2017", event: "Acıbadem Hastaneleri (Phase 1)" },
  { year: "2019", event: "Reges Hotel, Çeşme" },
  { year: "2020", event: "Epique Island · Galataport · Sea Pearl Ataköy" },
  { year: "2021", event: "Nusret Steak House · Nevbahar Üsküdar" },
  { year: "2022", event: "JW Marriott Bosphorus · Mesa Bodrum" },
  { year: "2023", event: "25th Anniversary" },
  { year: "2026", event: "Growing forward" },
];
