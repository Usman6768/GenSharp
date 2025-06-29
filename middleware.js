import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
])

export default clerkMiddleware((auth, req) => {
  if(!auth().userId && isProtectedRoute(req)){ // if user is not logged in and try to access restricted routes
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};