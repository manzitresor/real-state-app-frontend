interface ButtonProps {
    children: React.ReactNode
    styles: string
}
export default function Button(props:ButtonProps) {
  return (
    <button className={`py-3 px-6 bg-${props.styles} rounded-lg text-white`}>
      {props.children}
    </button>
  )
}
