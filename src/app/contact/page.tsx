import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div className="h-[vh80] py-8 flex flex-col items-center text-center">
        <h1 className="text-3xl">Please come visit us at:</h1>

        <p>10141 Lampson Ave, Garden Grove CA 92840</p>
        
        <h1 className="text-3xl">Call or email to schedule a tour:</h1>

        <p><a href="tel:7146366300">📞 (714) 636 - 6300</a></p>

        <p><a href="mailto:ggmontessori@gmail.com">💻 ggmontessori@gmail.com</a></p>

          <iframe height="400" className="w-screen md:max-w-screen-sm" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=10141+Lampson+Avenue,+Garden+Grove,+CA+92840&amp;aq=0&amp;oq=10141+Lampson+Avenue,+Garden+Grove,+CA+92840&amp;sll=33.844186,-118.338289&amp;sspn=0.018,0.042272&amp;ie=UTF8&amp;hq=&amp;hnear=10141+Lampson+Ave,+Garden+Grove,+Orange,+California+92840&amp;t=m&amp;ll=33.782928,-117.957888&amp;spn=0.024968,0.036478&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>

          
			
      </div>
      <div>
          <div className="flex gap-8 justify-center p-4">
            <a href="https://www.yelp.com/biz/garden-grove-montessori-academy-garden-grove?osq=garden+grove+montessori" target="_new"><svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-red-600" viewBox="0 0 384 512"><path d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z"/></svg></a>
            <a href="https://maps.app.goo.gl/KQtjpUSpny6GFA7K9" target="_new"><svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-blue-100" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></a>
          </div>

          <p className="p-4 text-center">Thanks for the love on Yelp/Google!</p>
        </div>
    </section>
  );
}
