"use client";

import { useTheme } from "next-themes";

export const Header = () => {
  const { setTheme } = useTheme();
//   const setThe = (them: any) => {
//     // alert(them);
//     setTheme(them);
//   };
  return (
    <header>
      Header
      <div>
        <br />
        <br />
        <button onClick={() => setTheme("dark")}>Dark</button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={() => setTheme("light")}>Light</button>
      </div>
    </header>
  );
};
