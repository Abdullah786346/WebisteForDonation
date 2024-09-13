// icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const latestDonations = [
  {
    id: 1,
    title: "Community Center",
    description:
      "With malice toward none, with charity for all, with firmness in the right, as God gives us to see the right, let us strive on to finish the work....",
    image: "community-center.jpeg",
    raised: 1000,
    goal: 10000,
  },
  {
    id: 2,
    title: "Childhood Development",
    description:
      "We, the people, recognize that wehave responsibilities as well as rights; that our destinies are bound together; that a freedom which only asks....",
    image: "childhood-development.jpeg",
    raised: 50760,
    goal: 70200,
  },
  {
    id: 3,
    title: "Healthcare Needs",
    description:
      "But shouldn’t we spend that money on providing health clinics and safe  water? Aren’t these things more relevant? I have no intention of downplaying the....",
    image: "healthcare-needs.jpeg",
    raised: 17250,
    goal: 34500,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Harista Pro",
    title: "CEO & Founder",
    image: "team-member-1.jpeg",
  },
  {
    id: 2,
    name: "Rosannie Khan",
    title: "Secretary",
    image: "team-member-2.jpeg",
  },
  {
    id: 3,
    name: "Mathias Little",
    title: "Co-Founder",
    image: "team-member-3.jpeg",
  },
];

export const formFields = [
  {
    id: 1,
    type: "text",
    name: "name",
    label: "Name",
    icon: FaUser,
    required: true,
    placeHolder: "Enter your name",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    label: "Email",
    icon: MdEmail,
    required: true,
    placeHolder: "Enter your email",
  },

  {
    id: 1,
    type: "text",
    name: "firstName",
    label: "First Name",
    icon: FaUser,
    required: true,
    placeHolder: "Enter first name",
  },
  {
    id: 1,
    type: "text",
    name: "lastName",
    label: "Last Name",
    icon: FaUser,
    required: true,
    placeHolder: "Enter last name",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    label: "Email",
    icon: MdEmail,
    required: true,
    placeHolder: "Enter E-mail",
  },
  {
    id: 2,
    type: "number",
    name: "number",
    label: "Phone Number",
    icon: MdEmail,
    required: true,
    placeHolder: "+233",
  },
];
export const navigationLinks = [
  {
    title: "Home",
    href: "/main",
  },
  {
    title: "About",
    href: "/main/about",
  },
  {
    title: "Charities",
    href: "/main/charities",
  },
  {
    title: "Contact",
    href: "/main/contact",
  },
];
export const charityHomes = [
  {
    name: "Galaxy Foundation",
  },
  {
    name: "Galaxy Foundation",
  },
  {
    name: "Galaxy Foundation",
  },
  {
    name: "Galaxy Foundation",
  },
  {
    name: "Galaxy Foundation",
  },
  {
    name: "Galaxy Foundation",
  },
];
