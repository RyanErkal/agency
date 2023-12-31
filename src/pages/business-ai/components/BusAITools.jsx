import Tool from "../../../components/Tool";
import { GoogleAds, GoogleAdSense, GoogleAnalytics, GoogleCloud, MailChip, ChatGPT, ClickFunnels } from "../../../svgs/svgs";

export default function LeadGenTools() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 h-fit">
            <h1 className="playfair text-4xl font-bold mb-6">Tools we use</h1>
            <div className="grid grid-cols-2 xl:grid-cols-7 gap-6 max-w-7xl">
                <Tool>
                    <GoogleAds size={40} />
                </Tool>
                <Tool>
                    <GoogleAdSense size={40} />
                </Tool>
                <Tool>
                    <GoogleAnalytics size={40} />
                </Tool>
                <Tool>
                    <GoogleCloud size={40} />
                </Tool>
                <Tool>
                    <MailChip size={40} />
                </Tool>
                <Tool>
                    <ChatGPT size={40} />
                </Tool>
                <Tool>
                    <ClickFunnels size={40} />
                </Tool>
            </div>
        </div>
    );
}