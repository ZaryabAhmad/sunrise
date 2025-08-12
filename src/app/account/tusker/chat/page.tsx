import Image from "next/image";
import placeholderProfile from "../../../../images/128x128.png";
import { Send } from "lucide-react";

export default function CustomerChatPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[70vh]">
            <div className="card md:col-span-1 flex flex-col">
                <div className="cardHeader">
                    <div className="cardTitle text-2xl tracking-tight">Conversations</div>
                    <p className="text-sm text-[var(--muted-foreground)]">Your active chats with customers.</p>
                </div>
                <div className="cardContent flex-grow overflow-auto">
                    <div className="space-y-2">
                        <div className="group active flex items-center gap-3 p-2 rounded-lg bg-[var(--accent)] cursor-pointer">
                            <div className="h-10 w-10 min-w-10">
                                <Image
                                    src={placeholderProfile}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="h-full w-full rounded-full"
                                />
                                {/* <span className="h-full w-full overflow-hidden rounded-full flex items-center justify-center text-base text-white bg-[var(--primary)]">JD</span> */}
                            </div>
                            <div>
                                <p className="font-semibold group-[.active]:text-white">Maria G.</p>
                                <p className="text-xs text-[var(--muted-foreground)] group-[.active]:text-white">About: Mount 65" TV on wall</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--secondary)] cursor-pointer">
                            <div className="h-10 w-10 min-w-10">
                                {/* <Image
                                    src={placeholderProfile}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="h-full w-full rounded-full"
                                /> */}
                                <span className="h-full w-full overflow-hidden rounded-full flex items-center justify-center text-base text-white bg-[var(--primary)]">JD</span>
                            </div>
                            <div>
                                <p className="font-semibold">Alex S.</p>
                                <p className="text-xs text-[var(--muted-foreground)]">About: Assemble IKEA Bookshelf</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card md:col-span-2 flex flex-col">
                <div className="border-b border-[var(--border)] cardHeader">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 min-w-10">
                            {/* <Image
                                src={placeholderProfile}
                                alt="avatar"
                                width={40}
                                height={40}
                                className="h-full w-full rounded-full"
                            /> */}
                            <span className="h-full w-full overflow-hidden rounded-full flex items-center justify-center text-base text-white bg-[var(--primary)]">JD</span>
                        </div>
                        <div>
                            <div className="cardTitle text-2xl tracking-tight">Maria G.</div>
                            <p className="text-sm text-[var(--muted-foreground)]">Regarding "Mount 65" TV on wall"</p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow overflow-auto p-6 space-y-4">
                    <div className="flex justify-end">
                        <div className="bg-[var(--primary)] text-[var(--primary-foreground)] p-3 rounded-lg max-w-xs">
                            <p className="text-sm">Hi Maria, I've reviewed your job post. I have experience mounting TVs and can do it this weekend.</p>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-[var(--secondary)] p-3 rounded-lg max-w-xs">
                            <p className="text-sm">That's great! Would Saturday morning work for you?</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-[var(--primary)] text-[var(--primary-foreground)] p-3 rounded-lg max-w-xs">
                            <p className="text-sm">Saturday at 10 AM works perfectly. I'll see you then.</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-[var(--border)]">
                    <div className="relative">
                        <input placeholder="Type your message..." className="h-10 text-base md:text-sm input pr-10" />
                        <button className="absolute flex items-center justify-center right-2 top-1/2 -translate-y-1/2 h-8 w-8">
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
