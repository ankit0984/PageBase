import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return(
    <div className="flex items-center justify-center min-h-screen px-4 py-6 lg:px-8 bg-amber-200">
        <SignUp className="bg-[#3b5998]"/>
    </div>
    );
}