import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="flex flex-col items-center">
          <Link href="/pacijenti">Trebovanje - pacijenti</Link>
          <p>Nedavna trebovanja - pacijenti</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/apoteka">Trebovanje - apoteka</Link>
          <p>Nedavna trebovanja - apoteka</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/reklamacije">Reklamacije</Link>
          <p>Nedavne reklamacije</p>
        </div>
      </div>
    </main>
  );
}
