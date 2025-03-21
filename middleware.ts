import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hangulRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (hangulRegex.test(decodeURIComponent(request.nextUrl.pathname))) {
    const searchParams: URLSearchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    // console.log(canonicalURL);
    return NextResponse.rewrite(new URL(`/wiki/${id}`, request.url));
  }
}
