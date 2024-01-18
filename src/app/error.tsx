"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={`wrapper`}>
      <h1>Something went wrong!</h1>
      <Link href="/">Return home</Link>
    </section>
  );
}
