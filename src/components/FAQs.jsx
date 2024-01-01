import FAQ from './FAQ';

export default function FAQs() {
    return (
        <div className="bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 w-full flex flex-col justify-center items-center h-screen">
            <h1 className="playfair text-4xl font-bold w-full text-center">Looking for answers?</h1>
            <div className="max-w-7xl w-full">
                <FAQ question={"What is the difference between a website and a web application?"} answer={"A website is a collection of web pages that are linked together. A web application is a website that has interactive features, such as a shopping cart or a contact form."} />
                <FAQ question={"What technologies do you use for website development?"} answer={"We utilize a range of technologies including WordPress, Webflow, and even offer full custom builds using the latest technologies available in the industry."} />
                <FAQ question={"Do you offer design services for websites?"} answer={"Absolutely! We have an in-house team of skilled UX/UI designers who create bespoke designs tailored to your brand and business needs."} />
                <FAQ question={"What is the typical process for website development?"} answer={"Our website development process involves a thorough consultation to understand your requirements, followed by design mock-ups for your approval. Once the design is finalized, our development team brings it to life. We ensure regular communication and updates throughout the process."} />
                <FAQ question={"What is the average timeline for website development?"} answer={"On average, our website development projects take around 12 weeks or more to complete. This timeline can vary depending on the complexity of the project and the specific features required."} />
                <FAQ question={"Do you offer website maintenance services?"} answer={"Yes, we offer website maintenance services to ensure that your website is always up-to-date and running smoothly. We also offer website hosting services to ensure that your website is always online."} />
            </div>
        </div>
    );
}

/*  <FAQ question={""} answer={""} /> */