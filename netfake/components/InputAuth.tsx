interface InputAuthProps {
    placeholder: string
}
const InputAuth = (props: InputAuthProps) => {
  return (
    <input placeholder={props.placeholder} className="px-4 py-4 rounded-md bg-[#333]"/>
  )
}

export default InputAuth