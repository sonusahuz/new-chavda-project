import { Button, Option, Select } from '@material-tailwind/react';

const ContactCommon = () => {
  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            placeholder="Enter Your Name"
            className="rounded-md w-full border py-2 px-4 "
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className=" rounded-md w-full border py-2 px-4 "
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            className=" rounded-md w-full border py-2 px-4 "
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone">Select Service</label>
          <br />
          <Select label="Select Service">
            <Option value="consulting">Consulting</Option>
            <Option value="development">Development</Option>
            <Option value="design">Design</Option>
            <Option value="marketing">Marketing</Option>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            placeholder="Enter Your Message"
            className="min-h-[150px] w-full border p-4 rounded-lg"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 h-12"
        >
          Submit Now
        </Button>
      </form>
    </div>
  );
};

export default ContactCommon;
