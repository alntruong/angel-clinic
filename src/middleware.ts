// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from 'next-auth/middleware'

// Applies next-auth to matching routes - can be regex
// Ref: https://next.js.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/staff"] } 