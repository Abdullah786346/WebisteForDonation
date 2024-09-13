import BasicNav from "@/components/BasicNav";
import Image from "next/image";

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <BasicNav />
      {children}
    </section>
  );
}
