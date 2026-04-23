import { SignUp as ClerkSignUp } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/sign-up/$")({
	component: SignUp,
});

function SignUp() {
	return (
		<section id="sign-up">
			<ClerkSignUp
				routing="path"
				path="/sign-up"
				signInUrl="/sign-in"
				fallbackRedirectUrl="/"
			/>
		</section>
	);
}
