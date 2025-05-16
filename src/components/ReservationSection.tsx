import React, { useEffect } from 'react';

const ReservationSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="rezervace" className="container py-12 md:py-16 lg:py-20">
      <h2 className="section-title reveal text-center mb-10 md:mb-12">Rezervační kalendář</h2>
      <div className="reveal max-w-4xl mx-auto">
        {/* Calendly inline widget begin */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/kubos-studnicka/30min?hide_gdpr_banner=1&primary_color=e62828"
          style={{ minWidth: '320px', height: '700px' /* You might need to adjust this height */ }}
        ></div>
        {/* Calendly inline widget end */}
      </div>
    </section>
  );
};

export default ReservationSection;
