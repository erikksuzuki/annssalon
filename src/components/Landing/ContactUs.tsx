'use client'

import IconPhone from '@/assets/icons/common/IconPhone'
import SubHeading from '../common/SubHeading'
import Button from '../common/Button'
import { useResponsive } from '@/hooks/useResponsive'
import { Element } from 'react-scroll'

const OpeningHours = ({ day, time }: any) => {
  return (
    <li className="flex items-center justify-between w-full border-b border-[#ccc] py-2">
      <h3>{day}</h3>
      <p>{time}</p>
    </li>
  )
}

const ContactUs = () => {
  const { isAboveMd } = useResponsive('md')
  return (
    <>
      <Element name="contactsection" />
      <section id="contactus" className="mx-auto max-w-[1280px] md:px-4 py-14">
        <div className="grid grid-cols-1 shadow-lg card lg:grid-cols-2 bg-white m-4 rounded-xl border-2 border-white overflow-hidden">
          <article className="flex items-start justify-center flex-col text-black md:px-16 px-4 font-bold order-1 py-8">
            <h1 className="text-center text-black font-sedan text-theme-heading-sm my-2">
              Contact Us
            </h1>
            <SubHeading className="mb-6 text-[#1F7482]" size="sm">
              Book Your Appointment Today
            </SubHeading>
            <p className="mb-4">
              5700 Spring Mountain Rd # J, Las Vegas, NV 89146
            </p>
            <ul className="w-full">
              <OpeningHours day="Saturday" time="10 AM – 7 PM" />
              <OpeningHours day="Sunday" time="11 AM – 6 PM" />
              <OpeningHours day="Monday" time="10 AM – 7 PM" />
              <OpeningHours day="Tuesday" time="10 AM – 7 PM" />
              <OpeningHours day="Wednesday" time="10 AM – 7 PM" />
              <OpeningHours day="Thursday" time="10 AM – 7 PM" />
              <OpeningHours day="Friday" time="10 AM – 7 PM" />
            </ul>

            <div className="flex justify-start items-center gap-x-3 pt-4">
              <i className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#ccc]">
                <IconPhone className="w-4 h-4" />
              </i>
              <h1 className="font-sedan text-theme-xl mb-2">(702)-367-3117</h1>
            </div>
            <Button
              size="md"
              shadow
              className="mb-6 w-full"
              href="tel:7023673117"
            >
              Call Now
            </Button>
          </article>
          <article className="w-full h-full order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12890.576466196695!2d-115.2194373!3d36.1265271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6cedb190899%3A0x94bfa50f420eb1d!2sAnn&#39;s%20Salon!5e0!3m2!1sen!2sus!4v1725091961373!5m2!1sen!2sus"
              width="100%"
              height={isAboveMd ? '700' : '400'}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>
      </section>
    </>
  )
}

export default ContactUs
