"use client";
import countries from "@/constants/countries.json";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { handleChange } from "@/features/auth/orgSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { useRouter } from "next/navigation";

const Step1 = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    name,

    address,
    city,
    country,
    state,
    zipCode,
    email,
    phone,
    category,
    password,
  } = useAppSelector((store) => store.orgSlice);
  const handleChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <section>
      <div className='flex flex-col gap-2'>
        <h4 className='text-gray-400 text-sm'>STEP 1 OF 2:</h4>
        <p className='text-blue-800 text-2xl'>Basic Information</p>
        <div className='w-full h-1.5 bg-gray-400 rounded relative'>
          <div className='w-1/2 h-1.5 bg-green-400 rounded-l-md absolute top-0 left-0 ' />
        </div>
      </div>

      <form
        className='mt-8 flex flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/register-organization/step-2");
        }}
      >
        <div className='flex flex-col gap-1'>
          <Input
            onChange={handleChangeEvent}
            placeholder='Enter organization name'
            name='name'
            label='Organization Name:'
            type='text'
            value={name}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <Input
            onChange={handleChangeEvent}
            placeholder='Enter organization address'
            name='address'
            type='text'
            label='Organization Address:'
            required
            value={address}
          />
          <div className='flex items-center justify-between gap-3'>
            <Input
              onChange={handleChangeEvent}
              placeholder='City'
              name='city'
              type='text'
              value={city}
              required
            />
            <Input
              onChange={handleChangeEvent}
              placeholder='Zip Code'
              name='zipCode'
              type='text'
              value={zipCode}
              required
            />
            <Input
              onChange={handleChangeEvent}
              value={state}
              placeholder='State'
              name='state'
              type='text'
              required
            />
          </div>
          <Select
            onChange={handleChangeEvent}
            value={country}
            name='country'
            required
          >
            <Select.Option selected disabled>
              Select a Country
            </Select.Option>

            {countries.map((country) => (
              <Select.Option value={country.name}>{country.name}</Select.Option>
            ))}
          </Select>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col gap-1 w-1/2'>
            <Input
              onChange={handleChangeEvent}
              placeholder='charityorg@gmail.com'
              name='email'
              label='Organization Email:'
              value={email}
              type='email'
              required={true}
            />
          </div>
          <div className='flex flex-col gap-1 w-1/2'>
            <Input
              onChange={handleChangeEvent}
              placeholder='+234 844 566 7543'
              name='phone'
              label='Organization Phone:'
              value={phone}
              required={false}
              type='text'
            />
          </div>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <Input
            onChange={handleChangeEvent}
            placeholder='Enter password'
            name='password'
            label='Enter Password'
            value={password}
            type='password'
            required={true}
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label
            htmlFor='category'
            className='font-semibold text-blue-800 text-lg'
          >
            Choose Category
          </label>
          <p className='text-gray-400 text-sm'>
            Let us know what type of organization you run
          </p>
          <Select
            required={true}
            value={category}
            name='category'
            onChange={handleChangeEvent}
          >
            <Select.Option selected disabled>
              Select a Category
            </Select.Option>
            <Select.Option value={"orphanage"}>Orphanage home</Select.Option>
            <Select.Option value={"disablePeople"}>
              Disabled people's home
            </Select.Option>
            <Select.Option value={"hospital"}>Hospital</Select.Option>
          </Select>
        </div>
        <div className='flex justify-center mt-8'>
          <Button type='submit' variant='blue' size='md'>
            Next
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Step1;
