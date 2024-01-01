import FAQ from '../../../components/FAQ';

export default function LeadGenFAQs() {
    return (
        <div className="bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 w-full flex flex-col justify-center items-center h-screen">
            <h1 className="playfair text-4xl font-bold w-full text-center">Looking for answers?</h1>
            <div className="max-w-7xl w-full">
                <FAQ question="What is lead generation?" answer="Lead generation is the process of attracting and converting strangers and prospects into someone who has indicated interest in your company's product or service. Some examples of lead generators are job applications, blog posts, coupons, live events, and online content." />
                <FAQ question="What methods do you use for lead generation?" answer="We employ a multi-faceted approach to lead generation, utilizing platforms such as Meta (formerly Facebook), Google, and email marketing. This ensures a diversified and effective strategy to attract potential customers." />
                <FAQ question="Do you handle ad spend for lead generation campaigns?" answer="Ad spend is paid for by the client. However, we are behind the wheel ensuring spend is allocated to best performing channels. We keep clients notified every step of the way to ensure they are fully informed on decisions made." />
                <FAQ question="What services are included in your lead generation offering?" answer="Our lead generation services encompass various aspects, including funnel creation, offer creation, targeted ad campaigns, and email marketing. We provide end-to-end support to help you attract and convert leads." />
                <FAQ question="Is lead generation suitable for service-based businesses?" answer="Absolutely. Our lead generation strategies are tailored to suit service-based businesses. Whether you're in solar, fitness, or any other service industry, we can customize our approach to align with your business goals." />
                <FAQ question="What sets your lead generation strategies apart?" answer="Our strategies are tailored to service-based businesses, focusing on generating high-quality leads that align with your specific industry and target audience. We have 4 years experience and a large catalog of offers that have brought success in the past. This means all of our efforts are based on past success (with some tweaks along the way). This puts us in a unique position where we know what works, know what doesn’t and know what hurdles to overcome." />
            </div>
        </div>
    );
}