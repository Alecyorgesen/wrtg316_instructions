import React from "react";

export default function Requirements() {
  return (
    <div id="requirements">
      <h2>Requirements</h2>
      <ul>
        <li>
          Computer (Instructions are built for Windows or Mac operating systems)
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/windows/wsl/install">
            WSL
          </a>
          (Windows only)
        </li>
        <li>
          <a href="https://www.linkedin.com/pulse/installing-gcc-compiler-windows-run-c-program-gitbash-david-michael/">
            GCC compiler
          </a>
          (Windows if using Git Bash)
        </li>
        <li>
          <a href="https://cs.millersville.edu/~gzoppetti/InstallingGccMac.html">
            GCC compiler
          </a>
          (Apple, follow steps #1-2)
        </li>
      </ul>
    </div>
  );
}
