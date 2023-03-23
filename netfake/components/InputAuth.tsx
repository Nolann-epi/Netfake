interface InputAuthProps {
    placeholder: string
}
const InputAuth = (props: InputAuthProps) => {
  return (
    <input placeholder={props.placeholder} className="px-4 py-4 bg-[#333] rounded-md"/>
  )
}

export default InputAuth