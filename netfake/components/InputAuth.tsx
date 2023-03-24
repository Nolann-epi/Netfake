interface InputAuthProps {
    placeholder: string
}
const InputAuth = (props: InputAuthProps) => {
  return (
    <div className="relative">
    <input id="email" placeholder=" " className="px-6 pt-6 pb-2 bg-[#333] rounded-md block text-white appearance-none focus:outline-none focus:ring-0 peer  w-full "/>
    <label htmlFor="email" className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
      Email
    </label>
    </div>
  )
}

export default InputAuth