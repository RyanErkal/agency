import Package from "../../../components/Package";

export default function LeadGenPackages() {
    return (
        <div className="bg-slate-800 text-slate-100 w-full flex flex-col items-center justify-center p-32">
            <h1 className="text-4xl font-bold playfair mb-6">Lead Generation Packages</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <Package title={"Starter"} subtitle={"Unlock your potential"} description={"Maximize your online presence and drive conversions with our Conversion Accelerator package. Combine the precision targeting of Google Ads with the vast reach of Facebook Ads to create a powerful marketing synergy. Capture the attention of your audience across multiple platforms, increase brand awareness, and fuel your success."} features={["Feature 1", "Feature 2", "Feature 3"]} />
                <Package title={"Growth"} subtitle={"More words here"} description={"Maximize your online presence and drive conversions with our Conversion Accelerator package. Combine the precision targeting of Google Ads with the vast reach of Facebook Ads to create a powerful marketing synergy. Capture the attention of your audience across multiple platforms, increase brand awareness, and fuel your success."} features={["Feature 1", "Feature 2", "Feature 3"]} />
                <Package title={"Enterprise"} subtitle={"More words here"} description={"Maximize your online presence and drive conversions with our Conversion Accelerator package. Combine the precision targeting of Google Ads with the vast reach of Facebook Ads to create a powerful marketing synergy. Capture the attention of your audience across multiple platforms, increase brand awareness, and fuel your success."} features={["Feature 1", "Feature 2", "Feature 3"]} />
            </div>
        </div>
    );
}