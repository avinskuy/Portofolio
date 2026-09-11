import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center">
      <p className="text-sm text-mist">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  );
}
