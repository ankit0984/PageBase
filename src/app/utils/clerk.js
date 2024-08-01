// lib/clerk.js
import {RedirectToSignIn, SignedOut, SignedIn, SignIn} from "@clerk/nextjs";

export function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        return (
        <>
                <SignedIn>
                    <Component {...props} />
                </SignedIn>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
            </>
        );
    };
}
