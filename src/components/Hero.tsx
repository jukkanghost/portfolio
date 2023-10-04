import { Background } from "@/utils/background/Background";
import { Navbar } from "@/utils/navbar/Navbar";
import { Section } from "@/utils/section/Section";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/utils/button/Button";
import { HeroButton } from "@/utils/hero/HeroButton";

const Hero = () => (
    <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </Navbar>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>
  </Background>
)

export {Hero};