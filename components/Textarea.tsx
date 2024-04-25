'use client'

interface TextareaProps {
  placeholder: string,
  value?: string,
  onChange?: ((e: React.ChangeEvent<HTMLTextAreaElement>) => void),
  placeHolder?: string
}

const Textarea = ({placeholder, value, onChange, placeHolder} : TextareaProps) => {
  return (
    <div className="w-full rounded-xl resize-none">
      <textarea name='message' placeholder={placeholder} className="bg-textarea-background bg-no-repeat bg-full w-full rounded-xl p-10 bg-transparent focus-visible:outline-none text-white text-xl md:text-2xl" rows={8} maxLength={300} value={value} onChange={onChange}/>
    </div>
  )
}

export default Textarea