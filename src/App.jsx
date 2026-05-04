import React from 'react';
import { 
  Heart, 
  Award, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  GraduationCap, 
  Clock,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-trust-100" role="navigation" aria-label="Main Navigation">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-healthcare-600 p-2 rounded-lg" aria-hidden="true">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-trust-900 block leading-none">Sarah Jenkins</span>
            <span className="text-xs font-medium text-healthcare-600 uppercase tracking-wider">Registered Nurse (RN, BSN)</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-trust-600 hover:text-healthcare-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-healthcare-600 rounded-md px-1">About</a>
          <a href="#specialties" className="text-trust-600 hover:text-healthcare-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-healthcare-600 rounded-md px-1">Specialties</a>
          <a href="#experience" className="text-trust-600 hover:text-healthcare-600 font-medium transition focus:outline-none focus:ring-2 focus:ring-healthcare-600 rounded-md px-1">Experience</a>
          <a href="#contact" className="px-5 py-2.5 bg-healthcare-600 text-white rounded-full font-semibold hover:bg-healthcare-700 transition shadow-md shadow-healthcare-600/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-healthcare-600">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="pt-32 pb-20 px-4 bg-gradient-to-b from-healthcare-50 to-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-healthcare-100 rounded-full shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold text-trust-700">Available for Care Services</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-trust-900 leading-[1.1]">
          Dedicated to <span className="text-healthcare-600">Patient-Centered</span> Excellence
        </h1>
        <p className="text-xl text-trust-600 max-w-2xl leading-relaxed">
          Board-certified Registered Nurse with 8+ years of clinical experience in high-acuity environments. Specializing in critical care, trauma recovery, and empathetic patient advocacy.
        </p>
        <div className="flex flex-wrap gap-5">
          <button className="px-8 py-4 bg-trust-900 text-white rounded-2xl font-bold hover:bg-trust-800 transition-all shadow-xl flex items-center gap-2">
            <Download size={20} />
            Download CV / Resume
          </button>
          <button className="px-8 py-4 bg-white text-trust-700 border border-trust-200 rounded-2xl font-bold hover:border-healthcare-300 hover:text-healthcare-600 transition-all shadow-sm">
            Clinical Portfolio
          </button>
        </div>
        <div className="flex items-center gap-8 pt-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-trust-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Patient" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold text-trust-900">500+ Patients Served</p>
            <p className="text-xs text-trust-500">Across 3 Major Medical Centers</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
            alt="Sarah Jenkins RN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-trust-900/40 to-transparent"></div>
        </div>
        {/* Floating Badges */}
        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-trust-100 flex items-center gap-4 animate-bounce-slow">
          <div className="bg-healthcare-100 p-3 rounded-xl">
            <Award className="text-healthcare-600" size={32} />
          </div>
          <div>
            <p className="font-bold text-trust-900 text-lg">Top Performer</p>
            <p className="text-sm text-trust-500">Excellence in Care 2024</p>
          </div>
        </div>
        <div className="absolute top-20 -left-12 bg-white p-5 rounded-2xl shadow-xl z-20 border border-trust-100 hidden md:flex items-center gap-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <ShieldCheck className="text-green-600" size={24} />
          </div>
          <span className="font-bold text-trust-800">ACLS/BLS Certified</span>
        </div>
      </div>
    </div>
  </section>
);

const SpecialtyCard = ({ icon: Icon, title, description, skills }) => (
  <div className="p-8 bg-white rounded-3xl border border-trust-100 hover:border-healthcare-200 hover:shadow-2xl transition-all duration-300 group">
    <div className="w-16 h-16 bg-healthcare-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-healthcare-600 transition-all duration-300 group-hover:scale-110">
      <Icon className="text-healthcare-600 group-hover:text-white transition-colors" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-trust-900 mb-4">{title}</h3>
    <p className="text-trust-600 leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-trust-50 text-trust-600 text-xs font-semibold rounded-md border border-trust-100">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SectionHeading = ({ badge, title, subtitle, light = false }) => (
  <div className="text-center mb-20">
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${light ? 'bg-white/10 text-white' : 'bg-healthcare-100 text-healthcare-700'}`}>
      {badge}
    </span>
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${light ? 'text-white' : 'text-trust-900'}`}>{title}</h2>
    <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-healthcare-100' : 'text-trust-500'}`}>{subtitle}</p>
  </div>
);

const ExperienceItem = ({ year, role, facility, details, current = false }) => (
  <div className="flex gap-8 relative group">
    <div className="w-32 flex-shrink-0 text-right pt-2">
      <span className={`text-sm font-black ${current ? 'text-healthcare-600' : 'text-trust-400'}`}>{year}</span>
    </div>
    <div className="relative pb-16 border-l-2 border-trust-100 pl-10 group-last:pb-0">
      <div className={`absolute -left-[11px] top-2.5 w-5 h-5 rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-125 ${current ? 'bg-healthcare-600 animate-pulse' : 'bg-trust-300'}`}></div>
      <h4 className="text-2xl font-bold text-trust-900 mb-1">{role}</h4>
      <p className="text-healthcare-600 font-semibold mb-4">{facility}</p>
      <ul className="space-y-3">
        {details.map((detail, i) => (
          <li key={i} className="flex gap-3 text-trust-600 leading-relaxed">
            <CheckCircle2 size={18} className="text-healthcare-500 flex-shrink-0 mt-1" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-trust-900">
      <Navbar />
      <Hero />
      
      {/* Specialties */}
      <section id="specialties" className="py-24 px-4 bg-trust-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Expertise"
            title="Clinical Specialties"
            subtitle="Extensive hands-on experience in specialized medical environments, focusing on precision, safety, and patient outcomes."
          />
          <div className="grid lg:grid-cols-3 gap-10">
            <SpecialtyCard 
              icon={Heart}
              title="Critical Care (ICU)"
              description="Managing life-sustaining equipment and providing intensive monitoring for patients with life-threatening conditions."
              skills={["Ventilators", "Hemodynamics", "CRRT"]}
            />
            <SpecialtyCard 
              icon={Award}
              title="Trauma Recovery"
              description="Post-surgical management for orthopedic and neurological trauma patients, ensuring optimal healing and pain management."
              skills={["Post-Op", "Wound Vac", "Pain Mgmt"]}
            />
            <SpecialtyCard 
              icon={BookOpen}
              title="Patient Advocacy"
              description="Coordinating complex care plans between physicians, families, and social services to ensure patient rights and needs."
              skills={["Case Mgmt", "Ethics", "Care Coordination"]}
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            badge="Professional History"
            title="Clinical Experience"
            subtitle="A track record of excellence in leading healthcare institutions."
          />
          <div className="mt-16">
            <ExperienceItem 
              year="2020 — Present"
              role="Senior Intensive Care Nurse"
              facility="City General Medical Center — ICU"
              current={true}
              details={[
                "Leading a team of 6 staff nurses in the 24-bed Medical ICU.",
                "Expert in managing ECLS/ECMO and complex respiratory failure cases.",
                "Reduced unit medication error rate by 15% through protocol optimization."
              ]}
            />
            <ExperienceItem 
              year="2016 — 2020"
              role="Registered Nurse (ER)"
              facility="St. Jude Regional Hospital — Emergency Dept"
              details={[
                "Triage and emergency response for Level II Trauma Center.",
                "Coordinated rapid response teams for cardiac and stroke emergencies.",
                "Mentored 12 new graduate nurses during their residency period."
              ]}
            />
            <ExperienceItem 
              year="2014 — 2016"
              role="Staff Nurse (Medical/Surgical)"
              facility="North Suburban Health Clinic"
              details={[
                "Provided comprehensive care for post-operative recovery patients.",
                "Managed patient education for chronic disease management (Diabetes, HTN).",
                "Awarded 'Nurse of the Quarter' for patient satisfaction excellence."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 px-4 bg-trust-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-healthcare-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-healthcare-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <GraduationCap className="text-healthcare-400" size={32} />
                Education
              </h2>
              <div className="space-y-10">
                <div className="border-l-2 border-healthcare-500/30 pl-8">
                  <h3 className="text-xl font-bold">Bachelor of Science in Nursing (BSN)</h3>
                  <p className="text-healthcare-300 mb-2">University of Washington • 2010 — 2014</p>
                  <p className="text-trust-300">Summa Cum Laude, President of Nursing Student Association.</p>
                </div>
                <div className="border-l-2 border-healthcare-500/30 pl-8">
                  <h3 className="text-xl font-bold">Critical Care Nursing Residency</h3>
                  <p className="text-healthcare-300 mb-2">Seattle Medical Center • 2014 — 2015</p>
                  <p className="text-trust-300">Specialized training in ACLS, PALS, and advanced hemodynamics.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <ShieldCheck className="text-healthcare-400" size={32} />
                Certifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "Registered Nurse (RN)", authority: "State Board of Nursing" },
                  { name: "CCRN (Adult)", authority: "AACN Certification Corp" },
                  { name: "ACLS Certified", authority: "American Heart Association" },
                  { name: "BLS/CPR", authority: "American Red Cross" },
                  { name: "Wound Care Specialist", authority: "WOCNCB" },
                  { name: "PALS Certified", authority: "American Heart Association" }
                ].map((cert, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
                    <p className="font-bold text-white mb-1">{cert.name}</p>
                    <p className="text-xs text-healthcare-300 font-medium">{cert.authority}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-healthcare-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 text-white lg:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">Contact Information</h2>
                <p className="text-healthcare-100 text-lg mb-12">
                  I am available for clinical consultations, healthcare speaking engagements, or professional nursing opportunities.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-sm text-healthcare-200">Email Me</p>
                      <p className="text-lg font-bold">sarah.nurse@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-sm text-healthcare-200">Call Me</p>
                      <p className="text-lg font-bold">+1 (206) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-sm text-healthcare-200">Location</p>
                      <p className="text-lg font-bold">Seattle, WA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"><Linkedin /></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"><Github /></a>
              </div>
            </div>
            <div className="bg-white p-12 lg:p-20 lg:w-3/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-trust-700 text-sm font-bold mb-2">First Name</label>
                    <input className="w-full px-5 py-4 bg-trust-50 border border-trust-200 rounded-xl text-trust-900 focus:outline-none focus:ring-2 focus:ring-healthcare-600 focus:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-trust-700 text-sm font-bold mb-2">Last Name</label>
                    <input className="w-full px-5 py-4 bg-trust-50 border border-trust-200 rounded-xl text-trust-900 focus:outline-none focus:ring-2 focus:ring-healthcare-600 focus:bg-white transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-trust-700 text-sm font-bold mb-2">Professional Email</label>
                  <input className="w-full px-5 py-4 bg-trust-50 border border-trust-200 rounded-xl text-trust-900 focus:outline-none focus:ring-2 focus:ring-healthcare-600 focus:bg-white transition" />
                </div>
                <div>
                  <label className="block text-trust-700 text-sm font-bold mb-2">Subject</label>
                  <select className="w-full px-5 py-4 bg-trust-50 border border-trust-200 rounded-xl text-trust-900 focus:outline-none focus:ring-2 focus:ring-healthcare-600 focus:bg-white transition">
                    <option>Professional Inquiry</option>
                    <option>Consultation Request</option>
                    <option>Speaking Engagement</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-trust-700 text-sm font-bold mb-2">Message</label>
                  <textarea rows="5" className="w-full px-5 py-4 bg-trust-50 border border-trust-200 rounded-xl text-trust-900 focus:outline-none focus:ring-2 focus:ring-healthcare-600 focus:bg-white transition"></textarea>
                </div>
                <button className="w-full py-5 bg-trust-900 text-white rounded-xl font-bold text-lg hover:bg-trust-800 transition-all shadow-xl shadow-trust-900/10">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-trust-950 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <div className="bg-healthcare-600 p-1.5 rounded-md">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Sarah Jenkins <span className="text-healthcare-400 font-normal">RN, BSN</span></span>
          </div>
          <div className="flex gap-8 text-sm text-trust-400 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#specialties" className="hover:text-white transition">Specialties</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          </div>
          <p className="text-trust-500 text-sm">© 2026 Sarah Jenkins. Professional Nursing Portfolio.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
