import Image from "next/image";
// Link
import Link from "next/link";
// images
import logo from "@/images/logo.png";
import profile from "@/images/profile.png";

// stylesheet
import "../globals.css";

// icon
import { TfiWrite } from "react-icons/tfi";
import { LuBellRing } from "react-icons/lu";

export default function Header() {
  return (
    <div className="header slide-in-top">
        <div className="navlinks">
          <div className="logo">
            <Image src={logo} alt="logo_img" className="logo_img" />
          </div>
          <Link href={"./"} className="links">
            Home
          </Link>
          <Link href={"About_page"} className="links ">
            About Us
          </Link>
          <Link href={"Skills_page"} className="links ">
            Blog
          </Link>
          <Link href={"Contact_page"} className="links ">
            Contact
          </Link>
        </div>

        <div className="settings">
          <div className="write_note">
            <span className="write_icon">
              <TfiWrite />{" "}
            </span>
            Write
          </div>
          <div className="bell_icon">
            <LuBellRing />
          </div>
          <div className="profile">
            <Image src={profile} alt="profile_img" className="profile_img" />
          </div>
        </div>
      </div>
  )
}
