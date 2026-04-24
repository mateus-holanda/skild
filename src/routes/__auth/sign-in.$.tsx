import { SignIn as ClerkSignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/sign-in/$")({
	component: SignIn,
});

function SignIn() {
	return (
		<section id="sign-in">
			<ClerkSignIn
				routing="path"
				path="/sign-in"
				signUpUrl="/sign-up"
				fallbackRedirectUrl="/"
			/>
		</section>
	);
}
