import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { geistMono } from "@/customfonts"
import NavLinks from "./NavLinks"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger><p className={`${geistMono.className} text-2xl`}>Horizon Heights</p></AccordionTrigger>
        <AccordionContent>
          <p className={geistMono.className}>
            A 35-story luxury residential skyscraper designed to redefine urban living. Featuring contemporary architecture, eco-friendly materials, and breathtaking views of the city skyline, Horizon Heights is a true masterpiece of modern design.
          </p>
          <NavLinks text="Learn More" type="contact" icon="arrow.svg" className="hover:bg-red-500 mt-4"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
      <AccordionTrigger><p className={`${geistMono.className} text-2xl`}>Solace Sanctuary</p></AccordionTrigger>
        <AccordionContent>
          <p className={geistMono.className}>
            An ultra-modern wellness retreat nestled in the heart of nature. Designed with sustainability and serenity in mind, this project integrates flowing water features, open-air meditation spaces, and organic structures to provide an escape from the chaos of urban life.
          </p>
          <NavLinks text="Learn More" type="contact" icon="arrow.svg" className="hover:bg-red-500 mt-4" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
      <AccordionTrigger><p className={`${geistMono.className} text-2xl`}>Avant-Garde Offices</p></AccordionTrigger>
        <AccordionContent>
          <p className={geistMono.className}>A cutting-edge office building designed for a tech giant, featuring smart glass facades, flexible workspaces, and energy-efficient systems. Avant-Garde Offices set a benchmark for sustainable and functional corporate spaces.</p>
          <NavLinks text="Learn More" type="contact" icon="arrow.svg" className="hover:bg-red-500 mt-4"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
      <AccordionTrigger><p className={`${geistMono.className} text-2xl`}>The Pavilion at Maple Grove</p></AccordionTrigger>
        <AccordionContent>
          <p className={geistMono.className}>An award-winning community center combining bold geometric designs with natural aesthetics. The project includes event halls, recreational areas, and co-working spaces, creating a vibrant hub for social and professional activities.</p>
          <NavLinks text="Learn More" type="contact" icon="arrow.svg" className="hover:bg-red-500 mt-4"/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
