// lib/clerk.js
import { ClerkProvider } from '@clerk/nextjs';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

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
