import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const protectedPaths = ['/explore', '/submit', '/project', '/profile']
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

  if (!isProtected) return NextResponse.next()

  const access_token = request.cookies.get('sb-access-token')?.value
  if (!access_token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Optionally, verify the token with Supabase
  // const { data, error } = await supabase.auth.getUser(access_token)
  // if (error || !data.user) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/explore/:path*', '/submit/:path*', '/project/:path*', '/profile/:path*'],
} 