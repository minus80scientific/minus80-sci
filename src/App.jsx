export default function App() {
  return (
    <main style={{fontFamily:"Inter, system-ui, Arial, sans-serif", color:"#e8f7ff", background:"#0b1520", minHeight:"100vh"}}>
      <header style={{padding:"24px 18px", borderBottom:"1px solid #163247", background:"#0e2233"}}>
        <div style={{maxWidth:1080, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{fontSize:20, fontWeight:700, letterSpacing:.3}}>Minus 80 Scientific</div>
          <nav style={{display:"flex", gap:18, fontSize:14}}>
            <a href="#services" style={{color:"#8bd3ff", textDecoration:"none"}}>Services</a>
            <a href="#brands" style={{color:"#8bd3ff", textDecoration:"none"}}>Brands</a>
            <a href="#contact" style={{color:"#8bd3ff", textDecoration:"none"}}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={{maxWidth:1080, margin:"0 auto", padding:"56px 18px 32px"}}>
        <h1 style={{fontSize:36, margin:"0 0 10px"}}>Expert Cold Storage Repair</h1>
        <p style={{color:"#cde9f7", maxWidth:720, margin:"0 0 18px"}}>
          Fast, professional service for ultra-low temperature freezers, lab freezers, and industrial cold storage
          across Dallas/Fort Worth. Emergency support available.
        </p>
        <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          <a href="tel:+12144278733" style={{background:"#32b07b", color:"#03141d", padding:"10px 16px", borderRadius:10, fontWeight:700, textDecoration:"none"}}>Call 214-427-8733</a>
          <a href="mailto:info@minus80scientific.com" style={{border:"1px solid #1c3a4e", color:"#8bd3ff", padding:"10px 16px", borderRadius:10, textDecoration:"none"}}>Email Us</a>
        </div>
      </section>

      <section id="services" style={{maxWidth:1080, margin:"0 auto", padding:"20px 18px 10px"}}>
        <h2 style={{fontSize:24, margin:"0 0 12px"}}>Services</h2>
        <ul style={{color:"#cde9f7", lineHeight:1.8, margin:0, paddingLeft:18}}>
          <li>Diagnostics & repair for ULT freezers (-40°C to -86°C)</li>
          <li>Preventive maintenance and calibration</li>
          <li>Compressor, control board, and sensor replacement</li>
          <li>Door seal, hinges, and hardware service</li>
          <li>Emergency on-site response in DFW</li>
        </ul>
      </section>

      <section id="brands" style={{maxWidth:1080, margin:"0 auto", padding:"20px 18px 10px"}}>
        <h2 style={{fontSize:24, margin:"0 0 12px"}}>Brands We Service</h2>
        <p style={{color:"#cde9f7"}}>
          Thermo Fisher, Stirling, Panasonic, Eppendorf, So-Low, Revco, New Brunswick, and more.
        </p>
      </section>

      <section id="contact" style={{maxWidth:1080, margin:"0 auto", padding:"20px 18px 64px"}}>
        <h2 style={{fontSize:24, margin:"0 0 12px"}}>Contact</h2>
        <p style={{color:"#cde9f7", margin:"0 0 8px"}}>
          Urgent? Call <a href="tel:+12144278733" style={{color:"#8bd3ff"}}>214-427-8733</a>
        </p>
        <p style={{color:"#cde9f7", margin:0}}>
          Email: <a href="mailto:info@minus80scientific.com" style={{color:"#8bd3ff"}}>info@minus80scientific.com</a>
        </p>
      </section>
    </main>
  );
}
